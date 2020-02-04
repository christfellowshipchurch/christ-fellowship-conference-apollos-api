import { ContentItem } from '@apollosproject/data-connector-rock';
import ApollosConfig from '@apollosproject/config';

const { ROCK_MAPPINGS } = ApollosConfig;

const mapIds = (ids) => ids.map(
    (id) => `ContentChannelId eq ${id}`
)

export default class ExtendedContentItem extends ContentItem.dataSource {
    byUserFeed = () =>
        this.byActive()
            .orderBy('StartDateTime', 'asc')
            .top(2)
            .expand('ContentChannel');

    byGuestSpeaker = () => this.request()
        .filterOneOf(
            mapIds(ROCK_MAPPINGS.SPEAKER_CONTENT_CHANNEL_IDS)
        )
        .andFilter(this.LIVE_CONTENT())
        .expand('ContentChannel')
        .orderBy('Order', 'asc')
        .expand('ContentChannel')

    bySchedule = () => this.request()
        .filterOneOf(
            mapIds(ROCK_MAPPINGS.SCHEDULE_CONTENT_CHANNEL_IDS)
        )
        .andFilter(this.LIVE_CONTENT())
        .expand('ContentChannel')
        .orderBy('Order', 'asc')
        .expand('ContentChannel')
}
