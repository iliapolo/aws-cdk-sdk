import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class KafkaClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchAssociateScramSecret(input: shapes.KafkaBatchAssociateScramSecretRequest): KafkaBatchAssociateScramSecret {
    return new KafkaBatchAssociateScramSecret(this, 'BatchAssociateScramSecret', this.__resources, input);
  }

  public createCluster(input: shapes.KafkaCreateClusterRequest): KafkaCreateCluster {
    return new KafkaCreateCluster(this, 'CreateCluster', this.__resources, input);
  }

  public createConfiguration(input: shapes.KafkaCreateConfigurationRequest): KafkaCreateConfiguration {
    return new KafkaCreateConfiguration(this, 'CreateConfiguration', this.__resources, input);
  }

  public deleteCluster(input: shapes.KafkaDeleteClusterRequest): KafkaDeleteCluster {
    return new KafkaDeleteCluster(this, 'DeleteCluster', this.__resources, input);
  }

  public deleteConfiguration(input: shapes.KafkaDeleteConfigurationRequest): KafkaDeleteConfiguration {
    return new KafkaDeleteConfiguration(this, 'DeleteConfiguration', this.__resources, input);
  }

  public describeCluster(input: shapes.KafkaDescribeClusterRequest): KafkaDescribeCluster {
    return new KafkaDescribeCluster(this, 'DescribeCluster', this.__resources, input);
  }

  public describeClusterOperation(input: shapes.KafkaDescribeClusterOperationRequest): KafkaDescribeClusterOperation {
    return new KafkaDescribeClusterOperation(this, 'DescribeClusterOperation', this.__resources, input);
  }

  public describeConfiguration(input: shapes.KafkaDescribeConfigurationRequest): KafkaDescribeConfiguration {
    return new KafkaDescribeConfiguration(this, 'DescribeConfiguration', this.__resources, input);
  }

  public describeConfigurationRevision(input: shapes.KafkaDescribeConfigurationRevisionRequest): KafkaDescribeConfigurationRevision {
    return new KafkaDescribeConfigurationRevision(this, 'DescribeConfigurationRevision', this.__resources, input);
  }

  public batchDisassociateScramSecret(input: shapes.KafkaBatchDisassociateScramSecretRequest): KafkaBatchDisassociateScramSecret {
    return new KafkaBatchDisassociateScramSecret(this, 'BatchDisassociateScramSecret', this.__resources, input);
  }

  public fetchBootstrapBrokers(input: shapes.KafkaGetBootstrapBrokersRequest): KafkaFetchBootstrapBrokers {
    return new KafkaFetchBootstrapBrokers(this, 'FetchBootstrapBrokers', this.__resources, input);
  }

  public fetchCompatibleKafkaVersions(input: shapes.KafkaGetCompatibleKafkaVersionsRequest): KafkaFetchCompatibleKafkaVersions {
    return new KafkaFetchCompatibleKafkaVersions(this, 'FetchCompatibleKafkaVersions', this.__resources, input);
  }

  public listClusterOperations(input: shapes.KafkaListClusterOperationsRequest): KafkaListClusterOperations {
    return new KafkaListClusterOperations(this, 'ListClusterOperations', this.__resources, input);
  }

  public listClusters(input: shapes.KafkaListClustersRequest): KafkaListClusters {
    return new KafkaListClusters(this, 'ListClusters', this.__resources, input);
  }

  public listConfigurationRevisions(input: shapes.KafkaListConfigurationRevisionsRequest): KafkaListConfigurationRevisions {
    return new KafkaListConfigurationRevisions(this, 'ListConfigurationRevisions', this.__resources, input);
  }

  public listConfigurations(input: shapes.KafkaListConfigurationsRequest): KafkaListConfigurations {
    return new KafkaListConfigurations(this, 'ListConfigurations', this.__resources, input);
  }

  public listKafkaVersions(input: shapes.KafkaListKafkaVersionsRequest): KafkaListKafkaVersions {
    return new KafkaListKafkaVersions(this, 'ListKafkaVersions', this.__resources, input);
  }

  public listNodes(input: shapes.KafkaListNodesRequest): KafkaListNodes {
    return new KafkaListNodes(this, 'ListNodes', this.__resources, input);
  }

  public listScramSecrets(input: shapes.KafkaListScramSecretsRequest): KafkaListScramSecrets {
    return new KafkaListScramSecrets(this, 'ListScramSecrets', this.__resources, input);
  }

  public listTagsForResource(input: shapes.KafkaListTagsForResourceRequest): KafkaListTagsForResource {
    return new KafkaListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public rebootBroker(input: shapes.KafkaRebootBrokerRequest): KafkaRebootBroker {
    return new KafkaRebootBroker(this, 'RebootBroker', this.__resources, input);
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

  public updateBrokerCount(input: shapes.KafkaUpdateBrokerCountRequest): KafkaUpdateBrokerCount {
    return new KafkaUpdateBrokerCount(this, 'UpdateBrokerCount', this.__resources, input);
  }

  public updateBrokerStorage(input: shapes.KafkaUpdateBrokerStorageRequest): KafkaUpdateBrokerStorage {
    return new KafkaUpdateBrokerStorage(this, 'UpdateBrokerStorage', this.__resources, input);
  }

  public updateConfiguration(input: shapes.KafkaUpdateConfigurationRequest): KafkaUpdateConfiguration {
    return new KafkaUpdateConfiguration(this, 'UpdateConfiguration', this.__resources, input);
  }

  public updateClusterConfiguration(input: shapes.KafkaUpdateClusterConfigurationRequest): KafkaUpdateClusterConfiguration {
    return new KafkaUpdateClusterConfiguration(this, 'UpdateClusterConfiguration', this.__resources, input);
  }

  public updateClusterKafkaVersion(input: shapes.KafkaUpdateClusterKafkaVersionRequest): KafkaUpdateClusterKafkaVersion {
    return new KafkaUpdateClusterKafkaVersion(this, 'UpdateClusterKafkaVersion', this.__resources, input);
  }

  public updateMonitoring(input: shapes.KafkaUpdateMonitoringRequest): KafkaUpdateMonitoring {
    return new KafkaUpdateMonitoring(this, 'UpdateMonitoring', this.__resources, input);
  }

}

export class KafkaBatchAssociateScramSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaBatchAssociateScramSecretRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          SecretArnList: this.input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchAssociateScramSecret.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          SecretArnList: this.input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchAssociateScramSecret.UnprocessedScramSecrets', props);
    return resource.getResponseField('UnprocessedScramSecrets') as unknown as shapes.KafkaUnprocessedScramSecret[];
  }

}

export class KafkaCreateCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaCreateClusterRequest) {
    super(scope, id);
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
            BrokerAZDistribution: this.input.brokerNodeGroupInfo.brokerAzDistribution,
            ClientSubnets: this.input.brokerNodeGroupInfo.clientSubnets,
            InstanceType: this.input.brokerNodeGroupInfo.instanceType,
            SecurityGroups: this.input.brokerNodeGroupInfo.securityGroups,
            StorageInfo: {
              EbsStorageInfo: {
                VolumeSize: this.input.brokerNodeGroupInfo.storageInfo?.ebsStorageInfo?.volumeSize,
              },
            },
          },
          ClientAuthentication: {
            Sasl: {
              Scram: {
                Enabled: this.input.clientAuthentication?.sasl?.scram?.enabled,
              },
            },
            Tls: {
              CertificateAuthorityArnList: this.input.clientAuthentication?.tls?.certificateAuthorityArnList,
            },
          },
          ClusterName: this.input.clusterName,
          ConfigurationInfo: {
            Arn: this.input.configurationInfo?.arn,
            Revision: this.input.configurationInfo?.revision,
          },
          EncryptionInfo: {
            EncryptionAtRest: {
              DataVolumeKMSKeyId: this.input.encryptionInfo?.encryptionAtRest?.dataVolumeKmsKeyId,
            },
            EncryptionInTransit: {
              ClientBroker: this.input.encryptionInfo?.encryptionInTransit?.clientBroker,
              InCluster: this.input.encryptionInfo?.encryptionInTransit?.inCluster,
            },
          },
          EnhancedMonitoring: this.input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          KafkaVersion: this.input.kafkaVersion,
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
          NumberOfBrokerNodes: this.input.numberOfBrokerNodes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.ClusterArn', props);
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
            BrokerAZDistribution: this.input.brokerNodeGroupInfo.brokerAzDistribution,
            ClientSubnets: this.input.brokerNodeGroupInfo.clientSubnets,
            InstanceType: this.input.brokerNodeGroupInfo.instanceType,
            SecurityGroups: this.input.brokerNodeGroupInfo.securityGroups,
            StorageInfo: {
              EbsStorageInfo: {
                VolumeSize: this.input.brokerNodeGroupInfo.storageInfo?.ebsStorageInfo?.volumeSize,
              },
            },
          },
          ClientAuthentication: {
            Sasl: {
              Scram: {
                Enabled: this.input.clientAuthentication?.sasl?.scram?.enabled,
              },
            },
            Tls: {
              CertificateAuthorityArnList: this.input.clientAuthentication?.tls?.certificateAuthorityArnList,
            },
          },
          ClusterName: this.input.clusterName,
          ConfigurationInfo: {
            Arn: this.input.configurationInfo?.arn,
            Revision: this.input.configurationInfo?.revision,
          },
          EncryptionInfo: {
            EncryptionAtRest: {
              DataVolumeKMSKeyId: this.input.encryptionInfo?.encryptionAtRest?.dataVolumeKmsKeyId,
            },
            EncryptionInTransit: {
              ClientBroker: this.input.encryptionInfo?.encryptionInTransit?.clientBroker,
              InCluster: this.input.encryptionInfo?.encryptionInTransit?.inCluster,
            },
          },
          EnhancedMonitoring: this.input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          KafkaVersion: this.input.kafkaVersion,
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
          NumberOfBrokerNodes: this.input.numberOfBrokerNodes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.ClusterName', props);
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
            BrokerAZDistribution: this.input.brokerNodeGroupInfo.brokerAzDistribution,
            ClientSubnets: this.input.brokerNodeGroupInfo.clientSubnets,
            InstanceType: this.input.brokerNodeGroupInfo.instanceType,
            SecurityGroups: this.input.brokerNodeGroupInfo.securityGroups,
            StorageInfo: {
              EbsStorageInfo: {
                VolumeSize: this.input.brokerNodeGroupInfo.storageInfo?.ebsStorageInfo?.volumeSize,
              },
            },
          },
          ClientAuthentication: {
            Sasl: {
              Scram: {
                Enabled: this.input.clientAuthentication?.sasl?.scram?.enabled,
              },
            },
            Tls: {
              CertificateAuthorityArnList: this.input.clientAuthentication?.tls?.certificateAuthorityArnList,
            },
          },
          ClusterName: this.input.clusterName,
          ConfigurationInfo: {
            Arn: this.input.configurationInfo?.arn,
            Revision: this.input.configurationInfo?.revision,
          },
          EncryptionInfo: {
            EncryptionAtRest: {
              DataVolumeKMSKeyId: this.input.encryptionInfo?.encryptionAtRest?.dataVolumeKmsKeyId,
            },
            EncryptionInTransit: {
              ClientBroker: this.input.encryptionInfo?.encryptionInTransit?.clientBroker,
              InCluster: this.input.encryptionInfo?.encryptionInTransit?.inCluster,
            },
          },
          EnhancedMonitoring: this.input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          KafkaVersion: this.input.kafkaVersion,
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
          NumberOfBrokerNodes: this.input.numberOfBrokerNodes,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaCreateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaCreateConfigurationRequest) {
    super(scope, id);
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
          Description: this.input.description,
          KafkaVersions: this.input.kafkaVersions,
          Name: this.input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.Arn', props);
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
          Description: this.input.description,
          KafkaVersions: this.input.kafkaVersions,
          Name: this.input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get latestRevision(): KafkaCreateConfigurationLatestRevision {
    return new KafkaCreateConfigurationLatestRevision(this, 'LatestRevision', this.__resources, this.input);
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
          Description: this.input.description,
          KafkaVersions: this.input.kafkaVersions,
          Name: this.input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.Name', props);
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
          Description: this.input.description,
          KafkaVersions: this.input.kafkaVersions,
          Name: this.input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaCreateConfigurationLatestRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaCreateConfigurationRequest) {
    super(scope, id);
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
          Description: this.input.description,
          KafkaVersions: this.input.kafkaVersions,
          Name: this.input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.LatestRevision.CreationTime', props);
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
          Description: this.input.description,
          KafkaVersions: this.input.kafkaVersions,
          Name: this.input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.LatestRevision.Description', props);
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
          Description: this.input.description,
          KafkaVersions: this.input.kafkaVersions,
          Name: this.input.name,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class KafkaDeleteCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDeleteClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaDeleteConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDeleteConfigurationRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConfiguration.Arn', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaDescribeCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get clusterInfo(): KafkaDescribeClusterClusterInfo {
    return new KafkaDescribeClusterClusterInfo(this, 'ClusterInfo', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.ActiveOperationArn', props);
    return resource.getResponseField('ClusterInfo.ActiveOperationArn') as unknown as string;
  }

  public get brokerNodeGroupInfo(): KafkaDescribeClusterClusterInfoBrokerNodeGroupInfo {
    return new KafkaDescribeClusterClusterInfoBrokerNodeGroupInfo(this, 'BrokerNodeGroupInfo', this.__resources, this.input);
  }

  public get clientAuthentication(): KafkaDescribeClusterClusterInfoClientAuthentication {
    return new KafkaDescribeClusterClusterInfoClientAuthentication(this, 'ClientAuthentication', this.__resources, this.input);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.ClusterName', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.CreationTime', props);
    return resource.getResponseField('ClusterInfo.CreationTime') as unknown as string;
  }

  public get currentBrokerSoftwareInfo(): KafkaDescribeClusterClusterInfoCurrentBrokerSoftwareInfo {
    return new KafkaDescribeClusterClusterInfoCurrentBrokerSoftwareInfo(this, 'CurrentBrokerSoftwareInfo', this.__resources, this.input);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.CurrentVersion', props);
    return resource.getResponseField('ClusterInfo.CurrentVersion') as unknown as string;
  }

  public get encryptionInfo(): KafkaDescribeClusterClusterInfoEncryptionInfo {
    return new KafkaDescribeClusterClusterInfoEncryptionInfo(this, 'EncryptionInfo', this.__resources, this.input);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.EnhancedMonitoring', props);
    return resource.getResponseField('ClusterInfo.EnhancedMonitoring') as unknown as string;
  }

  public get openMonitoring(): KafkaDescribeClusterClusterInfoOpenMonitoring {
    return new KafkaDescribeClusterClusterInfoOpenMonitoring(this, 'OpenMonitoring', this.__resources, this.input);
  }

  public get loggingInfo(): KafkaDescribeClusterClusterInfoLoggingInfo {
    return new KafkaDescribeClusterClusterInfoLoggingInfo(this, 'LoggingInfo', this.__resources, this.input);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.NumberOfBrokerNodes', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.State', props);
    return resource.getResponseField('ClusterInfo.State') as unknown as string;
  }

  public get stateInfo(): KafkaDescribeClusterClusterInfoStateInfo {
    return new KafkaDescribeClusterClusterInfoStateInfo(this, 'StateInfo', this.__resources, this.input);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.Tags', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.ZookeeperConnectString', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.ZookeeperConnectStringTls', props);
    return resource.getResponseField('ClusterInfo.ZookeeperConnectStringTls') as unknown as string;
  }

}

export class KafkaDescribeClusterClusterInfoBrokerNodeGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.BrokerAZDistribution', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.ClientSubnets', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.InstanceType', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.SecurityGroups', props);
    return resource.getResponseField('ClusterInfo.BrokerNodeGroupInfo.SecurityGroups') as unknown as string[];
  }

  public get storageInfo(): KafkaDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo {
    return new KafkaDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo(this, 'StorageInfo', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get ebsStorageInfo(): KafkaDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
    return new KafkaDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo(this, 'EbsStorageInfo', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo.VolumeSize', props);
    return resource.getResponseField('ClusterInfo.BrokerNodeGroupInfo.StorageInfo.EbsStorageInfo.VolumeSize') as unknown as number;
  }

}

export class KafkaDescribeClusterClusterInfoClientAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get sasl(): KafkaDescribeClusterClusterInfoClientAuthenticationSasl {
    return new KafkaDescribeClusterClusterInfoClientAuthenticationSasl(this, 'Sasl', this.__resources, this.input);
  }

  public get tls(): KafkaDescribeClusterClusterInfoClientAuthenticationTls {
    return new KafkaDescribeClusterClusterInfoClientAuthenticationTls(this, 'Tls', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoClientAuthenticationSasl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get scram(): KafkaDescribeClusterClusterInfoClientAuthenticationSaslScram {
    return new KafkaDescribeClusterClusterInfoClientAuthenticationSaslScram(this, 'Scram', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoClientAuthenticationSaslScram extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.ClientAuthentication.Sasl.Scram.Enabled', props);
    return resource.getResponseField('ClusterInfo.ClientAuthentication.Sasl.Scram.Enabled') as unknown as boolean;
  }

}

export class KafkaDescribeClusterClusterInfoClientAuthenticationTls extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.ClientAuthentication.Tls.CertificateAuthorityArnList', props);
    return resource.getResponseField('ClusterInfo.ClientAuthentication.Tls.CertificateAuthorityArnList') as unknown as string[];
  }

}

export class KafkaDescribeClusterClusterInfoCurrentBrokerSoftwareInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationArn', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.ConfigurationRevision', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.CurrentBrokerSoftwareInfo.KafkaVersion', props);
    return resource.getResponseField('ClusterInfo.CurrentBrokerSoftwareInfo.KafkaVersion') as unknown as string;
  }

}

export class KafkaDescribeClusterClusterInfoEncryptionInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get encryptionAtRest(): KafkaDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest {
    return new KafkaDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest(this, 'EncryptionAtRest', this.__resources, this.input);
  }

  public get encryptionInTransit(): KafkaDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit {
    return new KafkaDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit(this, 'EncryptionInTransit', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionAtRest.DataVolumeKMSKeyId', props);
    return resource.getResponseField('ClusterInfo.EncryptionInfo.EncryptionAtRest.DataVolumeKMSKeyId') as unknown as string;
  }

}

export class KafkaDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionInTransit.ClientBroker', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.EncryptionInfo.EncryptionInTransit.InCluster', props);
    return resource.getResponseField('ClusterInfo.EncryptionInfo.EncryptionInTransit.InCluster') as unknown as boolean;
  }

}

export class KafkaDescribeClusterClusterInfoOpenMonitoring extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get prometheus(): KafkaDescribeClusterClusterInfoOpenMonitoringPrometheus {
    return new KafkaDescribeClusterClusterInfoOpenMonitoringPrometheus(this, 'Prometheus', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoOpenMonitoringPrometheus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get jmxExporter(): KafkaDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter {
    return new KafkaDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter(this, 'JmxExporter', this.__resources, this.input);
  }

  public get nodeExporter(): KafkaDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter {
    return new KafkaDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter(this, 'NodeExporter', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaDescribeClusterClusterInfoLoggingInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get brokerLogs(): KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogs {
    return new KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogs(this, 'BrokerLogs', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
  }

  public get cloudWatchLogs(): KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {
    return new KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(this, 'CloudWatchLogs', this.__resources, this.input);
  }

  public get firehose(): KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose {
    return new KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose(this, 'Firehose', this.__resources, this.input);
  }

  public get s3(): KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsS3 {
    return new KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsS3(this, 'S3', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup') as unknown as string;
  }

}

export class KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled') as unknown as boolean;
  }

}

export class KafkaDescribeClusterClusterInfoLoggingInfoBrokerLogsS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix', props);
    return resource.getResponseField('ClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix') as unknown as string;
  }

}

export class KafkaDescribeClusterClusterInfoStateInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.StateInfo.Code', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterInfo.StateInfo.Message', props);
    return resource.getResponseField('ClusterInfo.StateInfo.Message') as unknown as string;
  }

}

export class KafkaDescribeClusterOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get clusterOperationInfo(): KafkaDescribeClusterOperationClusterOperationInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfo(this, 'ClusterOperationInfo', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.ClientRequestId', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.ClusterArn', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.CreationTime', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.EndTime', props);
    return resource.getResponseField('ClusterOperationInfo.EndTime') as unknown as string;
  }

  public get errorInfo(): KafkaDescribeClusterOperationClusterOperationInfoErrorInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfoErrorInfo(this, 'ErrorInfo', this.__resources, this.input);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.OperationArn', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.OperationState', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.OperationSteps', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.OperationType', props);
    return resource.getResponseField('ClusterOperationInfo.OperationType') as unknown as string;
  }

  public get sourceClusterInfo(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfo(this, 'SourceClusterInfo', this.__resources, this.input);
  }

  public get targetClusterInfo(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfo(this, 'TargetClusterInfo', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoErrorInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.ErrorInfo.ErrorCode', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.ErrorInfo.ErrorString', props);
    return resource.getResponseField('ClusterOperationInfo.ErrorInfo.ErrorString') as unknown as string;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.BrokerEBSVolumeInfo', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.BrokerEBSVolumeInfo') as unknown as shapes.KafkaBrokerEbsVolumeInfo[];
  }

  public get configurationInfo(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo(this, 'ConfigurationInfo', this.__resources, this.input);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.NumberOfBrokerNodes', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.EnhancedMonitoring', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.EnhancedMonitoring') as unknown as string;
  }

  public get openMonitoring(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring(this, 'OpenMonitoring', this.__resources, this.input);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.KafkaVersion', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.KafkaVersion') as unknown as string;
  }

  public get loggingInfo(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo(this, 'LoggingInfo', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Arn', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Revision', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.ConfigurationInfo.Revision') as unknown as number;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get prometheus(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus(this, 'Prometheus', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get jmxExporter(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter(this, 'JmxExporter', this.__resources, this.input);
  }

  public get nodeExporter(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter(this, 'NodeExporter', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get brokerLogs(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs(this, 'BrokerLogs', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get cloudWatchLogs(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(this, 'CloudWatchLogs', this.__resources, this.input);
  }

  public get firehose(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose(this, 'Firehose', this.__resources, this.input);
  }

  public get s3(): KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3 {
    return new KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3(this, 'S3', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup') as unknown as string;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled') as unknown as boolean;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix', props);
    return resource.getResponseField('ClusterOperationInfo.SourceClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix') as unknown as string;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.BrokerEBSVolumeInfo', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.BrokerEBSVolumeInfo') as unknown as shapes.KafkaBrokerEbsVolumeInfo[];
  }

  public get configurationInfo(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo(this, 'ConfigurationInfo', this.__resources, this.input);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.NumberOfBrokerNodes', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.EnhancedMonitoring', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.EnhancedMonitoring') as unknown as string;
  }

  public get openMonitoring(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring(this, 'OpenMonitoring', this.__resources, this.input);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.KafkaVersion', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.KafkaVersion') as unknown as string;
  }

  public get loggingInfo(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo(this, 'LoggingInfo', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Arn', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Revision', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.ConfigurationInfo.Revision') as unknown as number;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get prometheus(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus(this, 'Prometheus', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get jmxExporter(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter(this, 'JmxExporter', this.__resources, this.input);
  }

  public get nodeExporter(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter(this, 'NodeExporter', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.JmxExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.OpenMonitoring.Prometheus.NodeExporter.EnabledInBroker') as unknown as boolean;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get brokerLogs(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs(this, 'BrokerLogs', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
  }

  public get cloudWatchLogs(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(this, 'CloudWatchLogs', this.__resources, this.input);
  }

  public get firehose(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose(this, 'Firehose', this.__resources, this.input);
  }

  public get s3(): KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3 {
    return new KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3(this, 'S3', this.__resources, this.input);
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.Enabled', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.CloudWatchLogs.LogGroup') as unknown as string;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.DeliveryStream', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.Firehose.Enabled') as unknown as boolean;
  }

}

export class KafkaDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeClusterOperationRequest) {
    super(scope, id);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Bucket', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Enabled', props);
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
          ClusterOperationArn: this.input.clusterOperationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusterOperation.ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix', props);
    return resource.getResponseField('ClusterOperationInfo.TargetClusterInfo.LoggingInfo.BrokerLogs.S3.Prefix') as unknown as string;
  }

}

export class KafkaDescribeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeConfigurationRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Arn', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.CreationTime', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Description', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.KafkaVersions', props);
    return resource.getResponseField('KafkaVersions') as unknown as string[];
  }

  public get latestRevision(): KafkaDescribeConfigurationLatestRevision {
    return new KafkaDescribeConfigurationLatestRevision(this, 'LatestRevision', this.__resources, this.input);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Name', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

}

export class KafkaDescribeConfigurationLatestRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeConfigurationRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.LatestRevision.CreationTime', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.LatestRevision.Description', props);
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
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class KafkaDescribeConfigurationRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaDescribeConfigurationRevisionRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          Revision: this.input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.Arn', props);
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
          Arn: this.input.arn,
          Revision: this.input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.CreationTime', props);
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
          Arn: this.input.arn,
          Revision: this.input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.Description', props);
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
          Arn: this.input.arn,
          Revision: this.input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.Revision', props);
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
          Arn: this.input.arn,
          Revision: this.input.revision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.ServerProperties', props);
    return resource.getResponseField('ServerProperties') as unknown as any;
  }

}

export class KafkaBatchDisassociateScramSecret extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaBatchDisassociateScramSecretRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          SecretArnList: this.input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisassociateScramSecret.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          SecretArnList: this.input.secretArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisassociateScramSecret.UnprocessedScramSecrets', props);
    return resource.getResponseField('UnprocessedScramSecrets') as unknown as shapes.KafkaUnprocessedScramSecret[];
  }

}

export class KafkaFetchBootstrapBrokers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaGetBootstrapBrokersRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBootstrapBrokers.BootstrapBrokerString', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBootstrapBrokers.BootstrapBrokerStringTls', props);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBootstrapBrokers.BootstrapBrokerStringSaslScram', props);
    return resource.getResponseField('BootstrapBrokerStringSaslScram') as unknown as string;
  }

}

export class KafkaFetchCompatibleKafkaVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaGetCompatibleKafkaVersionsRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCompatibleKafkaVersions.CompatibleKafkaVersions', props);
    return resource.getResponseField('CompatibleKafkaVersions') as unknown as shapes.KafkaCompatibleKafkaVersion[];
  }

}

export class KafkaListClusterOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListClusterOperationsRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusterOperations.ClusterOperationInfoList', props);
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
          ClusterArn: this.input.clusterArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusterOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaListClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListClustersRequest) {
    super(scope, id);
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
          ClusterNameFilter: this.input.clusterNameFilter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.ClusterInfoList', props);
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
          ClusterNameFilter: this.input.clusterNameFilter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaListConfigurationRevisions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListConfigurationRevisionsRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationRevisions.NextToken', props);
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
          Arn: this.input.arn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationRevisions.Revisions', props);
    return resource.getResponseField('Revisions') as unknown as shapes.KafkaConfigurationRevision[];
  }

}

export class KafkaListConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListConfigurationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurations.Configurations', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaListKafkaVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListKafkaVersionsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKafkaVersions.KafkaVersions', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListKafkaVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class KafkaListNodes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListNodesRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNodes.NextToken', props);
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
          ClusterArn: this.input.clusterArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNodes.NodeInfoList', props);
    return resource.getResponseField('NodeInfoList') as unknown as shapes.KafkaNodeInfo[];
  }

}

export class KafkaListScramSecrets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListScramSecretsRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListScramSecrets.NextToken', props);
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
          ClusterArn: this.input.clusterArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListScramSecrets.SecretArnList', props);
    return resource.getResponseField('SecretArnList') as unknown as string[];
  }

}

export class KafkaListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class KafkaRebootBroker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaRebootBrokerRequest) {
    super(scope, id);
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
          BrokerIds: this.input.brokerIds,
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootBroker.ClusterArn', props);
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
          BrokerIds: this.input.brokerIds,
          ClusterArn: this.input.clusterArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootBroker.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaUpdateBrokerCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaUpdateBrokerCountRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
          TargetNumberOfBrokerNodes: this.input.targetNumberOfBrokerNodes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBrokerCount.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
          TargetNumberOfBrokerNodes: this.input.targetNumberOfBrokerNodes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBrokerCount.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaUpdateBrokerStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaUpdateBrokerStorageRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
          TargetBrokerEBSVolumeInfo: this.input.targetBrokerEbsVolumeInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBrokerStorage.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
          TargetBrokerEBSVolumeInfo: this.input.targetBrokerEbsVolumeInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBrokerStorage.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaUpdateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaUpdateConfigurationRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          Description: this.input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get latestRevision(): KafkaUpdateConfigurationLatestRevision {
    return new KafkaUpdateConfigurationLatestRevision(this, 'LatestRevision', this.__resources, this.input);
  }

}

export class KafkaUpdateConfigurationLatestRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaUpdateConfigurationRequest) {
    super(scope, id);
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
          Arn: this.input.arn,
          Description: this.input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.LatestRevision.CreationTime', props);
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
          Arn: this.input.arn,
          Description: this.input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.LatestRevision.Description', props);
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
          Arn: this.input.arn,
          Description: this.input.description,
          ServerProperties: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class KafkaUpdateClusterConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaUpdateClusterConfigurationRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          ConfigurationInfo: {
            Arn: this.input.configurationInfo.arn,
            Revision: this.input.configurationInfo.revision,
          },
          CurrentVersion: this.input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfiguration.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          ConfigurationInfo: {
            Arn: this.input.configurationInfo.arn,
            Revision: this.input.configurationInfo.revision,
          },
          CurrentVersion: this.input.currentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfiguration.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaUpdateClusterKafkaVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaUpdateClusterKafkaVersionRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          ConfigurationInfo: {
            Arn: this.input.configurationInfo?.arn,
            Revision: this.input.configurationInfo?.revision,
          },
          CurrentVersion: this.input.currentVersion,
          TargetKafkaVersion: this.input.targetKafkaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterKafkaVersion.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          ConfigurationInfo: {
            Arn: this.input.configurationInfo?.arn,
            Revision: this.input.configurationInfo?.revision,
          },
          CurrentVersion: this.input.currentVersion,
          TargetKafkaVersion: this.input.targetKafkaVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterKafkaVersion.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

export class KafkaUpdateMonitoring extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.KafkaUpdateMonitoringRequest) {
    super(scope, id);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
          EnhancedMonitoring: this.input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMonitoring.ClusterArn', props);
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
          ClusterArn: this.input.clusterArn,
          CurrentVersion: this.input.currentVersion,
          EnhancedMonitoring: this.input.enhancedMonitoring,
          OpenMonitoring: {
            Prometheus: {
              JmxExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.jmxExporter?.enabledInBroker,
              },
              NodeExporter: {
                EnabledInBroker: this.input.openMonitoring?.prometheus.nodeExporter?.enabledInBroker,
              },
            },
          },
          LoggingInfo: {
            BrokerLogs: {
              CloudWatchLogs: {
                Enabled: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.enabled,
                LogGroup: this.input.loggingInfo?.brokerLogs.cloudWatchLogs?.logGroup,
              },
              Firehose: {
                DeliveryStream: this.input.loggingInfo?.brokerLogs.firehose?.deliveryStream,
                Enabled: this.input.loggingInfo?.brokerLogs.firehose?.enabled,
              },
              S3: {
                Bucket: this.input.loggingInfo?.brokerLogs.s3?.bucket,
                Enabled: this.input.loggingInfo?.brokerLogs.s3?.enabled,
                Prefix: this.input.loggingInfo?.brokerLogs.s3?.prefix,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMonitoring.ClusterOperationArn', props);
    return resource.getResponseField('ClusterOperationArn') as unknown as string;
  }

}

