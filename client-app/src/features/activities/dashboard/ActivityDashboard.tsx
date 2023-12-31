import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityList from './ActivityList';
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useEffect } from "react";
import ActivityFilter from "./ActivityFilter";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;
    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />
  
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilter />
            </Grid.Column>

        </Grid>
    )
})