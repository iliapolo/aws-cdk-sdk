/**
 * @schema CreateConnectionInput
 */
export interface CreateConnectionInput {
  /**
   * @schema CreateConnectionInput#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CreateConnectionInput#ConnectionName
   */
  readonly connectionName: string;

  /**
   * @schema CreateConnectionInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateConnectionInput#HostArn
   */
  readonly hostArn?: string;

}

/**
 * @schema CreateConnectionOutput
 */
export interface CreateConnectionOutput {
  /**
   * @schema CreateConnectionOutput#ConnectionArn
   */
  readonly connectionArn: string;

  /**
   * @schema CreateConnectionOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateHostInput
 */
export interface CreateHostInput {
  /**
   * @schema CreateHostInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateHostInput#ProviderType
   */
  readonly providerType: string;

  /**
   * @schema CreateHostInput#ProviderEndpoint
   */
  readonly providerEndpoint: string;

  /**
   * @schema CreateHostInput#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

}

/**
 * @schema CreateHostOutput
 */
export interface CreateHostOutput {
  /**
   * @schema CreateHostOutput#HostArn
   */
  readonly hostArn?: string;

}

/**
 * @schema DeleteConnectionInput
 */
export interface DeleteConnectionInput {
  /**
   * @schema DeleteConnectionInput#ConnectionArn
   */
  readonly connectionArn: string;

}

/**
 * @schema DeleteConnectionOutput
 */
export interface DeleteConnectionOutput {
}

/**
 * @schema DeleteHostInput
 */
export interface DeleteHostInput {
  /**
   * @schema DeleteHostInput#HostArn
   */
  readonly hostArn: string;

}

/**
 * @schema DeleteHostOutput
 */
export interface DeleteHostOutput {
}

/**
 * @schema GetConnectionInput
 */
export interface GetConnectionInput {
  /**
   * @schema GetConnectionInput#ConnectionArn
   */
  readonly connectionArn: string;

}

/**
 * @schema GetConnectionOutput
 */
export interface GetConnectionOutput {
  /**
   * @schema GetConnectionOutput#Connection
   */
  readonly connection?: Connection;

}

/**
 * @schema GetHostInput
 */
export interface GetHostInput {
  /**
   * @schema GetHostInput#HostArn
   */
  readonly hostArn: string;

}

/**
 * @schema GetHostOutput
 */
export interface GetHostOutput {
  /**
   * @schema GetHostOutput#Name
   */
  readonly name?: string;

  /**
   * @schema GetHostOutput#Status
   */
  readonly status?: string;

  /**
   * @schema GetHostOutput#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema GetHostOutput#ProviderEndpoint
   */
  readonly providerEndpoint?: string;

  /**
   * @schema GetHostOutput#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

}

/**
 * @schema ListConnectionsInput
 */
export interface ListConnectionsInput {
  /**
   * @schema ListConnectionsInput#ProviderTypeFilter
   */
  readonly providerTypeFilter?: string;

  /**
   * @schema ListConnectionsInput#HostArnFilter
   */
  readonly hostArnFilter?: string;

  /**
   * @schema ListConnectionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListConnectionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListConnectionsOutput
 */
export interface ListConnectionsOutput {
  /**
   * @schema ListConnectionsOutput#Connections
   */
  readonly connections?: Connection[];

  /**
   * @schema ListConnectionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHostsInput
 */
export interface ListHostsInput {
  /**
   * @schema ListHostsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListHostsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHostsOutput
 */
export interface ListHostsOutput {
  /**
   * @schema ListHostsOutput#Hosts
   */
  readonly hosts?: Host[];

  /**
   * @schema ListHostsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceOutput
 */
export interface TagResourceOutput {
}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema UpdateHostInput
 */
export interface UpdateHostInput {
  /**
   * @schema UpdateHostInput#HostArn
   */
  readonly hostArn: string;

  /**
   * @schema UpdateHostInput#ProviderEndpoint
   */
  readonly providerEndpoint?: string;

  /**
   * @schema UpdateHostInput#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

}

/**
 * @schema UpdateHostOutput
 */
export interface UpdateHostOutput {
}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema VpcConfiguration
 */
export interface VpcConfiguration {
  /**
   * @schema VpcConfiguration#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema VpcConfiguration#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema VpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema VpcConfiguration#TlsCertificate
   */
  readonly tlsCertificate?: string;

}

/**
 * @schema Connection
 */
export interface Connection {
  /**
   * @schema Connection#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema Connection#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema Connection#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema Connection#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema Connection#ConnectionStatus
   */
  readonly connectionStatus?: string;

  /**
   * @schema Connection#HostArn
   */
  readonly hostArn?: string;

}

/**
 * @schema Host
 */
export interface Host {
  /**
   * @schema Host#Name
   */
  readonly name?: string;

  /**
   * @schema Host#HostArn
   */
  readonly hostArn?: string;

  /**
   * @schema Host#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema Host#ProviderEndpoint
   */
  readonly providerEndpoint?: string;

  /**
   * @schema Host#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

  /**
   * @schema Host#Status
   */
  readonly status?: string;

  /**
   * @schema Host#StatusMessage
   */
  readonly statusMessage?: string;

}
