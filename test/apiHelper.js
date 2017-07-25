import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import TierOneSkills from '../mocks/skills1';
import TierThreeSkills from '../mocks/skill3';
import ClubsAndSquads from '../mocks/clubsAndSquads';

const mock = new MockAdapter(axios);

mock.onPost('/session').reply(201, {
    user: {
      registrationCompleted: true,
      id: 1,
      email: null,
      username: 'joddy',
      password: 'password',
      name: null,
      squad: null,
      club: null,
      level: null,
      jobTitle: null,
    },
    status: true,
    sessionId: '2a24ac2e-fe4e-44fd-a269-b26d42d91bb4'
});

mock.onGet('/clubs').reply(200, ClubsAndSquads)
mock.onGet('/domains').reply(200, TierOneSkills)

mock.onPut('/topic-ratings/555').reply(200, {
  user_id: 1,
  topic_id: 329,
  rating: 1
})
