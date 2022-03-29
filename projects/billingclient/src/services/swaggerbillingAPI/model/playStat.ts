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


export interface PlayStat { 
    gameId?: number;
    season?: number;
    week?: number;
    team?: string;
    conference?: string;
    opponent?: string;
    teamScore?: number;
    opponentScore?: number;
    driveId?: number;
    playId?: number;
    period?: number;
    clock?: any;
    yardsToGoal?: number;
    down?: number;
    distance?: number;
    athleteId?: number;
    athleteName?: string;
    statType?: string;
    stat?: number;
}
