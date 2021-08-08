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

  public createAddress(input: shapes.SnowballCreateAddressRequest): SnowballResponsesCreateAddress {
    return new SnowballResponsesCreateAddress(this, this.__resources, input);
  }

  public createCluster(input: shapes.SnowballCreateClusterRequest): SnowballResponsesCreateCluster {
    return new SnowballResponsesCreateCluster(this, this.__resources, input);
  }

  public createJob(input: shapes.SnowballCreateJobRequest): SnowballResponsesCreateJob {
    return new SnowballResponsesCreateJob(this, this.__resources, input);
  }

  public createLongTermPricing(input: shapes.SnowballCreateLongTermPricingRequest): SnowballResponsesCreateLongTermPricing {
    return new SnowballResponsesCreateLongTermPricing(this, this.__resources, input);
  }

  public createReturnShippingLabel(input: shapes.SnowballCreateReturnShippingLabelRequest): SnowballResponsesCreateReturnShippingLabel {
    return new SnowballResponsesCreateReturnShippingLabel(this, this.__resources, input);
  }

  public describeAddress(input: shapes.SnowballDescribeAddressRequest): SnowballResponsesDescribeAddress {
    return new SnowballResponsesDescribeAddress(this, this.__resources, input);
  }

  public describeAddresses(input: shapes.SnowballDescribeAddressesRequest): SnowballResponsesDescribeAddresses {
    return new SnowballResponsesDescribeAddresses(this, this.__resources, input);
  }

  public describeCluster(input: shapes.SnowballDescribeClusterRequest): SnowballResponsesDescribeCluster {
    return new SnowballResponsesDescribeCluster(this, this.__resources, input);
  }

  public describeJob(input: shapes.SnowballDescribeJobRequest): SnowballResponsesDescribeJob {
    return new SnowballResponsesDescribeJob(this, this.__resources, input);
  }

  public describeReturnShippingLabel(input: shapes.SnowballDescribeReturnShippingLabelRequest): SnowballResponsesDescribeReturnShippingLabel {
    return new SnowballResponsesDescribeReturnShippingLabel(this, this.__resources, input);
  }

  public fetchJobManifest(input: shapes.SnowballGetJobManifestRequest): SnowballResponsesFetchJobManifest {
    return new SnowballResponsesFetchJobManifest(this, this.__resources, input);
  }

  public fetchJobUnlockCode(input: shapes.SnowballGetJobUnlockCodeRequest): SnowballResponsesFetchJobUnlockCode {
    return new SnowballResponsesFetchJobUnlockCode(this, this.__resources, input);
  }

  public fetchSnowballUsage(): SnowballResponsesFetchSnowballUsage {
    return new SnowballResponsesFetchSnowballUsage(this, this.__resources);
  }

  public fetchSoftwareUpdates(input: shapes.SnowballGetSoftwareUpdatesRequest): SnowballResponsesFetchSoftwareUpdates {
    return new SnowballResponsesFetchSoftwareUpdates(this, this.__resources, input);
  }

  public listClusterJobs(input: shapes.SnowballListClusterJobsRequest): SnowballResponsesListClusterJobs {
    return new SnowballResponsesListClusterJobs(this, this.__resources, input);
  }

  public listClusters(input: shapes.SnowballListClustersRequest): SnowballResponsesListClusters {
    return new SnowballResponsesListClusters(this, this.__resources, input);
  }

  public listCompatibleImages(input: shapes.SnowballListCompatibleImagesRequest): SnowballResponsesListCompatibleImages {
    return new SnowballResponsesListCompatibleImages(this, this.__resources, input);
  }

  public listJobs(input: shapes.SnowballListJobsRequest): SnowballResponsesListJobs {
    return new SnowballResponsesListJobs(this, this.__resources, input);
  }

  public listLongTermPricing(input: shapes.SnowballListLongTermPricingRequest): SnowballResponsesListLongTermPricing {
    return new SnowballResponsesListLongTermPricing(this, this.__resources, input);
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
          OnDeviceServiceConfiguration: {
            NFSOnDeviceService: {
              StorageLimit: input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageLimit,
              StorageUnit: input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageUnit,
            },
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
          OnDeviceServiceConfiguration: {
            NFSOnDeviceService: {
              StorageLimit: input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageLimit,
              StorageUnit: input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageUnit,
            },
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

  public updateLongTermPricing(input: shapes.SnowballUpdateLongTermPricingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLongTermPricing',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.UpdateLongTermPricing'),
        parameters: {
          LongTermPricingId: input.longTermPricingId,
          ReplacementJob: input.replacementJob,
          IsLongTermPricingAutoRenew: input.isLongTermPricingAutoRenew,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLongTermPricing', props);
  }

}

export class SnowballResponsesCreateAddress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballCreateAddressRequest) {
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
            AddressId: this.__input.address.addressId,
            Name: this.__input.address.name,
            Company: this.__input.address.company,
            Street1: this.__input.address.street1,
            Street2: this.__input.address.street2,
            Street3: this.__input.address.street3,
            City: this.__input.address.city,
            StateOrProvince: this.__input.address.stateOrProvince,
            PrefectureOrDistrict: this.__input.address.prefectureOrDistrict,
            Landmark: this.__input.address.landmark,
            Country: this.__input.address.country,
            PostalCode: this.__input.address.postalCode,
            PhoneNumber: this.__input.address.phoneNumber,
            IsRestricted: this.__input.address.isRestricted,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAddress.AddressId', props);
    return resource.getResponseField('AddressId') as unknown as string;
  }

}

export class SnowballResponsesCreateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballCreateClusterRequest) {
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
          JobType: this.__input.jobType,
          Resources: {
            S3Resources: this.__input.resources.s3Resources,
            LambdaResources: this.__input.resources.lambdaResources,
            Ec2AmiResources: this.__input.resources.ec2AmiResources,
          },
          OnDeviceServiceConfiguration: {
            NFSOnDeviceService: {
              StorageLimit: this.__input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageLimit,
              StorageUnit: this.__input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageUnit,
            },
          },
          Description: this.__input.description,
          AddressId: this.__input.addressId,
          KmsKeyARN: this.__input.kmsKeyArn,
          RoleARN: this.__input.roleArn,
          SnowballType: this.__input.snowballType,
          ShippingOption: this.__input.shippingOption,
          Notification: {
            SnsTopicARN: this.__input.notification?.snsTopicArn,
            JobStatesToNotify: this.__input.notification?.jobStatesToNotify,
            NotifyAll: this.__input.notification?.notifyAll,
          },
          ForwardingAddressId: this.__input.forwardingAddressId,
          TaxDocuments: {
            IND: {
              GSTIN: this.__input.taxDocuments?.ind?.gstin,
            },
          },
          RemoteManagement: this.__input.remoteManagement,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.ClusterId', props);
    return resource.getResponseField('ClusterId') as unknown as string;
  }

}

export class SnowballResponsesCreateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballCreateJobRequest) {
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
          JobType: this.__input.jobType,
          Resources: {
            S3Resources: this.__input.resources?.s3Resources,
            LambdaResources: this.__input.resources?.lambdaResources,
            Ec2AmiResources: this.__input.resources?.ec2AmiResources,
          },
          OnDeviceServiceConfiguration: {
            NFSOnDeviceService: {
              StorageLimit: this.__input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageLimit,
              StorageUnit: this.__input.onDeviceServiceConfiguration?.nfsOnDeviceService?.storageUnit,
            },
          },
          Description: this.__input.description,
          AddressId: this.__input.addressId,
          KmsKeyARN: this.__input.kmsKeyArn,
          RoleARN: this.__input.roleArn,
          SnowballCapacityPreference: this.__input.snowballCapacityPreference,
          ShippingOption: this.__input.shippingOption,
          Notification: {
            SnsTopicARN: this.__input.notification?.snsTopicArn,
            JobStatesToNotify: this.__input.notification?.jobStatesToNotify,
            NotifyAll: this.__input.notification?.notifyAll,
          },
          ClusterId: this.__input.clusterId,
          SnowballType: this.__input.snowballType,
          ForwardingAddressId: this.__input.forwardingAddressId,
          TaxDocuments: {
            IND: {
              GSTIN: this.__input.taxDocuments?.ind?.gstin,
            },
          },
          DeviceConfiguration: {
            SnowconeDeviceConfiguration: {
              WirelessConnection: {
                IsWifiEnabled: this.__input.deviceConfiguration?.snowconeDeviceConfiguration?.wirelessConnection?.isWifiEnabled,
              },
            },
          },
          RemoteManagement: this.__input.remoteManagement,
          LongTermPricingId: this.__input.longTermPricingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

}

export class SnowballResponsesCreateLongTermPricing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballCreateLongTermPricingRequest) {
  }

  public get longTermPricingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLongTermPricing',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.CreateLongTermPricing.LongTermPricingId'),
        outputPath: 'LongTermPricingId',
        parameters: {
          LongTermPricingType: this.__input.longTermPricingType,
          IsLongTermPricingAutoRenew: this.__input.isLongTermPricingAutoRenew,
          SnowballType: this.__input.snowballType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLongTermPricing.LongTermPricingId', props);
    return resource.getResponseField('LongTermPricingId') as unknown as string;
  }

}

export class SnowballResponsesCreateReturnShippingLabel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballCreateReturnShippingLabelRequest) {
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
          JobId: this.__input.jobId,
          ShippingOption: this.__input.shippingOption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReturnShippingLabel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SnowballResponsesDescribeAddress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeAddressRequest) {
  }

  public get address(): SnowballResponsesDescribeAddressAddress {
    return new SnowballResponsesDescribeAddressAddress(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeAddressAddress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeAddressRequest) {
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.AddressId', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.Name', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.Company', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.Street1', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.Street2', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.Street3', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.City', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.StateOrProvince', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.PrefectureOrDistrict', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.Landmark', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.Country', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.PostalCode', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.PhoneNumber', props);
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
          AddressId: this.__input.addressId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddress.Address.IsRestricted', props);
    return resource.getResponseField('Address.IsRestricted') as unknown as boolean;
  }

}

export class SnowballResponsesDescribeAddresses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeAddressesRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddresses.Addresses', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAddresses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballResponsesDescribeCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
  }

  public get clusterMetadata(): SnowballResponsesDescribeClusterClusterMetadata {
    return new SnowballResponsesDescribeClusterClusterMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeClusterClusterMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.ClusterId', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.Description', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.KmsKeyARN', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.RoleARN', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.ClusterState', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.JobType', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.SnowballType', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.CreationDate', props);
    return resource.getResponseField('ClusterMetadata.CreationDate') as unknown as string;
  }

  public get resources(): SnowballResponsesDescribeClusterClusterMetadataResources {
    return new SnowballResponsesDescribeClusterClusterMetadataResources(this.__scope, this.__resources, this.__input);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.AddressId', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.ShippingOption', props);
    return resource.getResponseField('ClusterMetadata.ShippingOption') as unknown as string;
  }

  public get notification(): SnowballResponsesDescribeClusterClusterMetadataNotification {
    return new SnowballResponsesDescribeClusterClusterMetadataNotification(this.__scope, this.__resources, this.__input);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.ForwardingAddressId', props);
    return resource.getResponseField('ClusterMetadata.ForwardingAddressId') as unknown as string;
  }

  public get taxDocuments(): SnowballResponsesDescribeClusterClusterMetadataTaxDocuments {
    return new SnowballResponsesDescribeClusterClusterMetadataTaxDocuments(this.__scope, this.__resources, this.__input);
  }

  public get onDeviceServiceConfiguration(): SnowballResponsesDescribeClusterClusterMetadataOnDeviceServiceConfiguration {
    return new SnowballResponsesDescribeClusterClusterMetadataOnDeviceServiceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeClusterClusterMetadataResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.Resources.S3Resources', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.Resources.LambdaResources', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.Resources.Ec2AmiResources', props);
    return resource.getResponseField('ClusterMetadata.Resources.Ec2AmiResources') as unknown as shapes.SnowballEc2AmiResource[];
  }

}

export class SnowballResponsesDescribeClusterClusterMetadataNotification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.Notification.SnsTopicARN', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.Notification.JobStatesToNotify', props);
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.Notification.NotifyAll', props);
    return resource.getResponseField('ClusterMetadata.Notification.NotifyAll') as unknown as boolean;
  }

}

export class SnowballResponsesDescribeClusterClusterMetadataTaxDocuments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
  }

  public get ind(): SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd {
    return new SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
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
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.TaxDocuments.IND.GSTIN', props);
    return resource.getResponseField('ClusterMetadata.TaxDocuments.IND.GSTIN') as unknown as string;
  }

}

export class SnowballResponsesDescribeClusterClusterMetadataOnDeviceServiceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
  }

  public get nfsOnDeviceService(): SnowballResponsesDescribeClusterClusterMetadataOnDeviceServiceConfigurationNfsOnDeviceService {
    return new SnowballResponsesDescribeClusterClusterMetadataOnDeviceServiceConfigurationNfsOnDeviceService(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeClusterClusterMetadataOnDeviceServiceConfigurationNfsOnDeviceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeClusterRequest) {
  }

  public get storageLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit'),
        outputPath: 'ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit',
        parameters: {
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit', props);
    return resource.getResponseField('ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit') as unknown as number;
  }

  public get storageUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeCluster.ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit'),
        outputPath: 'ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit',
        parameters: {
          ClusterId: this.__input.clusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit', props);
    return resource.getResponseField('ClusterMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit') as unknown as string;
  }

}

export class SnowballResponsesDescribeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
  }

  public get jobMetadata(): SnowballResponsesDescribeJobJobMetadata {
    return new SnowballResponsesDescribeJobJobMetadata(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SubJobMetadata', props);
    return resource.getResponseField('SubJobMetadata') as unknown as shapes.SnowballJobMetadata[];
  }

}

export class SnowballResponsesDescribeJobJobMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.JobId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.JobState', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.JobType', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.SnowballType', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.CreationDate', props);
    return resource.getResponseField('JobMetadata.CreationDate') as unknown as string;
  }

  public get resources(): SnowballResponsesDescribeJobJobMetadataResources {
    return new SnowballResponsesDescribeJobJobMetadataResources(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.Description', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.KmsKeyARN', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.RoleARN', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.AddressId', props);
    return resource.getResponseField('JobMetadata.AddressId') as unknown as string;
  }

  public get shippingDetails(): SnowballResponsesDescribeJobJobMetadataShippingDetails {
    return new SnowballResponsesDescribeJobJobMetadataShippingDetails(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.SnowballCapacityPreference', props);
    return resource.getResponseField('JobMetadata.SnowballCapacityPreference') as unknown as string;
  }

  public get notification(): SnowballResponsesDescribeJobJobMetadataNotification {
    return new SnowballResponsesDescribeJobJobMetadataNotification(this.__scope, this.__resources, this.__input);
  }

  public get dataTransferProgress(): SnowballResponsesDescribeJobJobMetadataDataTransferProgress {
    return new SnowballResponsesDescribeJobJobMetadataDataTransferProgress(this.__scope, this.__resources, this.__input);
  }

  public get jobLogInfo(): SnowballResponsesDescribeJobJobMetadataJobLogInfo {
    return new SnowballResponsesDescribeJobJobMetadataJobLogInfo(this.__scope, this.__resources, this.__input);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.ClusterId', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.ForwardingAddressId', props);
    return resource.getResponseField('JobMetadata.ForwardingAddressId') as unknown as string;
  }

  public get taxDocuments(): SnowballResponsesDescribeJobJobMetadataTaxDocuments {
    return new SnowballResponsesDescribeJobJobMetadataTaxDocuments(this.__scope, this.__resources, this.__input);
  }

  public get deviceConfiguration(): SnowballResponsesDescribeJobJobMetadataDeviceConfiguration {
    return new SnowballResponsesDescribeJobJobMetadataDeviceConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get remoteManagement(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.RemoteManagement'),
        outputPath: 'JobMetadata.RemoteManagement',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.RemoteManagement', props);
    return resource.getResponseField('JobMetadata.RemoteManagement') as unknown as string;
  }

  public get longTermPricingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.LongTermPricingId'),
        outputPath: 'JobMetadata.LongTermPricingId',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.LongTermPricingId', props);
    return resource.getResponseField('JobMetadata.LongTermPricingId') as unknown as string;
  }

  public get onDeviceServiceConfiguration(): SnowballResponsesDescribeJobJobMetadataOnDeviceServiceConfiguration {
    return new SnowballResponsesDescribeJobJobMetadataOnDeviceServiceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeJobJobMetadataResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.Resources.S3Resources', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.Resources.LambdaResources', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.Resources.Ec2AmiResources', props);
    return resource.getResponseField('JobMetadata.Resources.Ec2AmiResources') as unknown as shapes.SnowballEc2AmiResource[];
  }

}

export class SnowballResponsesDescribeJobJobMetadataShippingDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.ShippingDetails.ShippingOption', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.ShippingOption') as unknown as string;
  }

  public get inboundShipment(): SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment {
    return new SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment(this.__scope, this.__resources, this.__input);
  }

  public get outboundShipment(): SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment {
    return new SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.ShippingDetails.InboundShipment.Status', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.ShippingDetails.InboundShipment.TrackingNumber', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.InboundShipment.TrackingNumber') as unknown as string;
  }

}

export class SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.ShippingDetails.OutboundShipment.Status', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.ShippingDetails.OutboundShipment.TrackingNumber', props);
    return resource.getResponseField('JobMetadata.ShippingDetails.OutboundShipment.TrackingNumber') as unknown as string;
  }

}

export class SnowballResponsesDescribeJobJobMetadataNotification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.Notification.SnsTopicARN', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.Notification.JobStatesToNotify', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.Notification.NotifyAll', props);
    return resource.getResponseField('JobMetadata.Notification.NotifyAll') as unknown as boolean;
  }

}

export class SnowballResponsesDescribeJobJobMetadataDataTransferProgress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.DataTransferProgress.BytesTransferred', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.DataTransferProgress.ObjectsTransferred', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.DataTransferProgress.TotalBytes', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.DataTransferProgress.TotalObjects', props);
    return resource.getResponseField('JobMetadata.DataTransferProgress.TotalObjects') as unknown as number;
  }

}

export class SnowballResponsesDescribeJobJobMetadataJobLogInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.JobLogInfo.JobCompletionReportURI', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.JobLogInfo.JobSuccessLogURI', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.JobLogInfo.JobFailureLogURI', props);
    return resource.getResponseField('JobMetadata.JobLogInfo.JobFailureLogURI') as unknown as string;
  }

}

export class SnowballResponsesDescribeJobJobMetadataTaxDocuments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
  }

  public get ind(): SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd {
    return new SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.TaxDocuments.IND.GSTIN', props);
    return resource.getResponseField('JobMetadata.TaxDocuments.IND.GSTIN') as unknown as string;
  }

}

export class SnowballResponsesDescribeJobJobMetadataDeviceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
  }

  public get snowconeDeviceConfiguration(): SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration {
    return new SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
  }

  public get wirelessConnection(): SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection {
    return new SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.DeviceConfiguration.SnowconeDeviceConfiguration.WirelessConnection.IsWifiEnabled', props);
    return resource.getResponseField('JobMetadata.DeviceConfiguration.SnowconeDeviceConfiguration.WirelessConnection.IsWifiEnabled') as unknown as boolean;
  }

}

export class SnowballResponsesDescribeJobJobMetadataOnDeviceServiceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
  }

  public get nfsOnDeviceService(): SnowballResponsesDescribeJobJobMetadataOnDeviceServiceConfigurationNfsOnDeviceService {
    return new SnowballResponsesDescribeJobJobMetadataOnDeviceServiceConfigurationNfsOnDeviceService(this.__scope, this.__resources, this.__input);
  }

}

export class SnowballResponsesDescribeJobJobMetadataOnDeviceServiceConfigurationNfsOnDeviceService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeJobRequest) {
  }

  public get storageLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit'),
        outputPath: 'JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit', props);
    return resource.getResponseField('JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageLimit') as unknown as number;
  }

  public get storageUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.DescribeJob.JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit'),
        outputPath: 'JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit',
        parameters: {
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit', props);
    return resource.getResponseField('JobMetadata.OnDeviceServiceConfiguration.NFSOnDeviceService.StorageUnit') as unknown as string;
  }

}

export class SnowballResponsesDescribeReturnShippingLabel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballDescribeReturnShippingLabelRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReturnShippingLabel.Status', props);
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReturnShippingLabel.ExpirationDate', props);
    return resource.getResponseField('ExpirationDate') as unknown as string;
  }

}

export class SnowballResponsesFetchJobManifest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballGetJobManifestRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobManifest.ManifestURI', props);
    return resource.getResponseField('ManifestURI') as unknown as string;
  }

}

export class SnowballResponsesFetchJobUnlockCode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballGetJobUnlockCodeRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobUnlockCode.UnlockCode', props);
    return resource.getResponseField('UnlockCode') as unknown as string;
  }

}

export class SnowballResponsesFetchSnowballUsage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSnowballUsage.SnowballLimit', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSnowballUsage.SnowballsInUse', props);
    return resource.getResponseField('SnowballsInUse') as unknown as number;
  }

}

export class SnowballResponsesFetchSoftwareUpdates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballGetSoftwareUpdatesRequest) {
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
          JobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSoftwareUpdates.UpdatesURI', props);
    return resource.getResponseField('UpdatesURI') as unknown as string;
  }

}

export class SnowballResponsesListClusterJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballListClusterJobsRequest) {
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
          ClusterId: this.__input.clusterId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusterJobs.JobListEntries', props);
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
          ClusterId: this.__input.clusterId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusterJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballResponsesListClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballListClustersRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.ClusterListEntries', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballResponsesListCompatibleImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballListCompatibleImagesRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCompatibleImages.CompatibleImages', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCompatibleImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballListJobsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.JobListEntries', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SnowballResponsesListLongTermPricing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SnowballListLongTermPricingRequest) {
  }

  public get longTermPricingEntries(): shapes.SnowballLongTermPricingListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLongTermPricing',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListLongTermPricing.LongTermPricingEntries'),
        outputPath: 'LongTermPricingEntries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLongTermPricing.LongTermPricingEntries', props);
    return resource.getResponseField('LongTermPricingEntries') as unknown as shapes.SnowballLongTermPricingListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLongTermPricing',
        service: 'Snowball',
        physicalResourceId: cr.PhysicalResourceId.of('Snowball.ListLongTermPricing.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLongTermPricing.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

