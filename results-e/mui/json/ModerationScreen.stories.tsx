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
					<PostCard post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"@rin","avatarUrl":"https://i.pravatar.cc/96?img=11","verified":true},"body":"Reminder: the moderation queue is triaged newest first, so please leave a note when you skip an item.","createdAt":"2026-08-13T08:00:00.000Z","visibility":"public","replyCount":4,"repostCount":2,"likeCount":18,"likedByViewer":false}} density="cozy" authorLine={<PostAuthorLine author={{"id":"author-rin","displayName":"Rin Amano","handle":"@rin","avatarUrl":"https://i.pravatar.cc/96?img=11","verified":true}} label="2h" visibility="public" avatar={<UserAvatar author={{"id":"author-rin","displayName":"Rin Amano","handle":"@rin","avatarUrl":"https://i.pravatar.cc/96?img=11","verified":true}} density="cozy" />} />} actions={<div className="report-tally">Reported 3 times</div>} />
					<PostCard post={{"id":"post-2","author":{"id":"author-kai","displayName":"Kai Doi","handle":"@kai","avatarUrl":"https://i.pravatar.cc/96?img=12"},"body":"Quoting this so the note stays attached to the original thread while we review it.","createdAt":"2026-08-13T05:00:00.000Z","visibility":"followers","replyCount":1,"repostCount":0,"likeCount":6,"likedByViewer":false}} density="cozy" authorLine={<PostAuthorLine author={{"id":"author-kai","displayName":"Kai Doi","handle":"@kai","avatarUrl":"https://i.pravatar.cc/96?img=12"}} label="5h" visibility="followers" avatar={<UserAvatar author={{"id":"author-kai","displayName":"Kai Doi","handle":"@kai","avatarUrl":"https://i.pravatar.cc/96?img=12"}} density="cozy" />} />} quoted={<QuotedPost post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"@rin","avatarUrl":"https://i.pravatar.cc/96?img=11","verified":true},"body":"Reminder: the moderation queue is triaged newest first, so please leave a note when you skip an item.","createdAt":"2026-08-13T08:00:00.000Z","visibility":"public","replyCount":4,"repostCount":2,"likeCount":18,"likedByViewer":false}} avatar={<UserAvatar author={{"id":"author-rin","displayName":"Rin Amano","handle":"@rin","avatarUrl":"https://i.pravatar.cc/96?img=11","verified":true}} density="compact" />} />} actions={<div className="report-tally">Reported once</div>} />
					<PostCard post={{"id":"post-3","author":{"id":"author-mio","displayName":"Mio Sato","handle":"@mio","avatarUrl":"https://i.pravatar.cc/96?img=13"},"body":"Two screenshots attached from the report. Flagging both for a second pair of eyes.","createdAt":"2026-08-12T10:00:00.000Z","visibility":"unlisted","replyCount":9,"repostCount":3,"likeCount":27,"likedByViewer":false}} density="cozy" authorLine={<PostAuthorLine author={{"id":"author-mio","displayName":"Mio Sato","handle":"@mio","avatarUrl":"https://i.pravatar.cc/96?img=13"}} label="1d" visibility="unlisted" avatar={<UserAvatar author={{"id":"author-mio","displayName":"Mio Sato","handle":"@mio","avatarUrl":"https://i.pravatar.cc/96?img=13"}} density="cozy" />} />} media={<PostMedia images={[{"url":"https://picsum.photos/seed/moderation-1/640/360","alt":"Screenshot of the reported thread"},{"url":"https://picsum.photos/seed/moderation-2/640/360","alt":"Screenshot of the report form"}]} density="cozy" />} actions={<div className="report-tally">Reported 5 times</div>} />
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
