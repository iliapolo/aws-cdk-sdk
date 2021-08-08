/**
 * @schema KafkaBatchAssociateScramSecretRequest
 */
export interface KafkaBatchAssociateScramSecretRequest {
  /**
   * @schema KafkaBatchAssociateScramSecretRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaBatchAssociateScramSecretRequest#SecretArnList
   */
  readonly secretArnList?: string[];

}

/**
 * Converts an object of type 'KafkaBatchAssociateScramSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBatchAssociateScramSecretRequest(obj: KafkaBatchAssociateScramSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'SecretArnList': obj.secretArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBatchAssociateScramSecretResponse
 */
export interface KafkaBatchAssociateScramSecretResponse {
  /**
   * @schema KafkaBatchAssociateScramSecretResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaBatchAssociateScramSecretResponse#UnprocessedScramSecrets
   */
  readonly unprocessedScramSecrets?: KafkaUnprocessedScramSecret[];

}

/**
 * Converts an object of type 'KafkaBatchAssociateScramSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBatchAssociateScramSecretResponse(obj: KafkaBatchAssociateScramSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'UnprocessedScramSecrets': obj.unprocessedScramSecrets?.map(y => toJson_KafkaUnprocessedScramSecret(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaCreateClusterRequest
 */
export interface KafkaCreateClusterRequest {
  /**
   * @schema KafkaCreateClusterRequest#BrokerNodeGroupInfo
   */
  readonly brokerNodeGroupInfo?: KafkaBrokerNodeGroupInfo;

  /**
   * @schema KafkaCreateClusterRequest#ClientAuthentication
   */
  readonly clientAuthentication?: KafkaClientAuthentication;

  /**
   * @schema KafkaCreateClusterRequest#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema KafkaCreateClusterRequest#ConfigurationInfo
   */
  readonly configurationInfo?: KafkaConfigurationInfo;

  /**
   * @schema KafkaCreateClusterRequest#EncryptionInfo
   */
  readonly encryptionInfo?: KafkaEncryptionInfo;

  /**
   * @schema KafkaCreateClusterRequest#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaCreateClusterRequest#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoringInfo;

  /**
   * @schema KafkaCreateClusterRequest#KafkaVersion
   */
  readonly kafkaVersion?: string;

  /**
   * @schema KafkaCreateClusterRequest#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

  /**
   * @schema KafkaCreateClusterRequest#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes?: number;

  /**
   * @schema KafkaCreateClusterRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KafkaCreateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaCreateClusterRequest(obj: KafkaCreateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerNodeGroupInfo': toJson_KafkaBrokerNodeGroupInfo(obj.brokerNodeGroupInfo),
    'ClientAuthentication': toJson_KafkaClientAuthentication(obj.clientAuthentication),
    'ClusterName': obj.clusterName,
    'ConfigurationInfo': toJson_KafkaConfigurationInfo(obj.configurationInfo),
    'EncryptionInfo': toJson_KafkaEncryptionInfo(obj.encryptionInfo),
    'EnhancedMonitoring': obj.enhancedMonitoring,
    'OpenMonitoring': toJson_KafkaOpenMonitoringInfo(obj.openMonitoring),
    'KafkaVersion': obj.kafkaVersion,
    'LoggingInfo': toJson_KafkaLoggingInfo(obj.loggingInfo),
    'NumberOfBrokerNodes': obj.numberOfBrokerNodes,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaCreateClusterResponse
 */
export interface KafkaCreateClusterResponse {
  /**
   * @schema KafkaCreateClusterResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaCreateClusterResponse#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema KafkaCreateClusterResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'KafkaCreateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaCreateClusterResponse(obj: KafkaCreateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterName': obj.clusterName,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaCreateConfigurationRequest
 */
export interface KafkaCreateConfigurationRequest {
  /**
   * @schema KafkaCreateConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaCreateConfigurationRequest#KafkaVersions
   */
  readonly kafkaVersions?: string[];

  /**
   * @schema KafkaCreateConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema KafkaCreateConfigurationRequest#ServerProperties
   */
  readonly serverProperties?: any;

}

/**
 * Converts an object of type 'KafkaCreateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaCreateConfigurationRequest(obj: KafkaCreateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'KafkaVersions': obj.kafkaVersions?.map(y => y),
    'Name': obj.name,
    'ServerProperties': obj.serverProperties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaCreateConfigurationResponse
 */
export interface KafkaCreateConfigurationResponse {
  /**
   * @schema KafkaCreateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaCreateConfigurationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaCreateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: KafkaConfigurationRevision;

  /**
   * @schema KafkaCreateConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema KafkaCreateConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'KafkaCreateConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaCreateConfigurationResponse(obj: KafkaCreateConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'LatestRevision': toJson_KafkaConfigurationRevision(obj.latestRevision),
    'Name': obj.name,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDeleteClusterRequest
 */
export interface KafkaDeleteClusterRequest {
  /**
   * @schema KafkaDeleteClusterRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaDeleteClusterRequest#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * Converts an object of type 'KafkaDeleteClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDeleteClusterRequest(obj: KafkaDeleteClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'CurrentVersion': obj.currentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDeleteClusterResponse
 */
export interface KafkaDeleteClusterResponse {
  /**
   * @schema KafkaDeleteClusterResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaDeleteClusterResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'KafkaDeleteClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDeleteClusterResponse(obj: KafkaDeleteClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDeleteConfigurationRequest
 */
export interface KafkaDeleteConfigurationRequest {
  /**
   * @schema KafkaDeleteConfigurationRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'KafkaDeleteConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDeleteConfigurationRequest(obj: KafkaDeleteConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDeleteConfigurationResponse
 */
export interface KafkaDeleteConfigurationResponse {
  /**
   * @schema KafkaDeleteConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaDeleteConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'KafkaDeleteConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDeleteConfigurationResponse(obj: KafkaDeleteConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeClusterRequest
 */
export interface KafkaDescribeClusterRequest {
  /**
   * @schema KafkaDescribeClusterRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * Converts an object of type 'KafkaDescribeClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeClusterRequest(obj: KafkaDescribeClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeClusterResponse
 */
export interface KafkaDescribeClusterResponse {
  /**
   * @schema KafkaDescribeClusterResponse#ClusterInfo
   */
  readonly clusterInfo?: KafkaClusterInfo;

}

/**
 * Converts an object of type 'KafkaDescribeClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeClusterResponse(obj: KafkaDescribeClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterInfo': toJson_KafkaClusterInfo(obj.clusterInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeClusterOperationRequest
 */
export interface KafkaDescribeClusterOperationRequest {
  /**
   * @schema KafkaDescribeClusterOperationRequest#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaDescribeClusterOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeClusterOperationRequest(obj: KafkaDescribeClusterOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeClusterOperationResponse
 */
export interface KafkaDescribeClusterOperationResponse {
  /**
   * @schema KafkaDescribeClusterOperationResponse#ClusterOperationInfo
   */
  readonly clusterOperationInfo?: KafkaClusterOperationInfo;

}

/**
 * Converts an object of type 'KafkaDescribeClusterOperationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeClusterOperationResponse(obj: KafkaDescribeClusterOperationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterOperationInfo': toJson_KafkaClusterOperationInfo(obj.clusterOperationInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeConfigurationRequest
 */
export interface KafkaDescribeConfigurationRequest {
  /**
   * @schema KafkaDescribeConfigurationRequest#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'KafkaDescribeConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeConfigurationRequest(obj: KafkaDescribeConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeConfigurationResponse
 */
export interface KafkaDescribeConfigurationResponse {
  /**
   * @schema KafkaDescribeConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#KafkaVersions
   */
  readonly kafkaVersions?: string[];

  /**
   * @schema KafkaDescribeConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: KafkaConfigurationRevision;

  /**
   * @schema KafkaDescribeConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema KafkaDescribeConfigurationResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'KafkaDescribeConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeConfigurationResponse(obj: KafkaDescribeConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'Description': obj.description,
    'KafkaVersions': obj.kafkaVersions?.map(y => y),
    'LatestRevision': toJson_KafkaConfigurationRevision(obj.latestRevision),
    'Name': obj.name,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeConfigurationRevisionRequest
 */
export interface KafkaDescribeConfigurationRevisionRequest {
  /**
   * @schema KafkaDescribeConfigurationRevisionRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionRequest#Revision
   */
  readonly revision?: number;

}

/**
 * Converts an object of type 'KafkaDescribeConfigurationRevisionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeConfigurationRevisionRequest(obj: KafkaDescribeConfigurationRevisionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Revision': obj.revision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaDescribeConfigurationRevisionResponse
 */
export interface KafkaDescribeConfigurationRevisionResponse {
  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#Revision
   */
  readonly revision?: number;

  /**
   * @schema KafkaDescribeConfigurationRevisionResponse#ServerProperties
   */
  readonly serverProperties?: any;

}

/**
 * Converts an object of type 'KafkaDescribeConfigurationRevisionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaDescribeConfigurationRevisionResponse(obj: KafkaDescribeConfigurationRevisionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'Description': obj.description,
    'Revision': obj.revision,
    'ServerProperties': obj.serverProperties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBatchDisassociateScramSecretRequest
 */
export interface KafkaBatchDisassociateScramSecretRequest {
  /**
   * @schema KafkaBatchDisassociateScramSecretRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaBatchDisassociateScramSecretRequest#SecretArnList
   */
  readonly secretArnList?: string[];

}

/**
 * Converts an object of type 'KafkaBatchDisassociateScramSecretRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBatchDisassociateScramSecretRequest(obj: KafkaBatchDisassociateScramSecretRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'SecretArnList': obj.secretArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBatchDisassociateScramSecretResponse
 */
export interface KafkaBatchDisassociateScramSecretResponse {
  /**
   * @schema KafkaBatchDisassociateScramSecretResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaBatchDisassociateScramSecretResponse#UnprocessedScramSecrets
   */
  readonly unprocessedScramSecrets?: KafkaUnprocessedScramSecret[];

}

/**
 * Converts an object of type 'KafkaBatchDisassociateScramSecretResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBatchDisassociateScramSecretResponse(obj: KafkaBatchDisassociateScramSecretResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'UnprocessedScramSecrets': obj.unprocessedScramSecrets?.map(y => toJson_KafkaUnprocessedScramSecret(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaGetBootstrapBrokersRequest
 */
export interface KafkaGetBootstrapBrokersRequest {
  /**
   * @schema KafkaGetBootstrapBrokersRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * Converts an object of type 'KafkaGetBootstrapBrokersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaGetBootstrapBrokersRequest(obj: KafkaGetBootstrapBrokersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaGetBootstrapBrokersResponse
 */
export interface KafkaGetBootstrapBrokersResponse {
  /**
   * @schema KafkaGetBootstrapBrokersResponse#BootstrapBrokerString
   */
  readonly bootstrapBrokerString?: string;

  /**
   * @schema KafkaGetBootstrapBrokersResponse#BootstrapBrokerStringTls
   */
  readonly bootstrapBrokerStringTls?: string;

  /**
   * @schema KafkaGetBootstrapBrokersResponse#BootstrapBrokerStringSaslScram
   */
  readonly bootstrapBrokerStringSaslScram?: string;

  /**
   * @schema KafkaGetBootstrapBrokersResponse#BootstrapBrokerStringSaslIam
   */
  readonly bootstrapBrokerStringSaslIam?: string;

}

/**
 * Converts an object of type 'KafkaGetBootstrapBrokersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaGetBootstrapBrokersResponse(obj: KafkaGetBootstrapBrokersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BootstrapBrokerString': obj.bootstrapBrokerString,
    'BootstrapBrokerStringTls': obj.bootstrapBrokerStringTls,
    'BootstrapBrokerStringSaslScram': obj.bootstrapBrokerStringSaslScram,
    'BootstrapBrokerStringSaslIam': obj.bootstrapBrokerStringSaslIam,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaGetCompatibleKafkaVersionsRequest
 */
export interface KafkaGetCompatibleKafkaVersionsRequest {
  /**
   * @schema KafkaGetCompatibleKafkaVersionsRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * Converts an object of type 'KafkaGetCompatibleKafkaVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaGetCompatibleKafkaVersionsRequest(obj: KafkaGetCompatibleKafkaVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaGetCompatibleKafkaVersionsResponse
 */
export interface KafkaGetCompatibleKafkaVersionsResponse {
  /**
   * @schema KafkaGetCompatibleKafkaVersionsResponse#CompatibleKafkaVersions
   */
  readonly compatibleKafkaVersions?: KafkaCompatibleKafkaVersion[];

}

/**
 * Converts an object of type 'KafkaGetCompatibleKafkaVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaGetCompatibleKafkaVersionsResponse(obj: KafkaGetCompatibleKafkaVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompatibleKafkaVersions': obj.compatibleKafkaVersions?.map(y => toJson_KafkaCompatibleKafkaVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListClusterOperationsRequest
 */
export interface KafkaListClusterOperationsRequest {
  /**
   * @schema KafkaListClusterOperationsRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaListClusterOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListClusterOperationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListClusterOperationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListClusterOperationsRequest(obj: KafkaListClusterOperationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListClusterOperationsResponse
 */
export interface KafkaListClusterOperationsResponse {
  /**
   * @schema KafkaListClusterOperationsResponse#ClusterOperationInfoList
   */
  readonly clusterOperationInfoList?: KafkaClusterOperationInfo[];

  /**
   * @schema KafkaListClusterOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListClusterOperationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListClusterOperationsResponse(obj: KafkaListClusterOperationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterOperationInfoList': obj.clusterOperationInfoList?.map(y => toJson_KafkaClusterOperationInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListClustersRequest
 */
export interface KafkaListClustersRequest {
  /**
   * @schema KafkaListClustersRequest#ClusterNameFilter
   */
  readonly clusterNameFilter?: string;

  /**
   * @schema KafkaListClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListClustersRequest(obj: KafkaListClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterNameFilter': obj.clusterNameFilter,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListClustersResponse
 */
export interface KafkaListClustersResponse {
  /**
   * @schema KafkaListClustersResponse#ClusterInfoList
   */
  readonly clusterInfoList?: KafkaClusterInfo[];

  /**
   * @schema KafkaListClustersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListClustersResponse(obj: KafkaListClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterInfoList': obj.clusterInfoList?.map(y => toJson_KafkaClusterInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListConfigurationRevisionsRequest
 */
export interface KafkaListConfigurationRevisionsRequest {
  /**
   * @schema KafkaListConfigurationRevisionsRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaListConfigurationRevisionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListConfigurationRevisionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListConfigurationRevisionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListConfigurationRevisionsRequest(obj: KafkaListConfigurationRevisionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListConfigurationRevisionsResponse
 */
export interface KafkaListConfigurationRevisionsResponse {
  /**
   * @schema KafkaListConfigurationRevisionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KafkaListConfigurationRevisionsResponse#Revisions
   */
  readonly revisions?: KafkaConfigurationRevision[];

}

/**
 * Converts an object of type 'KafkaListConfigurationRevisionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListConfigurationRevisionsResponse(obj: KafkaListConfigurationRevisionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Revisions': obj.revisions?.map(y => toJson_KafkaConfigurationRevision(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListConfigurationsRequest
 */
export interface KafkaListConfigurationsRequest {
  /**
   * @schema KafkaListConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListConfigurationsRequest(obj: KafkaListConfigurationsRequest | undefined): Record<string, any> | undefined {
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
 * @schema KafkaListConfigurationsResponse
 */
export interface KafkaListConfigurationsResponse {
  /**
   * @schema KafkaListConfigurationsResponse#Configurations
   */
  readonly configurations?: KafkaConfiguration[];

  /**
   * @schema KafkaListConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListConfigurationsResponse(obj: KafkaListConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configurations': obj.configurations?.map(y => toJson_KafkaConfiguration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListKafkaVersionsRequest
 */
export interface KafkaListKafkaVersionsRequest {
  /**
   * @schema KafkaListKafkaVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListKafkaVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListKafkaVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListKafkaVersionsRequest(obj: KafkaListKafkaVersionsRequest | undefined): Record<string, any> | undefined {
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
 * @schema KafkaListKafkaVersionsResponse
 */
export interface KafkaListKafkaVersionsResponse {
  /**
   * @schema KafkaListKafkaVersionsResponse#KafkaVersions
   */
  readonly kafkaVersions?: KafkaKafkaVersion[];

  /**
   * @schema KafkaListKafkaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListKafkaVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListKafkaVersionsResponse(obj: KafkaListKafkaVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KafkaVersions': obj.kafkaVersions?.map(y => toJson_KafkaKafkaVersion(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListNodesRequest
 */
export interface KafkaListNodesRequest {
  /**
   * @schema KafkaListNodesRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaListNodesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListNodesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListNodesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListNodesRequest(obj: KafkaListNodesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListNodesResponse
 */
export interface KafkaListNodesResponse {
  /**
   * @schema KafkaListNodesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KafkaListNodesResponse#NodeInfoList
   */
  readonly nodeInfoList?: KafkaNodeInfo[];

}

/**
 * Converts an object of type 'KafkaListNodesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListNodesResponse(obj: KafkaListNodesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'NodeInfoList': obj.nodeInfoList?.map(y => toJson_KafkaNodeInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListScramSecretsRequest
 */
export interface KafkaListScramSecretsRequest {
  /**
   * @schema KafkaListScramSecretsRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaListScramSecretsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema KafkaListScramSecretsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'KafkaListScramSecretsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListScramSecretsRequest(obj: KafkaListScramSecretsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListScramSecretsResponse
 */
export interface KafkaListScramSecretsResponse {
  /**
   * @schema KafkaListScramSecretsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema KafkaListScramSecretsResponse#SecretArnList
   */
  readonly secretArnList?: string[];

}

/**
 * Converts an object of type 'KafkaListScramSecretsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListScramSecretsResponse(obj: KafkaListScramSecretsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'SecretArnList': obj.secretArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListTagsForResourceRequest
 */
export interface KafkaListTagsForResourceRequest {
  /**
   * @schema KafkaListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'KafkaListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListTagsForResourceRequest(obj: KafkaListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaListTagsForResourceResponse
 */
export interface KafkaListTagsForResourceResponse {
  /**
   * @schema KafkaListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KafkaListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaListTagsForResourceResponse(obj: KafkaListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaRebootBrokerRequest
 */
export interface KafkaRebootBrokerRequest {
  /**
   * @schema KafkaRebootBrokerRequest#BrokerIds
   */
  readonly brokerIds?: string[];

  /**
   * @schema KafkaRebootBrokerRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * Converts an object of type 'KafkaRebootBrokerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaRebootBrokerRequest(obj: KafkaRebootBrokerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerIds': obj.brokerIds?.map(y => y),
    'ClusterArn': obj.clusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaRebootBrokerResponse
 */
export interface KafkaRebootBrokerResponse {
  /**
   * @schema KafkaRebootBrokerResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaRebootBrokerResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaRebootBrokerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaRebootBrokerResponse(obj: KafkaRebootBrokerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaTagResourceRequest
 */
export interface KafkaTagResourceRequest {
  /**
   * @schema KafkaTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema KafkaTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'KafkaTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaTagResourceRequest(obj: KafkaTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema KafkaUntagResourceRequest
 */
export interface KafkaUntagResourceRequest {
  /**
   * @schema KafkaUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema KafkaUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'KafkaUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUntagResourceRequest(obj: KafkaUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema KafkaUpdateBrokerCountRequest
 */
export interface KafkaUpdateBrokerCountRequest {
  /**
   * @schema KafkaUpdateBrokerCountRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerCountRequest#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KafkaUpdateBrokerCountRequest#TargetNumberOfBrokerNodes
   */
  readonly targetNumberOfBrokerNodes?: number;

}

/**
 * Converts an object of type 'KafkaUpdateBrokerCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateBrokerCountRequest(obj: KafkaUpdateBrokerCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'CurrentVersion': obj.currentVersion,
    'TargetNumberOfBrokerNodes': obj.targetNumberOfBrokerNodes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateBrokerCountResponse
 */
export interface KafkaUpdateBrokerCountResponse {
  /**
   * @schema KafkaUpdateBrokerCountResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerCountResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaUpdateBrokerCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateBrokerCountResponse(obj: KafkaUpdateBrokerCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateBrokerTypeRequest
 */
export interface KafkaUpdateBrokerTypeRequest {
  /**
   * @schema KafkaUpdateBrokerTypeRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerTypeRequest#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KafkaUpdateBrokerTypeRequest#TargetInstanceType
   */
  readonly targetInstanceType?: string;

}

/**
 * Converts an object of type 'KafkaUpdateBrokerTypeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateBrokerTypeRequest(obj: KafkaUpdateBrokerTypeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'CurrentVersion': obj.currentVersion,
    'TargetInstanceType': obj.targetInstanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateBrokerTypeResponse
 */
export interface KafkaUpdateBrokerTypeResponse {
  /**
   * @schema KafkaUpdateBrokerTypeResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerTypeResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaUpdateBrokerTypeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateBrokerTypeResponse(obj: KafkaUpdateBrokerTypeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateBrokerStorageRequest
 */
export interface KafkaUpdateBrokerStorageRequest {
  /**
   * @schema KafkaUpdateBrokerStorageRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerStorageRequest#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KafkaUpdateBrokerStorageRequest#TargetBrokerEBSVolumeInfo
   */
  readonly targetBrokerEbsVolumeInfo?: KafkaBrokerEbsVolumeInfo[];

}

/**
 * Converts an object of type 'KafkaUpdateBrokerStorageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateBrokerStorageRequest(obj: KafkaUpdateBrokerStorageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'CurrentVersion': obj.currentVersion,
    'TargetBrokerEBSVolumeInfo': obj.targetBrokerEbsVolumeInfo?.map(y => toJson_KafkaBrokerEbsVolumeInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateBrokerStorageResponse
 */
export interface KafkaUpdateBrokerStorageResponse {
  /**
   * @schema KafkaUpdateBrokerStorageResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateBrokerStorageResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaUpdateBrokerStorageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateBrokerStorageResponse(obj: KafkaUpdateBrokerStorageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateConfigurationRequest
 */
export interface KafkaUpdateConfigurationRequest {
  /**
   * @schema KafkaUpdateConfigurationRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaUpdateConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaUpdateConfigurationRequest#ServerProperties
   */
  readonly serverProperties?: any;

}

/**
 * Converts an object of type 'KafkaUpdateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateConfigurationRequest(obj: KafkaUpdateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Description': obj.description,
    'ServerProperties': obj.serverProperties,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateConfigurationResponse
 */
export interface KafkaUpdateConfigurationResponse {
  /**
   * @schema KafkaUpdateConfigurationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaUpdateConfigurationResponse#LatestRevision
   */
  readonly latestRevision?: KafkaConfigurationRevision;

}

/**
 * Converts an object of type 'KafkaUpdateConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateConfigurationResponse(obj: KafkaUpdateConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'LatestRevision': toJson_KafkaConfigurationRevision(obj.latestRevision),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateClusterConfigurationRequest
 */
export interface KafkaUpdateClusterConfigurationRequest {
  /**
   * @schema KafkaUpdateClusterConfigurationRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateClusterConfigurationRequest#ConfigurationInfo
   */
  readonly configurationInfo?: KafkaConfigurationInfo;

  /**
   * @schema KafkaUpdateClusterConfigurationRequest#CurrentVersion
   */
  readonly currentVersion?: string;

}

/**
 * Converts an object of type 'KafkaUpdateClusterConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateClusterConfigurationRequest(obj: KafkaUpdateClusterConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ConfigurationInfo': toJson_KafkaConfigurationInfo(obj.configurationInfo),
    'CurrentVersion': obj.currentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateClusterConfigurationResponse
 */
export interface KafkaUpdateClusterConfigurationResponse {
  /**
   * @schema KafkaUpdateClusterConfigurationResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateClusterConfigurationResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaUpdateClusterConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateClusterConfigurationResponse(obj: KafkaUpdateClusterConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateClusterKafkaVersionRequest
 */
export interface KafkaUpdateClusterKafkaVersionRequest {
  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#ConfigurationInfo
   */
  readonly configurationInfo?: KafkaConfigurationInfo;

  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KafkaUpdateClusterKafkaVersionRequest#TargetKafkaVersion
   */
  readonly targetKafkaVersion?: string;

}

/**
 * Converts an object of type 'KafkaUpdateClusterKafkaVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateClusterKafkaVersionRequest(obj: KafkaUpdateClusterKafkaVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ConfigurationInfo': toJson_KafkaConfigurationInfo(obj.configurationInfo),
    'CurrentVersion': obj.currentVersion,
    'TargetKafkaVersion': obj.targetKafkaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateClusterKafkaVersionResponse
 */
export interface KafkaUpdateClusterKafkaVersionResponse {
  /**
   * @schema KafkaUpdateClusterKafkaVersionResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateClusterKafkaVersionResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaUpdateClusterKafkaVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateClusterKafkaVersionResponse(obj: KafkaUpdateClusterKafkaVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateMonitoringRequest
 */
export interface KafkaUpdateMonitoringRequest {
  /**
   * @schema KafkaUpdateMonitoringRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateMonitoringRequest#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KafkaUpdateMonitoringRequest#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaUpdateMonitoringRequest#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoringInfo;

  /**
   * @schema KafkaUpdateMonitoringRequest#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

}

/**
 * Converts an object of type 'KafkaUpdateMonitoringRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateMonitoringRequest(obj: KafkaUpdateMonitoringRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'CurrentVersion': obj.currentVersion,
    'EnhancedMonitoring': obj.enhancedMonitoring,
    'OpenMonitoring': toJson_KafkaOpenMonitoringInfo(obj.openMonitoring),
    'LoggingInfo': toJson_KafkaLoggingInfo(obj.loggingInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUpdateMonitoringResponse
 */
export interface KafkaUpdateMonitoringResponse {
  /**
   * @schema KafkaUpdateMonitoringResponse#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaUpdateMonitoringResponse#ClusterOperationArn
   */
  readonly clusterOperationArn?: string;

}

/**
 * Converts an object of type 'KafkaUpdateMonitoringResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUpdateMonitoringResponse(obj: KafkaUpdateMonitoringResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterOperationArn': obj.clusterOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaUnprocessedScramSecret
 */
export interface KafkaUnprocessedScramSecret {
  /**
   * @schema KafkaUnprocessedScramSecret#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema KafkaUnprocessedScramSecret#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema KafkaUnprocessedScramSecret#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * Converts an object of type 'KafkaUnprocessedScramSecret' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaUnprocessedScramSecret(obj: KafkaUnprocessedScramSecret | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
    'SecretArn': obj.secretArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBrokerNodeGroupInfo
 */
export interface KafkaBrokerNodeGroupInfo {
  /**
   * @schema KafkaBrokerNodeGroupInfo#BrokerAZDistribution
   */
  readonly brokerAzDistribution?: string;

  /**
   * @schema KafkaBrokerNodeGroupInfo#ClientSubnets
   */
  readonly clientSubnets?: string[];

  /**
   * @schema KafkaBrokerNodeGroupInfo#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema KafkaBrokerNodeGroupInfo#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema KafkaBrokerNodeGroupInfo#StorageInfo
   */
  readonly storageInfo?: KafkaStorageInfo;

}

/**
 * Converts an object of type 'KafkaBrokerNodeGroupInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBrokerNodeGroupInfo(obj: KafkaBrokerNodeGroupInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerAZDistribution': obj.brokerAzDistribution,
    'ClientSubnets': obj.clientSubnets?.map(y => y),
    'InstanceType': obj.instanceType,
    'SecurityGroups': obj.securityGroups?.map(y => y),
    'StorageInfo': toJson_KafkaStorageInfo(obj.storageInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaClientAuthentication
 */
export interface KafkaClientAuthentication {
  /**
   * @schema KafkaClientAuthentication#Sasl
   */
  readonly sasl?: KafkaSasl;

  /**
   * @schema KafkaClientAuthentication#Tls
   */
  readonly tls?: KafkaTls;

}

/**
 * Converts an object of type 'KafkaClientAuthentication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaClientAuthentication(obj: KafkaClientAuthentication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sasl': toJson_KafkaSasl(obj.sasl),
    'Tls': toJson_KafkaTls(obj.tls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaConfigurationInfo
 */
export interface KafkaConfigurationInfo {
  /**
   * @schema KafkaConfigurationInfo#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaConfigurationInfo#Revision
   */
  readonly revision?: number;

}

/**
 * Converts an object of type 'KafkaConfigurationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaConfigurationInfo(obj: KafkaConfigurationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Revision': obj.revision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaEncryptionInfo
 */
export interface KafkaEncryptionInfo {
  /**
   * @schema KafkaEncryptionInfo#EncryptionAtRest
   */
  readonly encryptionAtRest?: KafkaEncryptionAtRest;

  /**
   * @schema KafkaEncryptionInfo#EncryptionInTransit
   */
  readonly encryptionInTransit?: KafkaEncryptionInTransit;

}

/**
 * Converts an object of type 'KafkaEncryptionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaEncryptionInfo(obj: KafkaEncryptionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionAtRest': toJson_KafkaEncryptionAtRest(obj.encryptionAtRest),
    'EncryptionInTransit': toJson_KafkaEncryptionInTransit(obj.encryptionInTransit),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaOpenMonitoringInfo
 */
export interface KafkaOpenMonitoringInfo {
  /**
   * @schema KafkaOpenMonitoringInfo#Prometheus
   */
  readonly prometheus?: KafkaPrometheusInfo;

}

/**
 * Converts an object of type 'KafkaOpenMonitoringInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaOpenMonitoringInfo(obj: KafkaOpenMonitoringInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prometheus': toJson_KafkaPrometheusInfo(obj.prometheus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaLoggingInfo
 */
export interface KafkaLoggingInfo {
  /**
   * @schema KafkaLoggingInfo#BrokerLogs
   */
  readonly brokerLogs?: KafkaBrokerLogs;

}

/**
 * Converts an object of type 'KafkaLoggingInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaLoggingInfo(obj: KafkaLoggingInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerLogs': toJson_KafkaBrokerLogs(obj.brokerLogs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaConfigurationRevision
 */
export interface KafkaConfigurationRevision {
  /**
   * @schema KafkaConfigurationRevision#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaConfigurationRevision#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaConfigurationRevision#Revision
   */
  readonly revision?: number;

}

/**
 * Converts an object of type 'KafkaConfigurationRevision' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaConfigurationRevision(obj: KafkaConfigurationRevision | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreationTime': obj.creationTime,
    'Description': obj.description,
    'Revision': obj.revision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaClusterInfo
 */
export interface KafkaClusterInfo {
  /**
   * @schema KafkaClusterInfo#ActiveOperationArn
   */
  readonly activeOperationArn?: string;

  /**
   * @schema KafkaClusterInfo#BrokerNodeGroupInfo
   */
  readonly brokerNodeGroupInfo?: KafkaBrokerNodeGroupInfo;

  /**
   * @schema KafkaClusterInfo#ClientAuthentication
   */
  readonly clientAuthentication?: KafkaClientAuthentication;

  /**
   * @schema KafkaClusterInfo#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaClusterInfo#ClusterName
   */
  readonly clusterName?: string;

  /**
   * @schema KafkaClusterInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaClusterInfo#CurrentBrokerSoftwareInfo
   */
  readonly currentBrokerSoftwareInfo?: KafkaBrokerSoftwareInfo;

  /**
   * @schema KafkaClusterInfo#CurrentVersion
   */
  readonly currentVersion?: string;

  /**
   * @schema KafkaClusterInfo#EncryptionInfo
   */
  readonly encryptionInfo?: KafkaEncryptionInfo;

  /**
   * @schema KafkaClusterInfo#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaClusterInfo#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoring;

  /**
   * @schema KafkaClusterInfo#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

  /**
   * @schema KafkaClusterInfo#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes?: number;

  /**
   * @schema KafkaClusterInfo#State
   */
  readonly state?: string;

  /**
   * @schema KafkaClusterInfo#StateInfo
   */
  readonly stateInfo?: KafkaStateInfo;

  /**
   * @schema KafkaClusterInfo#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema KafkaClusterInfo#ZookeeperConnectString
   */
  readonly zookeeperConnectString?: string;

  /**
   * @schema KafkaClusterInfo#ZookeeperConnectStringTls
   */
  readonly zookeeperConnectStringTls?: string;

}

/**
 * Converts an object of type 'KafkaClusterInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaClusterInfo(obj: KafkaClusterInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveOperationArn': obj.activeOperationArn,
    'BrokerNodeGroupInfo': toJson_KafkaBrokerNodeGroupInfo(obj.brokerNodeGroupInfo),
    'ClientAuthentication': toJson_KafkaClientAuthentication(obj.clientAuthentication),
    'ClusterArn': obj.clusterArn,
    'ClusterName': obj.clusterName,
    'CreationTime': obj.creationTime,
    'CurrentBrokerSoftwareInfo': toJson_KafkaBrokerSoftwareInfo(obj.currentBrokerSoftwareInfo),
    'CurrentVersion': obj.currentVersion,
    'EncryptionInfo': toJson_KafkaEncryptionInfo(obj.encryptionInfo),
    'EnhancedMonitoring': obj.enhancedMonitoring,
    'OpenMonitoring': toJson_KafkaOpenMonitoring(obj.openMonitoring),
    'LoggingInfo': toJson_KafkaLoggingInfo(obj.loggingInfo),
    'NumberOfBrokerNodes': obj.numberOfBrokerNodes,
    'State': obj.state,
    'StateInfo': toJson_KafkaStateInfo(obj.stateInfo),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ZookeeperConnectString': obj.zookeeperConnectString,
    'ZookeeperConnectStringTls': obj.zookeeperConnectStringTls,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaClusterOperationInfo
 */
export interface KafkaClusterOperationInfo {
  /**
   * @schema KafkaClusterOperationInfo#ClientRequestId
   */
  readonly clientRequestId?: string;

  /**
   * @schema KafkaClusterOperationInfo#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema KafkaClusterOperationInfo#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaClusterOperationInfo#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema KafkaClusterOperationInfo#ErrorInfo
   */
  readonly errorInfo?: KafkaErrorInfo;

  /**
   * @schema KafkaClusterOperationInfo#OperationArn
   */
  readonly operationArn?: string;

  /**
   * @schema KafkaClusterOperationInfo#OperationState
   */
  readonly operationState?: string;

  /**
   * @schema KafkaClusterOperationInfo#OperationSteps
   */
  readonly operationSteps?: KafkaClusterOperationStep[];

  /**
   * @schema KafkaClusterOperationInfo#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema KafkaClusterOperationInfo#SourceClusterInfo
   */
  readonly sourceClusterInfo?: KafkaMutableClusterInfo;

  /**
   * @schema KafkaClusterOperationInfo#TargetClusterInfo
   */
  readonly targetClusterInfo?: KafkaMutableClusterInfo;

}

/**
 * Converts an object of type 'KafkaClusterOperationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaClusterOperationInfo(obj: KafkaClusterOperationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientRequestId': obj.clientRequestId,
    'ClusterArn': obj.clusterArn,
    'CreationTime': obj.creationTime,
    'EndTime': obj.endTime,
    'ErrorInfo': toJson_KafkaErrorInfo(obj.errorInfo),
    'OperationArn': obj.operationArn,
    'OperationState': obj.operationState,
    'OperationSteps': obj.operationSteps?.map(y => toJson_KafkaClusterOperationStep(y)),
    'OperationType': obj.operationType,
    'SourceClusterInfo': toJson_KafkaMutableClusterInfo(obj.sourceClusterInfo),
    'TargetClusterInfo': toJson_KafkaMutableClusterInfo(obj.targetClusterInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaCompatibleKafkaVersion
 */
export interface KafkaCompatibleKafkaVersion {
  /**
   * @schema KafkaCompatibleKafkaVersion#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema KafkaCompatibleKafkaVersion#TargetVersions
   */
  readonly targetVersions?: string[];

}

/**
 * Converts an object of type 'KafkaCompatibleKafkaVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaCompatibleKafkaVersion(obj: KafkaCompatibleKafkaVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceVersion': obj.sourceVersion,
    'TargetVersions': obj.targetVersions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaConfiguration
 */
export interface KafkaConfiguration {
  /**
   * @schema KafkaConfiguration#Arn
   */
  readonly arn?: string;

  /**
   * @schema KafkaConfiguration#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema KafkaConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema KafkaConfiguration#KafkaVersions
   */
  readonly kafkaVersions?: string[];

  /**
   * @schema KafkaConfiguration#LatestRevision
   */
  readonly latestRevision?: KafkaConfigurationRevision;

  /**
   * @schema KafkaConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema KafkaConfiguration#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'KafkaConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaConfiguration(obj: KafkaConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreationTime': obj.creationTime,
    'Description': obj.description,
    'KafkaVersions': obj.kafkaVersions?.map(y => y),
    'LatestRevision': toJson_KafkaConfigurationRevision(obj.latestRevision),
    'Name': obj.name,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaKafkaVersion
 */
export interface KafkaKafkaVersion {
  /**
   * @schema KafkaKafkaVersion#Version
   */
  readonly version?: string;

  /**
   * @schema KafkaKafkaVersion#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'KafkaKafkaVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaKafkaVersion(obj: KafkaKafkaVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaNodeInfo
 */
export interface KafkaNodeInfo {
  /**
   * @schema KafkaNodeInfo#AddedToClusterTime
   */
  readonly addedToClusterTime?: string;

  /**
   * @schema KafkaNodeInfo#BrokerNodeInfo
   */
  readonly brokerNodeInfo?: KafkaBrokerNodeInfo;

  /**
   * @schema KafkaNodeInfo#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema KafkaNodeInfo#NodeARN
   */
  readonly nodeArn?: string;

  /**
   * @schema KafkaNodeInfo#NodeType
   */
  readonly nodeType?: string;

  /**
   * @schema KafkaNodeInfo#ZookeeperNodeInfo
   */
  readonly zookeeperNodeInfo?: KafkaZookeeperNodeInfo;

}

/**
 * Converts an object of type 'KafkaNodeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaNodeInfo(obj: KafkaNodeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AddedToClusterTime': obj.addedToClusterTime,
    'BrokerNodeInfo': toJson_KafkaBrokerNodeInfo(obj.brokerNodeInfo),
    'InstanceType': obj.instanceType,
    'NodeARN': obj.nodeArn,
    'NodeType': obj.nodeType,
    'ZookeeperNodeInfo': toJson_KafkaZookeeperNodeInfo(obj.zookeeperNodeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBrokerEbsVolumeInfo
 */
export interface KafkaBrokerEbsVolumeInfo {
  /**
   * @schema KafkaBrokerEbsVolumeInfo#KafkaBrokerNodeId
   */
  readonly kafkaBrokerNodeId?: string;

  /**
   * @schema KafkaBrokerEbsVolumeInfo#VolumeSizeGB
   */
  readonly volumeSizeGb?: number;

}

/**
 * Converts an object of type 'KafkaBrokerEbsVolumeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBrokerEbsVolumeInfo(obj: KafkaBrokerEbsVolumeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KafkaBrokerNodeId': obj.kafkaBrokerNodeId,
    'VolumeSizeGB': obj.volumeSizeGb,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaStorageInfo
 */
export interface KafkaStorageInfo {
  /**
   * @schema KafkaStorageInfo#EbsStorageInfo
   */
  readonly ebsStorageInfo?: KafkaEbsStorageInfo;

}

/**
 * Converts an object of type 'KafkaStorageInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaStorageInfo(obj: KafkaStorageInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EbsStorageInfo': toJson_KafkaEbsStorageInfo(obj.ebsStorageInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaSasl
 */
export interface KafkaSasl {
  /**
   * @schema KafkaSasl#Scram
   */
  readonly scram?: KafkaScram;

  /**
   * @schema KafkaSasl#Iam
   */
  readonly iam?: KafkaIam;

}

/**
 * Converts an object of type 'KafkaSasl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaSasl(obj: KafkaSasl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scram': toJson_KafkaScram(obj.scram),
    'Iam': toJson_KafkaIam(obj.iam),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaTls
 */
export interface KafkaTls {
  /**
   * @schema KafkaTls#CertificateAuthorityArnList
   */
  readonly certificateAuthorityArnList?: string[];

}

/**
 * Converts an object of type 'KafkaTls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaTls(obj: KafkaTls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArnList': obj.certificateAuthorityArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaEncryptionAtRest
 */
export interface KafkaEncryptionAtRest {
  /**
   * @schema KafkaEncryptionAtRest#DataVolumeKMSKeyId
   */
  readonly dataVolumeKmsKeyId?: string;

}

/**
 * Converts an object of type 'KafkaEncryptionAtRest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaEncryptionAtRest(obj: KafkaEncryptionAtRest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataVolumeKMSKeyId': obj.dataVolumeKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaEncryptionInTransit
 */
export interface KafkaEncryptionInTransit {
  /**
   * @schema KafkaEncryptionInTransit#ClientBroker
   */
  readonly clientBroker?: string;

  /**
   * @schema KafkaEncryptionInTransit#InCluster
   */
  readonly inCluster?: boolean;

}

/**
 * Converts an object of type 'KafkaEncryptionInTransit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaEncryptionInTransit(obj: KafkaEncryptionInTransit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientBroker': obj.clientBroker,
    'InCluster': obj.inCluster,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaPrometheusInfo
 */
export interface KafkaPrometheusInfo {
  /**
   * @schema KafkaPrometheusInfo#JmxExporter
   */
  readonly jmxExporter?: KafkaJmxExporterInfo;

  /**
   * @schema KafkaPrometheusInfo#NodeExporter
   */
  readonly nodeExporter?: KafkaNodeExporterInfo;

}

/**
 * Converts an object of type 'KafkaPrometheusInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaPrometheusInfo(obj: KafkaPrometheusInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JmxExporter': toJson_KafkaJmxExporterInfo(obj.jmxExporter),
    'NodeExporter': toJson_KafkaNodeExporterInfo(obj.nodeExporter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBrokerLogs
 */
export interface KafkaBrokerLogs {
  /**
   * @schema KafkaBrokerLogs#CloudWatchLogs
   */
  readonly cloudWatchLogs?: KafkaCloudWatchLogs;

  /**
   * @schema KafkaBrokerLogs#Firehose
   */
  readonly firehose?: KafkaFirehose;

  /**
   * @schema KafkaBrokerLogs#S3
   */
  readonly s3?: KafkaS3;

}

/**
 * Converts an object of type 'KafkaBrokerLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBrokerLogs(obj: KafkaBrokerLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CloudWatchLogs': toJson_KafkaCloudWatchLogs(obj.cloudWatchLogs),
    'Firehose': toJson_KafkaFirehose(obj.firehose),
    'S3': toJson_KafkaS3(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBrokerSoftwareInfo
 */
export interface KafkaBrokerSoftwareInfo {
  /**
   * @schema KafkaBrokerSoftwareInfo#ConfigurationArn
   */
  readonly configurationArn?: string;

  /**
   * @schema KafkaBrokerSoftwareInfo#ConfigurationRevision
   */
  readonly configurationRevision?: number;

  /**
   * @schema KafkaBrokerSoftwareInfo#KafkaVersion
   */
  readonly kafkaVersion?: string;

}

/**
 * Converts an object of type 'KafkaBrokerSoftwareInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBrokerSoftwareInfo(obj: KafkaBrokerSoftwareInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationArn': obj.configurationArn,
    'ConfigurationRevision': obj.configurationRevision,
    'KafkaVersion': obj.kafkaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaOpenMonitoring
 */
export interface KafkaOpenMonitoring {
  /**
   * @schema KafkaOpenMonitoring#Prometheus
   */
  readonly prometheus?: KafkaPrometheus;

}

/**
 * Converts an object of type 'KafkaOpenMonitoring' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaOpenMonitoring(obj: KafkaOpenMonitoring | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prometheus': toJson_KafkaPrometheus(obj.prometheus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaStateInfo
 */
export interface KafkaStateInfo {
  /**
   * @schema KafkaStateInfo#Code
   */
  readonly code?: string;

  /**
   * @schema KafkaStateInfo#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'KafkaStateInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaStateInfo(obj: KafkaStateInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaErrorInfo
 */
export interface KafkaErrorInfo {
  /**
   * @schema KafkaErrorInfo#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema KafkaErrorInfo#ErrorString
   */
  readonly errorString?: string;

}

/**
 * Converts an object of type 'KafkaErrorInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaErrorInfo(obj: KafkaErrorInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorString': obj.errorString,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaClusterOperationStep
 */
export interface KafkaClusterOperationStep {
  /**
   * @schema KafkaClusterOperationStep#StepInfo
   */
  readonly stepInfo?: KafkaClusterOperationStepInfo;

  /**
   * @schema KafkaClusterOperationStep#StepName
   */
  readonly stepName?: string;

}

/**
 * Converts an object of type 'KafkaClusterOperationStep' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaClusterOperationStep(obj: KafkaClusterOperationStep | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StepInfo': toJson_KafkaClusterOperationStepInfo(obj.stepInfo),
    'StepName': obj.stepName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaMutableClusterInfo
 */
export interface KafkaMutableClusterInfo {
  /**
   * @schema KafkaMutableClusterInfo#BrokerEBSVolumeInfo
   */
  readonly brokerEbsVolumeInfo?: KafkaBrokerEbsVolumeInfo[];

  /**
   * @schema KafkaMutableClusterInfo#ConfigurationInfo
   */
  readonly configurationInfo?: KafkaConfigurationInfo;

  /**
   * @schema KafkaMutableClusterInfo#NumberOfBrokerNodes
   */
  readonly numberOfBrokerNodes?: number;

  /**
   * @schema KafkaMutableClusterInfo#EnhancedMonitoring
   */
  readonly enhancedMonitoring?: string;

  /**
   * @schema KafkaMutableClusterInfo#OpenMonitoring
   */
  readonly openMonitoring?: KafkaOpenMonitoring;

  /**
   * @schema KafkaMutableClusterInfo#KafkaVersion
   */
  readonly kafkaVersion?: string;

  /**
   * @schema KafkaMutableClusterInfo#LoggingInfo
   */
  readonly loggingInfo?: KafkaLoggingInfo;

  /**
   * @schema KafkaMutableClusterInfo#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * Converts an object of type 'KafkaMutableClusterInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaMutableClusterInfo(obj: KafkaMutableClusterInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BrokerEBSVolumeInfo': obj.brokerEbsVolumeInfo?.map(y => toJson_KafkaBrokerEbsVolumeInfo(y)),
    'ConfigurationInfo': toJson_KafkaConfigurationInfo(obj.configurationInfo),
    'NumberOfBrokerNodes': obj.numberOfBrokerNodes,
    'EnhancedMonitoring': obj.enhancedMonitoring,
    'OpenMonitoring': toJson_KafkaOpenMonitoring(obj.openMonitoring),
    'KafkaVersion': obj.kafkaVersion,
    'LoggingInfo': toJson_KafkaLoggingInfo(obj.loggingInfo),
    'InstanceType': obj.instanceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaBrokerNodeInfo
 */
export interface KafkaBrokerNodeInfo {
  /**
   * @schema KafkaBrokerNodeInfo#AttachedENIId
   */
  readonly attachedEniId?: string;

  /**
   * @schema KafkaBrokerNodeInfo#BrokerId
   */
  readonly brokerId?: number;

  /**
   * @schema KafkaBrokerNodeInfo#ClientSubnet
   */
  readonly clientSubnet?: string;

  /**
   * @schema KafkaBrokerNodeInfo#ClientVpcIpAddress
   */
  readonly clientVpcIpAddress?: string;

  /**
   * @schema KafkaBrokerNodeInfo#CurrentBrokerSoftwareInfo
   */
  readonly currentBrokerSoftwareInfo?: KafkaBrokerSoftwareInfo;

  /**
   * @schema KafkaBrokerNodeInfo#Endpoints
   */
  readonly endpoints?: string[];

}

/**
 * Converts an object of type 'KafkaBrokerNodeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaBrokerNodeInfo(obj: KafkaBrokerNodeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedENIId': obj.attachedEniId,
    'BrokerId': obj.brokerId,
    'ClientSubnet': obj.clientSubnet,
    'ClientVpcIpAddress': obj.clientVpcIpAddress,
    'CurrentBrokerSoftwareInfo': toJson_KafkaBrokerSoftwareInfo(obj.currentBrokerSoftwareInfo),
    'Endpoints': obj.endpoints?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaZookeeperNodeInfo
 */
export interface KafkaZookeeperNodeInfo {
  /**
   * @schema KafkaZookeeperNodeInfo#AttachedENIId
   */
  readonly attachedEniId?: string;

  /**
   * @schema KafkaZookeeperNodeInfo#ClientVpcIpAddress
   */
  readonly clientVpcIpAddress?: string;

  /**
   * @schema KafkaZookeeperNodeInfo#Endpoints
   */
  readonly endpoints?: string[];

  /**
   * @schema KafkaZookeeperNodeInfo#ZookeeperId
   */
  readonly zookeeperId?: number;

  /**
   * @schema KafkaZookeeperNodeInfo#ZookeeperVersion
   */
  readonly zookeeperVersion?: string;

}

/**
 * Converts an object of type 'KafkaZookeeperNodeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaZookeeperNodeInfo(obj: KafkaZookeeperNodeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedENIId': obj.attachedEniId,
    'ClientVpcIpAddress': obj.clientVpcIpAddress,
    'Endpoints': obj.endpoints?.map(y => y),
    'ZookeeperId': obj.zookeeperId,
    'ZookeeperVersion': obj.zookeeperVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaEbsStorageInfo
 */
export interface KafkaEbsStorageInfo {
  /**
   * @schema KafkaEbsStorageInfo#VolumeSize
   */
  readonly volumeSize?: number;

}

/**
 * Converts an object of type 'KafkaEbsStorageInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaEbsStorageInfo(obj: KafkaEbsStorageInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeSize': obj.volumeSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaScram
 */
export interface KafkaScram {
  /**
   * @schema KafkaScram#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'KafkaScram' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaScram(obj: KafkaScram | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaIam
 */
export interface KafkaIam {
  /**
   * @schema KafkaIam#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'KafkaIam' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaIam(obj: KafkaIam | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaJmxExporterInfo
 */
export interface KafkaJmxExporterInfo {
  /**
   * @schema KafkaJmxExporterInfo#EnabledInBroker
   */
  readonly enabledInBroker?: boolean;

}

/**
 * Converts an object of type 'KafkaJmxExporterInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaJmxExporterInfo(obj: KafkaJmxExporterInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnabledInBroker': obj.enabledInBroker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaNodeExporterInfo
 */
export interface KafkaNodeExporterInfo {
  /**
   * @schema KafkaNodeExporterInfo#EnabledInBroker
   */
  readonly enabledInBroker?: boolean;

}

/**
 * Converts an object of type 'KafkaNodeExporterInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaNodeExporterInfo(obj: KafkaNodeExporterInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnabledInBroker': obj.enabledInBroker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaCloudWatchLogs
 */
export interface KafkaCloudWatchLogs {
  /**
   * @schema KafkaCloudWatchLogs#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema KafkaCloudWatchLogs#LogGroup
   */
  readonly logGroup?: string;

}

/**
 * Converts an object of type 'KafkaCloudWatchLogs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaCloudWatchLogs(obj: KafkaCloudWatchLogs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'LogGroup': obj.logGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaFirehose
 */
export interface KafkaFirehose {
  /**
   * @schema KafkaFirehose#DeliveryStream
   */
  readonly deliveryStream?: string;

  /**
   * @schema KafkaFirehose#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * Converts an object of type 'KafkaFirehose' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaFirehose(obj: KafkaFirehose | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeliveryStream': obj.deliveryStream,
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaS3
 */
export interface KafkaS3 {
  /**
   * @schema KafkaS3#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema KafkaS3#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema KafkaS3#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'KafkaS3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaS3(obj: KafkaS3 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Enabled': obj.enabled,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaPrometheus
 */
export interface KafkaPrometheus {
  /**
   * @schema KafkaPrometheus#JmxExporter
   */
  readonly jmxExporter?: KafkaJmxExporter;

  /**
   * @schema KafkaPrometheus#NodeExporter
   */
  readonly nodeExporter?: KafkaNodeExporter;

}

/**
 * Converts an object of type 'KafkaPrometheus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaPrometheus(obj: KafkaPrometheus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JmxExporter': toJson_KafkaJmxExporter(obj.jmxExporter),
    'NodeExporter': toJson_KafkaNodeExporter(obj.nodeExporter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaClusterOperationStepInfo
 */
export interface KafkaClusterOperationStepInfo {
  /**
   * @schema KafkaClusterOperationStepInfo#StepStatus
   */
  readonly stepStatus?: string;

}

/**
 * Converts an object of type 'KafkaClusterOperationStepInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaClusterOperationStepInfo(obj: KafkaClusterOperationStepInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StepStatus': obj.stepStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaJmxExporter
 */
export interface KafkaJmxExporter {
  /**
   * @schema KafkaJmxExporter#EnabledInBroker
   */
  readonly enabledInBroker?: boolean;

}

/**
 * Converts an object of type 'KafkaJmxExporter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaJmxExporter(obj: KafkaJmxExporter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnabledInBroker': obj.enabledInBroker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema KafkaNodeExporter
 */
export interface KafkaNodeExporter {
  /**
   * @schema KafkaNodeExporter#EnabledInBroker
   */
  readonly enabledInBroker?: boolean;

}

/**
 * Converts an object of type 'KafkaNodeExporter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_KafkaNodeExporter(obj: KafkaNodeExporter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnabledInBroker': obj.enabledInBroker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
