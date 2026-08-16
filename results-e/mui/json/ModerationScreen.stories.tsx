import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "~/components/app-shell";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostCard } from "~/components/post-card";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";

const rinAmano = {
	"id": "author-rin",
	"displayName": "Rin Amano",
	"handle": "rin",
	"avatarUrl": "https://example.com/avatars/rin.png",
	"verified": true
};
const kaiDoi = {
	"id": "author-kai",
	"displayName": "Kai Doi",
	"handle": "kai",
	"avatarUrl": "https://example.com/avatars/kai.png"
};
const mioSato = {
	"id": "author-mio",
	"displayName": "Mio Sato",
	"handle": "mio",
	"avatarUrl": "https://example.com/avatars/mio.png"
};
const reportedPostThreeImages = [
	{
		"url": "https://example.com/media/report-dialog-before.png",
		"alt": "The report dialog before the copy change"
	},
	{
		"url": "https://example.com/media/report-dialog-after.png",
		"alt": "The report dialog after the copy change"
	}
];
const typescriptTrend = {
	"id": "trend-typescript",
	"label": "#typescript",
	"postCount": 8320
};
const storybookTrend = {
	"id": "trend-storybook",
	"label": "#storybook",
	"postCount": 6120
};
const designSystemsTrend = {
	"id": "trend-designsystems",
	"label": "#designsystems",
	"postCount": 3980
};

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
					<PostCard
						post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://example.com/avatars/rin.png","verified":true},"body":"Reminder that the moderation queue is triaged newest first, so please leave a note when you defer something.","createdAt":"2026-08-17T05:10:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":31,"likedByViewer":false}}
						authorLine={
							<>
								{/* TODO(yosegi): {"bindings":{"author":"rinAmano"}} */}
								<PostAuthorLine
									label="2h"
									visibility="public"
									author={rinAmano}
									avatar={
										<>
											{/* TODO(yosegi): {"bindings":{"author":"rinAmano"}} */}
											<UserAvatar author={rinAmano} />
										</>
									}
								/>
							</>
						}
						actions={<div className="text-sm">Reported 3 times</div>}
					/>
					<PostCard
						post={{"id":"post-2","author":{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://example.com/avatars/kai.png"},"body":"Quoting this so the deferred items are easier to find later in the week.","createdAt":"2026-08-17T02:10:00.000Z","visibility":"followers","replyCount":3,"repostCount":1,"likeCount":9,"likedByViewer":false}}
						authorLine={
							<>
								{/* TODO(yosegi): {"bindings":{"author":"kaiDoi"}} */}
								<PostAuthorLine
									label="5h"
									visibility="followers"
									author={kaiDoi}
									avatar={
										<>
											{/* TODO(yosegi): {"bindings":{"author":"kaiDoi"}} */}
											<UserAvatar author={kaiDoi} />
										</>
									}
								/>
							</>
						}
						quoted={
							<QuotedPost
								post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://example.com/avatars/rin.png","verified":true},"body":"Reminder that the moderation queue is triaged newest first, so please leave a note when you defer something.","createdAt":"2026-08-17T05:10:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":31,"likedByViewer":false}}
								avatar={
									<>
										{/* TODO(yosegi): {"bindings":{"author":"rinAmano"}} */}
										<UserAvatar author={rinAmano} />
									</>
								}
							/>
						}
						actions={<div className="text-sm">Reported once</div>}
					/>
					<PostCard
						post={{"id":"post-3","author":{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://example.com/avatars/mio.png"},"body":"Two screenshots of the report dialog, before and after the copy change.","createdAt":"2026-08-16T07:10:00.000Z","visibility":"unlisted","replyCount":7,"repostCount":2,"likeCount":18,"likedByViewer":false}}
						authorLine={
							<>
								{/* TODO(yosegi): {"bindings":{"author":"mioSato"}} */}
								<PostAuthorLine
									label="1d"
									visibility="unlisted"
									author={mioSato}
									avatar={
										<>
											{/* TODO(yosegi): {"bindings":{"author":"mioSato"}} */}
											<UserAvatar author={mioSato} />
										</>
									}
								/>
							</>
						}
						media={
							<>
								{/* TODO(yosegi): {"bindings":{"images":"reportedPostThreeImages"}} */}
								<PostMedia images={reportedPostThreeImages} />
							</>
						}
						actions={<div className="text-sm">Reported 5 times</div>}
					/>
				</div>
			}
			sidebar={
				<TrendPanel
					heading="Review queue trends"
					items={
						<>
							{/* TODO(yosegi): {"bindings":{"trend":"typescriptTrend"}} */}
							<TrendItem rank={1} trend={typescriptTrend} />
							{/* TODO(yosegi): {"bindings":{"trend":"storybookTrend"}} */}
							<TrendItem rank={2} trend={storybookTrend} />
							{/* TODO(yosegi): {"bindings":{"trend":"designSystemsTrend"}} */}
							<TrendItem rank={3} trend={designSystemsTrend} />
						</>
					}
				/>
			}
		/>
	),
};
