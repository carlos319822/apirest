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


export interface Drive { 
    offense?: string;
    offenseConference?: string;
    defense?: string;
    defenseConference?: string;
    gameId?: number;
    id?: number;
    driveNumber?: number;
    scoring?: boolean;
    startPeriod?: number;
    startYardline?: number;
    startYardsToGoal?: number;
    startTime?: any;
    endPeriod?: number;
    endYardline?: number;
    endYardsToGoal?: number;
    endTime?: any;
    plays?: number;
    yards?: number;
    driveResult?: string;
    isHomeOffense?: boolean;
    startOffenseScore?: number;
    startDefenseScore?: number;
    endOffenseScore?: number;
    endDefenseScore?: number;
}
