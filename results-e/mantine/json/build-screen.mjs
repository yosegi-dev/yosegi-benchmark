// Builds screen.json for the Moderation review screen.
import { writeFileSync } from "node:fs";

const REGISTRY_VERSION = "src:01051c921b30";

const authors = {
	rin: {
		id: "author-rin",
		displayName: "Rin Amano",
		handle: "rin",
		avatarUrl: "https://i.pravatar.cc/96?img=1",
		verified: true,
	},
	kai: {
		id: "author-kai",
		displayName: "Kai Doi",
		handle: "kai",
		avatarUrl: "https://i.pravatar.cc/96?img=12",
	},
	mio: {
		id: "author-mio",
		displayName: "Mio Sato",
		handle: "mio",
		avatarUrl: "https://i.pravatar.cc/96?img=32",
	},
};

const posts = {
	1: {
		id: "post-1",
		author: authors.rin,
		body: "Reminder: the moderation queue is triaged twice a day, not in real time. Please stop pinging the on-call about it.",
		createdAt: "2026-08-13T07:00:00.000Z",
		visibility: "public",
		replyCount: 12,
		repostCount: 4,
		likeCount: 38,
		likedByViewer: false,
	},
	2: {
		id: "post-2",
		author: authors.kai,
		body: "This is exactly the policy I was told the opposite of last week. Which one is it?",
		createdAt: "2026-08-13T04:00:00.000Z",
		visibility: "followers",
		replyCount: 6,
		repostCount: 1,
		likeCount: 9,
		likedByViewer: false,
	},
	3: {
		id: "post-3",
		author: authors.mio,
		body: "Screenshots of the two queue dashboards, before and after the rule change.",
		createdAt: "2026-08-12T09:00:00.000Z",
		visibility: "unlisted",
		replyCount: 2,
		repostCount: 0,
		likeCount: 15,
		likedByViewer: false,
	},
};

const trends = [
	{ id: "trend-typescript", label: "#typescript", postCount: 8320, category: "Technology" },
	{ id: "trend-storybook", label: "#storybook", postCount: 6120, category: "Technology" },
	{ id: "trend-designsystems", label: "#designsystems", postCount: 3980, category: "Design" },
];

const node = (id, component, props, slots) => ({
	id,
	component,
	props: props ?? {},
	slots: slots ?? {},
});

const avatar = (id, author) =>
	node(id, "src/components/user-avatar#UserAvatar", { author });

const postCard = ({ key, post, label, tally, quoted, media }) => {
	const slots = {
		authorLine: [
			node(
				`${key}-author-line`,
				"src/components/post-author-line#PostAuthorLine",
				{ author: post.author, label, visibility: post.visibility },
				{ avatar: [avatar(`${key}-avatar`, post.author)] },
			),
		],
		actions: [
			node(`${key}-actions`, "Box", null, {
				children: [node(`${key}-tally`, "Text", { text: tally })],
			}),
		],
	};
	if (quoted) slots.quoted = [quoted];
	if (media) slots.media = [media];
	return node(key, "src/components/post-card#PostCard", { post }, slots);
};

const quotedPost = node(
	"post-2-quoted",
	"src/components/quoted-post#QuotedPost",
	{ post: posts[1] },
	{ avatar: [avatar("post-2-quoted-avatar", posts[1].author)] },
);

const postMedia = node("post-3-media", "src/components/post-media#PostMedia", {
	images: [
		{ url: "https://picsum.photos/seed/queue-before/640/360", alt: "Review queue dashboard before the rule change" },
		{ url: "https://picsum.photos/seed/queue-after/640/360", alt: "Review queue dashboard after the rule change" },
	],
});

const screen = {
	schemaVersion: "1.0",
	id: "moderation-review",
	name: "Moderation review",
	componentRegistryVersion: REGISTRY_VERSION,
	revision: 1,
	root: node(
		"app-shell",
		"src/components/app-shell#AppShell",
		{ density: "cozy" },
		{
			header: [node("page-heading", "Heading", { text: "Moderation review" })],
			main: [
				postCard({ key: "post-1", post: posts[1], label: "2h", tally: "Reported 3 times" }),
				postCard({ key: "post-2", post: posts[2], label: "5h", tally: "Reported once", quoted: quotedPost }),
				postCard({ key: "post-3", post: posts[3], label: "1d", tally: "Reported 5 times", media: postMedia }),
			],
			sidebar: [
				node(
					"trend-panel",
					"src/components/trend-panel#TrendPanel",
					{ heading: "Review queue trends" },
					{
						items: trends.map((trend, i) =>
							node(`trend-${i + 1}`, "src/components/trend-item#TrendItem", {
								rank: i + 1,
								trend,
							}),
						),
					},
				),
			],
		},
	),
};

writeFileSync(new URL("./screen.json", import.meta.url), `${JSON.stringify(screen, null, "\t")}\n`);
