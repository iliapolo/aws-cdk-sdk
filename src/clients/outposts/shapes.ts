/**
 * @schema CreateOutpostInput
 */
export interface CreateOutpostInput {
  /**
   * @schema CreateOutpostInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateOutpostInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateOutpostInput#SiteId
   */
  readonly siteId: string;

  /**
   * @schema CreateOutpostInput#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateOutpostInput#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema CreateOutpostInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateOutpostOutput
 */
export interface CreateOutpostOutput {
  /**
   * @schema CreateOutpostOutput#Outpost
   */
  readonly outpost?: Outpost;

}

/**
 * @schema DeleteOutpostInput
 */
export interface DeleteOutpostInput {
  /**
   * @schema DeleteOutpostInput#OutpostId
   */
  readonly outpostId: string;

}

/**
 * @schema DeleteOutpostOutput
 */
export interface DeleteOutpostOutput {
}

/**
 * @schema DeleteSiteInput
 */
export interface DeleteSiteInput {
  /**
   * @schema DeleteSiteInput#SiteId
   */
  readonly siteId: string;

}

/**
 * @schema DeleteSiteOutput
 */
export interface DeleteSiteOutput {
}

/**
 * @schema GetOutpostInput
 */
export interface GetOutpostInput {
  /**
   * @schema GetOutpostInput#OutpostId
   */
  readonly outpostId: string;

}

/**
 * @schema GetOutpostOutput
 */
export interface GetOutpostOutput {
  /**
   * @schema GetOutpostOutput#Outpost
   */
  readonly outpost?: Outpost;

}

/**
 * @schema GetOutpostInstanceTypesInput
 */
export interface GetOutpostInstanceTypesInput {
  /**
   * @schema GetOutpostInstanceTypesInput#OutpostId
   */
  readonly outpostId: string;

  /**
   * @schema GetOutpostInstanceTypesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetOutpostInstanceTypesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetOutpostInstanceTypesOutput
 */
export interface GetOutpostInstanceTypesOutput {
  /**
   * @schema GetOutpostInstanceTypesOutput#InstanceTypes
   */
  readonly instanceTypes?: InstanceTypeItem[];

  /**
   * @schema GetOutpostInstanceTypesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetOutpostInstanceTypesOutput#OutpostId
   */
  readonly outpostId?: string;

  /**
   * @schema GetOutpostInstanceTypesOutput#OutpostArn
   */
  readonly outpostArn?: string;

}

/**
 * @schema ListOutpostsInput
 */
export interface ListOutpostsInput {
  /**
   * @schema ListOutpostsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOutpostsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListOutpostsOutput
 */
export interface ListOutpostsOutput {
  /**
   * @schema ListOutpostsOutput#Outposts
   */
  readonly outposts?: Outpost[];

  /**
   * @schema ListOutpostsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSitesInput
 */
export interface ListSitesInput {
  /**
   * @schema ListSitesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSitesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSitesOutput
 */
export interface ListSitesOutput {
  /**
   * @schema ListSitesOutput#Sites
   */
  readonly sites?: Site[];

  /**
   * @schema ListSitesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Outpost
 */
export interface Outpost {
  /**
   * @schema Outpost#OutpostId
   */
  readonly outpostId?: string;

  /**
   * @schema Outpost#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Outpost#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Outpost#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema Outpost#Name
   */
  readonly name?: string;

  /**
   * @schema Outpost#Description
   */
  readonly description?: string;

  /**
   * @schema Outpost#LifeCycleStatus
   */
  readonly lifeCycleStatus?: string;

  /**
   * @schema Outpost#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Outpost#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Outpost#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema InstanceTypeItem
 */
export interface InstanceTypeItem {
  /**
   * @schema InstanceTypeItem#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema Site
 */
export interface Site {
  /**
   * @schema Site#SiteId
   */
  readonly siteId?: string;

  /**
   * @schema Site#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Site#Name
   */
  readonly name?: string;

  /**
   * @schema Site#Description
   */
  readonly description?: string;

  /**
   * @schema Site#Tags
   */
  readonly tags?: { [key: string]: string };

}
