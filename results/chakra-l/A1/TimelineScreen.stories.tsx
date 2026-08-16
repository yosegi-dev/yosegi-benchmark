import type { Meta, StoryObj } from "@storybook/react";

import { AppShell } from "~/components/app-shell";
import { FeedTabs } from "~/components/feed-tabs";
import { FollowButton } from "~/components/follow-button";
import { PostActionBar } from "~/components/post-action-bar";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostBody } from "~/components/post-body";
import { PostCard } from "~/components/post-card";
import { PostComposer } from "~/components/post-composer";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { SuggestedUserPanel } from "~/components/suggested-user-panel";
import { SuggestedUserRow } from "~/components/suggested-user-row";
import { TimelineHeader } from "~/components/timeline-header";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";

const meta: Meta<typeof AppShell> = {
	title: "Screens/TimelineScreen",
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
			<TimelineHeader
				avatarUrl="https://i.pravatar.cc/80?img=15"
				displayName="Viewer"
				handle="@viewer"
				searchPlaceholder="Search"
				searchValue=""
				notificationCount={3}
			/>
		),
		sidebar: (
			<>
				<TrendPanel title="Trends for you">
					<TrendItem
						category="Technology"
						name="#TypeScript"
						postCount={12800}
						rank={1}
					/>
					<TrendItem
						category="Design"
						name="#DesignSystems"
						postCount={5400}
						rank={2}
					/>
					<TrendItem
						category="Music"
						name="#NowPlaying"
						postCount={2300}
						rank={3}
					/>
				</TrendPanel>
				<SuggestedUserPanel title="Who to follow">
					<SuggestedUserRow
						avatarUrl="https://i.pravatar.cc/80?img=21"
						displayName="Aoi Nakamura"
						handle="@aoi"
						bio="Frontend engineer"
						action={<FollowButton following={false} />}
					/>
					<SuggestedUserRow
						avatarUrl="https://i.pravatar.cc/80?img=22"
						displayName="Haru Kobayashi"
						handle="@haru"
						bio="Illustrator"
						action={<FollowButton following={false} />}
					/>
					<SuggestedUserRow
						avatarUrl="https://i.pravatar.cc/80?img=23"
						displayName="Sora Tanaka"
						handle="@sora"
						bio="Product designer"
						action={<FollowButton following={true} />}
					/>
				</SuggestedUserPanel>
			</>
		),
		children: (
			<>
				<FeedTabs value="for-you" />
				<PostComposer
					value=""
					visibility="public"
					placeholder="What's happening?"
					submitLabel="Post"
				/>
				<PostCard visibility="public">
					<PostAuthorLine
						avatarUrl="https://i.pravatar.cc/80?img=1"
						displayName="Rin Amano"
						handle="@rin"
						relativeTime="2h"
					/>
					<PostBody text="Shipped the new timeline layout this morning. It finally feels right." />
					<PostActionBar
						replyCount={12}
						repostCount={48}
						likeCount={310}
						liked={true}
					/>
				</PostCard>
				<PostCard visibility="followers">
					<PostAuthorLine
						avatarUrl="https://i.pravatar.cc/80?img=2"
						displayName="Kai Doi"
						handle="@kai"
						relativeTime="1h"
					/>
					<PostBody text="This is the part everyone underestimates." />
					<QuotedPost
						avatarUrl="https://i.pravatar.cc/80?img=1"
						displayName="Rin Amano"
						handle="@rin"
						relativeTime="2h"
						text="Shipped the new timeline layout this morning. It finally feels right."
					/>
					<PostActionBar
						replyCount={4}
						repostCount={9}
						likeCount={62}
						liked={false}
					/>
				</PostCard>
				<PostCard visibility="public">
					<PostAuthorLine
						avatarUrl="https://i.pravatar.cc/80?img=3"
						displayName="Mio Sato"
						handle="@mio"
						relativeTime="45m"
					/>
					<PostBody text="Two frames from this weekend's walk." />
					<PostMedia
						images={[
							{
								src: "https://picsum.photos/seed/mio-1/640/360",
								alt: "A quiet street at dusk",
							},
							{
								src: "https://picsum.photos/seed/mio-2/640/360",
								alt: "A river seen from a bridge",
							},
						]}
					/>
					<PostActionBar
						replyCount={7}
						repostCount={21}
						likeCount={154}
						liked={false}
					/>
				</PostCard>
				<PostCard visibility="circle">
					<PostAuthorLine
						avatarUrl="https://i.pravatar.cc/80?img=4"
						displayName="Jun Ito"
						handle="@jun"
						relativeTime="20m"
					/>
					<PostBody text="Keeping this one to the circle: the migration plan is finally written down." />
					<PostActionBar
						replyCount={2}
						repostCount={3}
						likeCount={18}
						liked={false}
					/>
				</PostCard>
			</>
		),
	},
};
