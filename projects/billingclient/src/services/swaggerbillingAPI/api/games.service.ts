/**
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.3.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { BoxScore } from '../model/boxScore';
import { Game } from '../model/game';
import { GameMedia } from '../model/gameMedia';
import { GameWeather } from '../model/gameWeather';
import { PlayerGame } from '../model/playerGame';
import { ScoreboardGame } from '../model/scoreboardGame';
import { TeamGame } from '../model/teamGame';
import { TeamRecord } from '../model/teamRecord';
import { Week } from '../model/week';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GamesService {
    
    

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
  
  
  

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Advanced box scores
     * Get advanced box score data
     * @param gameId Game id parameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAdvancedBoxScore(gameId: number, observe?: 'body', reportProgress?: boolean): Observable<BoxScore>;
    public getAdvancedBoxScore(gameId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BoxScore>>;
    public getAdvancedBoxScore(gameId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BoxScore>>;
    public getAdvancedBoxScore(gameId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (gameId === null || gameId === undefined) {
            throw new Error('Required parameter gameId was null or undefined when calling getAdvancedBoxScore.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (gameId !== undefined && gameId !== null) {
            queryParameters = queryParameters.set('gameId', <any>gameId);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<BoxScore>(`${this.basePath}/game/box/advanced`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Season calendar
     * Get calendar of weeks by season
     * @param year Year filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCalendar(year: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Week>>;
    public getCalendar(year: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Week>>>;
    public getCalendar(year: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Week>>>;
    public getCalendar(year: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getCalendar.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Week>>(`${this.basePath}/calendar`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Game media information and schedules
     * Game media information (TV, radio, etc)
     * @param year Year filter
     * @param week Week filter
     * @param seasonType Season type filter (regular, postseason, or both)
     * @param team Team filter
     * @param conference Conference filter
     * @param mediaType Media type filter (tv, radio, web, ppv, or mobile)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGameMedia(year: number, week?: number, seasonType?: string, team?: string, conference?: string, mediaType?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GameMedia>>;
    public getGameMedia(year: number, week?: number, seasonType?: string, team?: string, conference?: string, mediaType?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GameMedia>>>;
    public getGameMedia(year: number, week?: number, seasonType?: string, team?: string, conference?: string, mediaType?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GameMedia>>>;
    public getGameMedia(year: number, week?: number, seasonType?: string, team?: string, conference?: string, mediaType?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getGameMedia.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (week !== undefined && week !== null) {
            queryParameters = queryParameters.set('week', <any>week);
        }
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (conference !== undefined && conference !== null) {
            queryParameters = queryParameters.set('conference', <any>conference);
        }
        if (mediaType !== undefined && mediaType !== null) {
            queryParameters = queryParameters.set('mediaType', <any>mediaType);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<GameMedia>>(`${this.basePath}/games/media`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Game weather information (Patreon only)
     * Weather information for the hour of kickoff
     * @param gameId Game id filter (required if no year)
     * @param year Year filter (required if no game id)
     * @param week Week filter
     * @param seasonType Season type filter (regular, postseason, or both)
     * @param team Team filter
     * @param conference Conference filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGameWeather(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, conference?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GameWeather>>;
    public getGameWeather(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, conference?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GameWeather>>>;
    public getGameWeather(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, conference?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GameWeather>>>;
    public getGameWeather(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, conference?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (gameId !== undefined && gameId !== null) {
            queryParameters = queryParameters.set('gameId', <any>gameId);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (week !== undefined && week !== null) {
            queryParameters = queryParameters.set('week', <any>week);
        }
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (conference !== undefined && conference !== null) {
            queryParameters = queryParameters.set('conference', <any>conference);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<GameWeather>>(`${this.basePath}/games/weather`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Games and results
     * Get game results
     * @param year Year/season filter for games
     * @param week Week filter
     * @param seasonType Season type filter (regular or postseason)
     * @param team Team
     * @param home Home team filter
     * @param away Away team filter
     * @param conference Conference abbreviation filter
     * @param id id filter for querying a single game
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGames(year: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, id?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Game>>;
    public getGames(year: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Game>>>;
    public getGames(year: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Game>>>;
    public getGames(year: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, id?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getGames.');
        }








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (week !== undefined && week !== null) {
            queryParameters = queryParameters.set('week', <any>week);
        }
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (home !== undefined && home !== null) {
            queryParameters = queryParameters.set('home', <any>home);
        }
        if (away !== undefined && away !== null) {
            queryParameters = queryParameters.set('away', <any>away);
        }
        if (conference !== undefined && conference !== null) {
            queryParameters = queryParameters.set('conference', <any>conference);
        }
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Game>>(`${this.basePath}/games`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Player game stats
     * Player stats broken down by game
     * @param year Year/season filter for games
     * @param week Week filter
     * @param seasonType Season type filter (regular or postseason)
     * @param team Team filter
     * @param conference Conference abbreviation filter
     * @param category Category filter (e.g defensive)
     * @param gameId Game id filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlayerGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, category?: string, gameId?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<PlayerGame>>;
    public getPlayerGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, category?: string, gameId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayerGame>>>;
    public getPlayerGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, category?: string, gameId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayerGame>>>;
    public getPlayerGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, category?: string, gameId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getPlayerGameStats.');
        }







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (week !== undefined && week !== null) {
            queryParameters = queryParameters.set('week', <any>week);
        }
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (conference !== undefined && conference !== null) {
            queryParameters = queryParameters.set('conference', <any>conference);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (gameId !== undefined && gameId !== null) {
            queryParameters = queryParameters.set('gameId', <any>gameId);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<PlayerGame>>(`${this.basePath}/games/players`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Live game results (Patreon only)
     * Get live game results
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getScoreboard(observe?: 'body', reportProgress?: boolean): Observable<Array<ScoreboardGame>>;
    public getScoreboard(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ScoreboardGame>>>;
    public getScoreboard(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ScoreboardGame>>>;
    public getScoreboard(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ScoreboardGame>>(`${this.basePath}/scoreboard`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Team game stats
     * Team stats broken down by game
     * @param year Year/season filter for games
     * @param week Week filter
     * @param seasonType Season type filter (regular or postseason)
     * @param team Team filter
     * @param conference Conference abbreviation filter
     * @param gameId Game id filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTeamGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, gameId?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<TeamGame>>;
    public getTeamGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, gameId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeamGame>>>;
    public getTeamGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, gameId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeamGame>>>;
    public getTeamGameStats(year: number, week?: number, seasonType?: string, team?: string, conference?: string, gameId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getTeamGameStats.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (week !== undefined && week !== null) {
            queryParameters = queryParameters.set('week', <any>week);
        }
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (conference !== undefined && conference !== null) {
            queryParameters = queryParameters.set('conference', <any>conference);
        }
        if (gameId !== undefined && gameId !== null) {
            queryParameters = queryParameters.set('gameId', <any>gameId);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<TeamGame>>(`${this.basePath}/games/teams`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Team records
     * Get team records by year
     * @param year Year filter
     * @param team Team filter
     * @param conference Conference filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTeamRecords(year?: number, team?: string, conference?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<TeamRecord>>;
    public getTeamRecords(year?: number, team?: string, conference?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeamRecord>>>;
    public getTeamRecords(year?: number, team?: string, conference?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeamRecord>>>;
    public getTeamRecords(year?: number, team?: string, conference?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (conference !== undefined && conference !== null) {
            queryParameters = queryParameters.set('conference', <any>conference);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<TeamRecord>>(`${this.basePath}/records`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}