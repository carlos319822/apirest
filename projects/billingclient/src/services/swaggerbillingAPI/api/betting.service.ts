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

import { GameLines } from '../model/gameLines';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BettingService {

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
     * Betting lines
     * Closing betting lines
     * @param gameId Game id filter
     * @param year Year/season filter for games
     * @param week Week filter
     * @param seasonType Season type filter (regular or postseason)
     * @param team Team
     * @param home Home team filter
     * @param away Away team filter
     * @param conference Conference abbreviation filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLines(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GameLines>>;
    public getLines(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GameLines>>>;
    public getLines(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GameLines>>>;
    public getLines(gameId?: number, year?: number, week?: number, seasonType?: string, team?: string, home?: string, away?: string, conference?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {









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
        if (home !== undefined && home !== null) {
            queryParameters = queryParameters.set('home', <any>home);
        }
        if (away !== undefined && away !== null) {
            queryParameters = queryParameters.set('away', <any>away);
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

        return this.httpClient.get<Array<GameLines>>(`${this.basePath}/lines`,
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
