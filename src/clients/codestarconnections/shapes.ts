/**
 * @schema CodeStarconnectionsCreateConnectionInput
 */
export interface CodeStarconnectionsCreateConnectionInput {
  /**
   * @schema CodeStarconnectionsCreateConnectionInput#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeStarconnectionsCreateConnectionInput#ConnectionName
   */
  readonly connectionName: string;

  /**
   * @schema CodeStarconnectionsCreateConnectionInput#Tags
   */
  readonly tags?: CodeStarconnectionsTag[];

  /**
   * @schema CodeStarconnectionsCreateConnectionInput#HostArn
   */
  readonly hostArn?: string;

}

/**
 * @schema CodeStarconnectionsCreateConnectionOutput
 */
export interface CodeStarconnectionsCreateConnectionOutput {
  /**
   * @schema CodeStarconnectionsCreateConnectionOutput#ConnectionArn
   */
  readonly connectionArn: string;

  /**
   * @schema CodeStarconnectionsCreateConnectionOutput#Tags
   */
  readonly tags?: CodeStarconnectionsTag[];

}

/**
 * @schema CodeStarconnectionsCreateHostInput
 */
export interface CodeStarconnectionsCreateHostInput {
  /**
   * @schema CodeStarconnectionsCreateHostInput#Name
   */
  readonly name: string;

  /**
   * @schema CodeStarconnectionsCreateHostInput#ProviderType
   */
  readonly providerType: string;

  /**
   * @schema CodeStarconnectionsCreateHostInput#ProviderEndpoint
   */
  readonly providerEndpoint: string;

  /**
   * @schema CodeStarconnectionsCreateHostInput#VpcConfiguration
   */
  readonly vpcConfiguration?: CodeStarconnectionsVpcConfiguration;

}

/**
 * @schema CodeStarconnectionsCreateHostOutput
 */
export interface CodeStarconnectionsCreateHostOutput {
  /**
   * @schema CodeStarconnectionsCreateHostOutput#HostArn
   */
  readonly hostArn?: string;

}

/**
 * @schema CodeStarconnectionsDeleteConnectionInput
 */
export interface CodeStarconnectionsDeleteConnectionInput {
  /**
   * @schema CodeStarconnectionsDeleteConnectionInput#ConnectionArn
   */
  readonly connectionArn: string;

}

/**
 * @schema CodeStarconnectionsDeleteConnectionOutput
 */
export interface CodeStarconnectionsDeleteConnectionOutput {
}

/**
 * @schema CodeStarconnectionsDeleteHostInput
 */
export interface CodeStarconnectionsDeleteHostInput {
  /**
   * @schema CodeStarconnectionsDeleteHostInput#HostArn
   */
  readonly hostArn: string;

}

/**
 * @schema CodeStarconnectionsDeleteHostOutput
 */
export interface CodeStarconnectionsDeleteHostOutput {
}

/**
 * @schema CodeStarconnectionsGetConnectionInput
 */
export interface CodeStarconnectionsGetConnectionInput {
  /**
   * @schema CodeStarconnectionsGetConnectionInput#ConnectionArn
   */
  readonly connectionArn: string;

}

/**
 * @schema CodeStarconnectionsGetConnectionOutput
 */
export interface CodeStarconnectionsGetConnectionOutput {
  /**
   * @schema CodeStarconnectionsGetConnectionOutput#Connection
   */
  readonly connection?: CodeStarconnectionsConnection;

}

/**
 * @schema CodeStarconnectionsGetHostInput
 */
export interface CodeStarconnectionsGetHostInput {
  /**
   * @schema CodeStarconnectionsGetHostInput#HostArn
   */
  readonly hostArn: string;

}

/**
 * @schema CodeStarconnectionsGetHostOutput
 */
export interface CodeStarconnectionsGetHostOutput {
  /**
   * @schema CodeStarconnectionsGetHostOutput#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarconnectionsGetHostOutput#Status
   */
  readonly status?: string;

  /**
   * @schema CodeStarconnectionsGetHostOutput#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeStarconnectionsGetHostOutput#ProviderEndpoint
   */
  readonly providerEndpoint?: string;

  /**
   * @schema CodeStarconnectionsGetHostOutput#VpcConfiguration
   */
  readonly vpcConfiguration?: CodeStarconnectionsVpcConfiguration;

}

/**
 * @schema CodeStarconnectionsListConnectionsInput
 */
export interface CodeStarconnectionsListConnectionsInput {
  /**
   * @schema CodeStarconnectionsListConnectionsInput#ProviderTypeFilter
   */
  readonly providerTypeFilter?: string;

  /**
   * @schema CodeStarconnectionsListConnectionsInput#HostArnFilter
   */
  readonly hostArnFilter?: string;

  /**
   * @schema CodeStarconnectionsListConnectionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeStarconnectionsListConnectionsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeStarconnectionsListConnectionsOutput
 */
export interface CodeStarconnectionsListConnectionsOutput {
  /**
   * @schema CodeStarconnectionsListConnectionsOutput#Connections
   */
  readonly connections?: CodeStarconnectionsConnection[];

  /**
   * @schema CodeStarconnectionsListConnectionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeStarconnectionsListHostsInput
 */
export interface CodeStarconnectionsListHostsInput {
  /**
   * @schema CodeStarconnectionsListHostsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeStarconnectionsListHostsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeStarconnectionsListHostsOutput
 */
export interface CodeStarconnectionsListHostsOutput {
  /**
   * @schema CodeStarconnectionsListHostsOutput#Hosts
   */
  readonly hosts?: CodeStarconnectionsHost[];

  /**
   * @schema CodeStarconnectionsListHostsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeStarconnectionsListTagsForResourceInput
 */
export interface CodeStarconnectionsListTagsForResourceInput {
  /**
   * @schema CodeStarconnectionsListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CodeStarconnectionsListTagsForResourceOutput
 */
export interface CodeStarconnectionsListTagsForResourceOutput {
  /**
   * @schema CodeStarconnectionsListTagsForResourceOutput#Tags
   */
  readonly tags?: CodeStarconnectionsTag[];

}

/**
 * @schema CodeStarconnectionsTagResourceInput
 */
export interface CodeStarconnectionsTagResourceInput {
  /**
   * @schema CodeStarconnectionsTagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeStarconnectionsTagResourceInput#Tags
   */
  readonly tags: CodeStarconnectionsTag[];

}

/**
 * @schema CodeStarconnectionsTagResourceOutput
 */
export interface CodeStarconnectionsTagResourceOutput {
}

/**
 * @schema CodeStarconnectionsUntagResourceInput
 */
export interface CodeStarconnectionsUntagResourceInput {
  /**
   * @schema CodeStarconnectionsUntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeStarconnectionsUntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CodeStarconnectionsUntagResourceOutput
 */
export interface CodeStarconnectionsUntagResourceOutput {
}

/**
 * @schema CodeStarconnectionsUpdateHostInput
 */
export interface CodeStarconnectionsUpdateHostInput {
  /**
   * @schema CodeStarconnectionsUpdateHostInput#HostArn
   */
  readonly hostArn: string;

  /**
   * @schema CodeStarconnectionsUpdateHostInput#ProviderEndpoint
   */
  readonly providerEndpoint?: string;

  /**
   * @schema CodeStarconnectionsUpdateHostInput#VpcConfiguration
   */
  readonly vpcConfiguration?: CodeStarconnectionsVpcConfiguration;

}

/**
 * @schema CodeStarconnectionsUpdateHostOutput
 */
export interface CodeStarconnectionsUpdateHostOutput {
}

/**
 * @schema CodeStarconnectionsTag
 */
export interface CodeStarconnectionsTag {
  /**
   * @schema CodeStarconnectionsTag#Key
   */
  readonly key: string;

  /**
   * @schema CodeStarconnectionsTag#Value
   */
  readonly value: string;

}

/**
 * @schema CodeStarconnectionsVpcConfiguration
 */
export interface CodeStarconnectionsVpcConfiguration {
  /**
   * @schema CodeStarconnectionsVpcConfiguration#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CodeStarconnectionsVpcConfiguration#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CodeStarconnectionsVpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema CodeStarconnectionsVpcConfiguration#TlsCertificate
   */
  readonly tlsCertificate?: string;

}

/**
 * @schema CodeStarconnectionsConnection
 */
export interface CodeStarconnectionsConnection {
  /**
   * @schema CodeStarconnectionsConnection#ConnectionName
   */
  readonly connectionName?: string;

  /**
   * @schema CodeStarconnectionsConnection#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema CodeStarconnectionsConnection#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeStarconnectionsConnection#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema CodeStarconnectionsConnection#ConnectionStatus
   */
  readonly connectionStatus?: string;

  /**
   * @schema CodeStarconnectionsConnection#HostArn
   */
  readonly hostArn?: string;

}

/**
 * @schema CodeStarconnectionsHost
 */
export interface CodeStarconnectionsHost {
  /**
   * @schema CodeStarconnectionsHost#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarconnectionsHost#HostArn
   */
  readonly hostArn?: string;

  /**
   * @schema CodeStarconnectionsHost#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeStarconnectionsHost#ProviderEndpoint
   */
  readonly providerEndpoint?: string;

  /**
   * @schema CodeStarconnectionsHost#VpcConfiguration
   */
  readonly vpcConfiguration?: CodeStarconnectionsVpcConfiguration;

  /**
   * @schema CodeStarconnectionsHost#Status
   */
  readonly status?: string;

  /**
   * @schema CodeStarconnectionsHost#StatusMessage
   */
  readonly statusMessage?: string;

}
