/**
 * @schema OutpostsCreateOutpostInput
 */
export interface OutpostsCreateOutpostInput {
  /**
   * @schema OutpostsCreateOutpostInput#Name
   */
  readonly name: string;

  /**
   * @schema OutpostsCreateOutpostInput#Description
   */
  readonly description?: string;

  /**
   * @schema OutpostsCreateOutpostInput#SiteId
   */
  readonly siteId: string;

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
 * @schema OutpostsCreateOutpostOutput
 */
export interface OutpostsCreateOutpostOutput {
  /**
   * @schema OutpostsCreateOutpostOutput#Outpost
   */
  readonly outpost?: OutpostsOutpost;

}

/**
 * @schema OutpostsDeleteOutpostInput
 */
export interface OutpostsDeleteOutpostInput {
  /**
   * @schema OutpostsDeleteOutpostInput#OutpostId
   */
  readonly outpostId: string;

}

/**
 * @schema OutpostsDeleteOutpostOutput
 */
export interface OutpostsDeleteOutpostOutput {
}

/**
 * @schema OutpostsDeleteSiteInput
 */
export interface OutpostsDeleteSiteInput {
  /**
   * @schema OutpostsDeleteSiteInput#SiteId
   */
  readonly siteId: string;

}

/**
 * @schema OutpostsDeleteSiteOutput
 */
export interface OutpostsDeleteSiteOutput {
}

/**
 * @schema OutpostsGetOutpostInput
 */
export interface OutpostsGetOutpostInput {
  /**
   * @schema OutpostsGetOutpostInput#OutpostId
   */
  readonly outpostId: string;

}

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
 * @schema OutpostsGetOutpostInstanceTypesInput
 */
export interface OutpostsGetOutpostInstanceTypesInput {
  /**
   * @schema OutpostsGetOutpostInstanceTypesInput#OutpostId
   */
  readonly outpostId: string;

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

}

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

}

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

}
