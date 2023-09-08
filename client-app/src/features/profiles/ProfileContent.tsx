import { observer } from 'mobx-react-lite';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({ profile }: Props) {
    const panes = [
        { menuItem: 'About', render: () => 'Photos' },
        { menuItem: 'Photos', render: () =>  <ProfilePhotos profile={profile} />},
        { menuItem: 'Events', render: () => 'Photos'},
        { menuItem: 'Followers', render: () => 'Photos' },
        { menuItem: 'Following', render: () => 'Photos' },
    ];

    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
        />
    )
})