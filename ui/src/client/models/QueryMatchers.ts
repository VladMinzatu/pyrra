/* tslint:disable */
/* eslint-disable */
/**
 * Athene
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface QueryMatchers
 */
export interface QueryMatchers {
    /**
     * 
     * @type {string}
     * @memberof QueryMatchers
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof QueryMatchers
     */
    value?: string;
    /**
     * 
     * @type {number}
     * @memberof QueryMatchers
     */
    type?: number;
}

export function QueryMatchersFromJSON(json: any): QueryMatchers {
    return QueryMatchersFromJSONTyped(json, false);
}

export function QueryMatchersFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryMatchers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function QueryMatchersToJSON(value?: QueryMatchers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'type': value.type,
    };
}


