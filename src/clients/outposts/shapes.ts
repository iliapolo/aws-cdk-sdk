/**
 * @schema OutpostsCreateOutpostInput
 */
export interface OutpostsCreateOutpostInput {
  /**
   * @schema OutpostsCreateOutpostInput#Name
   */
  readonly name?: string;

  /**
   * @schema OutpostsCreateOutpostInput#Description
   */
  readonly description?: string;

  /**
   * @schema OutpostsCreateOutpostInput#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema OutpostsCreateOutpostInput#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema OutpostsCreateOutpostInput#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema OutpostsCreateOutpostInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'OutpostsCreateOutpostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsCreateOutpostInput(obj: OutpostsCreateOutpostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'SiteId': obj.siteId,
    'AvailabilityZone': obj.availabilityZone,
    'AvailabilityZoneId': obj.availabilityZoneId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsCreateOutpostOutput
 */
export interface OutpostsCreateOutpostOutput {
  /**
   * @schema OutpostsCreateOutpostOutput#Outpost
   */
  readonly outpost?: OutpostsOutpost;

}

/**
 * Converts an object of type 'OutpostsCreateOutpostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsCreateOutpostOutput(obj: OutpostsCreateOutpostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Outpost': toJson_OutpostsOutpost(obj.outpost),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsDeleteOutpostInput
 */
export interface OutpostsDeleteOutpostInput {
  /**
   * @schema OutpostsDeleteOutpostInput#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * Converts an object of type 'OutpostsDeleteOutpostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsDeleteOutpostInput(obj: OutpostsDeleteOutpostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutpostId': obj.outpostId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsDeleteOutpostOutput
 */
export interface OutpostsDeleteOutpostOutput {
}

/**
 * Converts an object of type 'OutpostsDeleteOutpostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsDeleteOutpostOutput(obj: OutpostsDeleteOutpostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsDeleteSiteInput
 */
export interface OutpostsDeleteSiteInput {
  /**
   * @schema OutpostsDeleteSiteInput#SiteId
   */
  readonly siteId?: string;

}

/**
 * Converts an object of type 'OutpostsDeleteSiteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsDeleteSiteInput(obj: OutpostsDeleteSiteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SiteId': obj.siteId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsDeleteSiteOutput
 */
export interface OutpostsDeleteSiteOutput {
}

/**
 * Converts an object of type 'OutpostsDeleteSiteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsDeleteSiteOutput(obj: OutpostsDeleteSiteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsGetOutpostInput
 */
export interface OutpostsGetOutpostInput {
  /**
   * @schema OutpostsGetOutpostInput#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * Converts an object of type 'OutpostsGetOutpostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsGetOutpostInput(obj: OutpostsGetOutpostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutpostId': obj.outpostId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsGetOutpostOutput
 */
export interface OutpostsGetOutpostOutput {
  /**
   * @schema OutpostsGetOutpostOutput#Outpost
   */
  readonly outpost?: OutpostsOutpost;

}

/**
 * Converts an object of type 'OutpostsGetOutpostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsGetOutpostOutput(obj: OutpostsGetOutpostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Outpost': toJson_OutpostsOutpost(obj.outpost),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsGetOutpostInstanceTypesInput
 */
export interface OutpostsGetOutpostInstanceTypesInput {
  /**
   * @schema OutpostsGetOutpostInstanceTypesInput#OutpostId
   */
  readonly outpostId?: string;

  /**
   * @schema OutpostsGetOutpostInstanceTypesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OutpostsGetOutpostInstanceTypesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OutpostsGetOutpostInstanceTypesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsGetOutpostInstanceTypesInput(obj: OutpostsGetOutpostInstanceTypesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutpostId': obj.outpostId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsGetOutpostInstanceTypesOutput
 */
export interface OutpostsGetOutpostInstanceTypesOutput {
  /**
   * @schema OutpostsGetOutpostInstanceTypesOutput#InstanceTypes
   */
  readonly instanceTypes?: OutpostsInstanceTypeItem[];

  /**
   * @schema OutpostsGetOutpostInstanceTypesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OutpostsGetOutpostInstanceTypesOutput#OutpostId
   */
  readonly outpostId?: string;

  /**
   * @schema OutpostsGetOutpostInstanceTypesOutput#OutpostArn
   */
  readonly outpostArn?: string;

}

/**
 * Converts an object of type 'OutpostsGetOutpostInstanceTypesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsGetOutpostInstanceTypesOutput(obj: OutpostsGetOutpostInstanceTypesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceTypes': obj.instanceTypes?.map(y => toJson_OutpostsInstanceTypeItem(y)),
    'NextToken': obj.nextToken,
    'OutpostId': obj.outpostId,
    'OutpostArn': obj.outpostArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsListOutpostsInput
 */
export interface OutpostsListOutpostsInput {
  /**
   * @schema OutpostsListOutpostsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OutpostsListOutpostsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema OutpostsListOutpostsInput#LifeCycleStatusFilter
   */
  readonly lifeCycleStatusFilter?: string[];

  /**
   * @schema OutpostsListOutpostsInput#AvailabilityZoneFilter
   */
  readonly availabilityZoneFilter?: string[];

  /**
   * @schema OutpostsListOutpostsInput#AvailabilityZoneIdFilter
   */
  readonly availabilityZoneIdFilter?: string[];

}

/**
 * Converts an object of type 'OutpostsListOutpostsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsListOutpostsInput(obj: OutpostsListOutpostsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'LifeCycleStatusFilter': obj.lifeCycleStatusFilter?.map(y => y),
    'AvailabilityZoneFilter': obj.availabilityZoneFilter?.map(y => y),
    'AvailabilityZoneIdFilter': obj.availabilityZoneIdFilter?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsListOutpostsOutput
 */
export interface OutpostsListOutpostsOutput {
  /**
   * @schema OutpostsListOutpostsOutput#Outposts
   */
  readonly outposts?: OutpostsOutpost[];

  /**
   * @schema OutpostsListOutpostsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OutpostsListOutpostsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsListOutpostsOutput(obj: OutpostsListOutpostsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Outposts': obj.outposts?.map(y => toJson_OutpostsOutpost(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsListSitesInput
 */
export interface OutpostsListSitesInput {
  /**
   * @schema OutpostsListSitesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OutpostsListSitesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'OutpostsListSitesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsListSitesInput(obj: OutpostsListSitesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsListSitesOutput
 */
export interface OutpostsListSitesOutput {
  /**
   * @schema OutpostsListSitesOutput#Sites
   */
  readonly sites?: OutpostsSite[];

  /**
   * @schema OutpostsListSitesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'OutpostsListSitesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsListSitesOutput(obj: OutpostsListSitesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sites': obj.sites?.map(y => toJson_OutpostsSite(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsListTagsForResourceRequest
 */
export interface OutpostsListTagsForResourceRequest {
  /**
   * @schema OutpostsListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'OutpostsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsListTagsForResourceRequest(obj: OutpostsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsListTagsForResourceResponse
 */
export interface OutpostsListTagsForResourceResponse {
  /**
   * @schema OutpostsListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'OutpostsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsListTagsForResourceResponse(obj: OutpostsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsTagResourceRequest
 */
export interface OutpostsTagResourceRequest {
  /**
   * @schema OutpostsTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema OutpostsTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'OutpostsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsTagResourceRequest(obj: OutpostsTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsTagResourceResponse
 */
export interface OutpostsTagResourceResponse {
}

/**
 * Converts an object of type 'OutpostsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsTagResourceResponse(obj: OutpostsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsUntagResourceRequest
 */
export interface OutpostsUntagResourceRequest {
  /**
   * @schema OutpostsUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema OutpostsUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'OutpostsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsUntagResourceRequest(obj: OutpostsUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsUntagResourceResponse
 */
export interface OutpostsUntagResourceResponse {
}

/**
 * Converts an object of type 'OutpostsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsUntagResourceResponse(obj: OutpostsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsOutpost
 */
export interface OutpostsOutpost {
  /**
   * @schema OutpostsOutpost#OutpostId
   */
  readonly outpostId?: string;

  /**
   * @schema OutpostsOutpost#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema OutpostsOutpost#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema OutpostsOutpost#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema OutpostsOutpost#Name
   */
  readonly name?: string;

  /**
   * @schema OutpostsOutpost#Description
   */
  readonly description?: string;

  /**
   * @schema OutpostsOutpost#LifeCycleStatus
   */
  readonly lifeCycleStatus?: string;

  /**
   * @schema OutpostsOutpost#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema OutpostsOutpost#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema OutpostsOutpost#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema OutpostsOutpost#SiteArn
   */
  readonly siteArn?: string;

}

/**
 * Converts an object of type 'OutpostsOutpost' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsOutpost(obj: OutpostsOutpost | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutpostId': obj.outpostId,
    'OwnerId': obj.ownerId,
    'OutpostArn': obj.outpostArn,
    'SiteId': obj.siteId,
    'Name': obj.name,
    'Description': obj.description,
    'LifeCycleStatus': obj.lifeCycleStatus,
    'AvailabilityZone': obj.availabilityZone,
    'AvailabilityZoneId': obj.availabilityZoneId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SiteArn': obj.siteArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsInstanceTypeItem
 */
export interface OutpostsInstanceTypeItem {
  /**
   * @schema OutpostsInstanceTypeItem#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * Converts an object of type 'OutpostsInstanceTypeItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsInstanceTypeItem(obj: OutpostsInstanceTypeItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceType': obj.instanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OutpostsSite
 */
export interface OutpostsSite {
  /**
   * @schema OutpostsSite#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema OutpostsSite#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema OutpostsSite#Name
   */
  readonly name?: string;

  /**
   * @schema OutpostsSite#Description
   */
  readonly description?: string;

  /**
   * @schema OutpostsSite#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema OutpostsSite#SiteArn
   */
  readonly siteArn?: string;

}

/**
 * Converts an object of type 'OutpostsSite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OutpostsSite(obj: OutpostsSite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SiteId': obj.siteId,
    'AccountId': obj.accountId,
    'Name': obj.name,
    'Description': obj.description,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SiteArn': obj.siteArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
