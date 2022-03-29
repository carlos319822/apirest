import { NgModule, SkipSelf, Optional, ModuleWithProviders } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';



import { BettingService } from './api/betting.service';
import { CoachesService } from './api/coaches.service';
import { ConferencesService } from './api/conferences.service';
import { DraftService } from './api/draft.service';
import { DrivesService } from './api/drives.service';
import { GamesService } from './api/games.service';
import { MetricsService } from './api/metrics.service';
import { PlayersService } from './api/players.service';
import { PlaysService } from './api/plays.service';
import { RankingsService } from './api/rankings.service';
import { RatingsService } from './api/ratings.service';
import { RecruitingService } from './api/recruiting.service';
import { StatsService } from './api/stats.service';
import { TeamsService } from './api/teams.service';
import { VenuesService } from './api/venues.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    BettingService,
    CoachesService,
    ConferencesService,
    DraftService,
    DrivesService,
    GamesService,
    MetricsService,
    PlayersService,
    PlaysService,
    RankingsService,
    RatingsService,
    RecruitingService,
    StatsService,
    TeamsService,
    VenuesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
