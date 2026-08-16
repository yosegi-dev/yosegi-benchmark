import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "~/components/app-shell";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostCard } from "~/components/post-card";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";

const meta: Meta = {
	title: "Screens/Moderation review",
};

export default meta;

export const Default: StoryObj = {
	render: () => (
		<AppShell
			density="cozy"
			header={<h1 className="font-bold text-2xl tracking-tight">Moderation review</h1>}
			main={
				<>
					<PostCard post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/96?img=1","verified":true},"body":"Reminder: the moderation queue is triaged twice a day, not in real time. Please stop pinging the on-call about it.","createdAt":"2026-08-13T07:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}} authorLine={<PostAuthorLine author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/96?img=1","verified":true}} label="2h" visibility="public" avatar={<UserAvatar author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/96?img=1","verified":true}} />} />} actions={<div>Reported 3 times</div>} />
					<PostCard post={{"id":"post-2","author":{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://i.pravatar.cc/96?img=12"},"body":"This is exactly the policy I was told the opposite of last week. Which one is it?","createdAt":"2026-08-13T04:00:00.000Z","visibility":"followers","replyCount":6,"repostCount":1,"likeCount":9,"likedByViewer":false}} authorLine={<PostAuthorLine author={{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://i.pravatar.cc/96?img=12"}} label="5h" visibility="followers" avatar={<UserAvatar author={{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://i.pravatar.cc/96?img=12"}} />} />} actions={<div>Reported once</div>} quoted={<QuotedPost post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/96?img=1","verified":true},"body":"Reminder: the moderation queue is triaged twice a day, not in real time. Please stop pinging the on-call about it.","createdAt":"2026-08-13T07:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}} avatar={<UserAvatar author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/96?img=1","verified":true}} />} />} />
					<PostCard post={{"id":"post-3","author":{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://i.pravatar.cc/96?img=32"},"body":"Screenshots of the two queue dashboards, before and after the rule change.","createdAt":"2026-08-12T09:00:00.000Z","visibility":"unlisted","replyCount":2,"repostCount":0,"likeCount":15,"likedByViewer":false}} authorLine={<PostAuthorLine author={{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://i.pravatar.cc/96?img=32"}} label="1d" visibility="unlisted" avatar={<UserAvatar author={{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://i.pravatar.cc/96?img=32"}} />} />} actions={<div>Reported 5 times</div>} media={<PostMedia images={[{"url":"https://picsum.photos/seed/queue-before/640/360","alt":"Review queue dashboard before the rule change"},{"url":"https://picsum.photos/seed/queue-after/640/360","alt":"Review queue dashboard after the rule change"}]} />} />
				</>
			}
			sidebar={
				<TrendPanel
					heading="Review queue trends"
					items={
						<>
							<TrendItem rank={1} trend={{"id":"trend-typescript","label":"#typescript","postCount":8320,"category":"Technology"}} />
							<TrendItem rank={2} trend={{"id":"trend-storybook","label":"#storybook","postCount":6120,"category":"Technology"}} />
							<TrendItem rank={3} trend={{"id":"trend-designsystems","label":"#designsystems","postCount":3980,"category":"Design"}} />
						</>
					}
				/>
			}
		/>
	),
};
