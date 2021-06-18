import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SnowballClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelCluster(input: shapes.SnowballCancelClusterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.CancelCluster'),
        parameters: {
          ClusterId: input.clusterId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelCluster', props);
  }

  public cancelJob(input: shapes.SnowballCancelJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.CancelJob'),
        parameters: {
          JobId: input.jobId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelJob', props);
  }

  public createAddress(input: shapes.SnowballCreateAddressRequest): SnowballCreateAddress {
    return new SnowballCreateAddress(this, 'CreateAddress', this.__resources, input);
  }

  public createCluster(input: shapes.SnowballCreateClusterRequest): SnowballCreateCluster {
    return new SnowballCreateCluster(this, 'CreateCluster', this.__resources, input);
  }

  public createJob(input: shapes.SnowballCreateJobRequest): SnowballCreateJob {
    return new SnowballCreateJob(this, 'CreateJob', this.__resources, input);
  }

  public createReturnShippingLabel(input: shapes.SnowballCreateReturnShippingLabelRequest): SnowballCreateReturnShippingLabel {
    return new SnowballCreateReturnShippingLabel(this, 'CreateReturnShippingLabel', this.__resources, input);
  }

  public describeAddress(input: shapes.SnowballDescribeAddressRequest): SnowballDescribeAddress {
    return new SnowballDescribeAddress(this, 'DescribeAddress', this.__resources, input);
  }

  public describeAddresses(input: shapes.SnowballDescribeAddressesRequest): SnowballDescribeAddresses {
    return new SnowballDescribeAddresses(this, 'DescribeAddresses', this.__resources, input);
  }

  public describeCluster(input: shapes.SnowballDescribeClusterRequest): SnowballDescribeCluster {
    return new SnowballDescribeCluster(this, 'DescribeCluster', this.__resources, input);
  }

  public describeJob(input: shapes.SnowballDescribeJobRequest): SnowballDescribeJob {
    return new SnowballDescribeJob(this, 'DescribeJob', this.__resources, input);
  }

  public describeReturnShippingLabel(input: shapes.SnowballDescribeReturnShippingLabelRequest): SnowballDescribeReturnShippingLabel {
    return new SnowballDescribeReturnShippingLabel(this, 'DescribeReturnShippingLabel', this.__resources, input);
  }

  public fetchJobManifest(input: shapes.SnowballGetJobManifestRequest): SnowballFetchJobManifest {
    return new SnowballFetchJobManifest(this, 'FetchJobManifest', this.__resources, input);
  }

  public fetchJobUnlockCode(input: shapes.SnowballGetJobUnlockCodeRequest): SnowballFetchJobUnlockCode {
    return new SnowballFetchJobUnlockCode(this, 'FetchJobUnlockCode', this.__resources, input);
  }

  public fetchSnowballUsage(): SnowballFetchSnowballUsage {
    return new SnowballFetchSnowballUsage(this, 'FetchSnowballUsage', this.__resources);
  }

  public fetchSoftwareUpdates(input: shapes.SnowballGetSoftwareUpdatesRequest): SnowballFetchSoftwareUpdates {
    return new SnowballFetchSoftwareUpdates(this, 'FetchSoftwareUpdates', this.__resources, input);
  }

  public listClusterJobs(input: shapes.SnowballListClusterJobsRequest): SnowballListClusterJobs {
    return new SnowballListClusterJobs(this, 'ListClusterJobs', this.__resources, input);
  }

  public listClusters(input: shapes.SnowballListClustersRequest): SnowballListClusters {
    return new SnowballListClusters(this, 'ListClusters', this.__resources, input);
  }

  public listCompatibleImages(input: shapes.SnowballListCompatibleImagesRequest): SnowballListCompatibleImages {
    return new SnowballListCompatibleImages(this, 'ListCompatibleImages', this.__resources, input);
  }

  public listJobs(input: shapes.SnowballListJobsRequest): SnowballListJobs {
    return new SnowballListJobs(this, 'ListJobs', this.__resources, input);
  }

  public updateCluster(input: shapes.SnowballUpdateClusterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.UpdateCluster'),
        parameters: {
          ClusterId: input.clusterId,
          RoleARN: input.roleArn,
          Description: input.description,
          Resources: {
            S3Resources: input.resources?.s3Resources,
            LambdaResources: input.resources?.lambdaResources,
            Ec2AmiResources: input.resources?.ec2AmiResources,
          },
          AddressId: input.addressId,
          ShippingOption: input.shippingOption,
          Notification: {
            SnsTopicARN: input.notification?.snsTopicArn,
            JobStatesToNotify: input.notification?.jobStatesToNotify,
            NotifyAll: input.notification?.notifyAll,
          },
          ForwardingAddressId: input.forwardingAddressId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateCluster', props);
  }

  public updateJob(input: shapes.SnowballUpdateJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.UpdateJob'),
        parameters: {
          JobId: input.jobId,
          RoleARN: input.roleArn,
          Notification: {
            SnsTopicARN: input.notification?.snsTopicArn,
            JobStatesToNotify: input.notification?.jobStatesToNotify,
            NotifyAll: input.notification?.notifyAll,
          },
          Resources: {
            S3Resources: input.resources?.s3Resources,
            LambdaResources: input.resources?.lambdaResources,
            Ec2AmiResources: input.resources?.ec2AmiResources,
          },
          AddressId: input.addressId,
          ShippingOption: input.shippingOption,
          Description: input.description,
          SnowballCapacityPreference: input.snowballCapacityPreference,
          ForwardingAddressId: input.forwardingAddressId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateJob', props);
  }

  public updateJobShipmentState(input: shapes.SnowballUpdateJobShipmentStateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobShipmentState',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.UpdateJobShipmentState'),
        parameters: {
          JobId: input.jobId,
          ShipmentState: input.shipmentState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateJobShipmentState', props);
  }

}

export class SnowballCreateAddress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballCreateAddressRequest) {
    super(scope, id);
  }

  public get addressId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.CreateAddress.AddressId'),
        outputPath: 'AddressId',
        parameters: {
          Address: {
            AddressId: this.input.address.addressId,
            Name: this.input.address.name,
            Company: this.input.address.company,
            Street1: this.input.address.street1,
            Street2: this.input.address.street2,
            Street3: this.input.address.street3,
            City: this.input.address.city,
            StateOrProvince: this.input.address.stateOrProvince,
            PrefectureOrDistrict: this.input.address.prefectureOrDistrict,
            Landmark: this.input.address.landmark,
            Country: this.input.address.country,
            PostalCode: this.input.address.postalCode,
            PhoneNumber: this.input.address.phoneNumber,
            IsRestricted: this.input.address.isRestricted,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAddress.AddressId', props);
    return resource.getResponseField('AddressId') as unknown as string;
  }

}

export class SnowballCreateCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballCreateClusterRequest) {
    super(scope, id);
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.CreateCluster.ClusterId'),
        outputPath: 'ClusterId',
        parameters: {
          JobType: this.input.jobType,
          Resources: {
            S3Resources: this.input.resources.s3Resources,
            LambdaResources: this.input.resources.lambdaResources,
            Ec2AmiResources: this.input.resources.ec2AmiResources,
          },
          Description: this.input.description,
          AddressId: this.input.addressId,
          KmsKeyARN: this.input.kmsKeyArn,
          RoleARN: this.input.roleArn,
          SnowballType: this.input.snowballType,
          ShippingOption: this.input.shippingOption,
          Notification: {
            SnsTopicARN: this.input.notification?.snsTopicArn,
            JobStatesToNotify: this.input.notification?.jobStatesToNotify,
            NotifyAll: this.input.notification?.notifyAll,
          },
          ForwardingAddressId: this.input.forwardingAddressId,
          TaxDocuments: {
            IND: {
              GSTIN: this.input.taxDocuments?.ind?.gstin,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.ClusterId', props);
    return resource.getResponseField('ClusterId') as unknown as string;
  }

}

export class SnowballCreateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballCreateJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.CreateJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          JobType: this.input.jobType,
          Resources: {
            S3Resources: this.input.resources?.s3Resources,
            LambdaResources: this.input.resources?.lambdaResources,
            Ec2AmiResources: this.input.resources?.ec2AmiResources,
          },
          Description: this.input.description,
          AddressId: this.input.addressId,
          KmsKeyARN: this.input.kmsKeyArn,
          RoleARN: this.input.roleArn,
          SnowballCapacityPreference: this.input.snowballCapacityPreference,
          ShippingOption: this.input.shippingOption,
          Notification: {
            SnsTopicARN: this.input.notification?.snsTopicArn,
            JobStatesToNotify: this.input.notification?.jobStatesToNotify,
            NotifyAll: this.input.notification?.notifyAll,
          },
          ClusterId: this.input.clusterId,
          SnowballType: this.input.snowballType,
          ForwardingAddressId: this.input.forwardingAddressId,
          TaxDocuments: {
            IND: {
              GSTIN: this.input.taxDocuments?.ind?.gstin,
            },
          },
          DeviceConfiguration: {
            SnowconeDeviceConfiguration: {
              WirelessConnection: {
                IsWifiEnabled: this.input.deviceConfiguration?.snowconeDeviceConfiguration?.wirelessConnection?.isWifiEnabled,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class SnowballCreateReturnShippingLabel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballCreateReturnShippingLabelRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReturnShippingLabel',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.CreateReturnShippingLabel.Status'),
        outputPath: 'Status',
        parameters: {
          JobId: this.input.jobId,
          ShippingOption: this.input.shippingOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReturnShippingLabel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SnowballDescribeAddress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeAddressRequest) {
    super(scope, id);
  }

  public get address(): SnowballDescribeAddressAddress {
    return new SnowballDescribeAddressAddress(this, 'Address', this.__resources, this.input);
  }

}

export class SnowballDescribeAddressAddress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeAddressRequest) {
    super(scope, id);
  }

  public get addressId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.AddressId'),
        outputPath: 'Address.AddressId',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.AddressId', props);
    return resource.getResponseField('Address.AddressId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.Name'),
        outputPath: 'Address.Name',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.Name', props);
    return resource.getResponseField('Address.Name') as unknown as string;
  }

  public get company(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.Company'),
        outputPath: 'Address.Company',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.Company', props);
    return resource.getResponseField('Address.Company') as unknown as string;
  }

  public get street1(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.Street1'),
        outputPath: 'Address.Street1',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.Street1', props);
    return resource.getResponseField('Address.Street1') as unknown as string;
  }

  public get street2(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.Street2'),
        outputPath: 'Address.Street2',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.Street2', props);
    return resource.getResponseField('Address.Street2') as unknown as string;
  }

  public get street3(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.Street3'),
        outputPath: 'Address.Street3',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.Street3', props);
    return resource.getResponseField('Address.Street3') as unknown as string;
  }

  public get city(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.City'),
        outputPath: 'Address.City',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.City', props);
    return resource.getResponseField('Address.City') as unknown as string;
  }

  public get stateOrProvince(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.StateOrProvince'),
        outputPath: 'Address.StateOrProvince',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.StateOrProvince', props);
    return resource.getResponseField('Address.StateOrProvince') as unknown as string;
  }

  public get prefectureOrDistrict(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.PrefectureOrDistrict'),
        outputPath: 'Address.PrefectureOrDistrict',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.PrefectureOrDistrict', props);
    return resource.getResponseField('Address.PrefectureOrDistrict') as unknown as string;
  }

  public get landmark(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.Landmark'),
        outputPath: 'Address.Landmark',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.Landmark', props);
    return resource.getResponseField('Address.Landmark') as unknown as string;
  }

  public get country(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.Country'),
        outputPath: 'Address.Country',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.Country', props);
    return resource.getResponseField('Address.Country') as unknown as string;
  }

  public get postalCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.PostalCode'),
        outputPath: 'Address.PostalCode',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.PostalCode', props);
    return resource.getResponseField('Address.PostalCode') as unknown as string;
  }

  public get phoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.PhoneNumber'),
        outputPath: 'Address.PhoneNumber',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.PhoneNumber', props);
    return resource.getResponseField('Address.PhoneNumber') as unknown as string;
  }

  public get isRestricted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddress',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddress.Address.IsRestricted'),
        outputPath: 'Address.IsRestricted',
        parameters: {
          AddressId: this.input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddress.Address.IsRestricted', props);
    return resource.getResponseField('Address.IsRestricted') as unknown as boolean;
  }

}

export class SnowballDescribeAddresses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeAddressesRequest) {
    super(scope, id);
  }

  public get addresses(): shapes.SnowballAddress[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddresses',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddresses.Addresses'),
        outputPath: 'Addresses',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddresses.Addresses', props);
    return resource.getResponseField('Addresses') as unknown as shapes.SnowballAddress[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAddresses',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeAddresses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAddresses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballDescribeCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeClusterRequest) {
    super(scope, id);
  }

  public get clusterMetadata(): SnowballDescribeClusterClusterMetadata {
    return new SnowballDescribeClusterClusterMetadata(this, 'ClusterMetadata', this.__resources, this.input);
  }

}

export class SnowballDescribeClusterClusterMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeClusterRequest) {
    super(scope, id);
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.ClusterId'),
        outputPath: 'ClusterMetadata.ClusterId',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.ClusterId', props);
    return resource.getResponseField('ClusterMetadata.ClusterId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.Description'),
        outputPath: 'ClusterMetadata.Description',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.Description', props);
    return resource.getResponseField('ClusterMetadata.Description') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.KmsKeyARN'),
        outputPath: 'ClusterMetadata.KmsKeyARN',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.KmsKeyARN', props);
    return resource.getResponseField('ClusterMetadata.KmsKeyARN') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.RoleARN'),
        outputPath: 'ClusterMetadata.RoleARN',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.RoleARN', props);
    return resource.getResponseField('ClusterMetadata.RoleARN') as unknown as string;
  }

  public get clusterState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.ClusterState'),
        outputPath: 'ClusterMetadata.ClusterState',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.ClusterState', props);
    return resource.getResponseField('ClusterMetadata.ClusterState') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.JobType'),
        outputPath: 'ClusterMetadata.JobType',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.JobType', props);
    return resource.getResponseField('ClusterMetadata.JobType') as unknown as string;
  }

  public get snowballType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.SnowballType'),
        outputPath: 'ClusterMetadata.SnowballType',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.SnowballType', props);
    return resource.getResponseField('ClusterMetadata.SnowballType') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.CreationDate'),
        outputPath: 'ClusterMetadata.CreationDate',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.CreationDate', props);
    return resource.getResponseField('ClusterMetadata.CreationDate') as unknown as string;
  }

  public get resources(): SnowballDescribeClusterClusterMetadataResources {
    return new SnowballDescribeClusterClusterMetadataResources(this, 'Resources', this.__resources, this.input);
  }

  public get addressId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.AddressId'),
        outputPath: 'ClusterMetadata.AddressId',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.AddressId', props);
    return resource.getResponseField('ClusterMetadata.AddressId') as unknown as string;
  }

  public get shippingOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.ShippingOption'),
        outputPath: 'ClusterMetadata.ShippingOption',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.ShippingOption', props);
    return resource.getResponseField('ClusterMetadata.ShippingOption') as unknown as string;
  }

  public get notification(): SnowballDescribeClusterClusterMetadataNotification {
    return new SnowballDescribeClusterClusterMetadataNotification(this, 'Notification', this.__resources, this.input);
  }

  public get forwardingAddressId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.ForwardingAddressId'),
        outputPath: 'ClusterMetadata.ForwardingAddressId',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.ForwardingAddressId', props);
    return resource.getResponseField('ClusterMetadata.ForwardingAddressId') as unknown as string;
  }

  public get taxDocuments(): SnowballDescribeClusterClusterMetadataTaxDocuments {
    return new SnowballDescribeClusterClusterMetadataTaxDocuments(this, 'TaxDocuments', this.__resources, this.input);
  }

}

export class SnowballDescribeClusterClusterMetadataResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeClusterRequest) {
    super(scope, id);
  }

  public get s3Resources(): shapes.SnowballS3Resource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.Resources.S3Resources'),
        outputPath: 'ClusterMetadata.Resources.S3Resources',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.Resources.S3Resources', props);
    return resource.getResponseField('ClusterMetadata.Resources.S3Resources') as unknown as shapes.SnowballS3Resource[];
  }

  public get lambdaResources(): shapes.SnowballLambdaResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.Resources.LambdaResources'),
        outputPath: 'ClusterMetadata.Resources.LambdaResources',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.Resources.LambdaResources', props);
    return resource.getResponseField('ClusterMetadata.Resources.LambdaResources') as unknown as shapes.SnowballLambdaResource[];
  }

  public get ec2AmiResources(): shapes.SnowballEc2AmiResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.Resources.Ec2AmiResources'),
        outputPath: 'ClusterMetadata.Resources.Ec2AmiResources',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.Resources.Ec2AmiResources', props);
    return resource.getResponseField('ClusterMetadata.Resources.Ec2AmiResources') as unknown as shapes.SnowballEc2AmiResource[];
  }

}

export class SnowballDescribeClusterClusterMetadataNotification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeClusterRequest) {
    super(scope, id);
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.Notification.SnsTopicARN'),
        outputPath: 'ClusterMetadata.Notification.SnsTopicARN',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.Notification.SnsTopicARN', props);
    return resource.getResponseField('ClusterMetadata.Notification.SnsTopicARN') as unknown as string;
  }

  public get jobStatesToNotify(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.Notification.JobStatesToNotify'),
        outputPath: 'ClusterMetadata.Notification.JobStatesToNotify',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.Notification.JobStatesToNotify', props);
    return resource.getResponseField('ClusterMetadata.Notification.JobStatesToNotify') as unknown as string[];
  }

  public get notifyAll(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.Notification.NotifyAll'),
        outputPath: 'ClusterMetadata.Notification.NotifyAll',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.Notification.NotifyAll', props);
    return resource.getResponseField('ClusterMetadata.Notification.NotifyAll') as unknown as boolean;
  }

}

export class SnowballDescribeClusterClusterMetadataTaxDocuments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeClusterRequest) {
    super(scope, id);
  }

  public get ind(): SnowballDescribeClusterClusterMetadataTaxDocumentsInd {
    return new SnowballDescribeClusterClusterMetadataTaxDocumentsInd(this, 'Ind', this.__resources, this.input);
  }

}

export class SnowballDescribeClusterClusterMetadataTaxDocumentsInd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeClusterRequest) {
    super(scope, id);
  }

  public get gstin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.TaxDocuments.IND.GSTIN'),
        outputPath: 'ClusterMetadata.TaxDocuments.IND.GSTIN',
        parameters: {
          ClusterId: this.input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.ClusterMetadata.TaxDocuments.IND.GSTIN', props);
    return resource.getResponseField('ClusterMetadata.TaxDocuments.IND.GSTIN') as unknown as string;
  }

}

export class SnowballDescribeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get jobMetadata(): SnowballDescribeJobJobMetadata {
    return new SnowballDescribeJobJobMetadata(this, 'JobMetadata', this.__resources, this.input);
  }

  public get subJobMetadata(): shapes.SnowballJobMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.SubJobMetadata'),
        outputPath: 'SubJobMetadata',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SubJobMetadata', props);
    return resource.getResponseField('SubJobMetadata') as unknown as shapes.SnowballJobMetadata[];
  }

}

export class SnowballDescribeJobJobMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.JobId'),
        outputPath: 'JobMetadata.JobId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.JobId', props);
    return resource.getResponseField('JobMetadata.JobId') as unknown as string;
  }

  public get jobState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.JobState'),
        outputPath: 'JobMetadata.JobState',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.JobState', props);
    return resource.getResponseField('JobMetadata.JobState') as unknown as string;
  }

  public get jobType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.JobType'),
        outputPath: 'JobMetadata.JobType',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.JobType', props);
    return resource.getResponseField('JobMetadata.JobType') as unknown as string;
  }

  public get snowballType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.SnowballType'),
        outputPath: 'JobMetadata.SnowballType',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.SnowballType', props);
    return resource.getResponseField('JobMetadata.SnowballType') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.CreationDate'),
        outputPath: 'JobMetadata.CreationDate',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.CreationDate', props);
    return resource.getResponseField('JobMetadata.CreationDate') as unknown as string;
  }

  public get resources(): SnowballDescribeJobJobMetadataResources {
    return new SnowballDescribeJobJobMetadataResources(this, 'Resources', this.__resources, this.input);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.Description'),
        outputPath: 'JobMetadata.Description',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.Description', props);
    return resource.getResponseField('JobMetadata.Description') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.KmsKeyARN'),
        outputPath: 'JobMetadata.KmsKeyARN',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.KmsKeyARN', props);
    return resource.getResponseField('JobMetadata.KmsKeyARN') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.RoleARN'),
        outputPath: 'JobMetadata.RoleARN',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.RoleARN', props);
    return resource.getResponseField('JobMetadata.RoleARN') as unknown as string;
  }

  public get addressId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.AddressId'),
        outputPath: 'JobMetadata.AddressId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.AddressId', props);
    return resource.getResponseField('JobMetadata.AddressId') as unknown as string;
  }

  public get shippingDetails(): SnowballDescribeJobJobMetadataShippingDetails {
    return new SnowballDescribeJobJobMetadataShippingDetails(this, 'ShippingDetails', this.__resources, this.input);
  }

  public get snowballCapacityPreference(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.SnowballCapacityPreference'),
        outputPath: 'JobMetadata.SnowballCapacityPreference',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.SnowballCapacityPreference', props);
    return resource.getResponseField('JobMetadata.SnowballCapacityPreference') as unknown as string;
  }

  public get notification(): SnowballDescribeJobJobMetadataNotification {
    return new SnowballDescribeJobJobMetadataNotification(this, 'Notification', this.__resources, this.input);
  }

  public get dataTransferProgress(): SnowballDescribeJobJobMetadataDataTransferProgress {
    return new SnowballDescribeJobJobMetadataDataTransferProgress(this, 'DataTransferProgress', this.__resources, this.input);
  }

  public get jobLogInfo(): SnowballDescribeJobJobMetadataJobLogInfo {
    return new SnowballDescribeJobJobMetadataJobLogInfo(this, 'JobLogInfo', this.__resources, this.input);
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.ClusterId'),
        outputPath: 'JobMetadata.ClusterId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.ClusterId', props);
    return resource.getResponseField('JobMetadata.ClusterId') as unknown as string;
  }

  public get forwardingAddressId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.ForwardingAddressId'),
        outputPath: 'JobMetadata.ForwardingAddressId',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.ForwardingAddressId', props);
    return resource.getResponseField('JobMetadata.ForwardingAddressId') as unknown as string;
  }

  public get taxDocuments(): SnowballDescribeJobJobMetadataTaxDocuments {
    return new SnowballDescribeJobJobMetadataTaxDocuments(this, 'TaxDocuments', this.__resources, this.input);
  }

  public get deviceConfiguration(): SnowballDescribeJobJobMetadataDeviceConfiguration {
    return new SnowballDescribeJobJobMetadataDeviceConfiguration(this, 'DeviceConfiguration', this.__resources, this.input);
  }

}

export class SnowballDescribeJobJobMetadataResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get s3Resources(): shapes.SnowballS3Resource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.Resources.S3Resources'),
        outputPath: 'JobMetadata.Resources.S3Resources',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.Resources.S3Resources', props);
    return resource.getResponseField('JobMetadata.Resources.S3Resources') as unknown as shapes.SnowballS3Resource[];
  }

  public get lambdaResources(): shapes.SnowballLambdaResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.Resources.LambdaResources'),
        outputPath: 'JobMetadata.Resources.LambdaResources',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.Resources.LambdaResources', props);
    return resource.getResponseField('JobMetadata.Resources.LambdaResources') as unknown as shapes.SnowballLambdaResource[];
  }

  public get ec2AmiResources(): shapes.SnowballEc2AmiResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.Resources.Ec2AmiResources'),
        outputPath: 'JobMetadata.Resources.Ec2AmiResources',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.Resources.Ec2AmiResources', props);
    return resource.getResponseField('JobMetadata.Resources.Ec2AmiResources') as unknown as shapes.SnowballEc2AmiResource[];
  }

}

export class SnowballDescribeJobJobMetadataShippingDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get shippingOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.ShippingDetails.ShippingOption'),
        outputPath: 'JobMetadata.ShippingDetails.ShippingOption',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.ShippingDetails.ShippingOption', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.ShippingOption') as unknown as string;
  }

  public get inboundShipment(): SnowballDescribeJobJobMetadataShippingDetailsInboundShipment {
    return new SnowballDescribeJobJobMetadataShippingDetailsInboundShipment(this, 'InboundShipment', this.__resources, this.input);
  }

  public get outboundShipment(): SnowballDescribeJobJobMetadataShippingDetailsOutboundShipment {
    return new SnowballDescribeJobJobMetadataShippingDetailsOutboundShipment(this, 'OutboundShipment', this.__resources, this.input);
  }

}

export class SnowballDescribeJobJobMetadataShippingDetailsInboundShipment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.ShippingDetails.InboundShipment.Status'),
        outputPath: 'JobMetadata.ShippingDetails.InboundShipment.Status',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.ShippingDetails.InboundShipment.Status', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.InboundShipment.Status') as unknown as string;
  }

  public get trackingNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.ShippingDetails.InboundShipment.TrackingNumber'),
        outputPath: 'JobMetadata.ShippingDetails.InboundShipment.TrackingNumber',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.ShippingDetails.InboundShipment.TrackingNumber', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.InboundShipment.TrackingNumber') as unknown as string;
  }

}

export class SnowballDescribeJobJobMetadataShippingDetailsOutboundShipment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.ShippingDetails.OutboundShipment.Status'),
        outputPath: 'JobMetadata.ShippingDetails.OutboundShipment.Status',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.ShippingDetails.OutboundShipment.Status', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.OutboundShipment.Status') as unknown as string;
  }

  public get trackingNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.ShippingDetails.OutboundShipment.TrackingNumber'),
        outputPath: 'JobMetadata.ShippingDetails.OutboundShipment.TrackingNumber',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.ShippingDetails.OutboundShipment.TrackingNumber', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.OutboundShipment.TrackingNumber') as unknown as string;
  }

}

export class SnowballDescribeJobJobMetadataNotification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.Notification.SnsTopicARN'),
        outputPath: 'JobMetadata.Notification.SnsTopicARN',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.Notification.SnsTopicARN', props);
    return resource.getResponseField('JobMetadata.Notification.SnsTopicARN') as unknown as string;
  }

  public get jobStatesToNotify(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.Notification.JobStatesToNotify'),
        outputPath: 'JobMetadata.Notification.JobStatesToNotify',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.Notification.JobStatesToNotify', props);
    return resource.getResponseField('JobMetadata.Notification.JobStatesToNotify') as unknown as string[];
  }

  public get notifyAll(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.Notification.NotifyAll'),
        outputPath: 'JobMetadata.Notification.NotifyAll',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.Notification.NotifyAll', props);
    return resource.getResponseField('JobMetadata.Notification.NotifyAll') as unknown as boolean;
  }

}

export class SnowballDescribeJobJobMetadataDataTransferProgress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get bytesTransferred(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.DataTransferProgress.BytesTransferred'),
        outputPath: 'JobMetadata.DataTransferProgress.BytesTransferred',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.DataTransferProgress.BytesTransferred', props);
    return resource.getResponseField('JobMetadata.DataTransferProgress.BytesTransferred') as unknown as number;
  }

  public get objectsTransferred(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.DataTransferProgress.ObjectsTransferred'),
        outputPath: 'JobMetadata.DataTransferProgress.ObjectsTransferred',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.DataTransferProgress.ObjectsTransferred', props);
    return resource.getResponseField('JobMetadata.DataTransferProgress.ObjectsTransferred') as unknown as number;
  }

  public get totalBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.DataTransferProgress.TotalBytes'),
        outputPath: 'JobMetadata.DataTransferProgress.TotalBytes',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.DataTransferProgress.TotalBytes', props);
    return resource.getResponseField('JobMetadata.DataTransferProgress.TotalBytes') as unknown as number;
  }

  public get totalObjects(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.DataTransferProgress.TotalObjects'),
        outputPath: 'JobMetadata.DataTransferProgress.TotalObjects',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.DataTransferProgress.TotalObjects', props);
    return resource.getResponseField('JobMetadata.DataTransferProgress.TotalObjects') as unknown as number;
  }

}

export class SnowballDescribeJobJobMetadataJobLogInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get jobCompletionReportUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.JobLogInfo.JobCompletionReportURI'),
        outputPath: 'JobMetadata.JobLogInfo.JobCompletionReportURI',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.JobLogInfo.JobCompletionReportURI', props);
    return resource.getResponseField('JobMetadata.JobLogInfo.JobCompletionReportURI') as unknown as string;
  }

  public get jobSuccessLogUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.JobLogInfo.JobSuccessLogURI'),
        outputPath: 'JobMetadata.JobLogInfo.JobSuccessLogURI',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.JobLogInfo.JobSuccessLogURI', props);
    return resource.getResponseField('JobMetadata.JobLogInfo.JobSuccessLogURI') as unknown as string;
  }

  public get jobFailureLogUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.JobLogInfo.JobFailureLogURI'),
        outputPath: 'JobMetadata.JobLogInfo.JobFailureLogURI',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.JobLogInfo.JobFailureLogURI', props);
    return resource.getResponseField('JobMetadata.JobLogInfo.JobFailureLogURI') as unknown as string;
  }

}

export class SnowballDescribeJobJobMetadataTaxDocuments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get ind(): SnowballDescribeJobJobMetadataTaxDocumentsInd {
    return new SnowballDescribeJobJobMetadataTaxDocumentsInd(this, 'Ind', this.__resources, this.input);
  }

}

export class SnowballDescribeJobJobMetadataTaxDocumentsInd extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get gstin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.TaxDocuments.IND.GSTIN'),
        outputPath: 'JobMetadata.TaxDocuments.IND.GSTIN',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.TaxDocuments.IND.GSTIN', props);
    return resource.getResponseField('JobMetadata.TaxDocuments.IND.GSTIN') as unknown as string;
  }

}

export class SnowballDescribeJobJobMetadataDeviceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get snowconeDeviceConfiguration(): SnowballDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration {
    return new SnowballDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration(this, 'SnowconeDeviceConfiguration', this.__resources, this.input);
  }

}

export class SnowballDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get wirelessConnection(): SnowballDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection {
    return new SnowballDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection(this, 'WirelessConnection', this.__resources, this.input);
  }

}

export class SnowballDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeJobRequest) {
    super(scope, id);
  }

  public get isWifiEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.DeviceConfiguration.SnowconeDeviceConfiguration.WirelessConnection.IsWifiEnabled'),
        outputPath: 'JobMetadata.DeviceConfiguration.SnowconeDeviceConfiguration.WirelessConnection.IsWifiEnabled',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobMetadata.DeviceConfiguration.SnowconeDeviceConfiguration.WirelessConnection.IsWifiEnabled', props);
    return resource.getResponseField('JobMetadata.DeviceConfiguration.SnowconeDeviceConfiguration.WirelessConnection.IsWifiEnabled') as unknown as boolean;
  }

}

export class SnowballDescribeReturnShippingLabel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballDescribeReturnShippingLabelRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReturnShippingLabel',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeReturnShippingLabel.Status'),
        outputPath: 'Status',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReturnShippingLabel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReturnShippingLabel',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeReturnShippingLabel.ExpirationDate'),
        outputPath: 'ExpirationDate',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReturnShippingLabel.ExpirationDate', props);
    return resource.getResponseField('ExpirationDate') as unknown as string;
  }

}

export class SnowballFetchJobManifest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballGetJobManifestRequest) {
    super(scope, id);
  }

  public get manifestUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobManifest',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.GetJobManifest.ManifestURI'),
        outputPath: 'ManifestURI',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobManifest.ManifestURI', props);
    return resource.getResponseField('ManifestURI') as unknown as string;
  }

}

export class SnowballFetchJobUnlockCode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballGetJobUnlockCodeRequest) {
    super(scope, id);
  }

  public get unlockCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobUnlockCode',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.GetJobUnlockCode.UnlockCode'),
        outputPath: 'UnlockCode',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobUnlockCode.UnlockCode', props);
    return resource.getResponseField('UnlockCode') as unknown as string;
  }

}

export class SnowballFetchSnowballUsage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get snowballLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSnowballUsage',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.GetSnowballUsage.SnowballLimit'),
        outputPath: 'SnowballLimit',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSnowballUsage.SnowballLimit', props);
    return resource.getResponseField('SnowballLimit') as unknown as number;
  }

  public get snowballsInUse(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSnowballUsage',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.GetSnowballUsage.SnowballsInUse'),
        outputPath: 'SnowballsInUse',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSnowballUsage.SnowballsInUse', props);
    return resource.getResponseField('SnowballsInUse') as unknown as number;
  }

}

export class SnowballFetchSoftwareUpdates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballGetSoftwareUpdatesRequest) {
    super(scope, id);
  }

  public get updatesUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSoftwareUpdates',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.GetSoftwareUpdates.UpdatesURI'),
        outputPath: 'UpdatesURI',
        parameters: {
          JobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSoftwareUpdates.UpdatesURI', props);
    return resource.getResponseField('UpdatesURI') as unknown as string;
  }

}

export class SnowballListClusterJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballListClusterJobsRequest) {
    super(scope, id);
  }

  public get jobListEntries(): shapes.SnowballJobListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusterJobs',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListClusterJobs.JobListEntries'),
        outputPath: 'JobListEntries',
        parameters: {
          ClusterId: this.input.clusterId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusterJobs.JobListEntries', props);
    return resource.getResponseField('JobListEntries') as unknown as shapes.SnowballJobListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusterJobs',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListClusterJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterId: this.input.clusterId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusterJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballListClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballListClustersRequest) {
    super(scope, id);
  }

  public get clusterListEntries(): shapes.SnowballClusterListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListClusters.ClusterListEntries'),
        outputPath: 'ClusterListEntries',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.ClusterListEntries', props);
    return resource.getResponseField('ClusterListEntries') as unknown as shapes.SnowballClusterListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListClusters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballListCompatibleImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballListCompatibleImagesRequest) {
    super(scope, id);
  }

  public get compatibleImages(): shapes.SnowballCompatibleImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCompatibleImages',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListCompatibleImages.CompatibleImages'),
        outputPath: 'CompatibleImages',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCompatibleImages.CompatibleImages', props);
    return resource.getResponseField('CompatibleImages') as unknown as shapes.SnowballCompatibleImage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCompatibleImages',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListCompatibleImages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCompatibleImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SnowballListJobsRequest) {
    super(scope, id);
  }

  public get jobListEntries(): shapes.SnowballJobListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListJobs.JobListEntries'),
        outputPath: 'JobListEntries',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.JobListEntries', props);
    return resource.getResponseField('JobListEntries') as unknown as shapes.SnowballJobListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

