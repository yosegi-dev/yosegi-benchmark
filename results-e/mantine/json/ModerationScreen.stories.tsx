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
			header={<h1 className="font-bold text-2xl tracking-tight">Moderation review</h1>}
			main={
				<>
					<PostCard post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://placehold.co/96x96/png?text=RA","verified":true},"body":"Reminder: the moderation queue is triaged twice a day. Flag anything that needs a faster look.","createdAt":"2024-05-01T09:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}} authorLine={<PostAuthorLine author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://placehold.co/96x96/png?text=RA","verified":true}} label="2h" visibility="public" avatar={<UserAvatar author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://placehold.co/96x96/png?text=RA","verified":true}} />} />} actions={<div className="text-sm text-muted-foreground">Reported 3 times</div>} />
					<PostCard post={{"id":"post-2","author":{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://placehold.co/96x96/png?text=KD","verified":false},"body":"Quoting the triage note so the follower-only crowd sees it too.","createdAt":"2024-05-01T06:00:00.000Z","visibility":"followers","replyCount":3,"repostCount":1,"likeCount":9,"likedByViewer":false}} authorLine={<PostAuthorLine author={{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://placehold.co/96x96/png?text=KD","verified":false}} label="5h" visibility="followers" avatar={<UserAvatar author={{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://placehold.co/96x96/png?text=KD","verified":false}} />} />} quoted={<QuotedPost post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://placehold.co/96x96/png?text=RA","verified":true},"body":"Reminder: the moderation queue is triaged twice a day. Flag anything that needs a faster look.","createdAt":"2024-05-01T09:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}} avatar={<UserAvatar author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://placehold.co/96x96/png?text=RA","verified":true}} />} />} actions={<div className="text-sm text-muted-foreground">Reported once</div>} />
					<PostCard post={{"id":"post-3","author":{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://placehold.co/96x96/png?text=MS","verified":false},"body":"Two screenshots from the report queue, unlisted while we confirm the details.","createdAt":"2024-04-30T11:00:00.000Z","visibility":"unlisted","replyCount":7,"repostCount":0,"likeCount":15,"likedByViewer":false}} authorLine={<PostAuthorLine author={{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://placehold.co/96x96/png?text=MS","verified":false}} label="1d" visibility="unlisted" avatar={<UserAvatar author={{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://placehold.co/96x96/png?text=MS","verified":false}} />} />} media={<PostMedia images={[{"url":"https://placehold.co/640x360/png?text=Report+1","alt":"Screenshot of the first reported thread"},{"url":"https://placehold.co/640x360/png?text=Report+2","alt":"Screenshot of the second reported thread"}]} />} actions={<div className="text-sm text-muted-foreground">Reported 5 times</div>} />
				</>
			}
			sidebar={
				<TrendPanel
					heading="Review queue trends"
					items={
						<>
							<TrendItem rank={1} trend={{"id":"trend-typescript","label":"#typescript","postCount":8320}} />
							<TrendItem rank={2} trend={{"id":"trend-storybook","label":"#storybook","postCount":6120}} />
							<TrendItem rank={3} trend={{"id":"trend-designsystems","label":"#designsystems","postCount":3980}} />
						</>
					}
				/>
			}
		/>
	),
};
