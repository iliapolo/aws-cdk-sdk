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
  readonly connectionName?: string;

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
 * Converts an object of type 'CodeStarconnectionsCreateConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsCreateConnectionInput(obj: CodeStarconnectionsCreateConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProviderType': obj.providerType,
    'ConnectionName': obj.connectionName,
    'Tags': obj.tags?.map(y => toJson_CodeStarconnectionsTag(y)),
    'HostArn': obj.hostArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsCreateConnectionOutput
 */
export interface CodeStarconnectionsCreateConnectionOutput {
  /**
   * @schema CodeStarconnectionsCreateConnectionOutput#ConnectionArn
   */
  readonly connectionArn?: string;

  /**
   * @schema CodeStarconnectionsCreateConnectionOutput#Tags
   */
  readonly tags?: CodeStarconnectionsTag[];

}

/**
 * Converts an object of type 'CodeStarconnectionsCreateConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsCreateConnectionOutput(obj: CodeStarconnectionsCreateConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
    'Tags': obj.tags?.map(y => toJson_CodeStarconnectionsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsCreateHostInput
 */
export interface CodeStarconnectionsCreateHostInput {
  /**
   * @schema CodeStarconnectionsCreateHostInput#Name
   */
  readonly name?: string;

  /**
   * @schema CodeStarconnectionsCreateHostInput#ProviderType
   */
  readonly providerType?: string;

  /**
   * @schema CodeStarconnectionsCreateHostInput#ProviderEndpoint
   */
  readonly providerEndpoint?: string;

  /**
   * @schema CodeStarconnectionsCreateHostInput#VpcConfiguration
   */
  readonly vpcConfiguration?: CodeStarconnectionsVpcConfiguration;

  /**
   * @schema CodeStarconnectionsCreateHostInput#Tags
   */
  readonly tags?: CodeStarconnectionsTag[];

}

/**
 * Converts an object of type 'CodeStarconnectionsCreateHostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsCreateHostInput(obj: CodeStarconnectionsCreateHostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ProviderType': obj.providerType,
    'ProviderEndpoint': obj.providerEndpoint,
    'VpcConfiguration': toJson_CodeStarconnectionsVpcConfiguration(obj.vpcConfiguration),
    'Tags': obj.tags?.map(y => toJson_CodeStarconnectionsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsCreateHostOutput
 */
export interface CodeStarconnectionsCreateHostOutput {
  /**
   * @schema CodeStarconnectionsCreateHostOutput#HostArn
   */
  readonly hostArn?: string;

  /**
   * @schema CodeStarconnectionsCreateHostOutput#Tags
   */
  readonly tags?: CodeStarconnectionsTag[];

}

/**
 * Converts an object of type 'CodeStarconnectionsCreateHostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsCreateHostOutput(obj: CodeStarconnectionsCreateHostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostArn': obj.hostArn,
    'Tags': obj.tags?.map(y => toJson_CodeStarconnectionsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsDeleteConnectionInput
 */
export interface CodeStarconnectionsDeleteConnectionInput {
  /**
   * @schema CodeStarconnectionsDeleteConnectionInput#ConnectionArn
   */
  readonly connectionArn?: string;

}

/**
 * Converts an object of type 'CodeStarconnectionsDeleteConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsDeleteConnectionInput(obj: CodeStarconnectionsDeleteConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsDeleteConnectionOutput
 */
export interface CodeStarconnectionsDeleteConnectionOutput {
}

/**
 * Converts an object of type 'CodeStarconnectionsDeleteConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsDeleteConnectionOutput(obj: CodeStarconnectionsDeleteConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsDeleteHostInput
 */
export interface CodeStarconnectionsDeleteHostInput {
  /**
   * @schema CodeStarconnectionsDeleteHostInput#HostArn
   */
  readonly hostArn?: string;

}

/**
 * Converts an object of type 'CodeStarconnectionsDeleteHostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsDeleteHostInput(obj: CodeStarconnectionsDeleteHostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostArn': obj.hostArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsDeleteHostOutput
 */
export interface CodeStarconnectionsDeleteHostOutput {
}

/**
 * Converts an object of type 'CodeStarconnectionsDeleteHostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsDeleteHostOutput(obj: CodeStarconnectionsDeleteHostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsGetConnectionInput
 */
export interface CodeStarconnectionsGetConnectionInput {
  /**
   * @schema CodeStarconnectionsGetConnectionInput#ConnectionArn
   */
  readonly connectionArn?: string;

}

/**
 * Converts an object of type 'CodeStarconnectionsGetConnectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsGetConnectionInput(obj: CodeStarconnectionsGetConnectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionArn': obj.connectionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsGetConnectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsGetConnectionOutput(obj: CodeStarconnectionsGetConnectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connection': toJson_CodeStarconnectionsConnection(obj.connection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsGetHostInput
 */
export interface CodeStarconnectionsGetHostInput {
  /**
   * @schema CodeStarconnectionsGetHostInput#HostArn
   */
  readonly hostArn?: string;

}

/**
 * Converts an object of type 'CodeStarconnectionsGetHostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsGetHostInput(obj: CodeStarconnectionsGetHostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostArn': obj.hostArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsGetHostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsGetHostOutput(obj: CodeStarconnectionsGetHostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Status': obj.status,
    'ProviderType': obj.providerType,
    'ProviderEndpoint': obj.providerEndpoint,
    'VpcConfiguration': toJson_CodeStarconnectionsVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsListConnectionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsListConnectionsInput(obj: CodeStarconnectionsListConnectionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProviderTypeFilter': obj.providerTypeFilter,
    'HostArnFilter': obj.hostArnFilter,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsListConnectionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsListConnectionsOutput(obj: CodeStarconnectionsListConnectionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Connections': obj.connections?.map(y => toJson_CodeStarconnectionsConnection(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsListHostsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsListHostsInput(obj: CodeStarconnectionsListHostsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsListHostsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsListHostsOutput(obj: CodeStarconnectionsListHostsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Hosts': obj.hosts?.map(y => toJson_CodeStarconnectionsHost(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsListTagsForResourceInput
 */
export interface CodeStarconnectionsListTagsForResourceInput {
  /**
   * @schema CodeStarconnectionsListTagsForResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'CodeStarconnectionsListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsListTagsForResourceInput(obj: CodeStarconnectionsListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsListTagsForResourceOutput(obj: CodeStarconnectionsListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_CodeStarconnectionsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsTagResourceInput
 */
export interface CodeStarconnectionsTagResourceInput {
  /**
   * @schema CodeStarconnectionsTagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CodeStarconnectionsTagResourceInput#Tags
   */
  readonly tags?: CodeStarconnectionsTag[];

}

/**
 * Converts an object of type 'CodeStarconnectionsTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsTagResourceInput(obj: CodeStarconnectionsTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_CodeStarconnectionsTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsTagResourceOutput
 */
export interface CodeStarconnectionsTagResourceOutput {
}

/**
 * Converts an object of type 'CodeStarconnectionsTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsTagResourceOutput(obj: CodeStarconnectionsTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsUntagResourceInput
 */
export interface CodeStarconnectionsUntagResourceInput {
  /**
   * @schema CodeStarconnectionsUntagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CodeStarconnectionsUntagResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'CodeStarconnectionsUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsUntagResourceInput(obj: CodeStarconnectionsUntagResourceInput | undefined): Record<string, any> | undefined {
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
 * @schema CodeStarconnectionsUntagResourceOutput
 */
export interface CodeStarconnectionsUntagResourceOutput {
}

/**
 * Converts an object of type 'CodeStarconnectionsUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsUntagResourceOutput(obj: CodeStarconnectionsUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsUpdateHostInput
 */
export interface CodeStarconnectionsUpdateHostInput {
  /**
   * @schema CodeStarconnectionsUpdateHostInput#HostArn
   */
  readonly hostArn?: string;

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
 * Converts an object of type 'CodeStarconnectionsUpdateHostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsUpdateHostInput(obj: CodeStarconnectionsUpdateHostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostArn': obj.hostArn,
    'ProviderEndpoint': obj.providerEndpoint,
    'VpcConfiguration': toJson_CodeStarconnectionsVpcConfiguration(obj.vpcConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsUpdateHostOutput
 */
export interface CodeStarconnectionsUpdateHostOutput {
}

/**
 * Converts an object of type 'CodeStarconnectionsUpdateHostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsUpdateHostOutput(obj: CodeStarconnectionsUpdateHostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsTag
 */
export interface CodeStarconnectionsTag {
  /**
   * @schema CodeStarconnectionsTag#Key
   */
  readonly key?: string;

  /**
   * @schema CodeStarconnectionsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CodeStarconnectionsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsTag(obj: CodeStarconnectionsTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarconnectionsVpcConfiguration
 */
export interface CodeStarconnectionsVpcConfiguration {
  /**
   * @schema CodeStarconnectionsVpcConfiguration#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CodeStarconnectionsVpcConfiguration#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema CodeStarconnectionsVpcConfiguration#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CodeStarconnectionsVpcConfiguration#TlsCertificate
   */
  readonly tlsCertificate?: string;

}

/**
 * Converts an object of type 'CodeStarconnectionsVpcConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsVpcConfiguration(obj: CodeStarconnectionsVpcConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcId': obj.vpcId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'TlsCertificate': obj.tlsCertificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CodeStarconnectionsConnection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsConnection(obj: CodeStarconnectionsConnection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionName': obj.connectionName,
    'ConnectionArn': obj.connectionArn,
    'ProviderType': obj.providerType,
    'OwnerAccountId': obj.ownerAccountId,
    'ConnectionStatus': obj.connectionStatus,
    'HostArn': obj.hostArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'CodeStarconnectionsHost' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarconnectionsHost(obj: CodeStarconnectionsHost | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'HostArn': obj.hostArn,
    'ProviderType': obj.providerType,
    'ProviderEndpoint': obj.providerEndpoint,
    'VpcConfiguration': toJson_CodeStarconnectionsVpcConfiguration(obj.vpcConfiguration),
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
