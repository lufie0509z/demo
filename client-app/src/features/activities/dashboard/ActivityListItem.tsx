import { Button, Icon, Item, ItemGroup, Segment, SegmentGroup } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { format } from "date-fns";
 
interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by Aurora</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" />{format(activity.date!, 'dd MMM yyyy h:mm aa')}   
                    <Icon name="marker" />{activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                as={Link} to={`/activities/${activity.id}`}
                color="teal" floated="right" content="View" />
            </Segment>
        </SegmentGroup>
    )
}