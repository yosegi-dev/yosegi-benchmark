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
				<div className="flex flex-col gap-4">
					<PostCard density="cozy" post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://example.com/avatars/rin.png","verified":true},"body":"Reminder: the migration guide moves to the new docs site tomorrow morning.","createdAt":"2024-05-21T09:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}} authorLine={<PostAuthorLine label="2h" visibility="public" author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://example.com/avatars/rin.png","verified":true}} avatar={<UserAvatar density="cozy" author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://example.com/avatars/rin.png","verified":true}} />} />} actions={<div className="text-sm text-muted-foreground">Reported 3 times</div>} />
					<PostCard density="cozy" post={{"id":"post-2","author":{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://example.com/avatars/kai.png"},"body":"Quoting this because the old link is still pinned in three different channels.","createdAt":"2024-05-21T06:00:00.000Z","visibility":"followers","replyCount":3,"repostCount":1,"likeCount":9,"likedByViewer":false}} authorLine={<PostAuthorLine label="5h" visibility="followers" author={{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://example.com/avatars/kai.png"}} avatar={<UserAvatar density="cozy" author={{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://example.com/avatars/kai.png"}} />} />} quoted={<QuotedPost post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://example.com/avatars/rin.png","verified":true},"body":"Reminder: the migration guide moves to the new docs site tomorrow morning.","createdAt":"2024-05-21T09:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}} avatar={<UserAvatar density="compact" author={{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://example.com/avatars/rin.png","verified":true}} />} />} actions={<div className="text-sm text-muted-foreground">Reported once</div>} />
					<PostCard density="cozy" post={{"id":"post-3","author":{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://example.com/avatars/mio.png"},"body":"Two screenshots from the review queue dashboard, before and after the filter change.","createdAt":"2024-05-20T11:00:00.000Z","visibility":"unlisted","replyCount":7,"repostCount":2,"likeCount":21,"likedByViewer":false}} authorLine={<PostAuthorLine label="1d" visibility="unlisted" author={{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://example.com/avatars/mio.png"}} avatar={<UserAvatar density="cozy" author={{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://example.com/avatars/mio.png"}} />} />} media={<PostMedia density="cozy" images={[{"url":"https://example.com/media/queue-before.png","alt":"Review queue dashboard before the filter change"},{"url":"https://example.com/media/queue-after.png","alt":"Review queue dashboard after the filter change"}]} />} actions={<div className="text-sm text-muted-foreground">Reported 5 times</div>} />
				</div>
			}
			sidebar={
				<TrendPanel
					heading="Review queue trends"
					density="cozy"
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
