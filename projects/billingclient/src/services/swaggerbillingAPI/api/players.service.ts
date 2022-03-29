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

import { PlayerSearchResult } from '../model/playerSearchResult';
import { PlayerSeasonStat } from '../model/playerSeasonStat';
import { PlayerUsage } from '../model/playerUsage';
import { PortalPlayer } from '../model/portalPlayer';
import { ReturningProduction } from '../model/returningProduction';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PlayersService {

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
     * Player stats by season
     * Season player stats
     * @param year Year filter
     * @param team Team filter
     * @param conference Conference abbreviation filter
     * @param startWeek Start week filter
     * @param endWeek Start week filter
     * @param seasonType Season type filter (regular, postseason, or both)
     * @param category Stat category filter (e.g. passing)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlayerSeasonStats(year: number, team?: string, conference?: string, startWeek?: number, endWeek?: number, seasonType?: string, category?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PlayerSeasonStat>>;
    public getPlayerSeasonStats(year: number, team?: string, conference?: string, startWeek?: number, endWeek?: number, seasonType?: string, category?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayerSeasonStat>>>;
    public getPlayerSeasonStats(year: number, team?: string, conference?: string, startWeek?: number, endWeek?: number, seasonType?: string, category?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayerSeasonStat>>>;
    public getPlayerSeasonStats(year: number, team?: string, conference?: string, startWeek?: number, endWeek?: number, seasonType?: string, category?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getPlayerSeasonStats.');
        }







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
        if (startWeek !== undefined && startWeek !== null) {
            queryParameters = queryParameters.set('startWeek', <any>startWeek);
        }
        if (endWeek !== undefined && endWeek !== null) {
            queryParameters = queryParameters.set('endWeek', <any>endWeek);
        }
        if (seasonType !== undefined && seasonType !== null) {
            queryParameters = queryParameters.set('seasonType', <any>seasonType);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
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

        return this.httpClient.get<Array<PlayerSeasonStat>>(`${this.basePath}/stats/player/season`,
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
     * Player usage metrics broken down by season
     * Player usage metrics by season
     * @param year Year filter
     * @param team Team filter
     * @param conference Conference abbreviation filter
     * @param position Position abbreviation filter
     * @param playerId Player id filter
     * @param excludeGarbageTime Filter to remove garbage time plays from calculations
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlayerUsage(year: number, team?: string, conference?: string, position?: string, playerId?: number, excludeGarbageTime?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<PlayerUsage>>;
    public getPlayerUsage(year: number, team?: string, conference?: string, position?: string, playerId?: number, excludeGarbageTime?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayerUsage>>>;
    public getPlayerUsage(year: number, team?: string, conference?: string, position?: string, playerId?: number, excludeGarbageTime?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayerUsage>>>;
    public getPlayerUsage(year: number, team?: string, conference?: string, position?: string, playerId?: number, excludeGarbageTime?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getPlayerUsage.');
        }






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
        if (position !== undefined && position !== null) {
            queryParameters = queryParameters.set('position', <any>position);
        }
        if (playerId !== undefined && playerId !== null) {
            queryParameters = queryParameters.set('playerId', <any>playerId);
        }
        if (excludeGarbageTime !== undefined && excludeGarbageTime !== null) {
            queryParameters = queryParameters.set('excludeGarbageTime', <any>excludeGarbageTime);
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

        return this.httpClient.get<Array<PlayerUsage>>(`${this.basePath}/player/usage`,
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
     * Team returning production metrics
     * Returning production metrics
     * @param year Year filter
     * @param team Team filter
     * @param conference Conference abbreviation filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getReturningProduction(year?: number, team?: string, conference?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ReturningProduction>>;
    public getReturningProduction(year?: number, team?: string, conference?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReturningProduction>>>;
    public getReturningProduction(year?: number, team?: string, conference?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReturningProduction>>>;
    public getReturningProduction(year?: number, team?: string, conference?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




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

        return this.httpClient.get<Array<ReturningProduction>>(`${this.basePath}/player/returning`,
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
     * Transfer portal by season
     * Transfer portal by season
     * @param year Year filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTransferPortal(year: number, observe?: 'body', reportProgress?: boolean): Observable<Array<PortalPlayer>>;
    public getTransferPortal(year: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PortalPlayer>>>;
    public getTransferPortal(year: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PortalPlayer>>>;
    public getTransferPortal(year: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling getTransferPortal.');
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

        return this.httpClient.get<Array<PortalPlayer>>(`${this.basePath}/player/portal`,
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
     * Search for player information
     * Search for players
     * @param searchTerm Term to search on
     * @param position Position abbreviation filter
     * @param team Team filter
     * @param year Year filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public playerSearch(searchTerm: string, position?: string, team?: string, year?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<PlayerSearchResult>>;
    public playerSearch(searchTerm: string, position?: string, team?: string, year?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlayerSearchResult>>>;
    public playerSearch(searchTerm: string, position?: string, team?: string, year?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlayerSearchResult>>>;
    public playerSearch(searchTerm: string, position?: string, team?: string, year?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchTerm === null || searchTerm === undefined) {
            throw new Error('Required parameter searchTerm was null or undefined when calling playerSearch.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (searchTerm !== undefined && searchTerm !== null) {
            queryParameters = queryParameters.set('searchTerm', <any>searchTerm);
        }
        if (position !== undefined && position !== null) {
            queryParameters = queryParameters.set('position', <any>position);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
        }
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

        return this.httpClient.get<Array<PlayerSearchResult>>(`${this.basePath}/player/search`,
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