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

import { LivePlayByPlay } from '../model/livePlayByPlay';
import { Play } from '../model/play';
import { PlayStat } from '../model/playStat';
import { PlayStatType } from '../model/playStatType';
import { PlayType } from '../model/playType';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PlaysService {

    protected basePath = 'https://api.collegefootballdata.com';
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
     * Live metrics and PBP (Patreon only)
     * Get live metrics and PBP
     * @param id Game id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLivePlays(id: number, observe?: 'body', reportProgress?: boolean): Observable<LivePlayByPlay>;
    public getLivePlays(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LivePlayByPlay>>;
    public getLivePlays(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LivePlayByPlay>>;
    public getLivePlays(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLivePlays.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
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

        return this.httpClient.get<LivePlayByPlay>(`${this.basePath}/live/plays`,
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
     * Types of player play stats
     * Type of play stats
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlayStatTypes(observe?: 'body', reportProgress?: boolean): Observable<Array<PlayStatType>>;
    public getPlayStatTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayStatType>>>;
    public getPlayStatTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayStatType>>>;
    public getPlayStatTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<PlayStatType>>(`${this.basePath}/play/stat/types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Play stats by play
     * Gets player stats associated by play (limit 1000)
     * @param year Year filter
     * @param week Week filter
     * @param team Team filter
     * @param gameId gameId filter (from /games endpoint)
     * @param athleteId athleteId filter (from /roster endpoint)
     * @param statTypeId statTypeId filter (from /play/stat/types endpoint)
     * @param seasonType regular, postseason, or both
     * @param conference conference abbreviation filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlayStats(year?: number, week?: number, team?: string, gameId?: number, athleteId?: number, statTypeId?: number, seasonType?: string, conference?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PlayStat>>;
    public getPlayStats(year?: number, week?: number, team?: string, gameId?: number, athleteId?: number, statTypeId?: number, seasonType?: string, conference?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayStat>>>;
    public getPlayStats(year?: number, week?: number, team?: string, gameId?: number, athleteId?: number, statTypeId?: number, seasonType?: string, conference?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayStat>>>;
    public getPlayStats(year?: number, week?: number, team?: string, gameId?: number, athleteId?: number, statTypeId?: number, seasonType?: string, conference?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {









        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (week !== undefined && week !== null) {
            queryParameters = queryParameters.set('week', <any>week);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (gameId !== undefined && gameId !== null) {
            queryParameters = queryParameters.set('gameId', <any>gameId);
        }
        if (athleteId !== undefined && athleteId !== null) {
            queryParameters = queryParameters.set('athleteId', <any>athleteId);
        }
        if (statTypeId !== undefined && statTypeId !== null) {
            queryParameters = queryParameters.set('statTypeId', <any>statTypeId);
        }
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
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

        return this.httpClient.get<Array<PlayStat>>(`${this.basePath}/play/stats`,
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
     * Play types
     * Types of plays
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlayTypes(observe?: 'body', reportProgress?: boolean): Observable<Array<PlayType>>;
    public getPlayTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayType>>>;
    public getPlayTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayType>>>;
    public getPlayTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<PlayType>>(`${this.basePath}/play/types`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Play by play data
     * Get play data and results
     * @param year Year filter
     * @param week Week filter (required if team, offense, or defense, not specified)
     * @param seasonType Season type filter
     * @param team Team filter
     * @param offense Offensive team filter
     * @param defense Defensive team filter
     * @param conference Conference filter
     * @param offenseConference Offensive conference filter
     * @param defenseConference Defensive conference filter
     * @param playType Play type filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlays(year: number, week: number, seasonType?: string, team?: string, offense?: string, defense?: string, conference?: string, offenseConference?: string, defenseConference?: string, playType?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Play>>;
    public getPlays(year: number, week: number, seasonType?: string, team?: string, offense?: string, defense?: string, conference?: string, offenseConference?: string, defenseConference?: string, playType?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Play>>>;
    public getPlays(year: number, week: number, seasonType?: string, team?: string, offense?: string, defense?: string, conference?: string, offenseConference?: string, defenseConference?: string, playType?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Play>>>;
    public getPlays(year: number, week: number, seasonType?: string, team?: string, offense?: string, defense?: string, conference?: string, offenseConference?: string, defenseConference?: string, playType?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getPlays.');
        }

        if (week === null || week === undefined) {
            throw new Error('Required parameter week was null or undefined when calling getPlays.');
        }









        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
        }
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (week !== undefined && week !== null) {
            queryParameters = queryParameters.set('week', <any>week);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
        if (offense !== undefined && offense !== null) {
            queryParameters = queryParameters.set('offense', <any>offense);
        }
        if (defense !== undefined && defense !== null) {
            queryParameters = queryParameters.set('defense', <any>defense);
        }
        if (conference !== undefined && conference !== null) {
            queryParameters = queryParameters.set('conference', <any>conference);
        }
        if (offenseConference !== undefined && offenseConference !== null) {
            queryParameters = queryParameters.set('offenseConference', <any>offenseConference);
        }
        if (defenseConference !== undefined && defenseConference !== null) {
            queryParameters = queryParameters.set('defenseConference', <any>defenseConference);
        }
        if (playType !== undefined && playType !== null) {
            queryParameters = queryParameters.set('playType', <any>playType);
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

        return this.httpClient.get<Array<Play>>(`${this.basePath}/plays`,
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
