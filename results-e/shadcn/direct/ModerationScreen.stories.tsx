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
	handle: "rin",
	avatarUrl: "https://i.pravatar.cc/128?u=rin",
};

const kai: AuthorModel = {
	id: "author-kai",
	displayName: "Kai Doi",
	handle: "kai",
	avatarUrl: "https://i.pravatar.cc/128?u=kai",
};

const mio: AuthorModel = {
	id: "author-mio",
	displayName: "Mio Sato",
	handle: "mio",
	avatarUrl: "https://i.pravatar.cc/128?u=mio",
};

const postOne: PostModel = {
	id: "post-1",
	author: rin,
	body: "Reminder that the design tokens migration lands this week. Ping me if a screen still reads from the old palette.",
	createdAt: "2h",
	visibility: "public",
	replyCount: 12,
	repostCount: 4,
	likeCount: 38,
	likedByViewer: false,
};

const postTwo: PostModel = {
	id: "post-2",
	author: kai,
	body: "Quoting this because the old palette is still hard-coded in two of our internal tools.",
	createdAt: "5h",
	visibility: "followers",
	replyCount: 3,
	repostCount: 1,
	likeCount: 9,
	likedByViewer: false,
};

const postThree: PostModel = {
	id: "post-3",
	author: mio,
	body: "Before and after of the review queue layout at desktop width.",
	createdAt: "1d",
	visibility: "unlisted",
	replyCount: 7,
	repostCount: 2,
	likeCount: 21,
	likedByViewer: false,
};

const postThreeImages: { url: string; alt: string }[] = [
	{
		url: "https://placehold.co/640x360?text=Before",
		alt: "The review queue before the layout change",
	},
	{
		url: "https://placehold.co/640x360?text=After",
		alt: "The review queue after the layout change",
	},
];

const trends: TrendModel[] = [
	{ id: "trend-typescript", label: "#typescript", postCount: 8320 },
	{ id: "trend-storybook", label: "#storybook", postCount: 6120 },
	{ id: "trend-designsystems", label: "#designsystems", postCount: 3980 },
];

const meta: Meta<typeof AppShell> = {
	title: "Screens/Moderation review",
	component: AppShell,
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header: (
			<div className="mx-auto flex max-w-6xl items-center px-4 py-3">
				<h1 className="text-lg font-semibold">Moderation review</h1>
			</div>
		),
		main: (
			<>
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
					actions={
						<div className="text-sm text-muted-foreground">Reported 3 times</div>
					}
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
					quoted={
						<QuotedPost
							post={postOne}
							avatar={<UserAvatar author={rin} density="compact" />}
						/>
					}
					actions={<div className="text-sm text-muted-foreground">Reported once</div>}
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
					actions={
						<div className="text-sm text-muted-foreground">Reported 5 times</div>
					}
				/>
			</>
		),
		sidebar: (
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
		),
	},
};
