import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "~/components/app-shell";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostCard } from "~/components/post-card";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";
import type { AuthorModel, PostModel, TrendModel } from "~/models";

const rin: AuthorModel = {
	id: "author-rin",
	displayName: "Rin Amano",
	handle: "@rin",
	avatarUrl: "https://placehold.co/96x96/png?text=RA",
	verified: true,
};

const kai: AuthorModel = {
	id: "author-kai",
	displayName: "Kai Doi",
	handle: "@kai",
	avatarUrl: "https://placehold.co/96x96/png?text=KD",
};

const mio: AuthorModel = {
	id: "author-mio",
	displayName: "Mio Sato",
	handle: "@mio",
	avatarUrl: "https://placehold.co/96x96/png?text=MS",
};

const postOne: PostModel = {
	id: "post-1",
	author: rin,
	body: "Reminder that the moderation queue is triaged twice a day. If a report is urgent, flag it in the on-call channel instead of waiting.",
	createdAt: "2024-05-14T09:00:00.000Z",
	visibility: "public",
	replyCount: 12,
	repostCount: 4,
	likeCount: 38,
	likedByViewer: false,
};

const postTwo: PostModel = {
	id: "post-2",
	author: kai,
	body: "Adding to this: the twice-a-day cadence only covers reports filed before 17:00. Anything later lands in the next morning's batch.",
	createdAt: "2024-05-14T06:00:00.000Z",
	visibility: "followers",
	replyCount: 3,
	repostCount: 1,
	likeCount: 9,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "post-3",
	author: mio,
	body: "Screenshots from the queue dashboard after the weekend backlog cleared. Throughput is back to where it was in March.",
	createdAt: "2024-05-13T11:00:00.000Z",
	visibility: "unlisted",
	replyCount: 7,
	repostCount: 2,
	likeCount: 21,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://placehold.co/640x480/png?text=Queue+depth",
		alt: "Line chart of moderation queue depth over the past week",
	},
	{
		url: "https://placehold.co/640x480/png?text=Resolution+time",
		alt: "Bar chart of median report resolution time by day",
	},
];

const trends: TrendModel[] = [
	{ id: "trend-typescript", label: "#typescript", postCount: 8320 },
	{ id: "trend-storybook", label: "#storybook", postCount: 6120 },
	{ id: "trend-designsystems", label: "#designsystems", postCount: 3980 },
];

function ModerationScreen() {
	return (
		<AppShell
			header={<h1>Moderation review</h1>}
			main={
				<div>
					<PostCard
						post={postOne}
						authorLine={
							<PostAuthorLine
								author={rin}
								label="2h"
								visibility="public"
								avatar={<UserAvatar author={rin} />}
							/>
						}
						actions={<div>Reported 3 times</div>}
					/>
					<PostCard
						post={postTwo}
						authorLine={
							<PostAuthorLine
								author={kai}
								label="5h"
								visibility="followers"
								avatar={<UserAvatar author={kai} />}
							/>
						}
						quoted={<QuotedPost post={postOne} avatar={<UserAvatar author={rin} />} />}
						actions={<div>Reported once</div>}
					/>
					<PostCard
						post={postThree}
						authorLine={
							<PostAuthorLine
								author={mio}
								label="1d"
								visibility="unlisted"
								avatar={<UserAvatar author={mio} />}
							/>
						}
						media={<PostMedia images={postThreeImages} />}
						actions={<div>Reported 5 times</div>}
					/>
				</div>
			}
			sidebar={
				<TrendPanel
					heading="Review queue trends"
					items={
						<>
							{trends.map((trend, index) => (
								<TrendItem key={trend.id} rank={index + 1} trend={trend} />
							))}
						</>
					}
				/>
			}
		/>
	);
}

const meta = {
	title: "Screens/ModerationScreen",
	component: ModerationScreen,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof ModerationScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
