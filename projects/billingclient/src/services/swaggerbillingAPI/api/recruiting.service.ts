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

import { PositionGroupRecruitingRating } from '../model/positionGroupRecruitingRating';
import { Recruit } from '../model/recruit';
import { TeamRecruitingRank } from '../model/teamRecruitingRank';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RecruitingService {

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
     * Recruit position group ratings
     * Gets a list of aggregated statistics by team and position grouping
     * @param startYear Starting year
     * @param endYear Ending year
     * @param team Team filter
     * @param conference conference filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRecruitingGroups(startYear?: number, endYear?: number, team?: string, conference?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<PositionGroupRecruitingRating>>;
    public getRecruitingGroups(startYear?: number, endYear?: number, team?: string, conference?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PositionGroupRecruitingRating>>>;
    public getRecruitingGroups(startYear?: number, endYear?: number, team?: string, conference?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PositionGroupRecruitingRating>>>;
    public getRecruitingGroups(startYear?: number, endYear?: number, team?: string, conference?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (startYear !== undefined && startYear !== null) {
            queryParameters = queryParameters.set('startYear', <any>startYear);
        }
        if (endYear !== undefined && endYear !== null) {
            queryParameters = queryParameters.set('endYear', <any>endYear);
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

        return this.httpClient.get<Array<PositionGroupRecruitingRating>>(`${this.basePath}/recruiting/groups`,
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
     * Player recruiting ratings and rankings
     * Get player recruiting rankings and data. Requires either a year or team to be specified.
     * @param year Recruiting class year (required if team no specified)
     * @param classification Type of recruit (HighSchool, JUCO, PrepSchool)
     * @param position Position abbreviation filter
     * @param state State or province abbreviation filter
     * @param team Committed team filter (required if year not specified)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRecruitingPlayers(year?: number, classification?: string, position?: string, state?: string, team?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Recruit>>;
    public getRecruitingPlayers(year?: number, classification?: string, position?: string, state?: string, team?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Recruit>>>;
    public getRecruitingPlayers(year?: number, classification?: string, position?: string, state?: string, team?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Recruit>>>;
    public getRecruitingPlayers(year?: number, classification?: string, position?: string, state?: string, team?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (classification !== undefined && classification !== null) {
            queryParameters = queryParameters.set('classification', <any>classification);
        }
        if (position !== undefined && position !== null) {
            queryParameters = queryParameters.set('position', <any>position);
        }
        if (state !== undefined && state !== null) {
            queryParameters = queryParameters.set('state', <any>state);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
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

        return this.httpClient.get<Array<Recruit>>(`${this.basePath}/recruiting/players`,
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
     * Team recruiting rankings and ratings
     * Team recruiting rankings
     * @param year Recruiting class year
     * @param team Team filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRecruitingTeams(year?: number, team?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<TeamRecruitingRank>>;
    public getRecruitingTeams(year?: number, team?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TeamRecruitingRank>>>;
    public getRecruitingTeams(year?: number, team?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TeamRecruitingRank>>>;
    public getRecruitingTeams(year?: number, team?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (year !== undefined && year !== null) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (team !== undefined && team !== null) {
            queryParameters = queryParameters.set('team', <any>team);
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

        return this.httpClient.get<Array<TeamRecruitingRank>>(`${this.basePath}/recruiting/teams`,
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
