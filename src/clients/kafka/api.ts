import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KafkaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchAssociateScramSecret(input: shapes.KafkaBatchAssociateScramSecretRequest): KafkaResponsesBatchAssociateScramSecret {
    return new KafkaResponsesBatchAssociateScramSecret(this, this.__resources, input);
  }

  public createCluster(input: shapes.KafkaCreateClusterRequest): KafkaResponsesCreateCluster {
    return new KafkaResponsesCreateCluster(this, this.__resources, input);
  }

  public createConfiguration(input: shapes.KafkaCreateConfigurationRequest): KafkaResponsesCreateConfiguration {
    return new KafkaResponsesCreateConfiguration(this, this.__resources, input);
  }

  public deleteCluster(input: shapes.KafkaDeleteClusterRequest): KafkaResponsesDeleteCluster {
    return new KafkaResponsesDeleteCluster(this, this.__resources, input);
  }

  public deleteConfiguration(input: shapes.KafkaDeleteConfigurationRequest): KafkaResponsesDeleteConfiguration {
    return new KafkaResponsesDeleteConfiguration(this, this.__resources, input);
  }

  public describeCluster(input: shapes.KafkaDescribeClusterRequest): KafkaResponsesDescribeCluster {
    return new KafkaResponsesDescribeCluster(this, this.__resources, input);
  }

  public describeClusterOperation(input: shapes.KafkaDescribeClusterOperationRequest): KafkaResponsesDescribeClusterOperation {
    return new KafkaResponsesDescribeClusterOperation(this, this.__resources, input);
  }

  public describeConfiguration(input: shapes.KafkaDescribeConfigurationRequest): KafkaResponsesDescribeConfiguration {
    return new KafkaResponsesDescribeConfiguration(this, this.__resources, input);
  }

  public describeConfigurationRevision(input: shapes.KafkaDescribeConfigurationRevisionRequest): KafkaResponsesDescribeConfigurationRevision {
    return new KafkaResponsesDescribeConfigurationRevision(this, this.__resources, input);
  }

  public batchDisassociateScramSecret(input: shapes.KafkaBatchDisassociateScramSecretRequest): KafkaResponsesBatchDisassociateScramSecret {
    return new KafkaResponsesBatchDisassociateScramSecret(this, this.__resources, input);
  }

  public fetchBootstrapBrokers(input: shapes.KafkaGetBootstrapBrokersRequest): KafkaResponsesFetchBootstrapBrokers {
    return new KafkaResponsesFetchBootstrapBrokers(this, this.__resources, input);
  }

  public fetchCompatibleKafkaVersions(input: shapes.KafkaGetCompatibleKafkaVersionsRequest): KafkaResponsesFetchCompatibleKafkaVersions {
    return new KafkaResponsesFetchCompatibleKafkaVersions(this, this.__resources, input);
  }

  public listClusterOperations(input: shapes.KafkaListClusterOperationsRequest): KafkaResponsesListClusterOperations {
    return new KafkaResponsesListClusterOperations(this, this.__resources, input);
  }

  public listClusters(input: shapes.KafkaListClustersRequest): KafkaResponsesListClusters {
    return new KafkaResponsesListClusters(this, this.__resources, input);
  }

  public listConfigurationRevisions(input: shapes.KafkaListConfigurationRevisionsRequest): KafkaResponsesListConfigurationRevisions {
    return new KafkaResponsesListConfigurationRevisions(this, this.__resources, input);
  }

  public listConfigurations(input: shapes.KafkaListConfigurationsRequest): KafkaResponsesListConfigurations {
    return new KafkaResponsesListConfigurations(this, this.__resources, input);
  }

  public listKafkaVersions(input: shapes.KafkaListKafkaVersionsRequest): KafkaResponsesListKafkaVersions {
    return new KafkaResponsesListKafkaVersions(this, this.__resources, input);
  }

  public listNodes(input: shapes.KafkaListNodesRequest): KafkaResponsesListNodes {
    return new KafkaResponsesListNodes(this, this.__resources, input);
  }

  public listScramSecrets(input: shapes.KafkaListScramSecretsRequest): KafkaResponsesListScramSecrets {
    return new KafkaResponsesListScramSecrets(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.KafkaListTagsForResourceRequest): KafkaResponsesListTagsForResource {
    return new KafkaResponsesListTagsForResource(this, this.__resources, input);
  }

  public rebootBroker(input: shapes.KafkaRebootBrokerRequest): KafkaResponsesRebootBroker {
    return new KafkaResponsesRebootBroker(this, this.__resources, input);
  }

  public tagResource(input: shapes.KafkaTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.KafkaUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateBrokerCount(input: shapes.KafkaUpdateBrokerCountRequest): KafkaResponsesUpdateBrokerCount {
    return new KafkaResponsesUpdateBrokerCount(this, this.__resources, input);
  }

  public updateBrokerType(input: shapes.KafkaUpdateBrokerTypeRequest): KafkaResponsesUpdateBrokerType {
    return new KafkaResponsesUpdateBrokerType(this, this.__resources, input);
  }

  public updateBrokerStorage(input: shapes.KafkaUpdateBrokerStorageRequest): KafkaResponsesUpdateBrokerStorage {
    return new KafkaResponsesUpdateBrokerStorage(this, this.__resources, input);
  }

  public updateConfiguration(input: shapes.KafkaUpdateConfigurationRequest): KafkaResponsesUpdateConfiguration {
    return new KafkaResponsesUpdateConfiguration(this, this.__resources, input);
  }

  public updateClusterConfiguration(input: shapes.KafkaUpdateClusterConfigurationRequest): KafkaResponsesUpdateClusterConfiguration {
    return new KafkaResponsesUpdateClusterConfiguration(this, this.__resources, input);
  }

  public updateClusterKafkaVersion(input: shapes.KafkaUpdateClusterKafkaVersionRequest): KafkaResponsesUpdateClusterKafkaVersion {
    return new KafkaResponsesUpdateClusterKafkaVersion(this, this.__resources, input);
  }

  public updateMonitoring(input: shapes.KafkaUpdateMonitoringRequest): KafkaResponsesUpdateMonitoring {
    return new KafkaResponsesUpdateMonitoring(this, this.__resources, input);
  }

}

export class KafkaResponsesBatchAssociateScramSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaBatchAssociateScramSecretRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateScramSecret',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.BatchAssociateScramSecret.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          SecretArnList: this.__input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateScramSecret.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get unprocessedScramSecrets(): shapes.KafkaUnprocessedScramSecret[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateScramSecret',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.BatchAssociateScramSecret.UnprocessedScramSecrets'),
        outputPath: 'UnprocessedScramSecrets',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          SecretArnList: this.__input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateScramSecret.UnprocessedScramSecrets', props);
    return resource.getResponseField('UnprocessedScramSecrets') as unknown as shapes.KafkaUnprocessedScramSecret[];
  }

}

export class KafkaResponsesCreateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaCreateClusterRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateCluster.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          BrokerNodeGroupInfo: {
            BrokerAZDistribution: this.__input.brokerNodeGroupInfo.brokerAzDistribution,
            ClientSubnets: this.__input.brokerNodeGroupInfo.clientSubnets,
            InstanceType: this.__input.brokerNodeGroupInfo.instanceType,
            SecurityGroups: this.__input.brokerNodeGroupInfo.securityGroups,
            StorageInfo: {
              EbsStorageInfo: {
                VolumeSize: this.__input.brokerNodeGroupInfo.storageInfo?.ebsStorageInfo?.volumeSize,
              },
            },
          },
          ClientAuthentication: {
            Sasl: {
              Scram: {
                Enabled: this.__input.clientAuthentication?.sasl?.scram?.enabled,
              },
              Iam: {
                Enabled: this.__input.clientAuthentication?.sasl?.iam?.enabled,
              },
            },
            Tls: {
              CertificateAuthorityArnList: this.__input.clientAuthentication?.tls?.certificateAuthorityArnList,
            },
          },
          ClusterName: this.__input.clusterName,
          ConfigurationInfo: {
            Arn: this.__input.configurationInfo?.arn,
            Revision: this.__input.configurationInfo?.revision,
          },
          EncryptionInfo: {
            EncryptionAtRest: {
              DataVolumeKMSKeyId: this.__input.encryptionInfo?.encryptionAtRest?.dataVolumeKmsKeyId,
            },
            EncryptionInTransit: {
              ClientBroker: this.__input.encryptionInfo?.encryptionInTransit?.clientBroker,
              InCluster: this.__input.encryptionInfo?.encryptionInTransit?.inCluster,
            },
          },
          EnhancedMonitoring: this.__input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          KafkaVersion: this.__input.kafkaVersion,
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.__input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.__input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.__input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.__input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.__input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
          NumberOfBrokerNodes: this.__input.numberOfBrokerNodes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateCluster.ClusterName'),
        outputPath: 'ClusterName',
        parameters: {
          BrokerNodeGroupInfo: {
            BrokerAZDistribution: this.__input.brokerNodeGroupInfo.brokerAzDistribution,
            ClientSubnets: this.__input.brokerNodeGroupInfo.clientSubnets,
            InstanceType: this.__input.brokerNodeGroupInfo.instanceType,
            SecurityGroups: this.__input.brokerNodeGroupInfo.securityGroups,
            StorageInfo: {
              EbsStorageInfo: {
                VolumeSize: this.__input.brokerNodeGroupInfo.storageInfo?.ebsStorageInfo?.volumeSize,
              },
            },
          },
          ClientAuthentication: {
            Sasl: {
              Scram: {
                Enabled: this.__input.clientAuthentication?.sasl?.scram?.enabled,
              },
              Iam: {
                Enabled: this.__input.clientAuthentication?.sasl?.iam?.enabled,
              },
            },
            Tls: {
              CertificateAuthorityArnList: this.__input.clientAuthentication?.tls?.certificateAuthorityArnList,
            },
          },
          ClusterName: this.__input.clusterName,
          ConfigurationInfo: {
            Arn: this.__input.configurationInfo?.arn,
            Revision: this.__input.configurationInfo?.revision,
          },
          EncryptionInfo: {
            EncryptionAtRest: {
              DataVolumeKMSKeyId: this.__input.encryptionInfo?.encryptionAtRest?.dataVolumeKmsKeyId,
            },
            EncryptionInTransit: {
              ClientBroker: this.__input.encryptionInfo?.encryptionInTransit?.clientBroker,
              InCluster: this.__input.encryptionInfo?.encryptionInTransit?.inCluster,
            },
          },
          EnhancedMonitoring: this.__input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          KafkaVersion: this.__input.kafkaVersion,
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.__input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.__input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.__input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.__input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.__input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
          NumberOfBrokerNodes: this.__input.numberOfBrokerNodes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.ClusterName', props);
    return resource.getResponseField('ClusterName') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateCluster.State'),
        outputPath: 'State',
        parameters: {
          BrokerNodeGroupInfo: {
            BrokerAZDistribution: this.__input.brokerNodeGroupInfo.brokerAzDistribution,
            ClientSubnets: this.__input.brokerNodeGroupInfo.clientSubnets,
            InstanceType: this.__input.brokerNodeGroupInfo.instanceType,
            SecurityGroups: this.__input.brokerNodeGroupInfo.securityGroups,
            StorageInfo: {
              EbsStorageInfo: {
                VolumeSize: this.__input.brokerNodeGroupInfo.storageInfo?.ebsStorageInfo?.volumeSize,
              },
            },
          },
          ClientAuthentication: {
            Sasl: {
              Scram: {
                Enabled: this.__input.clientAuthentication?.sasl?.scram?.enabled,
              },
              Iam: {
                Enabled: this.__input.clientAuthentication?.sasl?.iam?.enabled,
              },
            },
            Tls: {
              CertificateAuthorityArnList: this.__input.clientAuthentication?.tls?.certificateAuthorityArnList,
            },
          },
          ClusterName: this.__input.clusterName,
          ConfigurationInfo: {
            Arn: this.__input.configurationInfo?.arn,
            Revision: this.__input.configurationInfo?.revision,
          },
          EncryptionInfo: {
            EncryptionAtRest: {
              DataVolumeKMSKeyId: this.__input.encryptionInfo?.encryptionAtRest?.dataVolumeKmsKeyId,
            },
            EncryptionInTransit: {
              ClientBroker: this.__input.encryptionInfo?.encryptionInTransit?.clientBroker,
              InCluster: this.__input.encryptionInfo?.encryptionInTransit?.inCluster,
            },
          },
          EnhancedMonitoring: this.__input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          KafkaVersion: this.__input.kafkaVersion,
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.__input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.__input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.__input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.__input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.__input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
          NumberOfBrokerNodes: this.__input.numberOfBrokerNodes,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaResponsesCreateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaCreateConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          Description: this.__input.description,
          KafkaVersions: this.__input.kafkaVersions,
          Name: this.__input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateConfiguration.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          Description: this.__input.description,
          KafkaVersions: this.__input.kafkaVersions,
          Name: this.__input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get latestRevision(): KafkaResponsesCreateConfigurationLatestRevision {
    return new KafkaResponsesCreateConfigurationLatestRevision(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          Description: this.__input.description,
          KafkaVersions: this.__input.kafkaVersions,
          Name: this.__input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateConfiguration.State'),
        outputPath: 'State',
        parameters: {
          Description: this.__input.description,
          KafkaVersions: this.__input.kafkaVersions,
          Name: this.__input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaResponsesCreateConfigurationLatestRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaCreateConfigurationRequest) {
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateConfiguration.LatestRevision.CreationTime'),
        outputPath: 'LatestRevision.CreationTime',
        parameters: {
          Description: this.__input.description,
          KafkaVersions: this.__input.kafkaVersions,
          Name: this.__input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.LatestRevision.CreationTime', props);
    return resource.getResponseField('LatestRevision.CreationTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateConfiguration.LatestRevision.Description'),
        outputPath: 'LatestRevision.Description',
        parameters: {
          Description: this.__input.description,
          KafkaVersions: this.__input.kafkaVersions,
          Name: this.__input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.LatestRevision.Description', props);
    return resource.getResponseField('LatestRevision.Description') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.CreateConfiguration.LatestRevision.Revision'),
        outputPath: 'LatestRevision.Revision',
        parameters: {
          Description: this.__input.description,
          KafkaVersions: this.__input.kafkaVersions,
          Name: this.__input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class KafkaResponsesDeleteCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDeleteClusterRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DeleteCluster.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DeleteCluster.State'),
        outputPath: 'State',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaResponsesDeleteConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDeleteConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DeleteConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DeleteConfiguration.State'),
        outputPath: 'State',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaResponsesDescribeCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get clusterInfo(): KafkaResponsesDescribeClusterClusterInfo {
    return new KafkaResponsesDescribeClusterClusterInfo(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get activeOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ActiveOperationArn'),
        outputPath: 'ClusterInfo.ActiveOperationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ActiveOperationArn', props);
    return resource.getResponseField('ClusterInfo.ActiveOperationArn') as unknown as string;
  }

  public get brokerNodeGroupInfo(): KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo {
    return new KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo(this.__scope, this.__resources, this.__input);
  }

  public get clientAuthentication(): KafkaResponsesDescribeClusterClusterInfoClientAuthentication {
    return new KafkaResponsesDescribeClusterClusterInfoClientAuthentication(this.__scope, this.__resources, this.__input);
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ClusterArn'),
        outputPath: 'ClusterInfo.ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ClusterArn', props);
    return resource.getResponseField('ClusterInfo.ClusterArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ClusterName'),
        outputPath: 'ClusterInfo.ClusterName',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ClusterName', props);
    return resource.getResponseField('ClusterInfo.ClusterName') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.CreationTime'),
        outputPath: 'ClusterInfo.CreationTime',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.CreationTime', props);
    return resource.getResponseField('ClusterInfo.CreationTime') as unknown as string;
  }

  public get currentBrokerSoftwareInfo(): KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo {
    return new KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo(this.__scope, this.__resources, this.__input);
  }

  public get currentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.CurrentVersion'),
        outputPath: 'ClusterInfo.CurrentVersion',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.CurrentVersion', props);
    return resource.getResponseField('ClusterInfo.CurrentVersion') as unknown as string;
  }

  public get encryptionInfo(): KafkaResponsesDescribeClusterClusterInfoEncryptionInfo {
    return new KafkaResponsesDescribeClusterClusterInfoEncryptionInfo(this.__scope, this.__resources, this.__input);
  }

  public get enhancedMonitoring(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.EnhancedMonitoring'),
        outputPath: 'ClusterInfo.EnhancedMonitoring',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.EnhancedMonitoring', props);
    return resource.getResponseField('ClusterInfo.EnhancedMonitoring') as unknown as string;
  }

  public get openMonitoring(): KafkaResponsesDescribeClusterClusterInfoOpenMonitoring {
    return new KafkaResponsesDescribeClusterClusterInfoOpenMonitoring(this.__scope, this.__resources, this.__input);
  }

  public get loggingInfo(): KafkaResponsesDescribeClusterClusterInfoLoggingInfo {
    return new KafkaResponsesDescribeClusterClusterInfoLoggingInfo(this.__scope, this.__resources, this.__input);
  }

  public get numberOfBrokerNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.NumberOfBrokerNodes'),
        outputPath: 'ClusterInfo.NumberOfBrokerNodes',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.NumberOfBrokerNodes', props);
    return resource.getResponseField('ClusterInfo.NumberOfBrokerNodes') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.State'),
        outputPath: 'ClusterInfo.State',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.State', props);
    return resource.getResponseField('ClusterInfo.State') as unknown as string;
  }

  public get stateInfo(): KafkaResponsesDescribeClusterClusterInfoStateInfo {
    return new KafkaResponsesDescribeClusterClusterInfoStateInfo(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.Tags'),
        outputPath: 'ClusterInfo.Tags',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.Tags', props);
    return resource.getResponseField('ClusterInfo.Tags') as unknown as Record<string, string>;
  }

  public get zookeeperConnectString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ZookeeperConnectString'),
        outputPath: 'ClusterInfo.ZookeeperConnectString',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ZookeeperConnectString', props);
    return resource.getResponseField('ClusterInfo.ZookeeperConnectString') as unknown as string;
  }

  public get zookeeperConnectStringTls(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ZookeeperConnectStringTls'),
        outputPath: 'ClusterInfo.ZookeeperConnectStringTls',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ZookeeperConnectStringTls', props);
    return resource.getResponseField('ClusterInfo.ZookeeperConnectStringTls') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get brokerAzDistribution(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.BrokerAZDistribution'),
        outputPath: 'ClusterInfo.BrokerNodeGroupInfo.BrokerAZDistribution',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.BrokerAZDistribution', props);
    return resource.getResponseField('ClusterInfo.BrokerNodeGroupInfo.BrokerAZDistribution') as unknown as string;
  }

  public get clientSubnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.ClientSubnets'),
        outputPath: 'ClusterInfo.BrokerNodeGroupInfo.ClientSubnets',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.ClientSubnets', props);
    return resource.getResponseField('ClusterInfo.BrokerNodeGroupInfo.ClientSubnets') as unknown as string[];
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.InstanceType'),
        outputPath: 'ClusterInfo.BrokerNodeGroupInfo.InstanceType',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.InstanceType', props);
    return resource.getResponseField('ClusterInfo.BrokerNodeGroupInfo.InstanceType') as unknown as string;
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.SecurityGroups'),
        outputPath: 'ClusterInfo.BrokerNodeGroupInfo.SecurityGroups',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.SecurityGroups', props);
    return resource.getResponseField('ClusterInfo.BrokerNodeGroupInfo.SecurityGroups') as unknown as string[];
  }

  public get storageInfo(): KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo {
    return new KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get ebsStorageInfo(): KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
    return new KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get volumeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo.VolumeSize'),
        outputPath: 'ClusterInfo.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo.VolumeSize',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo.VolumeSize', props);
    return resource.getResponseField('ClusterInfo.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo.VolumeSize') as unknown as number;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoClientAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get sasl(): KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl {
    return new KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl(this.__scope, this.__resources, this.__input);
  }

  public get tls(): KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls {
    return new KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get scram(): KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram {
    return new KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram(this.__scope, this.__resources, this.__input);
  }

  public get iam(): KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslIam {
    return new KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslIam(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ClientAuthentication.Sasl.Scram.Enabled'),
        outputPath: 'ClusterInfo.ClientAuthentication.Sasl.Scram.Enabled',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ClientAuthentication.Sasl.Scram.Enabled', props);
    return resource.getResponseField('ClusterInfo.ClientAuthentication.Sasl.Scram.Enabled') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslIam {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ClientAuthentication.Sasl.Iam.Enabled'),
        outputPath: 'ClusterInfo.ClientAuthentication.Sasl.Iam.Enabled',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ClientAuthentication.Sasl.Iam.Enabled', props);
    return resource.getResponseField('ClusterInfo.ClientAuthentication.Sasl.Iam.Enabled') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get certificateAuthorityArnList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.ClientAuthentication.Tls.CertificateAuthorityArnList'),
        outputPath: 'ClusterInfo.ClientAuthentication.Tls.CertificateAuthorityArnList',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.ClientAuthentication.Tls.CertificateAuthorityArnList', props);
    return resource.getResponseField('ClusterInfo.ClientAuthentication.Tls.CertificateAuthorityArnList') as unknown as string[];
  }

}

export class KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get configurationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationArn'),
        outputPath: 'ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationArn', props);
    return resource.getResponseField('ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationArn') as unknown as string;
  }

  public get configurationRevision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationRevision'),
        outputPath: 'ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationRevision',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationRevision', props);
    return resource.getResponseField('ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationRevision') as unknown as number;
  }

  public get kafkaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.KafkaVersion'),
        outputPath: 'ClusterInfo.CurrentBrokerSoftwareInfo.KafkaVersion',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.KafkaVersion', props);
    return resource.getResponseField('ClusterInfo.CurrentBrokerSoftwareInfo.KafkaVersion') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoEncryptionInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get encryptionAtRest(): KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest {
    return new KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest(this.__scope, this.__resources, this.__input);
  }

  public get encryptionInTransit(): KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit {
    return new KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get dataVolumeKmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionAtRest.DataVolumeKMSKeyId'),
        outputPath: 'ClusterInfo.EncryptionInfo.EncryptionAtRest.DataVolumeKMSKeyId',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionAtRest.DataVolumeKMSKeyId', props);
    return resource.getResponseField('ClusterInfo.EncryptionInfo.EncryptionAtRest.DataVolumeKMSKeyId') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get clientBroker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionInTransit.ClientBroker'),
        outputPath: 'ClusterInfo.EncryptionInfo.EncryptionInTransit.ClientBroker',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionInTransit.ClientBroker', props);
    return resource.getResponseField('ClusterInfo.EncryptionInfo.EncryptionInTransit.ClientBroker') as unknown as string;
  }

  public get inCluster(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionInTransit.InCluster'),
        outputPath: 'ClusterInfo.EncryptionInfo.EncryptionInTransit.InCluster',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionInTransit.InCluster', props);
    return resource.getResponseField('ClusterInfo.EncryptionInfo.EncryptionInTransit.InCluster') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoOpenMonitoring {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get prometheus(): KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus {
    return new KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get jmxExporter(): KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter {
    return new KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter(this.__scope, this.__resources, this.__input);
  }

  public get nodeExporter(): KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter {
    return new KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get enabledInBroker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker'),
        outputPath: 'ClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get enabledInBroker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker'),
        outputPath: 'ClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoLoggingInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get brokerLogs(): KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs {
    return new KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get cloudWatchLogs(): KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {
    return new KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(this.__scope, this.__resources, this.__input);
  }

  public get firehose(): KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose {
    return new KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose(this.__scope, this.__resources, this.__input);
  }

  public get s3(): KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3 {
    return new KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled'),
        outputPath: 'ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled') as unknown as boolean;
  }

  public get logGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup'),
        outputPath: 'ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get deliveryStream(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream'),
        outputPath: 'ClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled'),
        outputPath: 'ClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket'),
        outputPath: 'ClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled'),
        outputPath: 'ClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled') as unknown as boolean;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix'),
        outputPath: 'ClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterClusterInfoStateInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.StateInfo.Code'),
        outputPath: 'ClusterInfo.StateInfo.Code',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.StateInfo.Code', props);
    return resource.getResponseField('ClusterInfo.StateInfo.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeCluster.ClusterInfo.StateInfo.Message'),
        outputPath: 'ClusterInfo.StateInfo.Message',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterInfo.StateInfo.Message', props);
    return resource.getResponseField('ClusterInfo.StateInfo.Message') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get clusterOperationInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfo(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get clientRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.ClientRequestId'),
        outputPath: 'ClusterOperationInfo.ClientRequestId',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.ClientRequestId', props);
    return resource.getResponseField('ClusterOperationInfo.ClientRequestId') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.ClusterArn'),
        outputPath: 'ClusterOperationInfo.ClusterArn',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.ClusterArn', props);
    return resource.getResponseField('ClusterOperationInfo.ClusterArn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.CreationTime'),
        outputPath: 'ClusterOperationInfo.CreationTime',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.CreationTime', props);
    return resource.getResponseField('ClusterOperationInfo.CreationTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.EndTime'),
        outputPath: 'ClusterOperationInfo.EndTime',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.EndTime', props);
    return resource.getResponseField('ClusterOperationInfo.EndTime') as unknown as string;
  }

  public get errorInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo(this.__scope, this.__resources, this.__input);
  }

  public get operationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.OperationArn'),
        outputPath: 'ClusterOperationInfo.OperationArn',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.OperationArn', props);
    return resource.getResponseField('ClusterOperationInfo.OperationArn') as unknown as string;
  }

  public get operationState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.OperationState'),
        outputPath: 'ClusterOperationInfo.OperationState',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.OperationState', props);
    return resource.getResponseField('ClusterOperationInfo.OperationState') as unknown as string;
  }

  public get operationSteps(): shapes.KafkaClusterOperationStep[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.OperationSteps'),
        outputPath: 'ClusterOperationInfo.OperationSteps',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.OperationSteps', props);
    return resource.getResponseField('ClusterOperationInfo.OperationSteps') as unknown as shapes.KafkaClusterOperationStep[];
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.OperationType'),
        outputPath: 'ClusterOperationInfo.OperationType',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.OperationType', props);
    return resource.getResponseField('ClusterOperationInfo.OperationType') as unknown as string;
  }

  public get sourceClusterInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo(this.__scope, this.__resources, this.__input);
  }

  public get targetClusterInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.ErrorInfo.ErrorCode'),
        outputPath: 'ClusterOperationInfo.ErrorInfo.ErrorCode',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.ErrorInfo.ErrorCode', props);
    return resource.getResponseField('ClusterOperationInfo.ErrorInfo.ErrorCode') as unknown as string;
  }

  public get errorString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.ErrorInfo.ErrorString'),
        outputPath: 'ClusterOperationInfo.ErrorInfo.ErrorString',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.ErrorInfo.ErrorString', props);
    return resource.getResponseField('ClusterOperationInfo.ErrorInfo.ErrorString') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get brokerEbsVolumeInfo(): shapes.KafkaBrokerEbsVolumeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.BrokerEBSVolumeInfo'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.BrokerEBSVolumeInfo',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.BrokerEBSVolumeInfo', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.BrokerEBSVolumeInfo') as unknown as shapes.KafkaBrokerEbsVolumeInfo[];
  }

  public get configurationInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo(this.__scope, this.__resources, this.__input);
  }

  public get numberOfBrokerNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.NumberOfBrokerNodes'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.NumberOfBrokerNodes',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.NumberOfBrokerNodes', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.NumberOfBrokerNodes') as unknown as number;
  }

  public get enhancedMonitoring(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.EnhancedMonitoring'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.EnhancedMonitoring',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.EnhancedMonitoring', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.EnhancedMonitoring') as unknown as string;
  }

  public get openMonitoring(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring(this.__scope, this.__resources, this.__input);
  }

  public get kafkaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.KafkaVersion'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.KafkaVersion',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.KafkaVersion', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.KafkaVersion') as unknown as string;
  }

  public get loggingInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo(this.__scope, this.__resources, this.__input);
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.InstanceType'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.InstanceType',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.InstanceType', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.InstanceType') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Arn'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Arn',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Arn', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Arn') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Revision'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Revision',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Revision', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Revision') as unknown as number;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get prometheus(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get jmxExporter(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter(this.__scope, this.__resources, this.__input);
  }

  public get nodeExporter(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get enabledInBroker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get enabledInBroker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get brokerLogs(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get cloudWatchLogs(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(this.__scope, this.__resources, this.__input);
  }

  public get firehose(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose(this.__scope, this.__resources, this.__input);
  }

  public get s3(): KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3 {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled') as unknown as boolean;
  }

  public get logGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get deliveryStream(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled') as unknown as boolean;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix'),
        outputPath: 'ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get brokerEbsVolumeInfo(): shapes.KafkaBrokerEbsVolumeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.BrokerEBSVolumeInfo'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.BrokerEBSVolumeInfo',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.BrokerEBSVolumeInfo', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.BrokerEBSVolumeInfo') as unknown as shapes.KafkaBrokerEbsVolumeInfo[];
  }

  public get configurationInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo(this.__scope, this.__resources, this.__input);
  }

  public get numberOfBrokerNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.NumberOfBrokerNodes'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.NumberOfBrokerNodes',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.NumberOfBrokerNodes', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.NumberOfBrokerNodes') as unknown as number;
  }

  public get enhancedMonitoring(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.EnhancedMonitoring'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.EnhancedMonitoring',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.EnhancedMonitoring', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.EnhancedMonitoring') as unknown as string;
  }

  public get openMonitoring(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring(this.__scope, this.__resources, this.__input);
  }

  public get kafkaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.KafkaVersion'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.KafkaVersion',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.KafkaVersion', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.KafkaVersion') as unknown as string;
  }

  public get loggingInfo(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo(this.__scope, this.__resources, this.__input);
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.InstanceType'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.InstanceType',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.InstanceType', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.InstanceType') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Arn'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Arn',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Arn', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Arn') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Revision'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Revision',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Revision', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Revision') as unknown as number;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get prometheus(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get jmxExporter(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter(this.__scope, this.__resources, this.__input);
  }

  public get nodeExporter(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get enabledInBroker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get enabledInBroker(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get brokerLogs(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get cloudWatchLogs(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(this.__scope, this.__resources, this.__input);
  }

  public get firehose(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose(this.__scope, this.__resources, this.__input);
  }

  public get s3(): KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3 {
    return new KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled') as unknown as boolean;
  }

  public get logGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup') as unknown as string;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get deliveryStream(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled') as unknown as boolean;
  }

}

export class KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeClusterOperationRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled') as unknown as boolean;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusterOperation',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix'),
        outputPath: 'ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix',
        parameters: {
          ClusterOperationArn: this.__input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix') as unknown as string;
  }

}

export class KafkaResponsesDescribeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.Description'),
        outputPath: 'Description',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get kafkaVersions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.KafkaVersions'),
        outputPath: 'KafkaVersions',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.KafkaVersions', props);
    return resource.getResponseField('KafkaVersions') as unknown as string[];
  }

  public get latestRevision(): KafkaResponsesDescribeConfigurationLatestRevision {
    return new KafkaResponsesDescribeConfigurationLatestRevision(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.State'),
        outputPath: 'State',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaResponsesDescribeConfigurationLatestRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeConfigurationRequest) {
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.LatestRevision.CreationTime'),
        outputPath: 'LatestRevision.CreationTime',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.LatestRevision.CreationTime', props);
    return resource.getResponseField('LatestRevision.CreationTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.LatestRevision.Description'),
        outputPath: 'LatestRevision.Description',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.LatestRevision.Description', props);
    return resource.getResponseField('LatestRevision.Description') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfiguration.LatestRevision.Revision'),
        outputPath: 'LatestRevision.Revision',
        parameters: {
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class KafkaResponsesDescribeConfigurationRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaDescribeConfigurationRevisionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfigurationRevision.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
          Revision: this.__input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfigurationRevision.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          Arn: this.__input.arn,
          Revision: this.__input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfigurationRevision.Description'),
        outputPath: 'Description',
        parameters: {
          Arn: this.__input.arn,
          Revision: this.__input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfigurationRevision.Revision'),
        outputPath: 'Revision',
        parameters: {
          Arn: this.__input.arn,
          Revision: this.__input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.Revision', props);
    return resource.getResponseField('Revision') as unknown as number;
  }

  public get serverProperties(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.DescribeConfigurationRevision.ServerProperties'),
        outputPath: 'ServerProperties',
        parameters: {
          Arn: this.__input.arn,
          Revision: this.__input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.ServerProperties', props);
    return resource.getResponseField('ServerProperties') as unknown as any;
  }

}

export class KafkaResponsesBatchDisassociateScramSecret {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaBatchDisassociateScramSecretRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateScramSecret',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.BatchDisassociateScramSecret.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          SecretArnList: this.__input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateScramSecret.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get unprocessedScramSecrets(): shapes.KafkaUnprocessedScramSecret[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateScramSecret',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.BatchDisassociateScramSecret.UnprocessedScramSecrets'),
        outputPath: 'UnprocessedScramSecrets',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          SecretArnList: this.__input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateScramSecret.UnprocessedScramSecrets', props);
    return resource.getResponseField('UnprocessedScramSecrets') as unknown as shapes.KafkaUnprocessedScramSecret[];
  }

}

export class KafkaResponsesFetchBootstrapBrokers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaGetBootstrapBrokersRequest) {
  }

  public get bootstrapBrokerString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBootstrapBrokers',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.GetBootstrapBrokers.BootstrapBrokerString'),
        outputPath: 'BootstrapBrokerString',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBootstrapBrokers.BootstrapBrokerString', props);
    return resource.getResponseField('BootstrapBrokerString') as unknown as string;
  }

  public get bootstrapBrokerStringTls(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBootstrapBrokers',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.GetBootstrapBrokers.BootstrapBrokerStringTls'),
        outputPath: 'BootstrapBrokerStringTls',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBootstrapBrokers.BootstrapBrokerStringTls', props);
    return resource.getResponseField('BootstrapBrokerStringTls') as unknown as string;
  }

  public get bootstrapBrokerStringSaslScram(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBootstrapBrokers',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.GetBootstrapBrokers.BootstrapBrokerStringSaslScram'),
        outputPath: 'BootstrapBrokerStringSaslScram',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBootstrapBrokers.BootstrapBrokerStringSaslScram', props);
    return resource.getResponseField('BootstrapBrokerStringSaslScram') as unknown as string;
  }

  public get bootstrapBrokerStringSaslIam(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBootstrapBrokers',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.GetBootstrapBrokers.BootstrapBrokerStringSaslIam'),
        outputPath: 'BootstrapBrokerStringSaslIam',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBootstrapBrokers.BootstrapBrokerStringSaslIam', props);
    return resource.getResponseField('BootstrapBrokerStringSaslIam') as unknown as string;
  }

}

export class KafkaResponsesFetchCompatibleKafkaVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaGetCompatibleKafkaVersionsRequest) {
  }

  public get compatibleKafkaVersions(): shapes.KafkaCompatibleKafkaVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCompatibleKafkaVersions',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.GetCompatibleKafkaVersions.CompatibleKafkaVersions'),
        outputPath: 'CompatibleKafkaVersions',
        parameters: {
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCompatibleKafkaVersions.CompatibleKafkaVersions', props);
    return resource.getResponseField('CompatibleKafkaVersions') as unknown as shapes.KafkaCompatibleKafkaVersion[];
  }

}

export class KafkaResponsesListClusterOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListClusterOperationsRequest) {
  }

  public get clusterOperationInfoList(): shapes.KafkaClusterOperationInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusterOperations',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListClusterOperations.ClusterOperationInfoList'),
        outputPath: 'ClusterOperationInfoList',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusterOperations.ClusterOperationInfoList', props);
    return resource.getResponseField('ClusterOperationInfoList') as unknown as shapes.KafkaClusterOperationInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusterOperations',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListClusterOperations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusterOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaResponsesListClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListClustersRequest) {
  }

  public get clusterInfoList(): shapes.KafkaClusterInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListClusters.ClusterInfoList'),
        outputPath: 'ClusterInfoList',
        parameters: {
          ClusterNameFilter: this.__input.clusterNameFilter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.ClusterInfoList', props);
    return resource.getResponseField('ClusterInfoList') as unknown as shapes.KafkaClusterInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListClusters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterNameFilter: this.__input.clusterNameFilter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaResponsesListConfigurationRevisions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListConfigurationRevisionsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationRevisions',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListConfigurationRevisions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Arn: this.__input.arn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationRevisions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get revisions(): shapes.KafkaConfigurationRevision[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationRevisions',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListConfigurationRevisions.Revisions'),
        outputPath: 'Revisions',
        parameters: {
          Arn: this.__input.arn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationRevisions.Revisions', props);
    return resource.getResponseField('Revisions') as unknown as shapes.KafkaConfigurationRevision[];
  }

}

export class KafkaResponsesListConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListConfigurationsRequest) {
  }

  public get configurations(): shapes.KafkaConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurations',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListConfigurations.Configurations'),
        outputPath: 'Configurations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurations.Configurations', props);
    return resource.getResponseField('Configurations') as unknown as shapes.KafkaConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurations',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaResponsesListKafkaVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListKafkaVersionsRequest) {
  }

  public get kafkaVersions(): shapes.KafkaKafkaVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKafkaVersions',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListKafkaVersions.KafkaVersions'),
        outputPath: 'KafkaVersions',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKafkaVersions.KafkaVersions', props);
    return resource.getResponseField('KafkaVersions') as unknown as shapes.KafkaKafkaVersion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listKafkaVersions',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListKafkaVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListKafkaVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaResponsesListNodes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListNodesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNodes',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListNodes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNodes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get nodeInfoList(): shapes.KafkaNodeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNodes',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListNodes.NodeInfoList'),
        outputPath: 'NodeInfoList',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNodes.NodeInfoList', props);
    return resource.getResponseField('NodeInfoList') as unknown as shapes.KafkaNodeInfo[];
  }

}

export class KafkaResponsesListScramSecrets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListScramSecretsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listScramSecrets',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListScramSecrets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListScramSecrets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get secretArnList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listScramSecrets',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListScramSecrets.SecretArnList'),
        outputPath: 'SecretArnList',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListScramSecrets.SecretArnList', props);
    return resource.getResponseField('SecretArnList') as unknown as string[];
  }

}

export class KafkaResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class KafkaResponsesRebootBroker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaRebootBrokerRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootBroker',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.RebootBroker.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          BrokerIds: this.__input.brokerIds,
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootBroker.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootBroker',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.RebootBroker.ClusterOperationArn'),
        outputPath: 'ClusterOperationArn',
        parameters: {
          BrokerIds: this.__input.brokerIds,
          ClusterArn: this.__input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootBroker.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaResponsesUpdateBrokerCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateBrokerCountRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBrokerCount',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateBrokerCount.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          TargetNumberOfBrokerNodes: this.__input.targetNumberOfBrokerNodes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBrokerCount.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBrokerCount',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateBrokerCount.ClusterOperationArn'),
        outputPath: 'ClusterOperationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          TargetNumberOfBrokerNodes: this.__input.targetNumberOfBrokerNodes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBrokerCount.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaResponsesUpdateBrokerType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateBrokerTypeRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBrokerType',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateBrokerType.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          TargetInstanceType: this.__input.targetInstanceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBrokerType.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBrokerType',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateBrokerType.ClusterOperationArn'),
        outputPath: 'ClusterOperationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          TargetInstanceType: this.__input.targetInstanceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBrokerType.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaResponsesUpdateBrokerStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateBrokerStorageRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBrokerStorage',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateBrokerStorage.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          TargetBrokerEBSVolumeInfo: this.__input.targetBrokerEbsVolumeInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBrokerStorage.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBrokerStorage',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateBrokerStorage.ClusterOperationArn'),
        outputPath: 'ClusterOperationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          TargetBrokerEBSVolumeInfo: this.__input.targetBrokerEbsVolumeInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBrokerStorage.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaResponsesUpdateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.__input.arn,
          Description: this.__input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get latestRevision(): KafkaResponsesUpdateConfigurationLatestRevision {
    return new KafkaResponsesUpdateConfigurationLatestRevision(this.__scope, this.__resources, this.__input);
  }

}

export class KafkaResponsesUpdateConfigurationLatestRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateConfigurationRequest) {
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateConfiguration.LatestRevision.CreationTime'),
        outputPath: 'LatestRevision.CreationTime',
        parameters: {
          Arn: this.__input.arn,
          Description: this.__input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.LatestRevision.CreationTime', props);
    return resource.getResponseField('LatestRevision.CreationTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateConfiguration.LatestRevision.Description'),
        outputPath: 'LatestRevision.Description',
        parameters: {
          Arn: this.__input.arn,
          Description: this.__input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.LatestRevision.Description', props);
    return resource.getResponseField('LatestRevision.Description') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateConfiguration.LatestRevision.Revision'),
        outputPath: 'LatestRevision.Revision',
        parameters: {
          Arn: this.__input.arn,
          Description: this.__input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class KafkaResponsesUpdateClusterConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateClusterConfigurationRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateClusterConfiguration.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          ConfigurationInfo: {
            Arn: this.__input.configurationInfo.arn,
            Revision: this.__input.configurationInfo.revision,
          },
          CurrentVersion: this.__input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfiguration.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfiguration',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateClusterConfiguration.ClusterOperationArn'),
        outputPath: 'ClusterOperationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          ConfigurationInfo: {
            Arn: this.__input.configurationInfo.arn,
            Revision: this.__input.configurationInfo.revision,
          },
          CurrentVersion: this.__input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfiguration.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaResponsesUpdateClusterKafkaVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateClusterKafkaVersionRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterKafkaVersion',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateClusterKafkaVersion.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          ConfigurationInfo: {
            Arn: this.__input.configurationInfo?.arn,
            Revision: this.__input.configurationInfo?.revision,
          },
          CurrentVersion: this.__input.currentVersion,
          TargetKafkaVersion: this.__input.targetKafkaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterKafkaVersion.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterKafkaVersion',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateClusterKafkaVersion.ClusterOperationArn'),
        outputPath: 'ClusterOperationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          ConfigurationInfo: {
            Arn: this.__input.configurationInfo?.arn,
            Revision: this.__input.configurationInfo?.revision,
          },
          CurrentVersion: this.__input.currentVersion,
          TargetKafkaVersion: this.__input.targetKafkaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterKafkaVersion.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaResponsesUpdateMonitoring {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.KafkaUpdateMonitoringRequest) {
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMonitoring',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateMonitoring.ClusterArn'),
        outputPath: 'ClusterArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          EnhancedMonitoring: this.__input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.__input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.__input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.__input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.__input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.__input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMonitoring.ClusterArn', props);
    return resource.getResponseField('ClusterArn') as unknown as string;
  }

  public get clusterOperationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMonitoring',
        service: 'Kafka',
        physicalResourceId: cr.PhysicalResourceId.of('Kafka.UpdateMonitoring.ClusterOperationArn'),
        outputPath: 'ClusterOperationArn',
        parameters: {
          ClusterArn: this.__input.clusterArn,
          CurrentVersion: this.__input.currentVersion,
          EnhancedMonitoring: this.__input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.__input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.__input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.__input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.__input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.__input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.__input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.__input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMonitoring.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

