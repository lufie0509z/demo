
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";


export default observer(function ProfilePage() {
   
    return (
      
        <Grid>
            <Grid.Column width='16'>
                <ProfileHeader />
                <ProfileContent />
            </Grid.Column>
        </Grid>
        
        
    )
})