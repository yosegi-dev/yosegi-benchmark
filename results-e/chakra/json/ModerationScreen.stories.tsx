import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "~/components/app-shell";
import { PostAuthorLine } from "~/components/post-author-line";
import { PostCard } from "~/components/post-card";
import { PostMedia } from "~/components/post-media";
import { QuotedPost } from "~/components/quoted-post";
import { TrendItem } from "~/components/trend-item";
import { TrendPanel } from "~/components/trend-panel";
import { UserAvatar } from "~/components/user-avatar";

const authorRin = {
	"id": "author-rin",
	"displayName": "Rin Amano",
	"handle": "rin",
	"avatarUrl": "https://images.example.com/avatars/rin.png",
	"verified": true
};
const authorKai = {
	"id": "author-kai",
	"displayName": "Kai Doi",
	"handle": "kai",
	"avatarUrl": "https://images.example.com/avatars/kai.png",
	"verified": false
};
const authorMio = {
	"id": "author-mio",
	"displayName": "Mio Sato",
	"handle": "mio",
	"avatarUrl": "https://images.example.com/avatars/mio.png",
	"verified": false
};
const post3Images = [
	{
		"url": "https://images.example.com/moderation/queue-dashboard-morning.png",
		"alt": "Moderation queue dashboard at 10:00, showing 42 open reports"
	},
	{
		"url": "https://images.example.com/moderation/queue-dashboard-midday.png",
		"alt": "The same dashboard an hour later, showing 58 open reports"
	}
];
const trendTypescript = {
	"id": "trend-typescript",
	"label": "#typescript",
	"postCount": 8320,
	"category": "Technology"
};
const trendStorybook = {
	"id": "trend-storybook",
	"label": "#storybook",
	"postCount": 6120,
	"category": "Technology"
};
const trendDesignsystems = {
	"id": "trend-designsystems",
	"label": "#designsystems",
	"postCount": 3980,
	"category": "Design"
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
				<>
					<PostCard
						density="cozy"
						post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://images.example.com/avatars/rin.png","verified":true},"body":"Reminder: the moderation queue is triaged twice a day, so a report filed this morning is looked at before the evening handover.","createdAt":"2024-05-02T09:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}}
						authorLine={
							<>
								{/* TODO(yosegi): {"bindings":{"author":"authorRin"}} */}
								<PostAuthorLine
									label="2h"
									visibility="public"
									author={authorRin}
									avatar={
										<>
											{/* TODO(yosegi): {"bindings":{"author":"authorRin"}} */}
											<UserAvatar density="cozy" author={authorRin} />
										</>
									}
								/>
							</>
						}
						actions={<div className="text-sm text-muted">Reported 3 times</div>}
					/>
					<PostCard
						density="cozy"
						post={{"id":"post-2","author":{"id":"author-kai","displayName":"Kai Doi","handle":"kai","avatarUrl":"https://images.example.com/avatars/kai.png","verified":false},"body":"Quoting this because the twice-a-day cadence is not what the help centre page says. One of the two needs updating.","createdAt":"2024-05-02T06:00:00.000Z","visibility":"followers","replyCount":3,"repostCount":1,"likeCount":9,"likedByViewer":false}}
						authorLine={
							<>
								{/* TODO(yosegi): {"bindings":{"author":"authorKai"}} */}
								<PostAuthorLine
									label="5h"
									visibility="followers"
									author={authorKai}
									avatar={
										<>
											{/* TODO(yosegi): {"bindings":{"author":"authorKai"}} */}
											<UserAvatar density="cozy" author={authorKai} />
										</>
									}
								/>
							</>
						}
						quoted={
							<QuotedPost
								post={{"id":"post-1","author":{"id":"author-rin","displayName":"Rin Amano","handle":"rin","avatarUrl":"https://images.example.com/avatars/rin.png","verified":true},"body":"Reminder: the moderation queue is triaged twice a day, so a report filed this morning is looked at before the evening handover.","createdAt":"2024-05-02T09:00:00.000Z","visibility":"public","replyCount":12,"repostCount":4,"likeCount":38,"likedByViewer":false}}
								avatar={
									<>
										{/* TODO(yosegi): {"bindings":{"author":"authorRin"}} */}
										<UserAvatar density="compact" author={authorRin} />
									</>
								}
							/>
						}
						actions={<div className="text-sm text-muted">Reported once</div>}
					/>
					<PostCard
						density="cozy"
						post={{"id":"post-3","author":{"id":"author-mio","displayName":"Mio Sato","handle":"mio","avatarUrl":"https://images.example.com/avatars/mio.png","verified":false},"body":"Screenshots of the two queue dashboards, taken an hour apart. The counts disagree.","createdAt":"2024-05-01T11:00:00.000Z","visibility":"unlisted","replyCount":7,"repostCount":2,"likeCount":21,"likedByViewer":false}}
						authorLine={
							<>
								{/* TODO(yosegi): {"bindings":{"author":"authorMio"}} */}
								<PostAuthorLine
									label="1d"
									visibility="unlisted"
									author={authorMio}
									avatar={
										<>
											{/* TODO(yosegi): {"bindings":{"author":"authorMio"}} */}
											<UserAvatar density="cozy" author={authorMio} />
										</>
									}
								/>
							</>
						}
						media={
							<>
								{/* TODO(yosegi): {"bindings":{"images":"post3Images"}} */}
								<PostMedia density="cozy" images={post3Images} />
							</>
						}
						actions={<div className="text-sm text-muted">Reported 5 times</div>}
					/>
				</>
			}
			sidebar={
				<TrendPanel
					heading="Review queue trends"
					density="cozy"
					items={
						<>
							{/* TODO(yosegi): {"bindings":{"trend":"trendTypescript"}} */}
							<TrendItem rank={1} trend={trendTypescript} />
							{/* TODO(yosegi): {"bindings":{"trend":"trendStorybook"}} */}
							<TrendItem rank={2} trend={trendStorybook} />
							{/* TODO(yosegi): {"bindings":{"trend":"trendDesignsystems"}} */}
							<TrendItem rank={3} trend={trendDesignsystems} />
						</>
					}
				/>
			}
		/>
	),
};
