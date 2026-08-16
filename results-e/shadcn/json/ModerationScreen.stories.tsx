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
					<PostCard post={{"id":"post-1","author":{"id":"user-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/128?img=11"},"body":"Reminder: design system office hours moved to Thursdays. Same room, same link.","createdAt":"2026-08-13T06:00:00.000Z","visibility":"public","replyCount":4,"repostCount":2,"likeCount":11,"likedByViewer":false}} density="cozy" authorLine={<PostAuthorLine author={{"id":"user-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/128?img=11"}} label="2h" visibility="public" avatar={<UserAvatar author={{"id":"user-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/128?img=11"}} density="cozy" />} />} actions={<div className="text-sm text-muted-foreground">Reported 3 times</div>} />
					<PostCard post={{"id":"post-2","author":{"id":"user-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://i.pravatar.cc/128?img=12"},"body":"Thursdays work much better for the frontend team. Thanks for moving it.","createdAt":"2026-08-13T03:00:00.000Z","visibility":"followers","replyCount":1,"repostCount":0,"likeCount":6,"likedByViewer":false}} density="cozy" authorLine={<PostAuthorLine author={{"id":"user-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://i.pravatar.cc/128?img=12"}} label="5h" visibility="followers" avatar={<UserAvatar author={{"id":"user-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://i.pravatar.cc/128?img=12"}} density="cozy" />} />} quoted={<QuotedPost post={{"id":"post-1","author":{"id":"user-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/128?img=11"},"body":"Reminder: design system office hours moved to Thursdays. Same room, same link.","createdAt":"2026-08-13T06:00:00.000Z","visibility":"public","replyCount":4,"repostCount":2,"likeCount":11,"likedByViewer":false}} avatar={<UserAvatar author={{"id":"user-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://i.pravatar.cc/128?img=11"}} density="compact" />} />} actions={<div className="text-sm text-muted-foreground">Reported once</div>} />
					<PostCard post={{"id":"post-3","author":{"id":"user-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://i.pravatar.cc/128?img=13"},"body":"Shipped the new token pipeline today. Before and after below.","createdAt":"2026-08-12T08:00:00.000Z","visibility":"unlisted","replyCount":7,"repostCount":3,"likeCount":24,"likedByViewer":false}} density="cozy" authorLine={<PostAuthorLine author={{"id":"user-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://i.pravatar.cc/128?img=13"}} label="1d" visibility="unlisted" avatar={<UserAvatar author={{"id":"user-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://i.pravatar.cc/128?img=13"}} density="cozy" />} />} media={<PostMedia images={[{"url":"https://placehold.co/640x360/png?text=Before","alt":"Token pipeline before the change"},{"url":"https://placehold.co/640x360/png?text=After","alt":"Token pipeline after the change"}]} density="cozy" />} actions={<div className="text-sm text-muted-foreground">Reported 5 times</div>} />
				</>
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
