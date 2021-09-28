const { app } = require('../server.js')
const supertest = require('supertest')
const request = supertest(app)
describe('testing endpoints', () => {
    it('reaches the endpoint', async () => {
        const teamData = [
            {
                id: 212,
                name: 'knicks',
                city: 'new york',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png',
                championships: 2
            },
            {
                id: 503,
                name: 'trailblazers',
                city: 'portland',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png',
                championships: 1
            },
            {
                id: 305,
                name: 'heat',
                city: 'miami',
                logo: 'https://blog.logomyway.com/wp-content/uploads/2021/07/miami-heat-logo.png',
                championships: 3
            },
            {
                id: 415,
                name: 'warriors',
                city: 'golden state',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
                championships: 6
            }
        ];
        const response = await request.get('/basketball-teams')
        expect(response.body).toEqual(teamData)

    })


    it('should reach single entity', async () => {
        const singleTeam = {
            id: 212,
            name: 'knicks',
            city: 'new york',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png',
            championships: 2
        }

        const response = await request.get('/basketball-teams/212')
        expect(response.body).toEqual(singleTeam)

    })
});
