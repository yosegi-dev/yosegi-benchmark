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

const meta = {
	title: "Screens/TimelineScreen",
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<AppShell
			header={
				<TimelineHeader
					avatarUrl="https://i.pravatar.cc/80?img=12"
					displayName="Rin Amano"
					handle="rin"
					searchValue=""
					notificationCount={3}
				/>
			}
			sidebar={
				<>
					<TrendPanel title="Trends for you">
						<TrendItem
							category="Technology"
							title="Storybook"
							postCount={12400}
						/>
						<TrendItem
							category="Design"
							title="Chakra UI"
							postCount={8200}
						/>
						<TrendItem
							category="Programming"
							title="TypeScript"
							postCount={31000}
						/>
					</TrendPanel>
					<SuggestedUserPanel title="Who to follow">
						<SuggestedUserRow
							avatarUrl="https://i.pravatar.cc/80?img=32"
							displayName="Aoi Nakamura"
							handle="aoi"
							action={<FollowButton following={false} />}
						/>
						<SuggestedUserRow
							avatarUrl="https://i.pravatar.cc/80?img=45"
							displayName="Haru Kobayashi"
							handle="haru"
							action={<FollowButton following={false} />}
						/>
						<SuggestedUserRow
							avatarUrl="https://i.pravatar.cc/80?img=57"
							displayName="Nao Fujita"
							handle="nao"
							action={<FollowButton following={true} />}
						/>
					</SuggestedUserPanel>
				</>
			}
		>
			<FeedTabs value="for-you" onChange={() => {}} />
			<PostComposer
				value=""
				visibility="public"
				avatarUrl="https://i.pravatar.cc/80?img=12"
				placeholder="What's happening?"
				onChange={() => {}}
				onSubmit={() => {}}
			/>
			<PostCard>
				<PostAuthorLine
					avatarUrl="https://i.pravatar.cc/80?img=12"
					displayName="Rin Amano"
					handle="rin"
					timestamp="2h"
					visibility="public"
				/>
				<PostBody text="Spent the morning rewriting our timeline screen from scratch. Fewer components, far less state." />
				<PostActionBar
					replyCount={12}
					repostCount={48}
					likeCount={310}
					liked={true}
				/>
			</PostCard>
			<PostCard>
				<PostAuthorLine
					avatarUrl="https://i.pravatar.cc/80?img=15"
					displayName="Kai Doi"
					handle="kai"
					timestamp="1h"
					visibility="followers"
				/>
				<PostBody text="This matches what we saw last quarter. Cutting state was the whole win." />
				<QuotedPost
					avatarUrl="https://i.pravatar.cc/80?img=12"
					displayName="Rin Amano"
					handle="rin"
					timestamp="2h"
					text="Spent the morning rewriting our timeline screen from scratch. Fewer components, far less state."
				/>
				<PostActionBar
					replyCount={4}
					repostCount={9}
					likeCount={57}
					liked={false}
				/>
			</PostCard>
			<PostCard>
				<PostAuthorLine
					avatarUrl="https://i.pravatar.cc/80?img=23"
					displayName="Mio Sato"
					handle="mio"
					timestamp="45m"
					visibility="public"
				/>
				<PostBody text="Two shots from the studio session this morning." />
				<PostMedia
					images={[
						{
							src: "https://picsum.photos/seed/timeline-a/640/480",
							alt: "Studio desk with a camera and prints",
						},
						{
							src: "https://picsum.photos/seed/timeline-b/640/480",
							alt: "Close-up of a contact sheet on a light table",
						},
					]}
				/>
				<PostActionBar
					replyCount={7}
					repostCount={21}
					likeCount={164}
					liked={false}
				/>
			</PostCard>
			<PostCard>
				<PostAuthorLine
					avatarUrl="https://i.pravatar.cc/80?img=51"
					displayName="Jun Ito"
					handle="jun"
					timestamp="20m"
					visibility="circle"
				/>
				<PostBody text="Quiet note for the close friends list: the migration is done and nothing broke." />
				<PostActionBar
					replyCount={2}
					repostCount={1}
					likeCount={19}
					liked={false}
				/>
			</PostCard>
		</AppShell>
	),
};
