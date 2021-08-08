import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LightsailClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public allocateStaticIp(input: shapes.LightsailAllocateStaticIpRequest): LightsailResponsesAllocateStaticIp {
    return new LightsailResponsesAllocateStaticIp(this, this.__resources, input);
  }

  public attachCertificateToDistribution(input: shapes.LightsailAttachCertificateToDistributionRequest): LightsailResponsesAttachCertificateToDistribution {
    return new LightsailResponsesAttachCertificateToDistribution(this, this.__resources, input);
  }

  public attachDisk(input: shapes.LightsailAttachDiskRequest): LightsailResponsesAttachDisk {
    return new LightsailResponsesAttachDisk(this, this.__resources, input);
  }

  public attachInstancesToLoadBalancer(input: shapes.LightsailAttachInstancesToLoadBalancerRequest): LightsailResponsesAttachInstancesToLoadBalancer {
    return new LightsailResponsesAttachInstancesToLoadBalancer(this, this.__resources, input);
  }

  public attachLoadBalancerTlsCertificate(input: shapes.LightsailAttachLoadBalancerTlsCertificateRequest): LightsailResponsesAttachLoadBalancerTlsCertificate {
    return new LightsailResponsesAttachLoadBalancerTlsCertificate(this, this.__resources, input);
  }

  public attachStaticIp(input: shapes.LightsailAttachStaticIpRequest): LightsailResponsesAttachStaticIp {
    return new LightsailResponsesAttachStaticIp(this, this.__resources, input);
  }

  public closeInstancePublicPorts(input: shapes.LightsailCloseInstancePublicPortsRequest): LightsailResponsesCloseInstancePublicPorts {
    return new LightsailResponsesCloseInstancePublicPorts(this, this.__resources, input);
  }

  public copySnapshot(input: shapes.LightsailCopySnapshotRequest): LightsailResponsesCopySnapshot {
    return new LightsailResponsesCopySnapshot(this, this.__resources, input);
  }

  public createBucket(input: shapes.LightsailCreateBucketRequest): LightsailResponsesCreateBucket {
    return new LightsailResponsesCreateBucket(this, this.__resources, input);
  }

  public createBucketAccessKey(input: shapes.LightsailCreateBucketAccessKeyRequest): LightsailResponsesCreateBucketAccessKey {
    return new LightsailResponsesCreateBucketAccessKey(this, this.__resources, input);
  }

  public createCertificate(input: shapes.LightsailCreateCertificateRequest): LightsailResponsesCreateCertificate {
    return new LightsailResponsesCreateCertificate(this, this.__resources, input);
  }

  public createCloudFormationStack(input: shapes.LightsailCreateCloudFormationStackRequest): LightsailResponsesCreateCloudFormationStack {
    return new LightsailResponsesCreateCloudFormationStack(this, this.__resources, input);
  }

  public createContactMethod(input: shapes.LightsailCreateContactMethodRequest): LightsailResponsesCreateContactMethod {
    return new LightsailResponsesCreateContactMethod(this, this.__resources, input);
  }

  public createContainerService(input: shapes.LightsailCreateContainerServiceRequest): LightsailResponsesCreateContainerService {
    return new LightsailResponsesCreateContainerService(this, this.__resources, input);
  }

  public createContainerServiceDeployment(input: shapes.LightsailCreateContainerServiceDeploymentRequest): LightsailResponsesCreateContainerServiceDeployment {
    return new LightsailResponsesCreateContainerServiceDeployment(this, this.__resources, input);
  }

  public createContainerServiceRegistryLogin(): LightsailResponsesCreateContainerServiceRegistryLogin {
    return new LightsailResponsesCreateContainerServiceRegistryLogin(this, this.__resources);
  }

  public createDisk(input: shapes.LightsailCreateDiskRequest): LightsailResponsesCreateDisk {
    return new LightsailResponsesCreateDisk(this, this.__resources, input);
  }

  public createDiskFromSnapshot(input: shapes.LightsailCreateDiskFromSnapshotRequest): LightsailResponsesCreateDiskFromSnapshot {
    return new LightsailResponsesCreateDiskFromSnapshot(this, this.__resources, input);
  }

  public createDiskSnapshot(input: shapes.LightsailCreateDiskSnapshotRequest): LightsailResponsesCreateDiskSnapshot {
    return new LightsailResponsesCreateDiskSnapshot(this, this.__resources, input);
  }

  public createDistribution(input: shapes.LightsailCreateDistributionRequest): LightsailResponsesCreateDistribution {
    return new LightsailResponsesCreateDistribution(this, this.__resources, input);
  }

  public createDomain(input: shapes.LightsailCreateDomainRequest): LightsailResponsesCreateDomain {
    return new LightsailResponsesCreateDomain(this, this.__resources, input);
  }

  public createDomainEntry(input: shapes.LightsailCreateDomainEntryRequest): LightsailResponsesCreateDomainEntry {
    return new LightsailResponsesCreateDomainEntry(this, this.__resources, input);
  }

  public createInstanceSnapshot(input: shapes.LightsailCreateInstanceSnapshotRequest): LightsailResponsesCreateInstanceSnapshot {
    return new LightsailResponsesCreateInstanceSnapshot(this, this.__resources, input);
  }

  public createInstances(input: shapes.LightsailCreateInstancesRequest): LightsailResponsesCreateInstances {
    return new LightsailResponsesCreateInstances(this, this.__resources, input);
  }

  public createInstancesFromSnapshot(input: shapes.LightsailCreateInstancesFromSnapshotRequest): LightsailResponsesCreateInstancesFromSnapshot {
    return new LightsailResponsesCreateInstancesFromSnapshot(this, this.__resources, input);
  }

  public createKeyPair(input: shapes.LightsailCreateKeyPairRequest): LightsailResponsesCreateKeyPair {
    return new LightsailResponsesCreateKeyPair(this, this.__resources, input);
  }

  public createLoadBalancer(input: shapes.LightsailCreateLoadBalancerRequest): LightsailResponsesCreateLoadBalancer {
    return new LightsailResponsesCreateLoadBalancer(this, this.__resources, input);
  }

  public createLoadBalancerTlsCertificate(input: shapes.LightsailCreateLoadBalancerTlsCertificateRequest): LightsailResponsesCreateLoadBalancerTlsCertificate {
    return new LightsailResponsesCreateLoadBalancerTlsCertificate(this, this.__resources, input);
  }

  public createRelationalDatabase(input: shapes.LightsailCreateRelationalDatabaseRequest): LightsailResponsesCreateRelationalDatabase {
    return new LightsailResponsesCreateRelationalDatabase(this, this.__resources, input);
  }

  public createRelationalDatabaseFromSnapshot(input: shapes.LightsailCreateRelationalDatabaseFromSnapshotRequest): LightsailResponsesCreateRelationalDatabaseFromSnapshot {
    return new LightsailResponsesCreateRelationalDatabaseFromSnapshot(this, this.__resources, input);
  }

  public createRelationalDatabaseSnapshot(input: shapes.LightsailCreateRelationalDatabaseSnapshotRequest): LightsailResponsesCreateRelationalDatabaseSnapshot {
    return new LightsailResponsesCreateRelationalDatabaseSnapshot(this, this.__resources, input);
  }

  public deleteAlarm(input: shapes.LightsailDeleteAlarmRequest): LightsailResponsesDeleteAlarm {
    return new LightsailResponsesDeleteAlarm(this, this.__resources, input);
  }

  public deleteAutoSnapshot(input: shapes.LightsailDeleteAutoSnapshotRequest): LightsailResponsesDeleteAutoSnapshot {
    return new LightsailResponsesDeleteAutoSnapshot(this, this.__resources, input);
  }

  public deleteBucket(input: shapes.LightsailDeleteBucketRequest): LightsailResponsesDeleteBucket {
    return new LightsailResponsesDeleteBucket(this, this.__resources, input);
  }

  public deleteBucketAccessKey(input: shapes.LightsailDeleteBucketAccessKeyRequest): LightsailResponsesDeleteBucketAccessKey {
    return new LightsailResponsesDeleteBucketAccessKey(this, this.__resources, input);
  }

  public deleteCertificate(input: shapes.LightsailDeleteCertificateRequest): LightsailResponsesDeleteCertificate {
    return new LightsailResponsesDeleteCertificate(this, this.__resources, input);
  }

  public deleteContactMethod(input: shapes.LightsailDeleteContactMethodRequest): LightsailResponsesDeleteContactMethod {
    return new LightsailResponsesDeleteContactMethod(this, this.__resources, input);
  }

  public deleteContainerImage(input: shapes.LightsailDeleteContainerImageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContainerImage',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteContainerImage'),
        parameters: {
          serviceName: input.serviceName,
          image: input.image,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContainerImage', props);
  }

  public deleteContainerService(input: shapes.LightsailDeleteContainerServiceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteContainerService'),
        parameters: {
          serviceName: input.serviceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContainerService', props);
  }

  public deleteDisk(input: shapes.LightsailDeleteDiskRequest): LightsailResponsesDeleteDisk {
    return new LightsailResponsesDeleteDisk(this, this.__resources, input);
  }

  public deleteDiskSnapshot(input: shapes.LightsailDeleteDiskSnapshotRequest): LightsailResponsesDeleteDiskSnapshot {
    return new LightsailResponsesDeleteDiskSnapshot(this, this.__resources, input);
  }

  public deleteDistribution(input: shapes.LightsailDeleteDistributionRequest): LightsailResponsesDeleteDistribution {
    return new LightsailResponsesDeleteDistribution(this, this.__resources, input);
  }

  public deleteDomain(input: shapes.LightsailDeleteDomainRequest): LightsailResponsesDeleteDomain {
    return new LightsailResponsesDeleteDomain(this, this.__resources, input);
  }

  public deleteDomainEntry(input: shapes.LightsailDeleteDomainEntryRequest): LightsailResponsesDeleteDomainEntry {
    return new LightsailResponsesDeleteDomainEntry(this, this.__resources, input);
  }

  public deleteInstance(input: shapes.LightsailDeleteInstanceRequest): LightsailResponsesDeleteInstance {
    return new LightsailResponsesDeleteInstance(this, this.__resources, input);
  }

  public deleteInstanceSnapshot(input: shapes.LightsailDeleteInstanceSnapshotRequest): LightsailResponsesDeleteInstanceSnapshot {
    return new LightsailResponsesDeleteInstanceSnapshot(this, this.__resources, input);
  }

  public deleteKeyPair(input: shapes.LightsailDeleteKeyPairRequest): LightsailResponsesDeleteKeyPair {
    return new LightsailResponsesDeleteKeyPair(this, this.__resources, input);
  }

  public deleteKnownHostKeys(input: shapes.LightsailDeleteKnownHostKeysRequest): LightsailResponsesDeleteKnownHostKeys {
    return new LightsailResponsesDeleteKnownHostKeys(this, this.__resources, input);
  }

  public deleteLoadBalancer(input: shapes.LightsailDeleteLoadBalancerRequest): LightsailResponsesDeleteLoadBalancer {
    return new LightsailResponsesDeleteLoadBalancer(this, this.__resources, input);
  }

  public deleteLoadBalancerTlsCertificate(input: shapes.LightsailDeleteLoadBalancerTlsCertificateRequest): LightsailResponsesDeleteLoadBalancerTlsCertificate {
    return new LightsailResponsesDeleteLoadBalancerTlsCertificate(this, this.__resources, input);
  }

  public deleteRelationalDatabase(input: shapes.LightsailDeleteRelationalDatabaseRequest): LightsailResponsesDeleteRelationalDatabase {
    return new LightsailResponsesDeleteRelationalDatabase(this, this.__resources, input);
  }

  public deleteRelationalDatabaseSnapshot(input: shapes.LightsailDeleteRelationalDatabaseSnapshotRequest): LightsailResponsesDeleteRelationalDatabaseSnapshot {
    return new LightsailResponsesDeleteRelationalDatabaseSnapshot(this, this.__resources, input);
  }

  public detachCertificateFromDistribution(input: shapes.LightsailDetachCertificateFromDistributionRequest): LightsailResponsesDetachCertificateFromDistribution {
    return new LightsailResponsesDetachCertificateFromDistribution(this, this.__resources, input);
  }

  public detachDisk(input: shapes.LightsailDetachDiskRequest): LightsailResponsesDetachDisk {
    return new LightsailResponsesDetachDisk(this, this.__resources, input);
  }

  public detachInstancesFromLoadBalancer(input: shapes.LightsailDetachInstancesFromLoadBalancerRequest): LightsailResponsesDetachInstancesFromLoadBalancer {
    return new LightsailResponsesDetachInstancesFromLoadBalancer(this, this.__resources, input);
  }

  public detachStaticIp(input: shapes.LightsailDetachStaticIpRequest): LightsailResponsesDetachStaticIp {
    return new LightsailResponsesDetachStaticIp(this, this.__resources, input);
  }

  public disableAddOn(input: shapes.LightsailDisableAddOnRequest): LightsailResponsesDisableAddOn {
    return new LightsailResponsesDisableAddOn(this, this.__resources, input);
  }

  public downloadDefaultKeyPair(): LightsailResponsesDownloadDefaultKeyPair {
    return new LightsailResponsesDownloadDefaultKeyPair(this, this.__resources);
  }

  public enableAddOn(input: shapes.LightsailEnableAddOnRequest): LightsailResponsesEnableAddOn {
    return new LightsailResponsesEnableAddOn(this, this.__resources, input);
  }

  public exportSnapshot(input: shapes.LightsailExportSnapshotRequest): LightsailResponsesExportSnapshot {
    return new LightsailResponsesExportSnapshot(this, this.__resources, input);
  }

  public fetchActiveNames(input: shapes.LightsailGetActiveNamesRequest): LightsailResponsesFetchActiveNames {
    return new LightsailResponsesFetchActiveNames(this, this.__resources, input);
  }

  public fetchAlarms(input: shapes.LightsailGetAlarmsRequest): LightsailResponsesFetchAlarms {
    return new LightsailResponsesFetchAlarms(this, this.__resources, input);
  }

  public fetchAutoSnapshots(input: shapes.LightsailGetAutoSnapshotsRequest): LightsailResponsesFetchAutoSnapshots {
    return new LightsailResponsesFetchAutoSnapshots(this, this.__resources, input);
  }

  public fetchBlueprints(input: shapes.LightsailGetBlueprintsRequest): LightsailResponsesFetchBlueprints {
    return new LightsailResponsesFetchBlueprints(this, this.__resources, input);
  }

  public fetchBucketAccessKeys(input: shapes.LightsailGetBucketAccessKeysRequest): LightsailResponsesFetchBucketAccessKeys {
    return new LightsailResponsesFetchBucketAccessKeys(this, this.__resources, input);
  }

  public fetchBucketBundles(input: shapes.LightsailGetBucketBundlesRequest): LightsailResponsesFetchBucketBundles {
    return new LightsailResponsesFetchBucketBundles(this, this.__resources, input);
  }

  public fetchBucketMetricData(input: shapes.LightsailGetBucketMetricDataRequest): LightsailResponsesFetchBucketMetricData {
    return new LightsailResponsesFetchBucketMetricData(this, this.__resources, input);
  }

  public fetchBuckets(input: shapes.LightsailGetBucketsRequest): LightsailResponsesFetchBuckets {
    return new LightsailResponsesFetchBuckets(this, this.__resources, input);
  }

  public fetchBundles(input: shapes.LightsailGetBundlesRequest): LightsailResponsesFetchBundles {
    return new LightsailResponsesFetchBundles(this, this.__resources, input);
  }

  public fetchCertificates(input: shapes.LightsailGetCertificatesRequest): LightsailResponsesFetchCertificates {
    return new LightsailResponsesFetchCertificates(this, this.__resources, input);
  }

  public fetchCloudFormationStackRecords(input: shapes.LightsailGetCloudFormationStackRecordsRequest): LightsailResponsesFetchCloudFormationStackRecords {
    return new LightsailResponsesFetchCloudFormationStackRecords(this, this.__resources, input);
  }

  public fetchContactMethods(input: shapes.LightsailGetContactMethodsRequest): LightsailResponsesFetchContactMethods {
    return new LightsailResponsesFetchContactMethods(this, this.__resources, input);
  }

  public fetchContainerApiMetadata(): LightsailResponsesFetchContainerApiMetadata {
    return new LightsailResponsesFetchContainerApiMetadata(this, this.__resources);
  }

  public fetchContainerImages(input: shapes.LightsailGetContainerImagesRequest): LightsailResponsesFetchContainerImages {
    return new LightsailResponsesFetchContainerImages(this, this.__resources, input);
  }

  public fetchContainerLog(input: shapes.LightsailGetContainerLogRequest): LightsailResponsesFetchContainerLog {
    return new LightsailResponsesFetchContainerLog(this, this.__resources, input);
  }

  public fetchContainerServiceDeployments(input: shapes.LightsailGetContainerServiceDeploymentsRequest): LightsailResponsesFetchContainerServiceDeployments {
    return new LightsailResponsesFetchContainerServiceDeployments(this, this.__resources, input);
  }

  public fetchContainerServiceMetricData(input: shapes.LightsailGetContainerServiceMetricDataRequest): LightsailResponsesFetchContainerServiceMetricData {
    return new LightsailResponsesFetchContainerServiceMetricData(this, this.__resources, input);
  }

  public fetchContainerServicePowers(): LightsailResponsesFetchContainerServicePowers {
    return new LightsailResponsesFetchContainerServicePowers(this, this.__resources);
  }

  public fetchContainerServices(input: shapes.LightsailGetContainerServicesRequest): LightsailResponsesFetchContainerServices {
    return new LightsailResponsesFetchContainerServices(this, this.__resources, input);
  }

  public fetchDisk(input: shapes.LightsailGetDiskRequest): LightsailResponsesFetchDisk {
    return new LightsailResponsesFetchDisk(this, this.__resources, input);
  }

  public fetchDiskSnapshot(input: shapes.LightsailGetDiskSnapshotRequest): LightsailResponsesFetchDiskSnapshot {
    return new LightsailResponsesFetchDiskSnapshot(this, this.__resources, input);
  }

  public fetchDiskSnapshots(input: shapes.LightsailGetDiskSnapshotsRequest): LightsailResponsesFetchDiskSnapshots {
    return new LightsailResponsesFetchDiskSnapshots(this, this.__resources, input);
  }

  public fetchDisks(input: shapes.LightsailGetDisksRequest): LightsailResponsesFetchDisks {
    return new LightsailResponsesFetchDisks(this, this.__resources, input);
  }

  public fetchDistributionBundles(): LightsailResponsesFetchDistributionBundles {
    return new LightsailResponsesFetchDistributionBundles(this, this.__resources);
  }

  public fetchDistributionLatestCacheReset(input: shapes.LightsailGetDistributionLatestCacheResetRequest): LightsailResponsesFetchDistributionLatestCacheReset {
    return new LightsailResponsesFetchDistributionLatestCacheReset(this, this.__resources, input);
  }

  public fetchDistributionMetricData(input: shapes.LightsailGetDistributionMetricDataRequest): LightsailResponsesFetchDistributionMetricData {
    return new LightsailResponsesFetchDistributionMetricData(this, this.__resources, input);
  }

  public fetchDistributions(input: shapes.LightsailGetDistributionsRequest): LightsailResponsesFetchDistributions {
    return new LightsailResponsesFetchDistributions(this, this.__resources, input);
  }

  public fetchDomain(input: shapes.LightsailGetDomainRequest): LightsailResponsesFetchDomain {
    return new LightsailResponsesFetchDomain(this, this.__resources, input);
  }

  public fetchDomains(input: shapes.LightsailGetDomainsRequest): LightsailResponsesFetchDomains {
    return new LightsailResponsesFetchDomains(this, this.__resources, input);
  }

  public fetchExportSnapshotRecords(input: shapes.LightsailGetExportSnapshotRecordsRequest): LightsailResponsesFetchExportSnapshotRecords {
    return new LightsailResponsesFetchExportSnapshotRecords(this, this.__resources, input);
  }

  public fetchInstance(input: shapes.LightsailGetInstanceRequest): LightsailResponsesFetchInstance {
    return new LightsailResponsesFetchInstance(this, this.__resources, input);
  }

  public fetchInstanceAccessDetails(input: shapes.LightsailGetInstanceAccessDetailsRequest): LightsailResponsesFetchInstanceAccessDetails {
    return new LightsailResponsesFetchInstanceAccessDetails(this, this.__resources, input);
  }

  public fetchInstanceMetricData(input: shapes.LightsailGetInstanceMetricDataRequest): LightsailResponsesFetchInstanceMetricData {
    return new LightsailResponsesFetchInstanceMetricData(this, this.__resources, input);
  }

  public fetchInstancePortStates(input: shapes.LightsailGetInstancePortStatesRequest): LightsailResponsesFetchInstancePortStates {
    return new LightsailResponsesFetchInstancePortStates(this, this.__resources, input);
  }

  public fetchInstanceSnapshot(input: shapes.LightsailGetInstanceSnapshotRequest): LightsailResponsesFetchInstanceSnapshot {
    return new LightsailResponsesFetchInstanceSnapshot(this, this.__resources, input);
  }

  public fetchInstanceSnapshots(input: shapes.LightsailGetInstanceSnapshotsRequest): LightsailResponsesFetchInstanceSnapshots {
    return new LightsailResponsesFetchInstanceSnapshots(this, this.__resources, input);
  }

  public fetchInstanceState(input: shapes.LightsailGetInstanceStateRequest): LightsailResponsesFetchInstanceState {
    return new LightsailResponsesFetchInstanceState(this, this.__resources, input);
  }

  public fetchInstances(input: shapes.LightsailGetInstancesRequest): LightsailResponsesFetchInstances {
    return new LightsailResponsesFetchInstances(this, this.__resources, input);
  }

  public fetchKeyPair(input: shapes.LightsailGetKeyPairRequest): LightsailResponsesFetchKeyPair {
    return new LightsailResponsesFetchKeyPair(this, this.__resources, input);
  }

  public fetchKeyPairs(input: shapes.LightsailGetKeyPairsRequest): LightsailResponsesFetchKeyPairs {
    return new LightsailResponsesFetchKeyPairs(this, this.__resources, input);
  }

  public fetchLoadBalancer(input: shapes.LightsailGetLoadBalancerRequest): LightsailResponsesFetchLoadBalancer {
    return new LightsailResponsesFetchLoadBalancer(this, this.__resources, input);
  }

  public fetchLoadBalancerMetricData(input: shapes.LightsailGetLoadBalancerMetricDataRequest): LightsailResponsesFetchLoadBalancerMetricData {
    return new LightsailResponsesFetchLoadBalancerMetricData(this, this.__resources, input);
  }

  public fetchLoadBalancerTlsCertificates(input: shapes.LightsailGetLoadBalancerTlsCertificatesRequest): LightsailResponsesFetchLoadBalancerTlsCertificates {
    return new LightsailResponsesFetchLoadBalancerTlsCertificates(this, this.__resources, input);
  }

  public fetchLoadBalancers(input: shapes.LightsailGetLoadBalancersRequest): LightsailResponsesFetchLoadBalancers {
    return new LightsailResponsesFetchLoadBalancers(this, this.__resources, input);
  }

  public fetchOperation(input: shapes.LightsailGetOperationRequest): LightsailResponsesFetchOperation {
    return new LightsailResponsesFetchOperation(this, this.__resources, input);
  }

  public fetchOperations(input: shapes.LightsailGetOperationsRequest): LightsailResponsesFetchOperations {
    return new LightsailResponsesFetchOperations(this, this.__resources, input);
  }

  public fetchOperationsForResource(input: shapes.LightsailGetOperationsForResourceRequest): LightsailResponsesFetchOperationsForResource {
    return new LightsailResponsesFetchOperationsForResource(this, this.__resources, input);
  }

  public fetchRegions(input: shapes.LightsailGetRegionsRequest): LightsailResponsesFetchRegions {
    return new LightsailResponsesFetchRegions(this, this.__resources, input);
  }

  public fetchRelationalDatabase(input: shapes.LightsailGetRelationalDatabaseRequest): LightsailResponsesFetchRelationalDatabase {
    return new LightsailResponsesFetchRelationalDatabase(this, this.__resources, input);
  }

  public fetchRelationalDatabaseBlueprints(input: shapes.LightsailGetRelationalDatabaseBlueprintsRequest): LightsailResponsesFetchRelationalDatabaseBlueprints {
    return new LightsailResponsesFetchRelationalDatabaseBlueprints(this, this.__resources, input);
  }

  public fetchRelationalDatabaseBundles(input: shapes.LightsailGetRelationalDatabaseBundlesRequest): LightsailResponsesFetchRelationalDatabaseBundles {
    return new LightsailResponsesFetchRelationalDatabaseBundles(this, this.__resources, input);
  }

  public fetchRelationalDatabaseEvents(input: shapes.LightsailGetRelationalDatabaseEventsRequest): LightsailResponsesFetchRelationalDatabaseEvents {
    return new LightsailResponsesFetchRelationalDatabaseEvents(this, this.__resources, input);
  }

  public fetchRelationalDatabaseLogEvents(input: shapes.LightsailGetRelationalDatabaseLogEventsRequest): LightsailResponsesFetchRelationalDatabaseLogEvents {
    return new LightsailResponsesFetchRelationalDatabaseLogEvents(this, this.__resources, input);
  }

  public fetchRelationalDatabaseLogStreams(input: shapes.LightsailGetRelationalDatabaseLogStreamsRequest): LightsailResponsesFetchRelationalDatabaseLogStreams {
    return new LightsailResponsesFetchRelationalDatabaseLogStreams(this, this.__resources, input);
  }

  public fetchRelationalDatabaseMasterUserPassword(input: shapes.LightsailGetRelationalDatabaseMasterUserPasswordRequest): LightsailResponsesFetchRelationalDatabaseMasterUserPassword {
    return new LightsailResponsesFetchRelationalDatabaseMasterUserPassword(this, this.__resources, input);
  }

  public fetchRelationalDatabaseMetricData(input: shapes.LightsailGetRelationalDatabaseMetricDataRequest): LightsailResponsesFetchRelationalDatabaseMetricData {
    return new LightsailResponsesFetchRelationalDatabaseMetricData(this, this.__resources, input);
  }

  public fetchRelationalDatabaseParameters(input: shapes.LightsailGetRelationalDatabaseParametersRequest): LightsailResponsesFetchRelationalDatabaseParameters {
    return new LightsailResponsesFetchRelationalDatabaseParameters(this, this.__resources, input);
  }

  public fetchRelationalDatabaseSnapshot(input: shapes.LightsailGetRelationalDatabaseSnapshotRequest): LightsailResponsesFetchRelationalDatabaseSnapshot {
    return new LightsailResponsesFetchRelationalDatabaseSnapshot(this, this.__resources, input);
  }

  public fetchRelationalDatabaseSnapshots(input: shapes.LightsailGetRelationalDatabaseSnapshotsRequest): LightsailResponsesFetchRelationalDatabaseSnapshots {
    return new LightsailResponsesFetchRelationalDatabaseSnapshots(this, this.__resources, input);
  }

  public fetchRelationalDatabases(input: shapes.LightsailGetRelationalDatabasesRequest): LightsailResponsesFetchRelationalDatabases {
    return new LightsailResponsesFetchRelationalDatabases(this, this.__resources, input);
  }

  public fetchStaticIp(input: shapes.LightsailGetStaticIpRequest): LightsailResponsesFetchStaticIp {
    return new LightsailResponsesFetchStaticIp(this, this.__resources, input);
  }

  public fetchStaticIps(input: shapes.LightsailGetStaticIpsRequest): LightsailResponsesFetchStaticIps {
    return new LightsailResponsesFetchStaticIps(this, this.__resources, input);
  }

  public importKeyPair(input: shapes.LightsailImportKeyPairRequest): LightsailResponsesImportKeyPair {
    return new LightsailResponsesImportKeyPair(this, this.__resources, input);
  }

  public isVpcPeered(): LightsailResponsesIsVpcPeered {
    return new LightsailResponsesIsVpcPeered(this, this.__resources);
  }

  public openInstancePublicPorts(input: shapes.LightsailOpenInstancePublicPortsRequest): LightsailResponsesOpenInstancePublicPorts {
    return new LightsailResponsesOpenInstancePublicPorts(this, this.__resources, input);
  }

  public peerVpc(): LightsailResponsesPeerVpc {
    return new LightsailResponsesPeerVpc(this, this.__resources);
  }

  public putAlarm(input: shapes.LightsailPutAlarmRequest): LightsailResponsesPutAlarm {
    return new LightsailResponsesPutAlarm(this, this.__resources, input);
  }

  public putInstancePublicPorts(input: shapes.LightsailPutInstancePublicPortsRequest): LightsailResponsesPutInstancePublicPorts {
    return new LightsailResponsesPutInstancePublicPorts(this, this.__resources, input);
  }

  public rebootInstance(input: shapes.LightsailRebootInstanceRequest): LightsailResponsesRebootInstance {
    return new LightsailResponsesRebootInstance(this, this.__resources, input);
  }

  public rebootRelationalDatabase(input: shapes.LightsailRebootRelationalDatabaseRequest): LightsailResponsesRebootRelationalDatabase {
    return new LightsailResponsesRebootRelationalDatabase(this, this.__resources, input);
  }

  public registerContainerImage(input: shapes.LightsailRegisterContainerImageRequest): LightsailResponsesRegisterContainerImage {
    return new LightsailResponsesRegisterContainerImage(this, this.__resources, input);
  }

  public releaseStaticIp(input: shapes.LightsailReleaseStaticIpRequest): LightsailResponsesReleaseStaticIp {
    return new LightsailResponsesReleaseStaticIp(this, this.__resources, input);
  }

  public resetDistributionCache(input: shapes.LightsailResetDistributionCacheRequest): LightsailResponsesResetDistributionCache {
    return new LightsailResponsesResetDistributionCache(this, this.__resources, input);
  }

  public sendContactMethodVerification(input: shapes.LightsailSendContactMethodVerificationRequest): LightsailResponsesSendContactMethodVerification {
    return new LightsailResponsesSendContactMethodVerification(this, this.__resources, input);
  }

  public putIpAddressType(input: shapes.LightsailSetIpAddressTypeRequest): LightsailResponsesPutIpAddressType {
    return new LightsailResponsesPutIpAddressType(this, this.__resources, input);
  }

  public putResourceAccessForBucket(input: shapes.LightsailSetResourceAccessForBucketRequest): LightsailResponsesPutResourceAccessForBucket {
    return new LightsailResponsesPutResourceAccessForBucket(this, this.__resources, input);
  }

  public startInstance(input: shapes.LightsailStartInstanceRequest): LightsailResponsesStartInstance {
    return new LightsailResponsesStartInstance(this, this.__resources, input);
  }

  public startRelationalDatabase(input: shapes.LightsailStartRelationalDatabaseRequest): LightsailResponsesStartRelationalDatabase {
    return new LightsailResponsesStartRelationalDatabase(this, this.__resources, input);
  }

  public stopInstance(input: shapes.LightsailStopInstanceRequest): LightsailResponsesStopInstance {
    return new LightsailResponsesStopInstance(this, this.__resources, input);
  }

  public stopRelationalDatabase(input: shapes.LightsailStopRelationalDatabaseRequest): LightsailResponsesStopRelationalDatabase {
    return new LightsailResponsesStopRelationalDatabase(this, this.__resources, input);
  }

  public tagResource(input: shapes.LightsailTagResourceRequest): LightsailResponsesTagResource {
    return new LightsailResponsesTagResource(this, this.__resources, input);
  }

  public testAlarm(input: shapes.LightsailTestAlarmRequest): LightsailResponsesTestAlarm {
    return new LightsailResponsesTestAlarm(this, this.__resources, input);
  }

  public unpeerVpc(): LightsailResponsesUnpeerVpc {
    return new LightsailResponsesUnpeerVpc(this, this.__resources);
  }

  public untagResource(input: shapes.LightsailUntagResourceRequest): LightsailResponsesUntagResource {
    return new LightsailResponsesUntagResource(this, this.__resources, input);
  }

  public updateBucket(input: shapes.LightsailUpdateBucketRequest): LightsailResponsesUpdateBucket {
    return new LightsailResponsesUpdateBucket(this, this.__resources, input);
  }

  public updateBucketBundle(input: shapes.LightsailUpdateBucketBundleRequest): LightsailResponsesUpdateBucketBundle {
    return new LightsailResponsesUpdateBucketBundle(this, this.__resources, input);
  }

  public updateContainerService(input: shapes.LightsailUpdateContainerServiceRequest): LightsailResponsesUpdateContainerService {
    return new LightsailResponsesUpdateContainerService(this, this.__resources, input);
  }

  public updateDistribution(input: shapes.LightsailUpdateDistributionRequest): LightsailResponsesUpdateDistribution {
    return new LightsailResponsesUpdateDistribution(this, this.__resources, input);
  }

  public updateDistributionBundle(input: shapes.LightsailUpdateDistributionBundleRequest): LightsailResponsesUpdateDistributionBundle {
    return new LightsailResponsesUpdateDistributionBundle(this, this.__resources, input);
  }

  public updateDomainEntry(input: shapes.LightsailUpdateDomainEntryRequest): LightsailResponsesUpdateDomainEntry {
    return new LightsailResponsesUpdateDomainEntry(this, this.__resources, input);
  }

  public updateLoadBalancerAttribute(input: shapes.LightsailUpdateLoadBalancerAttributeRequest): LightsailResponsesUpdateLoadBalancerAttribute {
    return new LightsailResponsesUpdateLoadBalancerAttribute(this, this.__resources, input);
  }

  public updateRelationalDatabase(input: shapes.LightsailUpdateRelationalDatabaseRequest): LightsailResponsesUpdateRelationalDatabase {
    return new LightsailResponsesUpdateRelationalDatabase(this, this.__resources, input);
  }

  public updateRelationalDatabaseParameters(input: shapes.LightsailUpdateRelationalDatabaseParametersRequest): LightsailResponsesUpdateRelationalDatabaseParameters {
    return new LightsailResponsesUpdateRelationalDatabaseParameters(this, this.__resources, input);
  }

}

export class LightsailResponsesAllocateStaticIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAllocateStaticIpRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'allocateStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AllocateStaticIp.operations'),
        outputPath: 'operations',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AllocateStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesAttachCertificateToDistribution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAttachCertificateToDistributionRequest) {
  }

  public get operation(): LightsailResponsesAttachCertificateToDistributionOperation {
    return new LightsailResponsesAttachCertificateToDistributionOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesAttachCertificateToDistributionOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAttachCertificateToDistributionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesAttachCertificateToDistributionOperationLocation {
    return new LightsailResponsesAttachCertificateToDistributionOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesAttachCertificateToDistributionOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAttachCertificateToDistributionRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachCertificateToDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachCertificateToDistribution.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachCertificateToDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesAttachDisk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAttachDiskRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachDisk.operations'),
        outputPath: 'operations',
        parameters: {
          diskName: this.__input.diskName,
          instanceName: this.__input.instanceName,
          diskPath: this.__input.diskPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesAttachInstancesToLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAttachInstancesToLoadBalancerRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachInstancesToLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachInstancesToLoadBalancer.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          instanceNames: this.__input.instanceNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachInstancesToLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesAttachLoadBalancerTlsCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAttachLoadBalancerTlsCertificateRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachLoadBalancerTlsCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachLoadBalancerTlsCertificate.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachLoadBalancerTlsCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesAttachStaticIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailAttachStaticIpRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.AttachStaticIp.operations'),
        outputPath: 'operations',
        parameters: {
          staticIpName: this.__input.staticIpName,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCloseInstancePublicPorts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCloseInstancePublicPortsRequest) {
  }

  public get operation(): LightsailResponsesCloseInstancePublicPortsOperation {
    return new LightsailResponsesCloseInstancePublicPortsOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCloseInstancePublicPortsOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCloseInstancePublicPortsRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCloseInstancePublicPortsOperationLocation {
    return new LightsailResponsesCloseInstancePublicPortsOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesCloseInstancePublicPortsOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCloseInstancePublicPortsRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'closeInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CloseInstancePublicPorts.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloseInstancePublicPorts.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCopySnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCopySnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CopySnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          sourceSnapshotName: this.__input.sourceSnapshotName,
          sourceResourceName: this.__input.sourceResourceName,
          restoreDate: this.__input.restoreDate,
          useLatestRestorableAutoSnapshot: this.__input.useLatestRestorableAutoSnapshot,
          targetSnapshotName: this.__input.targetSnapshotName,
          sourceRegion: this.__input.sourceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketRequest) {
  }

  public get bucket(): LightsailResponsesCreateBucketBucket {
    return new LightsailResponsesCreateBucketBucket(this.__scope, this.__resources, this.__input);
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.operations'),
        outputPath: 'operations',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateBucketBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketRequest) {
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.resourceType'),
        outputPath: 'bucket.resourceType',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.resourceType', props);
    return resource.getResponseField('bucket.resourceType') as unknown as string;
  }

  public get accessRules(): LightsailResponsesCreateBucketBucketAccessRules {
    return new LightsailResponsesCreateBucketBucketAccessRules(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.arn'),
        outputPath: 'bucket.arn',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.arn', props);
    return resource.getResponseField('bucket.arn') as unknown as string;
  }

  public get bundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.bundleId'),
        outputPath: 'bucket.bundleId',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.bundleId', props);
    return resource.getResponseField('bucket.bundleId') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.createdAt'),
        outputPath: 'bucket.createdAt',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.createdAt', props);
    return resource.getResponseField('bucket.createdAt') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.url'),
        outputPath: 'bucket.url',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.url', props);
    return resource.getResponseField('bucket.url') as unknown as string;
  }

  public get location(): LightsailResponsesCreateBucketBucketLocation {
    return new LightsailResponsesCreateBucketBucketLocation(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.name'),
        outputPath: 'bucket.name',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.name', props);
    return resource.getResponseField('bucket.name') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.supportCode'),
        outputPath: 'bucket.supportCode',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.supportCode', props);
    return resource.getResponseField('bucket.supportCode') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.tags'),
        outputPath: 'bucket.tags',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.tags', props);
    return resource.getResponseField('bucket.tags') as unknown as shapes.LightsailTag[];
  }

  public get objectVersioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.objectVersioning'),
        outputPath: 'bucket.objectVersioning',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.objectVersioning', props);
    return resource.getResponseField('bucket.objectVersioning') as unknown as string;
  }

  public get ableToUpdateBundle(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.ableToUpdateBundle'),
        outputPath: 'bucket.ableToUpdateBundle',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.ableToUpdateBundle', props);
    return resource.getResponseField('bucket.ableToUpdateBundle') as unknown as boolean;
  }

  public get readonlyAccessAccounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.readonlyAccessAccounts'),
        outputPath: 'bucket.readonlyAccessAccounts',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.readonlyAccessAccounts', props);
    return resource.getResponseField('bucket.readonlyAccessAccounts') as unknown as string[];
  }

  public get resourcesReceivingAccess(): shapes.LightsailResourceReceivingAccess[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.resourcesReceivingAccess'),
        outputPath: 'bucket.resourcesReceivingAccess',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.resourcesReceivingAccess', props);
    return resource.getResponseField('bucket.resourcesReceivingAccess') as unknown as shapes.LightsailResourceReceivingAccess[];
  }

  public get state(): LightsailResponsesCreateBucketBucketState {
    return new LightsailResponsesCreateBucketBucketState(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateBucketBucketAccessRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketRequest) {
  }

  public get getObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.accessRules.getObject'),
        outputPath: 'bucket.accessRules.getObject',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.accessRules.getObject', props);
    return resource.getResponseField('bucket.accessRules.getObject') as unknown as string;
  }

  public get allowPublicOverrides(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.accessRules.allowPublicOverrides'),
        outputPath: 'bucket.accessRules.allowPublicOverrides',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.accessRules.allowPublicOverrides', props);
    return resource.getResponseField('bucket.accessRules.allowPublicOverrides') as unknown as boolean;
  }

}

export class LightsailResponsesCreateBucketBucketLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.location.availabilityZone'),
        outputPath: 'bucket.location.availabilityZone',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.location.availabilityZone', props);
    return resource.getResponseField('bucket.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.location.regionName'),
        outputPath: 'bucket.location.regionName',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.location.regionName', props);
    return resource.getResponseField('bucket.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateBucketBucketState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.state.code'),
        outputPath: 'bucket.state.code',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.state.code', props);
    return resource.getResponseField('bucket.state.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucket.bucket.state.message'),
        outputPath: 'bucket.state.message',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
          tags: this.__input.tags,
          enableObjectVersioning: this.__input.enableObjectVersioning,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucket.bucket.state.message', props);
    return resource.getResponseField('bucket.state.message') as unknown as string;
  }

}

export class LightsailResponsesCreateBucketAccessKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketAccessKeyRequest) {
  }

  public get accessKey(): LightsailResponsesCreateBucketAccessKeyAccessKey {
    return new LightsailResponsesCreateBucketAccessKeyAccessKey(this.__scope, this.__resources, this.__input);
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.operations'),
        outputPath: 'operations',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateBucketAccessKeyAccessKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketAccessKeyRequest) {
  }

  public get accessKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.accessKey.accessKeyId'),
        outputPath: 'accessKey.accessKeyId',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.accessKey.accessKeyId', props);
    return resource.getResponseField('accessKey.accessKeyId') as unknown as string;
  }

  public get secretAccessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.accessKey.secretAccessKey'),
        outputPath: 'accessKey.secretAccessKey',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.accessKey.secretAccessKey', props);
    return resource.getResponseField('accessKey.secretAccessKey') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.accessKey.status'),
        outputPath: 'accessKey.status',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.accessKey.status', props);
    return resource.getResponseField('accessKey.status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.accessKey.createdAt'),
        outputPath: 'accessKey.createdAt',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.accessKey.createdAt', props);
    return resource.getResponseField('accessKey.createdAt') as unknown as string;
  }

  public get lastUsed(): LightsailResponsesCreateBucketAccessKeyAccessKeyLastUsed {
    return new LightsailResponsesCreateBucketAccessKeyAccessKeyLastUsed(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateBucketAccessKeyAccessKeyLastUsed {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateBucketAccessKeyRequest) {
  }

  public get lastUsedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.accessKey.lastUsed.lastUsedDate'),
        outputPath: 'accessKey.lastUsed.lastUsedDate',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.accessKey.lastUsed.lastUsedDate', props);
    return resource.getResponseField('accessKey.lastUsed.lastUsedDate') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.accessKey.lastUsed.region'),
        outputPath: 'accessKey.lastUsed.region',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.accessKey.lastUsed.region', props);
    return resource.getResponseField('accessKey.lastUsed.region') as unknown as string;
  }

  public get serviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateBucketAccessKey.accessKey.lastUsed.serviceName'),
        outputPath: 'accessKey.lastUsed.serviceName',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBucketAccessKey.accessKey.lastUsed.serviceName', props);
    return resource.getResponseField('accessKey.lastUsed.serviceName') as unknown as string;
  }

}

export class LightsailResponsesCreateCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateCertificateRequest) {
  }

  public get certificate(): LightsailResponsesCreateCertificateCertificate {
    return new LightsailResponsesCreateCertificateCertificate(this.__scope, this.__resources, this.__input);
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.operations'),
        outputPath: 'operations',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateCertificateCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateCertificateRequest) {
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateArn'),
        outputPath: 'certificate.certificateArn',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateArn', props);
    return resource.getResponseField('certificate.certificateArn') as unknown as string;
  }

  public get certificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateName'),
        outputPath: 'certificate.certificateName',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateName', props);
    return resource.getResponseField('certificate.certificateName') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.domainName'),
        outputPath: 'certificate.domainName',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.domainName', props);
    return resource.getResponseField('certificate.domainName') as unknown as string;
  }

  public get certificateDetail(): LightsailResponsesCreateCertificateCertificateCertificateDetail {
    return new LightsailResponsesCreateCertificateCertificateCertificateDetail(this.__scope, this.__resources, this.__input);
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.tags'),
        outputPath: 'certificate.tags',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.tags', props);
    return resource.getResponseField('certificate.tags') as unknown as shapes.LightsailTag[];
  }

}

export class LightsailResponsesCreateCertificateCertificateCertificateDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateCertificateRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.arn'),
        outputPath: 'certificate.certificateDetail.arn',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.arn', props);
    return resource.getResponseField('certificate.certificateDetail.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.name'),
        outputPath: 'certificate.certificateDetail.name',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.name', props);
    return resource.getResponseField('certificate.certificateDetail.name') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.domainName'),
        outputPath: 'certificate.certificateDetail.domainName',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.domainName', props);
    return resource.getResponseField('certificate.certificateDetail.domainName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.status'),
        outputPath: 'certificate.certificateDetail.status',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.status', props);
    return resource.getResponseField('certificate.certificateDetail.status') as unknown as string;
  }

  public get serialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.serialNumber'),
        outputPath: 'certificate.certificateDetail.serialNumber',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.serialNumber', props);
    return resource.getResponseField('certificate.certificateDetail.serialNumber') as unknown as string;
  }

  public get subjectAlternativeNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.subjectAlternativeNames'),
        outputPath: 'certificate.certificateDetail.subjectAlternativeNames',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.subjectAlternativeNames', props);
    return resource.getResponseField('certificate.certificateDetail.subjectAlternativeNames') as unknown as string[];
  }

  public get domainValidationRecords(): shapes.LightsailDomainValidationRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.domainValidationRecords'),
        outputPath: 'certificate.certificateDetail.domainValidationRecords',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.domainValidationRecords', props);
    return resource.getResponseField('certificate.certificateDetail.domainValidationRecords') as unknown as shapes.LightsailDomainValidationRecord[];
  }

  public get requestFailureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.requestFailureReason'),
        outputPath: 'certificate.certificateDetail.requestFailureReason',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.requestFailureReason', props);
    return resource.getResponseField('certificate.certificateDetail.requestFailureReason') as unknown as string;
  }

  public get inUseResourceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.inUseResourceCount'),
        outputPath: 'certificate.certificateDetail.inUseResourceCount',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.inUseResourceCount', props);
    return resource.getResponseField('certificate.certificateDetail.inUseResourceCount') as unknown as number;
  }

  public get keyAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.keyAlgorithm'),
        outputPath: 'certificate.certificateDetail.keyAlgorithm',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.keyAlgorithm', props);
    return resource.getResponseField('certificate.certificateDetail.keyAlgorithm') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.createdAt'),
        outputPath: 'certificate.certificateDetail.createdAt',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.createdAt', props);
    return resource.getResponseField('certificate.certificateDetail.createdAt') as unknown as string;
  }

  public get issuedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.issuedAt'),
        outputPath: 'certificate.certificateDetail.issuedAt',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.issuedAt', props);
    return resource.getResponseField('certificate.certificateDetail.issuedAt') as unknown as string;
  }

  public get issuerCa(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.issuerCA'),
        outputPath: 'certificate.certificateDetail.issuerCA',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.issuerCA', props);
    return resource.getResponseField('certificate.certificateDetail.issuerCA') as unknown as string;
  }

  public get notBefore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.notBefore'),
        outputPath: 'certificate.certificateDetail.notBefore',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.notBefore', props);
    return resource.getResponseField('certificate.certificateDetail.notBefore') as unknown as string;
  }

  public get notAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.notAfter'),
        outputPath: 'certificate.certificateDetail.notAfter',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.notAfter', props);
    return resource.getResponseField('certificate.certificateDetail.notAfter') as unknown as string;
  }

  public get eligibleToRenew(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.eligibleToRenew'),
        outputPath: 'certificate.certificateDetail.eligibleToRenew',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.eligibleToRenew', props);
    return resource.getResponseField('certificate.certificateDetail.eligibleToRenew') as unknown as string;
  }

  public get renewalSummary(): LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary {
    return new LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary(this.__scope, this.__resources, this.__input);
  }

  public get revokedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.revokedAt'),
        outputPath: 'certificate.certificateDetail.revokedAt',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.revokedAt', props);
    return resource.getResponseField('certificate.certificateDetail.revokedAt') as unknown as string;
  }

  public get revocationReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.revocationReason'),
        outputPath: 'certificate.certificateDetail.revocationReason',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.revocationReason', props);
    return resource.getResponseField('certificate.certificateDetail.revocationReason') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.tags'),
        outputPath: 'certificate.certificateDetail.tags',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.tags', props);
    return resource.getResponseField('certificate.certificateDetail.tags') as unknown as shapes.LightsailTag[];
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.supportCode'),
        outputPath: 'certificate.certificateDetail.supportCode',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.supportCode', props);
    return resource.getResponseField('certificate.certificateDetail.supportCode') as unknown as string;
  }

}

export class LightsailResponsesCreateCertificateCertificateCertificateDetailRenewalSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateCertificateRequest) {
  }

  public get domainValidationRecords(): shapes.LightsailDomainValidationRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.renewalSummary.domainValidationRecords'),
        outputPath: 'certificate.certificateDetail.renewalSummary.domainValidationRecords',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.renewalSummary.domainValidationRecords', props);
    return resource.getResponseField('certificate.certificateDetail.renewalSummary.domainValidationRecords') as unknown as shapes.LightsailDomainValidationRecord[];
  }

  public get renewalStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.renewalSummary.renewalStatus'),
        outputPath: 'certificate.certificateDetail.renewalSummary.renewalStatus',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.renewalSummary.renewalStatus', props);
    return resource.getResponseField('certificate.certificateDetail.renewalSummary.renewalStatus') as unknown as string;
  }

  public get renewalStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.renewalSummary.renewalStatusReason'),
        outputPath: 'certificate.certificateDetail.renewalSummary.renewalStatusReason',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.renewalSummary.renewalStatusReason', props);
    return resource.getResponseField('certificate.certificateDetail.renewalSummary.renewalStatusReason') as unknown as string;
  }

  public get updatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCertificate.certificate.certificateDetail.renewalSummary.updatedAt'),
        outputPath: 'certificate.certificateDetail.renewalSummary.updatedAt',
        parameters: {
          certificateName: this.__input.certificateName,
          domainName: this.__input.domainName,
          subjectAlternativeNames: this.__input.subjectAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCertificate.certificate.certificateDetail.renewalSummary.updatedAt', props);
    return resource.getResponseField('certificate.certificateDetail.renewalSummary.updatedAt') as unknown as string;
  }

}

export class LightsailResponsesCreateCloudFormationStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateCloudFormationStackRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCloudFormationStack',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateCloudFormationStack.operations'),
        outputPath: 'operations',
        parameters: {
          instances: this.__input.instances,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCloudFormationStack.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateContactMethod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContactMethodRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContactMethod',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContactMethod.operations'),
        outputPath: 'operations',
        parameters: {
          protocol: this.__input.protocol,
          contactEndpoint: this.__input.contactEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContactMethod.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateContainerService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get containerService(): LightsailResponsesCreateContainerServiceContainerService {
    return new LightsailResponsesCreateContainerServiceContainerService(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateContainerServiceContainerService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get containerServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.containerServiceName'),
        outputPath: 'containerService.containerServiceName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.containerServiceName', props);
    return resource.getResponseField('containerService.containerServiceName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.arn'),
        outputPath: 'containerService.arn',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.arn', props);
    return resource.getResponseField('containerService.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.createdAt'),
        outputPath: 'containerService.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.createdAt', props);
    return resource.getResponseField('containerService.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateContainerServiceContainerServiceLocation {
    return new LightsailResponsesCreateContainerServiceContainerServiceLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.resourceType'),
        outputPath: 'containerService.resourceType',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.resourceType', props);
    return resource.getResponseField('containerService.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.tags'),
        outputPath: 'containerService.tags',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.tags', props);
    return resource.getResponseField('containerService.tags') as unknown as shapes.LightsailTag[];
  }

  public get power(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.power'),
        outputPath: 'containerService.power',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.power', props);
    return resource.getResponseField('containerService.power') as unknown as string;
  }

  public get powerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.powerId'),
        outputPath: 'containerService.powerId',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.powerId', props);
    return resource.getResponseField('containerService.powerId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.state'),
        outputPath: 'containerService.state',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.state', props);
    return resource.getResponseField('containerService.state') as unknown as string;
  }

  public get stateDetail(): LightsailResponsesCreateContainerServiceContainerServiceStateDetail {
    return new LightsailResponsesCreateContainerServiceContainerServiceStateDetail(this.__scope, this.__resources, this.__input);
  }

  public get scale(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.scale'),
        outputPath: 'containerService.scale',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.scale', props);
    return resource.getResponseField('containerService.scale') as unknown as number;
  }

  public get currentDeployment(): LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment {
    return new LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment(this.__scope, this.__resources, this.__input);
  }

  public get nextDeployment(): LightsailResponsesCreateContainerServiceContainerServiceNextDeployment {
    return new LightsailResponsesCreateContainerServiceContainerServiceNextDeployment(this.__scope, this.__resources, this.__input);
  }

  public get isDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.isDisabled'),
        outputPath: 'containerService.isDisabled',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.isDisabled', props);
    return resource.getResponseField('containerService.isDisabled') as unknown as boolean;
  }

  public get principalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.principalArn'),
        outputPath: 'containerService.principalArn',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.principalArn', props);
    return resource.getResponseField('containerService.principalArn') as unknown as string;
  }

  public get privateDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.privateDomainName'),
        outputPath: 'containerService.privateDomainName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.privateDomainName', props);
    return resource.getResponseField('containerService.privateDomainName') as unknown as string;
  }

  public get publicDomainNames(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.publicDomainNames'),
        outputPath: 'containerService.publicDomainNames',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.publicDomainNames', props);
    return resource.getResponseField('containerService.publicDomainNames') as unknown as Record<string, string[]>;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.url'),
        outputPath: 'containerService.url',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.url', props);
    return resource.getResponseField('containerService.url') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.location.availabilityZone'),
        outputPath: 'containerService.location.availabilityZone',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.location.availabilityZone', props);
    return resource.getResponseField('containerService.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.location.regionName'),
        outputPath: 'containerService.location.regionName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.location.regionName', props);
    return resource.getResponseField('containerService.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceStateDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.stateDetail.code'),
        outputPath: 'containerService.stateDetail.code',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.stateDetail.code', props);
    return resource.getResponseField('containerService.stateDetail.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.stateDetail.message'),
        outputPath: 'containerService.stateDetail.message',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.stateDetail.message', props);
    return resource.getResponseField('containerService.stateDetail.message') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceCurrentDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.version'),
        outputPath: 'containerService.currentDeployment.version',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.version', props);
    return resource.getResponseField('containerService.currentDeployment.version') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.state'),
        outputPath: 'containerService.currentDeployment.state',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.state', props);
    return resource.getResponseField('containerService.currentDeployment.state') as unknown as string;
  }

  public get containers(): Record<string, shapes.LightsailContainer> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.containers'),
        outputPath: 'containerService.currentDeployment.containers',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.containers', props);
    return resource.getResponseField('containerService.currentDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint {
    return new LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.createdAt'),
        outputPath: 'containerService.currentDeployment.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.createdAt', props);
    return resource.getResponseField('containerService.currentDeployment.createdAt') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.containerName'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.containerName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.containerName', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerName') as unknown as string;
  }

  public get containerPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.containerPort'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.containerPort',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck {
    return new LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold') as unknown as number;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds') as unknown as number;
  }

  public get intervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds') as unknown as number;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.path'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.path',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.path', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.path') as unknown as string;
  }

  public get successCodes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.successCodes',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceNextDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.version'),
        outputPath: 'containerService.nextDeployment.version',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.version', props);
    return resource.getResponseField('containerService.nextDeployment.version') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.state'),
        outputPath: 'containerService.nextDeployment.state',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.state', props);
    return resource.getResponseField('containerService.nextDeployment.state') as unknown as string;
  }

  public get containers(): Record<string, shapes.LightsailContainer> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.containers'),
        outputPath: 'containerService.nextDeployment.containers',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.containers', props);
    return resource.getResponseField('containerService.nextDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint {
    return new LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.createdAt'),
        outputPath: 'containerService.nextDeployment.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.createdAt', props);
    return resource.getResponseField('containerService.nextDeployment.createdAt') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.containerName'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.containerName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.containerName', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerName') as unknown as string;
  }

  public get containerPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.containerPort'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.containerPort',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck {
    return new LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceRequest) {
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold') as unknown as number;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds') as unknown as number;
  }

  public get intervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds') as unknown as number;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.path'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.path',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.path', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.path') as unknown as string;
  }

  public get successCodes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.successCodes',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          tags: this.__input.tags,
          publicDomainNames: this.__input.publicDomainNames,
          deployment: {
            containers: this.__input.deployment?.containers,
            publicEndpoint: {
              containerName: this.__input.deployment?.publicEndpoint?.containerName,
              containerPort: this.__input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.__input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.__input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.__input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.__input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get containerService(): LightsailResponsesCreateContainerServiceDeploymentContainerService {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerService(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get containerServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.containerServiceName'),
        outputPath: 'containerService.containerServiceName',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.containerServiceName', props);
    return resource.getResponseField('containerService.containerServiceName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.arn'),
        outputPath: 'containerService.arn',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.arn', props);
    return resource.getResponseField('containerService.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.createdAt'),
        outputPath: 'containerService.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.createdAt', props);
    return resource.getResponseField('containerService.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.resourceType'),
        outputPath: 'containerService.resourceType',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.resourceType', props);
    return resource.getResponseField('containerService.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.tags'),
        outputPath: 'containerService.tags',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.tags', props);
    return resource.getResponseField('containerService.tags') as unknown as shapes.LightsailTag[];
  }

  public get power(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.power'),
        outputPath: 'containerService.power',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.power', props);
    return resource.getResponseField('containerService.power') as unknown as string;
  }

  public get powerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.powerId'),
        outputPath: 'containerService.powerId',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.powerId', props);
    return resource.getResponseField('containerService.powerId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.state'),
        outputPath: 'containerService.state',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.state', props);
    return resource.getResponseField('containerService.state') as unknown as string;
  }

  public get stateDetail(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceStateDetail {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceStateDetail(this.__scope, this.__resources, this.__input);
  }

  public get scale(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.scale'),
        outputPath: 'containerService.scale',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.scale', props);
    return resource.getResponseField('containerService.scale') as unknown as number;
  }

  public get currentDeployment(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment(this.__scope, this.__resources, this.__input);
  }

  public get nextDeployment(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment(this.__scope, this.__resources, this.__input);
  }

  public get isDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.isDisabled'),
        outputPath: 'containerService.isDisabled',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.isDisabled', props);
    return resource.getResponseField('containerService.isDisabled') as unknown as boolean;
  }

  public get principalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.principalArn'),
        outputPath: 'containerService.principalArn',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.principalArn', props);
    return resource.getResponseField('containerService.principalArn') as unknown as string;
  }

  public get privateDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.privateDomainName'),
        outputPath: 'containerService.privateDomainName',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.privateDomainName', props);
    return resource.getResponseField('containerService.privateDomainName') as unknown as string;
  }

  public get publicDomainNames(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.publicDomainNames'),
        outputPath: 'containerService.publicDomainNames',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.publicDomainNames', props);
    return resource.getResponseField('containerService.publicDomainNames') as unknown as Record<string, string[]>;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.url'),
        outputPath: 'containerService.url',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.url', props);
    return resource.getResponseField('containerService.url') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.location.availabilityZone'),
        outputPath: 'containerService.location.availabilityZone',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.location.availabilityZone', props);
    return resource.getResponseField('containerService.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.location.regionName'),
        outputPath: 'containerService.location.regionName',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.location.regionName', props);
    return resource.getResponseField('containerService.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceStateDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.stateDetail.code'),
        outputPath: 'containerService.stateDetail.code',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.stateDetail.code', props);
    return resource.getResponseField('containerService.stateDetail.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.stateDetail.message'),
        outputPath: 'containerService.stateDetail.message',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.stateDetail.message', props);
    return resource.getResponseField('containerService.stateDetail.message') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.version'),
        outputPath: 'containerService.currentDeployment.version',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.version', props);
    return resource.getResponseField('containerService.currentDeployment.version') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.state'),
        outputPath: 'containerService.currentDeployment.state',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.state', props);
    return resource.getResponseField('containerService.currentDeployment.state') as unknown as string;
  }

  public get containers(): Record<string, shapes.LightsailContainer> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.containers'),
        outputPath: 'containerService.currentDeployment.containers',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.containers', props);
    return resource.getResponseField('containerService.currentDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.createdAt'),
        outputPath: 'containerService.currentDeployment.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.createdAt', props);
    return resource.getResponseField('containerService.currentDeployment.createdAt') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.containerName'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.containerName',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.containerName', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerName') as unknown as string;
  }

  public get containerPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.containerPort'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.containerPort',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold') as unknown as number;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds') as unknown as number;
  }

  public get intervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds') as unknown as number;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.path'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.path',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.path', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.path') as unknown as string;
  }

  public get successCodes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.successCodes',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.version'),
        outputPath: 'containerService.nextDeployment.version',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.version', props);
    return resource.getResponseField('containerService.nextDeployment.version') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.state'),
        outputPath: 'containerService.nextDeployment.state',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.state', props);
    return resource.getResponseField('containerService.nextDeployment.state') as unknown as string;
  }

  public get containers(): Record<string, shapes.LightsailContainer> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.containers'),
        outputPath: 'containerService.nextDeployment.containers',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.containers', props);
    return resource.getResponseField('containerService.nextDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.createdAt'),
        outputPath: 'containerService.nextDeployment.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.createdAt', props);
    return resource.getResponseField('containerService.nextDeployment.createdAt') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.containerName'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.containerName',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.containerName', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerName') as unknown as string;
  }

  public get containerPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.containerPort'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.containerPort',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck {
    return new LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold') as unknown as number;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds') as unknown as number;
  }

  public get intervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds') as unknown as number;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.path'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.path',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.path', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.path') as unknown as string;
  }

  public get successCodes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceDeployment',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.successCodes',
        parameters: {
          serviceName: this.__input.serviceName,
          containers: this.__input.containers,
          publicEndpoint: {
            containerName: this.__input.publicEndpoint?.containerName,
            containerPort: this.__input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.__input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.__input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.__input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.__input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.__input.publicEndpoint?.healthCheck?.path,
              successCodes: this.__input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailResponsesCreateContainerServiceRegistryLogin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get registryLogin(): LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin {
    return new LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin(this.__scope, this.__resources);
  }

}

export class LightsailResponsesCreateContainerServiceRegistryLoginRegistryLogin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceRegistryLogin',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceRegistryLogin.registryLogin.username'),
        outputPath: 'registryLogin.username',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceRegistryLogin.registryLogin.username', props);
    return resource.getResponseField('registryLogin.username') as unknown as string;
  }

  public get password(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceRegistryLogin',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceRegistryLogin.registryLogin.password'),
        outputPath: 'registryLogin.password',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceRegistryLogin.registryLogin.password', props);
    return resource.getResponseField('registryLogin.password') as unknown as string;
  }

  public get expiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceRegistryLogin',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceRegistryLogin.registryLogin.expiresAt'),
        outputPath: 'registryLogin.expiresAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceRegistryLogin.registryLogin.expiresAt', props);
    return resource.getResponseField('registryLogin.expiresAt') as unknown as string;
  }

  public get registry(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContainerServiceRegistryLogin',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateContainerServiceRegistryLogin.registryLogin.registry'),
        outputPath: 'registryLogin.registry',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContainerServiceRegistryLogin.registryLogin.registry', props);
    return resource.getResponseField('registryLogin.registry') as unknown as string;
  }

}

export class LightsailResponsesCreateDisk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDiskRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDisk.operations'),
        outputPath: 'operations',
        parameters: {
          diskName: this.__input.diskName,
          availabilityZone: this.__input.availabilityZone,
          sizeInGb: this.__input.sizeInGb,
          tags: this.__input.tags,
          addOns: this.__input.addOns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateDiskFromSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDiskFromSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiskFromSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDiskFromSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          diskName: this.__input.diskName,
          diskSnapshotName: this.__input.diskSnapshotName,
          availabilityZone: this.__input.availabilityZone,
          sizeInGb: this.__input.sizeInGb,
          tags: this.__input.tags,
          addOns: this.__input.addOns,
          sourceDiskName: this.__input.sourceDiskName,
          restoreDate: this.__input.restoreDate,
          useLatestRestorableAutoSnapshot: this.__input.useLatestRestorableAutoSnapshot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiskFromSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateDiskSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDiskSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDiskSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          diskName: this.__input.diskName,
          diskSnapshotName: this.__input.diskSnapshotName,
          instanceName: this.__input.instanceName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDiskSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateDistribution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get distribution(): LightsailResponsesCreateDistributionDistribution {
    return new LightsailResponsesCreateDistributionDistribution(this.__scope, this.__resources, this.__input);
  }

  public get operation(): LightsailResponsesCreateDistributionOperation {
    return new LightsailResponsesCreateDistributionOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateDistributionDistribution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.name'),
        outputPath: 'distribution.name',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.name', props);
    return resource.getResponseField('distribution.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.arn'),
        outputPath: 'distribution.arn',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.arn', props);
    return resource.getResponseField('distribution.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.supportCode'),
        outputPath: 'distribution.supportCode',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.supportCode', props);
    return resource.getResponseField('distribution.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.createdAt'),
        outputPath: 'distribution.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.createdAt', props);
    return resource.getResponseField('distribution.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateDistributionDistributionLocation {
    return new LightsailResponsesCreateDistributionDistributionLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.resourceType'),
        outputPath: 'distribution.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.resourceType', props);
    return resource.getResponseField('distribution.resourceType') as unknown as string;
  }

  public get alternativeDomainNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.alternativeDomainNames'),
        outputPath: 'distribution.alternativeDomainNames',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.alternativeDomainNames', props);
    return resource.getResponseField('distribution.alternativeDomainNames') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.status'),
        outputPath: 'distribution.status',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.status', props);
    return resource.getResponseField('distribution.status') as unknown as string;
  }

  public get isEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.isEnabled'),
        outputPath: 'distribution.isEnabled',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.isEnabled', props);
    return resource.getResponseField('distribution.isEnabled') as unknown as boolean;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.domainName'),
        outputPath: 'distribution.domainName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.domainName', props);
    return resource.getResponseField('distribution.domainName') as unknown as string;
  }

  public get bundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.bundleId'),
        outputPath: 'distribution.bundleId',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.bundleId', props);
    return resource.getResponseField('distribution.bundleId') as unknown as string;
  }

  public get certificateName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.certificateName'),
        outputPath: 'distribution.certificateName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.certificateName', props);
    return resource.getResponseField('distribution.certificateName') as unknown as string;
  }

  public get origin(): LightsailResponsesCreateDistributionDistributionOrigin {
    return new LightsailResponsesCreateDistributionDistributionOrigin(this.__scope, this.__resources, this.__input);
  }

  public get originPublicDns(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.originPublicDNS'),
        outputPath: 'distribution.originPublicDNS',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.originPublicDNS', props);
    return resource.getResponseField('distribution.originPublicDNS') as unknown as string;
  }

  public get defaultCacheBehavior(): LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior {
    return new LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior(this.__scope, this.__resources, this.__input);
  }

  public get cacheBehaviorSettings(): LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings {
    return new LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings(this.__scope, this.__resources, this.__input);
  }

  public get cacheBehaviors(): shapes.LightsailCacheBehaviorPerPath[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviors'),
        outputPath: 'distribution.cacheBehaviors',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviors', props);
    return resource.getResponseField('distribution.cacheBehaviors') as unknown as shapes.LightsailCacheBehaviorPerPath[];
  }

  public get ableToUpdateBundle(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.ableToUpdateBundle'),
        outputPath: 'distribution.ableToUpdateBundle',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.ableToUpdateBundle', props);
    return resource.getResponseField('distribution.ableToUpdateBundle') as unknown as boolean;
  }

  public get ipAddressType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.ipAddressType'),
        outputPath: 'distribution.ipAddressType',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.ipAddressType', props);
    return resource.getResponseField('distribution.ipAddressType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.tags'),
        outputPath: 'distribution.tags',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.tags', props);
    return resource.getResponseField('distribution.tags') as unknown as shapes.LightsailTag[];
  }

}

export class LightsailResponsesCreateDistributionDistributionLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.location.availabilityZone'),
        outputPath: 'distribution.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.location.availabilityZone', props);
    return resource.getResponseField('distribution.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.location.regionName'),
        outputPath: 'distribution.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.location.regionName', props);
    return resource.getResponseField('distribution.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateDistributionDistributionOrigin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.origin.name'),
        outputPath: 'distribution.origin.name',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.origin.name', props);
    return resource.getResponseField('distribution.origin.name') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.origin.resourceType'),
        outputPath: 'distribution.origin.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.origin.resourceType', props);
    return resource.getResponseField('distribution.origin.resourceType') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.origin.regionName'),
        outputPath: 'distribution.origin.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.origin.regionName', props);
    return resource.getResponseField('distribution.origin.regionName') as unknown as string;
  }

  public get protocolPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.origin.protocolPolicy'),
        outputPath: 'distribution.origin.protocolPolicy',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.origin.protocolPolicy', props);
    return resource.getResponseField('distribution.origin.protocolPolicy') as unknown as string;
  }

}

export class LightsailResponsesCreateDistributionDistributionDefaultCacheBehavior {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get behavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.defaultCacheBehavior.behavior'),
        outputPath: 'distribution.defaultCacheBehavior.behavior',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.defaultCacheBehavior.behavior', props);
    return resource.getResponseField('distribution.defaultCacheBehavior.behavior') as unknown as string;
  }

}

export class LightsailResponsesCreateDistributionDistributionCacheBehaviorSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get defaultTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.defaultTTL'),
        outputPath: 'distribution.cacheBehaviorSettings.defaultTTL',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.defaultTTL', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.defaultTTL') as unknown as number;
  }

  public get minimumTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.minimumTTL'),
        outputPath: 'distribution.cacheBehaviorSettings.minimumTTL',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.minimumTTL', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.minimumTTL') as unknown as number;
  }

  public get maximumTtl(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.maximumTTL'),
        outputPath: 'distribution.cacheBehaviorSettings.maximumTTL',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.maximumTTL', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.maximumTTL') as unknown as number;
  }

  public get allowedHttpMethods(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.allowedHTTPMethods'),
        outputPath: 'distribution.cacheBehaviorSettings.allowedHTTPMethods',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.allowedHTTPMethods', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.allowedHTTPMethods') as unknown as string;
  }

  public get cachedHttpMethods(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.cachedHTTPMethods'),
        outputPath: 'distribution.cacheBehaviorSettings.cachedHTTPMethods',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.cachedHTTPMethods', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.cachedHTTPMethods') as unknown as string;
  }

  public get forwardedCookies(): LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies {
    return new LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies(this.__scope, this.__resources, this.__input);
  }

  public get forwardedHeaders(): LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders {
    return new LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders(this.__scope, this.__resources, this.__input);
  }

  public get forwardedQueryStrings(): LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings {
    return new LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get option(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.forwardedCookies.option'),
        outputPath: 'distribution.cacheBehaviorSettings.forwardedCookies.option',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedCookies.option', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedCookies.option') as unknown as string;
  }

  public get cookiesAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.forwardedCookies.cookiesAllowList'),
        outputPath: 'distribution.cacheBehaviorSettings.forwardedCookies.cookiesAllowList',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedCookies.cookiesAllowList', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedCookies.cookiesAllowList') as unknown as string[];
  }

}

export class LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get option(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.forwardedHeaders.option'),
        outputPath: 'distribution.cacheBehaviorSettings.forwardedHeaders.option',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedHeaders.option', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedHeaders.option') as unknown as string;
  }

  public get headersAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.forwardedHeaders.headersAllowList'),
        outputPath: 'distribution.cacheBehaviorSettings.forwardedHeaders.headersAllowList',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedHeaders.headersAllowList', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedHeaders.headersAllowList') as unknown as string[];
  }

}

export class LightsailResponsesCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get option(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.forwardedQueryStrings.option'),
        outputPath: 'distribution.cacheBehaviorSettings.forwardedQueryStrings.option',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedQueryStrings.option', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedQueryStrings.option') as unknown as boolean;
  }

  public get queryStringsAllowList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.distribution.cacheBehaviorSettings.forwardedQueryStrings.queryStringsAllowList'),
        outputPath: 'distribution.cacheBehaviorSettings.forwardedQueryStrings.queryStringsAllowList',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedQueryStrings.queryStringsAllowList', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedQueryStrings.queryStringsAllowList') as unknown as string[];
  }

}

export class LightsailResponsesCreateDistributionOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateDistributionOperationLocation {
    return new LightsailResponsesCreateDistributionOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesCreateDistributionOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDistributionRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDistribution.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin.name,
            regionName: this.__input.origin.regionName,
            protocolPolicy: this.__input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          bundleId: this.__input.bundleId,
          ipAddressType: this.__input.ipAddressType,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDomainRequest) {
  }

  public get operation(): LightsailResponsesCreateDomainOperation {
    return new LightsailResponsesCreateDomainOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateDomainOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDomainRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateDomainOperationLocation {
    return new LightsailResponsesCreateDomainOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesCreateDomainOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDomainRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomain.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          domainName: this.__input.domainName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateDomainEntry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDomainEntryRequest) {
  }

  public get operation(): LightsailResponsesCreateDomainEntryOperation {
    return new LightsailResponsesCreateDomainEntryOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateDomainEntryOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDomainEntryRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateDomainEntryOperationLocation {
    return new LightsailResponsesCreateDomainEntryOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesCreateDomainEntryOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateDomainEntryRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateDomainEntry.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomainEntry.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateInstanceSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateInstanceSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateInstanceSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
          instanceName: this.__input.instanceName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateInstancesRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstances',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateInstances.operations'),
        outputPath: 'operations',
        parameters: {
          instanceNames: this.__input.instanceNames,
          availabilityZone: this.__input.availabilityZone,
          customImageName: this.__input.customImageName,
          blueprintId: this.__input.blueprintId,
          bundleId: this.__input.bundleId,
          userData: this.__input.userData,
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
          addOns: this.__input.addOns,
          ipAddressType: this.__input.ipAddressType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstances.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateInstancesFromSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateInstancesFromSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstancesFromSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateInstancesFromSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          instanceNames: this.__input.instanceNames,
          attachedDiskMapping: this.__input.attachedDiskMapping,
          availabilityZone: this.__input.availabilityZone,
          instanceSnapshotName: this.__input.instanceSnapshotName,
          bundleId: this.__input.bundleId,
          userData: this.__input.userData,
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
          addOns: this.__input.addOns,
          ipAddressType: this.__input.ipAddressType,
          sourceInstanceName: this.__input.sourceInstanceName,
          restoreDate: this.__input.restoreDate,
          useLatestRestorableAutoSnapshot: this.__input.useLatestRestorableAutoSnapshot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstancesFromSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateKeyPairRequest) {
  }

  public get keyPair(): LightsailResponsesCreateKeyPairKeyPair {
    return new LightsailResponsesCreateKeyPairKeyPair(this.__scope, this.__resources, this.__input);
  }

  public get publicKeyBase64(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.publicKeyBase64'),
        outputPath: 'publicKeyBase64',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.publicKeyBase64', props);
    return resource.getResponseField('publicKeyBase64') as unknown as string;
  }

  public get privateKeyBase64(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.privateKeyBase64'),
        outputPath: 'privateKeyBase64',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.privateKeyBase64', props);
    return resource.getResponseField('privateKeyBase64') as unknown as string;
  }

  public get operation(): LightsailResponsesCreateKeyPairOperation {
    return new LightsailResponsesCreateKeyPairOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesCreateKeyPairKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateKeyPairRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.name'),
        outputPath: 'keyPair.name',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.name', props);
    return resource.getResponseField('keyPair.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.arn'),
        outputPath: 'keyPair.arn',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.arn', props);
    return resource.getResponseField('keyPair.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.supportCode'),
        outputPath: 'keyPair.supportCode',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.supportCode', props);
    return resource.getResponseField('keyPair.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.createdAt'),
        outputPath: 'keyPair.createdAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.createdAt', props);
    return resource.getResponseField('keyPair.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateKeyPairKeyPairLocation {
    return new LightsailResponsesCreateKeyPairKeyPairLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.resourceType'),
        outputPath: 'keyPair.resourceType',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.resourceType', props);
    return resource.getResponseField('keyPair.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.tags'),
        outputPath: 'keyPair.tags',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.tags', props);
    return resource.getResponseField('keyPair.tags') as unknown as shapes.LightsailTag[];
  }

  public get fingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.fingerprint'),
        outputPath: 'keyPair.fingerprint',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.fingerprint', props);
    return resource.getResponseField('keyPair.fingerprint') as unknown as string;
  }

}

export class LightsailResponsesCreateKeyPairKeyPairLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateKeyPairRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.location.availabilityZone'),
        outputPath: 'keyPair.location.availabilityZone',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.location.availabilityZone', props);
    return resource.getResponseField('keyPair.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.keyPair.location.regionName'),
        outputPath: 'keyPair.location.regionName',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.keyPair.location.regionName', props);
    return resource.getResponseField('keyPair.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateKeyPairOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateKeyPairRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesCreateKeyPairOperationLocation {
    return new LightsailResponsesCreateKeyPairOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesCreateKeyPairOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateKeyPairRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateKeyPair.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          keyPairName: this.__input.keyPairName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateKeyPair.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesCreateLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateLoadBalancerRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateLoadBalancer.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          instancePort: this.__input.instancePort,
          healthCheckPath: this.__input.healthCheckPath,
          certificateName: this.__input.certificateName,
          certificateDomainName: this.__input.certificateDomainName,
          certificateAlternativeNames: this.__input.certificateAlternativeNames,
          tags: this.__input.tags,
          ipAddressType: this.__input.ipAddressType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateLoadBalancerTlsCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateLoadBalancerTlsCertificateRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLoadBalancerTlsCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateLoadBalancerTlsCertificate.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          certificateName: this.__input.certificateName,
          certificateDomainName: this.__input.certificateDomainName,
          certificateAlternativeNames: this.__input.certificateAlternativeNames,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLoadBalancerTlsCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateRelationalDatabaseRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateRelationalDatabase.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          availabilityZone: this.__input.availabilityZone,
          relationalDatabaseBlueprintId: this.__input.relationalDatabaseBlueprintId,
          relationalDatabaseBundleId: this.__input.relationalDatabaseBundleId,
          masterDatabaseName: this.__input.masterDatabaseName,
          masterUsername: this.__input.masterUsername,
          masterUserPassword: this.__input.masterUserPassword,
          preferredBackupWindow: this.__input.preferredBackupWindow,
          preferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          publiclyAccessible: this.__input.publiclyAccessible,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateRelationalDatabaseFromSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateRelationalDatabaseFromSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRelationalDatabaseFromSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateRelationalDatabaseFromSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          availabilityZone: this.__input.availabilityZone,
          publiclyAccessible: this.__input.publiclyAccessible,
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
          relationalDatabaseBundleId: this.__input.relationalDatabaseBundleId,
          sourceRelationalDatabaseName: this.__input.sourceRelationalDatabaseName,
          restoreTime: this.__input.restoreTime,
          useLatestRestorableTime: this.__input.useLatestRestorableTime,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRelationalDatabaseFromSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesCreateRelationalDatabaseSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailCreateRelationalDatabaseSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.CreateRelationalDatabaseSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRelationalDatabaseSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteAlarmRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAlarm',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteAlarm.operations'),
        outputPath: 'operations',
        parameters: {
          alarmName: this.__input.alarmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAlarm.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteAutoSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteAutoSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutoSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteAutoSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          resourceName: this.__input.resourceName,
          date: this.__input.date,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutoSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteBucketRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteBucket.operations'),
        outputPath: 'operations',
        parameters: {
          bucketName: this.__input.bucketName,
          forceDelete: this.__input.forceDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBucket.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteBucketAccessKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteBucketAccessKeyRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBucketAccessKey',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteBucketAccessKey.operations'),
        outputPath: 'operations',
        parameters: {
          bucketName: this.__input.bucketName,
          accessKeyId: this.__input.accessKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBucketAccessKey.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteCertificateRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteCertificate.operations'),
        outputPath: 'operations',
        parameters: {
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteContactMethod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteContactMethodRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContactMethod',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteContactMethod.operations'),
        outputPath: 'operations',
        parameters: {
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteContactMethod.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteDisk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDiskRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDisk.operations'),
        outputPath: 'operations',
        parameters: {
          diskName: this.__input.diskName,
          forceDeleteAddOns: this.__input.forceDeleteAddOns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteDiskSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDiskSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDiskSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDiskSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteDistribution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDistributionRequest) {
  }

  public get operation(): LightsailResponsesDeleteDistributionOperation {
    return new LightsailResponsesDeleteDistributionOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesDeleteDistributionOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDistributionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesDeleteDistributionOperationLocation {
    return new LightsailResponsesDeleteDistributionOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesDeleteDistributionOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDistributionRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDistribution.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesDeleteDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDomainRequest) {
  }

  public get operation(): LightsailResponsesDeleteDomainOperation {
    return new LightsailResponsesDeleteDomainOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesDeleteDomainOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDomainRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesDeleteDomainOperationLocation {
    return new LightsailResponsesDeleteDomainOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesDeleteDomainOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDomainRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomain.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesDeleteDomainEntry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDomainEntryRequest) {
  }

  public get operation(): LightsailResponsesDeleteDomainEntryOperation {
    return new LightsailResponsesDeleteDomainEntryOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesDeleteDomainEntryOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDomainEntryRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesDeleteDomainEntryOperationLocation {
    return new LightsailResponsesDeleteDomainEntryOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesDeleteDomainEntryOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteDomainEntryRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteDomainEntry.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomainEntry.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesDeleteInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteInstanceRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteInstance.operations'),
        outputPath: 'operations',
        parameters: {
          instanceName: this.__input.instanceName,
          forceDeleteAddOns: this.__input.forceDeleteAddOns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteInstanceSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteInstanceSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteInstanceSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInstanceSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteKeyPairRequest) {
  }

  public get operation(): LightsailResponsesDeleteKeyPairOperation {
    return new LightsailResponsesDeleteKeyPairOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesDeleteKeyPairOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteKeyPairRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesDeleteKeyPairOperationLocation {
    return new LightsailResponsesDeleteKeyPairOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesDeleteKeyPairOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteKeyPairRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKeyPair.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKeyPair.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesDeleteKnownHostKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteKnownHostKeysRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteKnownHostKeys',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteKnownHostKeys.operations'),
        outputPath: 'operations',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteKnownHostKeys.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteLoadBalancerRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteLoadBalancer.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteLoadBalancerTlsCertificate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteLoadBalancerTlsCertificateRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLoadBalancerTlsCertificate',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteLoadBalancerTlsCertificate.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          certificateName: this.__input.certificateName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLoadBalancerTlsCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteRelationalDatabaseRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteRelationalDatabase.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          skipFinalSnapshot: this.__input.skipFinalSnapshot,
          finalRelationalDatabaseSnapshotName: this.__input.finalRelationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDeleteRelationalDatabaseSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDeleteRelationalDatabaseSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DeleteRelationalDatabaseSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRelationalDatabaseSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDetachCertificateFromDistribution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDetachCertificateFromDistributionRequest) {
  }

  public get operation(): LightsailResponsesDetachCertificateFromDistributionOperation {
    return new LightsailResponsesDetachCertificateFromDistributionOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesDetachCertificateFromDistributionOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDetachCertificateFromDistributionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesDetachCertificateFromDistributionOperationLocation {
    return new LightsailResponsesDetachCertificateFromDistributionOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesDetachCertificateFromDistributionOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDetachCertificateFromDistributionRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachCertificateFromDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachCertificateFromDistribution.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachCertificateFromDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesDetachDisk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDetachDiskRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachDisk.operations'),
        outputPath: 'operations',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDetachInstancesFromLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDetachInstancesFromLoadBalancerRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachInstancesFromLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachInstancesFromLoadBalancer.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          instanceNames: this.__input.instanceNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachInstancesFromLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDetachStaticIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDetachStaticIpRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DetachStaticIp.operations'),
        outputPath: 'operations',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDisableAddOn {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailDisableAddOnRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableAddOn',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DisableAddOn.operations'),
        outputPath: 'operations',
        parameters: {
          addOnType: this.__input.addOnType,
          resourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableAddOn.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesDownloadDefaultKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get publicKeyBase64(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'downloadDefaultKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DownloadDefaultKeyPair.publicKeyBase64'),
        outputPath: 'publicKeyBase64',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DownloadDefaultKeyPair.publicKeyBase64', props);
    return resource.getResponseField('publicKeyBase64') as unknown as string;
  }

  public get privateKeyBase64(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'downloadDefaultKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.DownloadDefaultKeyPair.privateKeyBase64'),
        outputPath: 'privateKeyBase64',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DownloadDefaultKeyPair.privateKeyBase64', props);
    return resource.getResponseField('privateKeyBase64') as unknown as string;
  }

}

export class LightsailResponsesEnableAddOn {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailEnableAddOnRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableAddOn',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.EnableAddOn.operations'),
        outputPath: 'operations',
        parameters: {
          resourceName: this.__input.resourceName,
          addOnRequest: {
            addOnType: this.__input.addOnRequest.addOnType,
            autoSnapshotAddOnRequest: {
              snapshotTimeOfDay: this.__input.addOnRequest.autoSnapshotAddOnRequest?.snapshotTimeOfDay,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EnableAddOn.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesExportSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailExportSnapshotRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ExportSnapshot.operations'),
        outputPath: 'operations',
        parameters: {
          sourceSnapshotName: this.__input.sourceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesFetchActiveNames {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetActiveNamesRequest) {
  }

  public get activeNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActiveNames',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetActiveNames.activeNames'),
        outputPath: 'activeNames',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActiveNames.activeNames', props);
    return resource.getResponseField('activeNames') as unknown as string[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getActiveNames',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetActiveNames.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetActiveNames.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchAlarms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetAlarmsRequest) {
  }

  public get alarms(): shapes.LightsailAlarm[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlarms',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetAlarms.alarms'),
        outputPath: 'alarms',
        parameters: {
          alarmName: this.__input.alarmName,
          pageToken: this.__input.pageToken,
          monitoredResourceName: this.__input.monitoredResourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlarms.alarms', props);
    return resource.getResponseField('alarms') as unknown as shapes.LightsailAlarm[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAlarms',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetAlarms.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          alarmName: this.__input.alarmName,
          pageToken: this.__input.pageToken,
          monitoredResourceName: this.__input.monitoredResourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAlarms.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchAutoSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetAutoSnapshotsRequest) {
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutoSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetAutoSnapshots.resourceName'),
        outputPath: 'resourceName',
        parameters: {
          resourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutoSnapshots.resourceName', props);
    return resource.getResponseField('resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutoSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetAutoSnapshots.resourceType'),
        outputPath: 'resourceType',
        parameters: {
          resourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutoSnapshots.resourceType', props);
    return resource.getResponseField('resourceType') as unknown as string;
  }

  public get autoSnapshots(): shapes.LightsailAutoSnapshotDetails[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutoSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetAutoSnapshots.autoSnapshots'),
        outputPath: 'autoSnapshots',
        parameters: {
          resourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutoSnapshots.autoSnapshots', props);
    return resource.getResponseField('autoSnapshots') as unknown as shapes.LightsailAutoSnapshotDetails[];
  }

}

export class LightsailResponsesFetchBlueprints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetBlueprintsRequest) {
  }

  public get blueprints(): shapes.LightsailBlueprint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBlueprints',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBlueprints.blueprints'),
        outputPath: 'blueprints',
        parameters: {
          includeInactive: this.__input.includeInactive,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBlueprints.blueprints', props);
    return resource.getResponseField('blueprints') as unknown as shapes.LightsailBlueprint[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBlueprints',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBlueprints.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          includeInactive: this.__input.includeInactive,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBlueprints.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchBucketAccessKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetBucketAccessKeysRequest) {
  }

  public get accessKeys(): shapes.LightsailAccessKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketAccessKeys',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBucketAccessKeys.accessKeys'),
        outputPath: 'accessKeys',
        parameters: {
          bucketName: this.__input.bucketName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketAccessKeys.accessKeys', props);
    return resource.getResponseField('accessKeys') as unknown as shapes.LightsailAccessKey[];
  }

}

export class LightsailResponsesFetchBucketBundles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetBucketBundlesRequest) {
  }

  public get bundles(): shapes.LightsailBucketBundle[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketBundles',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBucketBundles.bundles'),
        outputPath: 'bundles',
        parameters: {
          includeInactive: this.__input.includeInactive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketBundles.bundles', props);
    return resource.getResponseField('bundles') as unknown as shapes.LightsailBucketBundle[];
  }

}

export class LightsailResponsesFetchBucketMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetBucketMetricDataRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBucketMetricData.metricName'),
        outputPath: 'metricName',
        parameters: {
          bucketName: this.__input.bucketName,
          metricName: this.__input.metricName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          period: this.__input.period,
          statistics: this.__input.statistics,
          unit: this.__input.unit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricData.metricName', props);
    return resource.getResponseField('metricName') as unknown as string;
  }

  public get metricData(): shapes.LightsailMetricDatapoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBucketMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBucketMetricData.metricData'),
        outputPath: 'metricData',
        parameters: {
          bucketName: this.__input.bucketName,
          metricName: this.__input.metricName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          period: this.__input.period,
          statistics: this.__input.statistics,
          unit: this.__input.unit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBucketMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailResponsesFetchBuckets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetBucketsRequest) {
  }

  public get buckets(): shapes.LightsailBucket[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBuckets',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBuckets.buckets'),
        outputPath: 'buckets',
        parameters: {
          bucketName: this.__input.bucketName,
          pageToken: this.__input.pageToken,
          includeConnectedResources: this.__input.includeConnectedResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBuckets.buckets', props);
    return resource.getResponseField('buckets') as unknown as shapes.LightsailBucket[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBuckets',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBuckets.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          bucketName: this.__input.bucketName,
          pageToken: this.__input.pageToken,
          includeConnectedResources: this.__input.includeConnectedResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBuckets.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchBundles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetBundlesRequest) {
  }

  public get bundles(): shapes.LightsailBundle[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBundles',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBundles.bundles'),
        outputPath: 'bundles',
        parameters: {
          includeInactive: this.__input.includeInactive,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBundles.bundles', props);
    return resource.getResponseField('bundles') as unknown as shapes.LightsailBundle[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBundles',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetBundles.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          includeInactive: this.__input.includeInactive,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBundles.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetCertificatesRequest) {
  }

  public get certificates(): shapes.LightsailCertificateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCertificates',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetCertificates.certificates'),
        outputPath: 'certificates',
        parameters: {
          certificateStatuses: this.__input.certificateStatuses,
          includeCertificateDetails: this.__input.includeCertificateDetails,
          certificateName: this.__input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCertificates.certificates', props);
    return resource.getResponseField('certificates') as unknown as shapes.LightsailCertificateSummary[];
  }

}

export class LightsailResponsesFetchCloudFormationStackRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetCloudFormationStackRecordsRequest) {
  }

  public get cloudFormationStackRecords(): shapes.LightsailCloudFormationStackRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCloudFormationStackRecords',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetCloudFormationStackRecords.cloudFormationStackRecords'),
        outputPath: 'cloudFormationStackRecords',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCloudFormationStackRecords.cloudFormationStackRecords', props);
    return resource.getResponseField('cloudFormationStackRecords') as unknown as shapes.LightsailCloudFormationStackRecord[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCloudFormationStackRecords',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetCloudFormationStackRecords.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCloudFormationStackRecords.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchContactMethods {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetContactMethodsRequest) {
  }

  public get contactMethods(): shapes.LightsailContactMethod[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContactMethods',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContactMethods.contactMethods'),
        outputPath: 'contactMethods',
        parameters: {
          protocols: this.__input.protocols,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContactMethods.contactMethods', props);
    return resource.getResponseField('contactMethods') as unknown as shapes.LightsailContactMethod[];
  }

}

export class LightsailResponsesFetchContainerApiMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get metadata(): Record<string, string>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerApiMetadata',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerAPIMetadata.metadata'),
        outputPath: 'metadata',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerAPIMetadata.metadata', props);
    return resource.getResponseField('metadata') as unknown as Record<string, string>[];
  }

}

export class LightsailResponsesFetchContainerImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetContainerImagesRequest) {
  }

  public get containerImages(): shapes.LightsailContainerImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerImages',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerImages.containerImages'),
        outputPath: 'containerImages',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerImages.containerImages', props);
    return resource.getResponseField('containerImages') as unknown as shapes.LightsailContainerImage[];
  }

}

export class LightsailResponsesFetchContainerLog {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetContainerLogRequest) {
  }

  public get logEvents(): shapes.LightsailContainerServiceLogEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerLog',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerLog.logEvents'),
        outputPath: 'logEvents',
        parameters: {
          serviceName: this.__input.serviceName,
          containerName: this.__input.containerName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          filterPattern: this.__input.filterPattern,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerLog.logEvents', props);
    return resource.getResponseField('logEvents') as unknown as shapes.LightsailContainerServiceLogEvent[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerLog',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerLog.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          serviceName: this.__input.serviceName,
          containerName: this.__input.containerName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          filterPattern: this.__input.filterPattern,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerLog.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchContainerServiceDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetContainerServiceDeploymentsRequest) {
  }

  public get deployments(): shapes.LightsailContainerServiceDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerServiceDeployments',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerServiceDeployments.deployments'),
        outputPath: 'deployments',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerServiceDeployments.deployments', props);
    return resource.getResponseField('deployments') as unknown as shapes.LightsailContainerServiceDeployment[];
  }

}

export class LightsailResponsesFetchContainerServiceMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetContainerServiceMetricDataRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerServiceMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerServiceMetricData.metricName'),
        outputPath: 'metricName',
        parameters: {
          serviceName: this.__input.serviceName,
          metricName: this.__input.metricName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          period: this.__input.period,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerServiceMetricData.metricName', props);
    return resource.getResponseField('metricName') as unknown as string;
  }

  public get metricData(): shapes.LightsailMetricDatapoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerServiceMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerServiceMetricData.metricData'),
        outputPath: 'metricData',
        parameters: {
          serviceName: this.__input.serviceName,
          metricName: this.__input.metricName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          period: this.__input.period,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerServiceMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailResponsesFetchContainerServicePowers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get powers(): shapes.LightsailContainerServicePower[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerServicePowers',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerServicePowers.powers'),
        outputPath: 'powers',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerServicePowers.powers', props);
    return resource.getResponseField('powers') as unknown as shapes.LightsailContainerServicePower[];
  }

}

export class LightsailResponsesFetchContainerServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetContainerServicesRequest) {
  }

  public get containerServices(): shapes.LightsailContainerService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContainerServices',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetContainerServices.containerServices'),
        outputPath: 'containerServices',
        parameters: {
          serviceName: this.__input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContainerServices.containerServices', props);
    return resource.getResponseField('containerServices') as unknown as shapes.LightsailContainerService[];
  }

}

export class LightsailResponsesFetchDisk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDiskRequest) {
  }

  public get disk(): LightsailResponsesFetchDiskDisk {
    return new LightsailResponsesFetchDiskDisk(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchDiskDisk {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDiskRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.name'),
        outputPath: 'disk.name',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.name', props);
    return resource.getResponseField('disk.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.arn'),
        outputPath: 'disk.arn',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.arn', props);
    return resource.getResponseField('disk.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.supportCode'),
        outputPath: 'disk.supportCode',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.supportCode', props);
    return resource.getResponseField('disk.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.createdAt'),
        outputPath: 'disk.createdAt',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.createdAt', props);
    return resource.getResponseField('disk.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchDiskDiskLocation {
    return new LightsailResponsesFetchDiskDiskLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.resourceType'),
        outputPath: 'disk.resourceType',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.resourceType', props);
    return resource.getResponseField('disk.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.tags'),
        outputPath: 'disk.tags',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.tags', props);
    return resource.getResponseField('disk.tags') as unknown as shapes.LightsailTag[];
  }

  public get addOns(): shapes.LightsailAddOn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.addOns'),
        outputPath: 'disk.addOns',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.addOns', props);
    return resource.getResponseField('disk.addOns') as unknown as shapes.LightsailAddOn[];
  }

  public get sizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.sizeInGb'),
        outputPath: 'disk.sizeInGb',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.sizeInGb', props);
    return resource.getResponseField('disk.sizeInGb') as unknown as number;
  }

  public get isSystemDisk(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.isSystemDisk'),
        outputPath: 'disk.isSystemDisk',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.isSystemDisk', props);
    return resource.getResponseField('disk.isSystemDisk') as unknown as boolean;
  }

  public get iops(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.iops'),
        outputPath: 'disk.iops',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.iops', props);
    return resource.getResponseField('disk.iops') as unknown as number;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.path'),
        outputPath: 'disk.path',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.path', props);
    return resource.getResponseField('disk.path') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.state'),
        outputPath: 'disk.state',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.state', props);
    return resource.getResponseField('disk.state') as unknown as string;
  }

  public get attachedTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.attachedTo'),
        outputPath: 'disk.attachedTo',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.attachedTo', props);
    return resource.getResponseField('disk.attachedTo') as unknown as string;
  }

  public get isAttached(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.isAttached'),
        outputPath: 'disk.isAttached',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.isAttached', props);
    return resource.getResponseField('disk.isAttached') as unknown as boolean;
  }

  public get attachmentState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.attachmentState'),
        outputPath: 'disk.attachmentState',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.attachmentState', props);
    return resource.getResponseField('disk.attachmentState') as unknown as string;
  }

  public get gbInUse(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.gbInUse'),
        outputPath: 'disk.gbInUse',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.gbInUse', props);
    return resource.getResponseField('disk.gbInUse') as unknown as number;
  }

}

export class LightsailResponsesFetchDiskDiskLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDiskRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.location.availabilityZone'),
        outputPath: 'disk.location.availabilityZone',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.location.availabilityZone', props);
    return resource.getResponseField('disk.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisk',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisk.disk.location.regionName'),
        outputPath: 'disk.location.regionName',
        parameters: {
          diskName: this.__input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisk.disk.location.regionName', props);
    return resource.getResponseField('disk.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchDiskSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDiskSnapshotRequest) {
  }

  public get diskSnapshot(): LightsailResponsesFetchDiskSnapshotDiskSnapshot {
    return new LightsailResponsesFetchDiskSnapshotDiskSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchDiskSnapshotDiskSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDiskSnapshotRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.name'),
        outputPath: 'diskSnapshot.name',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.name', props);
    return resource.getResponseField('diskSnapshot.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.arn'),
        outputPath: 'diskSnapshot.arn',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.arn', props);
    return resource.getResponseField('diskSnapshot.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.supportCode'),
        outputPath: 'diskSnapshot.supportCode',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.supportCode', props);
    return resource.getResponseField('diskSnapshot.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.createdAt'),
        outputPath: 'diskSnapshot.createdAt',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.createdAt', props);
    return resource.getResponseField('diskSnapshot.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation {
    return new LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.resourceType'),
        outputPath: 'diskSnapshot.resourceType',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.resourceType', props);
    return resource.getResponseField('diskSnapshot.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.tags'),
        outputPath: 'diskSnapshot.tags',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.tags', props);
    return resource.getResponseField('diskSnapshot.tags') as unknown as shapes.LightsailTag[];
  }

  public get sizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.sizeInGb'),
        outputPath: 'diskSnapshot.sizeInGb',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.sizeInGb', props);
    return resource.getResponseField('diskSnapshot.sizeInGb') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.state'),
        outputPath: 'diskSnapshot.state',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.state', props);
    return resource.getResponseField('diskSnapshot.state') as unknown as string;
  }

  public get progress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.progress'),
        outputPath: 'diskSnapshot.progress',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.progress', props);
    return resource.getResponseField('diskSnapshot.progress') as unknown as string;
  }

  public get fromDiskName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.fromDiskName'),
        outputPath: 'diskSnapshot.fromDiskName',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.fromDiskName', props);
    return resource.getResponseField('diskSnapshot.fromDiskName') as unknown as string;
  }

  public get fromDiskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.fromDiskArn'),
        outputPath: 'diskSnapshot.fromDiskArn',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.fromDiskArn', props);
    return resource.getResponseField('diskSnapshot.fromDiskArn') as unknown as string;
  }

  public get fromInstanceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.fromInstanceName'),
        outputPath: 'diskSnapshot.fromInstanceName',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.fromInstanceName', props);
    return resource.getResponseField('diskSnapshot.fromInstanceName') as unknown as string;
  }

  public get fromInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.fromInstanceArn'),
        outputPath: 'diskSnapshot.fromInstanceArn',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.fromInstanceArn', props);
    return resource.getResponseField('diskSnapshot.fromInstanceArn') as unknown as string;
  }

  public get isFromAutoSnapshot(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.isFromAutoSnapshot'),
        outputPath: 'diskSnapshot.isFromAutoSnapshot',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.isFromAutoSnapshot', props);
    return resource.getResponseField('diskSnapshot.isFromAutoSnapshot') as unknown as boolean;
  }

}

export class LightsailResponsesFetchDiskSnapshotDiskSnapshotLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDiskSnapshotRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.location.availabilityZone'),
        outputPath: 'diskSnapshot.location.availabilityZone',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.location.availabilityZone', props);
    return resource.getResponseField('diskSnapshot.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshot.diskSnapshot.location.regionName'),
        outputPath: 'diskSnapshot.location.regionName',
        parameters: {
          diskSnapshotName: this.__input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshot.diskSnapshot.location.regionName', props);
    return resource.getResponseField('diskSnapshot.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchDiskSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDiskSnapshotsRequest) {
  }

  public get diskSnapshots(): shapes.LightsailDiskSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshots.diskSnapshots'),
        outputPath: 'diskSnapshots',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshots.diskSnapshots', props);
    return resource.getResponseField('diskSnapshots') as unknown as shapes.LightsailDiskSnapshot[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDiskSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDiskSnapshots.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDiskSnapshots.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchDisks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDisksRequest) {
  }

  public get disks(): shapes.LightsailDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisks',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisks.disks'),
        outputPath: 'disks',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisks.disks', props);
    return resource.getResponseField('disks') as unknown as shapes.LightsailDisk[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDisks',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDisks.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDisks.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchDistributionBundles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get bundles(): shapes.LightsailDistributionBundle[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionBundles',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDistributionBundles.bundles'),
        outputPath: 'bundles',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionBundles.bundles', props);
    return resource.getResponseField('bundles') as unknown as shapes.LightsailDistributionBundle[];
  }

}

export class LightsailResponsesFetchDistributionLatestCacheReset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDistributionLatestCacheResetRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionLatestCacheReset',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDistributionLatestCacheReset.status'),
        outputPath: 'status',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionLatestCacheReset.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionLatestCacheReset',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDistributionLatestCacheReset.createTime'),
        outputPath: 'createTime',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionLatestCacheReset.createTime', props);
    return resource.getResponseField('createTime') as unknown as string;
  }

}

export class LightsailResponsesFetchDistributionMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDistributionMetricDataRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDistributionMetricData.metricName'),
        outputPath: 'metricName',
        parameters: {
          distributionName: this.__input.distributionName,
          metricName: this.__input.metricName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          period: this.__input.period,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionMetricData.metricName', props);
    return resource.getResponseField('metricName') as unknown as string;
  }

  public get metricData(): shapes.LightsailMetricDatapoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributionMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDistributionMetricData.metricData'),
        outputPath: 'metricData',
        parameters: {
          distributionName: this.__input.distributionName,
          metricName: this.__input.metricName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          period: this.__input.period,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributionMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailResponsesFetchDistributions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDistributionsRequest) {
  }

  public get distributions(): shapes.LightsailLightsailDistribution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributions',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDistributions.distributions'),
        outputPath: 'distributions',
        parameters: {
          distributionName: this.__input.distributionName,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributions.distributions', props);
    return resource.getResponseField('distributions') as unknown as shapes.LightsailLightsailDistribution[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDistributions',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDistributions.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          distributionName: this.__input.distributionName,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDistributions.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDomainRequest) {
  }

  public get domain(): LightsailResponsesFetchDomainDomain {
    return new LightsailResponsesFetchDomainDomain(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchDomainDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDomainRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.name'),
        outputPath: 'domain.name',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.name', props);
    return resource.getResponseField('domain.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.arn'),
        outputPath: 'domain.arn',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.arn', props);
    return resource.getResponseField('domain.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.supportCode'),
        outputPath: 'domain.supportCode',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.supportCode', props);
    return resource.getResponseField('domain.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.createdAt'),
        outputPath: 'domain.createdAt',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.createdAt', props);
    return resource.getResponseField('domain.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchDomainDomainLocation {
    return new LightsailResponsesFetchDomainDomainLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.resourceType'),
        outputPath: 'domain.resourceType',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.resourceType', props);
    return resource.getResponseField('domain.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.tags'),
        outputPath: 'domain.tags',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.tags', props);
    return resource.getResponseField('domain.tags') as unknown as shapes.LightsailTag[];
  }

  public get domainEntries(): shapes.LightsailDomainEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.domainEntries'),
        outputPath: 'domain.domainEntries',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.domainEntries', props);
    return resource.getResponseField('domain.domainEntries') as unknown as shapes.LightsailDomainEntry[];
  }

}

export class LightsailResponsesFetchDomainDomainLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDomainRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.location.availabilityZone'),
        outputPath: 'domain.location.availabilityZone',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.location.availabilityZone', props);
    return resource.getResponseField('domain.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomain',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomain.domain.location.regionName'),
        outputPath: 'domain.location.regionName',
        parameters: {
          domainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomain.domain.location.regionName', props);
    return resource.getResponseField('domain.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetDomainsRequest) {
  }

  public get domains(): shapes.LightsailDomain[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomains',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomains.domains'),
        outputPath: 'domains',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomains.domains', props);
    return resource.getResponseField('domains') as unknown as shapes.LightsailDomain[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDomains',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetDomains.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDomains.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchExportSnapshotRecords {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetExportSnapshotRecordsRequest) {
  }

  public get exportSnapshotRecords(): shapes.LightsailExportSnapshotRecord[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExportSnapshotRecords',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetExportSnapshotRecords.exportSnapshotRecords'),
        outputPath: 'exportSnapshotRecords',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExportSnapshotRecords.exportSnapshotRecords', props);
    return resource.getResponseField('exportSnapshotRecords') as unknown as shapes.LightsailExportSnapshotRecord[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getExportSnapshotRecords',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetExportSnapshotRecords.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetExportSnapshotRecords.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceRequest) {
  }

  public get instance(): LightsailResponsesFetchInstanceInstance {
    return new LightsailResponsesFetchInstanceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchInstanceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.name'),
        outputPath: 'instance.name',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.name', props);
    return resource.getResponseField('instance.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.arn'),
        outputPath: 'instance.arn',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.arn', props);
    return resource.getResponseField('instance.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.supportCode'),
        outputPath: 'instance.supportCode',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.supportCode', props);
    return resource.getResponseField('instance.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.createdAt'),
        outputPath: 'instance.createdAt',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.createdAt', props);
    return resource.getResponseField('instance.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchInstanceInstanceLocation {
    return new LightsailResponsesFetchInstanceInstanceLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.resourceType'),
        outputPath: 'instance.resourceType',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.resourceType', props);
    return resource.getResponseField('instance.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.tags'),
        outputPath: 'instance.tags',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.tags', props);
    return resource.getResponseField('instance.tags') as unknown as shapes.LightsailTag[];
  }

  public get blueprintId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.blueprintId'),
        outputPath: 'instance.blueprintId',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.blueprintId', props);
    return resource.getResponseField('instance.blueprintId') as unknown as string;
  }

  public get blueprintName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.blueprintName'),
        outputPath: 'instance.blueprintName',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.blueprintName', props);
    return resource.getResponseField('instance.blueprintName') as unknown as string;
  }

  public get bundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.bundleId'),
        outputPath: 'instance.bundleId',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.bundleId', props);
    return resource.getResponseField('instance.bundleId') as unknown as string;
  }

  public get addOns(): shapes.LightsailAddOn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.addOns'),
        outputPath: 'instance.addOns',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.addOns', props);
    return resource.getResponseField('instance.addOns') as unknown as shapes.LightsailAddOn[];
  }

  public get isStaticIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.isStaticIp'),
        outputPath: 'instance.isStaticIp',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.isStaticIp', props);
    return resource.getResponseField('instance.isStaticIp') as unknown as boolean;
  }

  public get privateIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.privateIpAddress'),
        outputPath: 'instance.privateIpAddress',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.privateIpAddress', props);
    return resource.getResponseField('instance.privateIpAddress') as unknown as string;
  }

  public get publicIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.publicIpAddress'),
        outputPath: 'instance.publicIpAddress',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.publicIpAddress', props);
    return resource.getResponseField('instance.publicIpAddress') as unknown as string;
  }

  public get ipv6Addresses(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.ipv6Addresses'),
        outputPath: 'instance.ipv6Addresses',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.ipv6Addresses', props);
    return resource.getResponseField('instance.ipv6Addresses') as unknown as string[];
  }

  public get ipAddressType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.ipAddressType'),
        outputPath: 'instance.ipAddressType',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.ipAddressType', props);
    return resource.getResponseField('instance.ipAddressType') as unknown as string;
  }

  public get hardware(): LightsailResponsesFetchInstanceInstanceHardware {
    return new LightsailResponsesFetchInstanceInstanceHardware(this.__scope, this.__resources, this.__input);
  }

  public get networking(): LightsailResponsesFetchInstanceInstanceNetworking {
    return new LightsailResponsesFetchInstanceInstanceNetworking(this.__scope, this.__resources, this.__input);
  }

  public get state(): LightsailResponsesFetchInstanceInstanceState {
    return new LightsailResponsesFetchInstanceInstanceState(this.__scope, this.__resources, this.__input);
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.username'),
        outputPath: 'instance.username',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.username', props);
    return resource.getResponseField('instance.username') as unknown as string;
  }

  public get sshKeyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.sshKeyName'),
        outputPath: 'instance.sshKeyName',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.sshKeyName', props);
    return resource.getResponseField('instance.sshKeyName') as unknown as string;
  }

}

export class LightsailResponsesFetchInstanceInstanceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.location.availabilityZone'),
        outputPath: 'instance.location.availabilityZone',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.location.availabilityZone', props);
    return resource.getResponseField('instance.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.location.regionName'),
        outputPath: 'instance.location.regionName',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.location.regionName', props);
    return resource.getResponseField('instance.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchInstanceInstanceHardware {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceRequest) {
  }

  public get cpuCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.hardware.cpuCount'),
        outputPath: 'instance.hardware.cpuCount',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.hardware.cpuCount', props);
    return resource.getResponseField('instance.hardware.cpuCount') as unknown as number;
  }

  public get disks(): shapes.LightsailDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.hardware.disks'),
        outputPath: 'instance.hardware.disks',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.hardware.disks', props);
    return resource.getResponseField('instance.hardware.disks') as unknown as shapes.LightsailDisk[];
  }

  public get ramSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.hardware.ramSizeInGb'),
        outputPath: 'instance.hardware.ramSizeInGb',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.hardware.ramSizeInGb', props);
    return resource.getResponseField('instance.hardware.ramSizeInGb') as unknown as number;
  }

}

export class LightsailResponsesFetchInstanceInstanceNetworking {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceRequest) {
  }

  public get monthlyTransfer(): LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer {
    return new LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer(this.__scope, this.__resources, this.__input);
  }

  public get ports(): shapes.LightsailInstancePortInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.networking.ports'),
        outputPath: 'instance.networking.ports',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.networking.ports', props);
    return resource.getResponseField('instance.networking.ports') as unknown as shapes.LightsailInstancePortInfo[];
  }

}

export class LightsailResponsesFetchInstanceInstanceNetworkingMonthlyTransfer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceRequest) {
  }

  public get gbPerMonthAllocated(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.networking.monthlyTransfer.gbPerMonthAllocated'),
        outputPath: 'instance.networking.monthlyTransfer.gbPerMonthAllocated',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.networking.monthlyTransfer.gbPerMonthAllocated', props);
    return resource.getResponseField('instance.networking.monthlyTransfer.gbPerMonthAllocated') as unknown as number;
  }

}

export class LightsailResponsesFetchInstanceInstanceState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceRequest) {
  }

  public get code(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.state.code'),
        outputPath: 'instance.state.code',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.state.code', props);
    return resource.getResponseField('instance.state.code') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.state.name'),
        outputPath: 'instance.state.name',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstance.instance.state.name', props);
    return resource.getResponseField('instance.state.name') as unknown as string;
  }

}

export class LightsailResponsesFetchInstanceAccessDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceAccessDetailsRequest) {
  }

  public get accessDetails(): LightsailResponsesFetchInstanceAccessDetailsAccessDetails {
    return new LightsailResponsesFetchInstanceAccessDetailsAccessDetails(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchInstanceAccessDetailsAccessDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceAccessDetailsRequest) {
  }

  public get certKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.certKey'),
        outputPath: 'accessDetails.certKey',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.certKey', props);
    return resource.getResponseField('accessDetails.certKey') as unknown as string;
  }

  public get expiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.expiresAt'),
        outputPath: 'accessDetails.expiresAt',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.expiresAt', props);
    return resource.getResponseField('accessDetails.expiresAt') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.ipAddress'),
        outputPath: 'accessDetails.ipAddress',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.ipAddress', props);
    return resource.getResponseField('accessDetails.ipAddress') as unknown as string;
  }

  public get password(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.password'),
        outputPath: 'accessDetails.password',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.password', props);
    return resource.getResponseField('accessDetails.password') as unknown as string;
  }

  public get passwordData(): LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData {
    return new LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData(this.__scope, this.__resources, this.__input);
  }

  public get privateKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.privateKey'),
        outputPath: 'accessDetails.privateKey',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.privateKey', props);
    return resource.getResponseField('accessDetails.privateKey') as unknown as string;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.protocol'),
        outputPath: 'accessDetails.protocol',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.protocol', props);
    return resource.getResponseField('accessDetails.protocol') as unknown as string;
  }

  public get instanceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.instanceName'),
        outputPath: 'accessDetails.instanceName',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.instanceName', props);
    return resource.getResponseField('accessDetails.instanceName') as unknown as string;
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.username'),
        outputPath: 'accessDetails.username',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.username', props);
    return resource.getResponseField('accessDetails.username') as unknown as string;
  }

  public get hostKeys(): shapes.LightsailHostKeyAttributes[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.hostKeys'),
        outputPath: 'accessDetails.hostKeys',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.hostKeys', props);
    return resource.getResponseField('accessDetails.hostKeys') as unknown as shapes.LightsailHostKeyAttributes[];
  }

}

export class LightsailResponsesFetchInstanceAccessDetailsAccessDetailsPasswordData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceAccessDetailsRequest) {
  }

  public get ciphertext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.passwordData.ciphertext'),
        outputPath: 'accessDetails.passwordData.ciphertext',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.passwordData.ciphertext', props);
    return resource.getResponseField('accessDetails.passwordData.ciphertext') as unknown as string;
  }

  public get keyPairName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceAccessDetails',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceAccessDetails.accessDetails.passwordData.keyPairName'),
        outputPath: 'accessDetails.passwordData.keyPairName',
        parameters: {
          instanceName: this.__input.instanceName,
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceAccessDetails.accessDetails.passwordData.keyPairName', props);
    return resource.getResponseField('accessDetails.passwordData.keyPairName') as unknown as string;
  }

}

export class LightsailResponsesFetchInstanceMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceMetricDataRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceMetricData.metricName'),
        outputPath: 'metricName',
        parameters: {
          instanceName: this.__input.instanceName,
          metricName: this.__input.metricName,
          period: this.__input.period,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceMetricData.metricName', props);
    return resource.getResponseField('metricName') as unknown as string;
  }

  public get metricData(): shapes.LightsailMetricDatapoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceMetricData.metricData'),
        outputPath: 'metricData',
        parameters: {
          instanceName: this.__input.instanceName,
          metricName: this.__input.metricName,
          period: this.__input.period,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailResponsesFetchInstancePortStates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstancePortStatesRequest) {
  }

  public get portStates(): shapes.LightsailInstancePortState[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstancePortStates',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstancePortStates.portStates'),
        outputPath: 'portStates',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstancePortStates.portStates', props);
    return resource.getResponseField('portStates') as unknown as shapes.LightsailInstancePortState[];
  }

}

export class LightsailResponsesFetchInstanceSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceSnapshotRequest) {
  }

  public get instanceSnapshot(): LightsailResponsesFetchInstanceSnapshotInstanceSnapshot {
    return new LightsailResponsesFetchInstanceSnapshotInstanceSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchInstanceSnapshotInstanceSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceSnapshotRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.name'),
        outputPath: 'instanceSnapshot.name',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.name', props);
    return resource.getResponseField('instanceSnapshot.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.arn'),
        outputPath: 'instanceSnapshot.arn',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.arn', props);
    return resource.getResponseField('instanceSnapshot.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.supportCode'),
        outputPath: 'instanceSnapshot.supportCode',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.supportCode', props);
    return resource.getResponseField('instanceSnapshot.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.createdAt'),
        outputPath: 'instanceSnapshot.createdAt',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.createdAt', props);
    return resource.getResponseField('instanceSnapshot.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation {
    return new LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.resourceType'),
        outputPath: 'instanceSnapshot.resourceType',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.resourceType', props);
    return resource.getResponseField('instanceSnapshot.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.tags'),
        outputPath: 'instanceSnapshot.tags',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.tags', props);
    return resource.getResponseField('instanceSnapshot.tags') as unknown as shapes.LightsailTag[];
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.state'),
        outputPath: 'instanceSnapshot.state',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.state', props);
    return resource.getResponseField('instanceSnapshot.state') as unknown as string;
  }

  public get progress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.progress'),
        outputPath: 'instanceSnapshot.progress',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.progress', props);
    return resource.getResponseField('instanceSnapshot.progress') as unknown as string;
  }

  public get fromAttachedDisks(): shapes.LightsailDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.fromAttachedDisks'),
        outputPath: 'instanceSnapshot.fromAttachedDisks',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.fromAttachedDisks', props);
    return resource.getResponseField('instanceSnapshot.fromAttachedDisks') as unknown as shapes.LightsailDisk[];
  }

  public get fromInstanceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.fromInstanceName'),
        outputPath: 'instanceSnapshot.fromInstanceName',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.fromInstanceName', props);
    return resource.getResponseField('instanceSnapshot.fromInstanceName') as unknown as string;
  }

  public get fromInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.fromInstanceArn'),
        outputPath: 'instanceSnapshot.fromInstanceArn',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.fromInstanceArn', props);
    return resource.getResponseField('instanceSnapshot.fromInstanceArn') as unknown as string;
  }

  public get fromBlueprintId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.fromBlueprintId'),
        outputPath: 'instanceSnapshot.fromBlueprintId',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.fromBlueprintId', props);
    return resource.getResponseField('instanceSnapshot.fromBlueprintId') as unknown as string;
  }

  public get fromBundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.fromBundleId'),
        outputPath: 'instanceSnapshot.fromBundleId',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.fromBundleId', props);
    return resource.getResponseField('instanceSnapshot.fromBundleId') as unknown as string;
  }

  public get isFromAutoSnapshot(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.isFromAutoSnapshot'),
        outputPath: 'instanceSnapshot.isFromAutoSnapshot',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.isFromAutoSnapshot', props);
    return resource.getResponseField('instanceSnapshot.isFromAutoSnapshot') as unknown as boolean;
  }

  public get sizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.sizeInGb'),
        outputPath: 'instanceSnapshot.sizeInGb',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.sizeInGb', props);
    return resource.getResponseField('instanceSnapshot.sizeInGb') as unknown as number;
  }

}

export class LightsailResponsesFetchInstanceSnapshotInstanceSnapshotLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceSnapshotRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.location.availabilityZone'),
        outputPath: 'instanceSnapshot.location.availabilityZone',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.location.availabilityZone', props);
    return resource.getResponseField('instanceSnapshot.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshot.instanceSnapshot.location.regionName'),
        outputPath: 'instanceSnapshot.location.regionName',
        parameters: {
          instanceSnapshotName: this.__input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshot.instanceSnapshot.location.regionName', props);
    return resource.getResponseField('instanceSnapshot.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchInstanceSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceSnapshotsRequest) {
  }

  public get instanceSnapshots(): shapes.LightsailInstanceSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshots.instanceSnapshots'),
        outputPath: 'instanceSnapshots',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshots.instanceSnapshots', props);
    return resource.getResponseField('instanceSnapshots') as unknown as shapes.LightsailInstanceSnapshot[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceSnapshots.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceSnapshots.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchInstanceState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceStateRequest) {
  }

  public get state(): LightsailResponsesFetchInstanceStateState {
    return new LightsailResponsesFetchInstanceStateState(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchInstanceStateState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstanceStateRequest) {
  }

  public get code(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceState',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceState.state.code'),
        outputPath: 'state.code',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceState.state.code', props);
    return resource.getResponseField('state.code') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceState',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstanceState.state.name'),
        outputPath: 'state.name',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceState.state.name', props);
    return resource.getResponseField('state.name') as unknown as string;
  }

}

export class LightsailResponsesFetchInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetInstancesRequest) {
  }

  public get instances(): shapes.LightsailInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstances',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstances.instances'),
        outputPath: 'instances',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstances.instances', props);
    return resource.getResponseField('instances') as unknown as shapes.LightsailInstance[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstances',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstances.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstances.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetKeyPairRequest) {
  }

  public get keyPair(): LightsailResponsesFetchKeyPairKeyPair {
    return new LightsailResponsesFetchKeyPairKeyPair(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchKeyPairKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetKeyPairRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.name'),
        outputPath: 'keyPair.name',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.name', props);
    return resource.getResponseField('keyPair.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.arn'),
        outputPath: 'keyPair.arn',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.arn', props);
    return resource.getResponseField('keyPair.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.supportCode'),
        outputPath: 'keyPair.supportCode',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.supportCode', props);
    return resource.getResponseField('keyPair.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.createdAt'),
        outputPath: 'keyPair.createdAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.createdAt', props);
    return resource.getResponseField('keyPair.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchKeyPairKeyPairLocation {
    return new LightsailResponsesFetchKeyPairKeyPairLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.resourceType'),
        outputPath: 'keyPair.resourceType',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.resourceType', props);
    return resource.getResponseField('keyPair.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.tags'),
        outputPath: 'keyPair.tags',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.tags', props);
    return resource.getResponseField('keyPair.tags') as unknown as shapes.LightsailTag[];
  }

  public get fingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.fingerprint'),
        outputPath: 'keyPair.fingerprint',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.fingerprint', props);
    return resource.getResponseField('keyPair.fingerprint') as unknown as string;
  }

}

export class LightsailResponsesFetchKeyPairKeyPairLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetKeyPairRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.location.availabilityZone'),
        outputPath: 'keyPair.location.availabilityZone',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.location.availabilityZone', props);
    return resource.getResponseField('keyPair.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPair.keyPair.location.regionName'),
        outputPath: 'keyPair.location.regionName',
        parameters: {
          keyPairName: this.__input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPair.keyPair.location.regionName', props);
    return resource.getResponseField('keyPair.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchKeyPairs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetKeyPairsRequest) {
  }

  public get keyPairs(): shapes.LightsailKeyPair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPairs',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPairs.keyPairs'),
        outputPath: 'keyPairs',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPairs.keyPairs', props);
    return resource.getResponseField('keyPairs') as unknown as shapes.LightsailKeyPair[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getKeyPairs',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetKeyPairs.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetKeyPairs.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetLoadBalancerRequest) {
  }

  public get loadBalancer(): LightsailResponsesFetchLoadBalancerLoadBalancer {
    return new LightsailResponsesFetchLoadBalancerLoadBalancer(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchLoadBalancerLoadBalancer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetLoadBalancerRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.name'),
        outputPath: 'loadBalancer.name',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.name', props);
    return resource.getResponseField('loadBalancer.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.arn'),
        outputPath: 'loadBalancer.arn',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.arn', props);
    return resource.getResponseField('loadBalancer.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.supportCode'),
        outputPath: 'loadBalancer.supportCode',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.supportCode', props);
    return resource.getResponseField('loadBalancer.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.createdAt'),
        outputPath: 'loadBalancer.createdAt',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.createdAt', props);
    return resource.getResponseField('loadBalancer.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchLoadBalancerLoadBalancerLocation {
    return new LightsailResponsesFetchLoadBalancerLoadBalancerLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.resourceType'),
        outputPath: 'loadBalancer.resourceType',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.resourceType', props);
    return resource.getResponseField('loadBalancer.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.tags'),
        outputPath: 'loadBalancer.tags',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.tags', props);
    return resource.getResponseField('loadBalancer.tags') as unknown as shapes.LightsailTag[];
  }

  public get dnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.dnsName'),
        outputPath: 'loadBalancer.dnsName',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.dnsName', props);
    return resource.getResponseField('loadBalancer.dnsName') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.state'),
        outputPath: 'loadBalancer.state',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.state', props);
    return resource.getResponseField('loadBalancer.state') as unknown as string;
  }

  public get protocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.protocol'),
        outputPath: 'loadBalancer.protocol',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.protocol', props);
    return resource.getResponseField('loadBalancer.protocol') as unknown as string;
  }

  public get publicPorts(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.publicPorts'),
        outputPath: 'loadBalancer.publicPorts',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.publicPorts', props);
    return resource.getResponseField('loadBalancer.publicPorts') as unknown as number[];
  }

  public get healthCheckPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.healthCheckPath'),
        outputPath: 'loadBalancer.healthCheckPath',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.healthCheckPath', props);
    return resource.getResponseField('loadBalancer.healthCheckPath') as unknown as string;
  }

  public get instancePort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.instancePort'),
        outputPath: 'loadBalancer.instancePort',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.instancePort', props);
    return resource.getResponseField('loadBalancer.instancePort') as unknown as number;
  }

  public get instanceHealthSummary(): shapes.LightsailInstanceHealthSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.instanceHealthSummary'),
        outputPath: 'loadBalancer.instanceHealthSummary',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.instanceHealthSummary', props);
    return resource.getResponseField('loadBalancer.instanceHealthSummary') as unknown as shapes.LightsailInstanceHealthSummary[];
  }

  public get tlsCertificateSummaries(): shapes.LightsailLoadBalancerTlsCertificateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.tlsCertificateSummaries'),
        outputPath: 'loadBalancer.tlsCertificateSummaries',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.tlsCertificateSummaries', props);
    return resource.getResponseField('loadBalancer.tlsCertificateSummaries') as unknown as shapes.LightsailLoadBalancerTlsCertificateSummary[];
  }

  public get configurationOptions(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.configurationOptions'),
        outputPath: 'loadBalancer.configurationOptions',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.configurationOptions', props);
    return resource.getResponseField('loadBalancer.configurationOptions') as unknown as Record<string, string>;
  }

  public get ipAddressType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.ipAddressType'),
        outputPath: 'loadBalancer.ipAddressType',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.ipAddressType', props);
    return resource.getResponseField('loadBalancer.ipAddressType') as unknown as string;
  }

}

export class LightsailResponsesFetchLoadBalancerLoadBalancerLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetLoadBalancerRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.location.availabilityZone'),
        outputPath: 'loadBalancer.location.availabilityZone',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.location.availabilityZone', props);
    return resource.getResponseField('loadBalancer.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancer',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancer.loadBalancer.location.regionName'),
        outputPath: 'loadBalancer.location.regionName',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancer.loadBalancer.location.regionName', props);
    return resource.getResponseField('loadBalancer.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchLoadBalancerMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetLoadBalancerMetricDataRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancerMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancerMetricData.metricName'),
        outputPath: 'metricName',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          metricName: this.__input.metricName,
          period: this.__input.period,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancerMetricData.metricName', props);
    return resource.getResponseField('metricName') as unknown as string;
  }

  public get metricData(): shapes.LightsailMetricDatapoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancerMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancerMetricData.metricData'),
        outputPath: 'metricData',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          metricName: this.__input.metricName,
          period: this.__input.period,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancerMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailResponsesFetchLoadBalancerTlsCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetLoadBalancerTlsCertificatesRequest) {
  }

  public get tlsCertificates(): shapes.LightsailLoadBalancerTlsCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancerTlsCertificates',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancerTlsCertificates.tlsCertificates'),
        outputPath: 'tlsCertificates',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancerTlsCertificates.tlsCertificates', props);
    return resource.getResponseField('tlsCertificates') as unknown as shapes.LightsailLoadBalancerTlsCertificate[];
  }

}

export class LightsailResponsesFetchLoadBalancers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetLoadBalancersRequest) {
  }

  public get loadBalancers(): shapes.LightsailLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancers',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancers.loadBalancers'),
        outputPath: 'loadBalancers',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancers.loadBalancers', props);
    return resource.getResponseField('loadBalancers') as unknown as shapes.LightsailLoadBalancer[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLoadBalancers',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetLoadBalancers.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLoadBalancers.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetOperationRequest) {
  }

  public get operation(): LightsailResponsesFetchOperationOperation {
    return new LightsailResponsesFetchOperationOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchOperationOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetOperationRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchOperationOperationLocation {
    return new LightsailResponsesFetchOperationOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesFetchOperationOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetOperationRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperation',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperation.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          operationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperation.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetOperationsRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperations',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperations.operations'),
        outputPath: 'operations',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperations.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperations',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperations.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperations.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchOperationsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetOperationsForResourceRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationsForResource',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperationsForResource.operations'),
        outputPath: 'operations',
        parameters: {
          resourceName: this.__input.resourceName,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationsForResource.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

  public get nextPageCount(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationsForResource',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperationsForResource.nextPageCount'),
        outputPath: 'nextPageCount',
        parameters: {
          resourceName: this.__input.resourceName,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationsForResource.nextPageCount', props);
    return resource.getResponseField('nextPageCount') as unknown as string;
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOperationsForResource',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetOperationsForResource.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          resourceName: this.__input.resourceName,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOperationsForResource.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchRegions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRegionsRequest) {
  }

  public get regions(): shapes.LightsailRegion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegions',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRegions.regions'),
        outputPath: 'regions',
        parameters: {
          includeAvailabilityZones: this.__input.includeAvailabilityZones,
          includeRelationalDatabaseAvailabilityZones: this.__input.includeRelationalDatabaseAvailabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegions.regions', props);
    return resource.getResponseField('regions') as unknown as shapes.LightsailRegion[];
  }

}

export class LightsailResponsesFetchRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseRequest) {
  }

  public get relationalDatabase(): LightsailResponsesFetchRelationalDatabaseRelationalDatabase {
    return new LightsailResponsesFetchRelationalDatabaseRelationalDatabase(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchRelationalDatabaseRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.name'),
        outputPath: 'relationalDatabase.name',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.name', props);
    return resource.getResponseField('relationalDatabase.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.arn'),
        outputPath: 'relationalDatabase.arn',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.arn', props);
    return resource.getResponseField('relationalDatabase.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.supportCode'),
        outputPath: 'relationalDatabase.supportCode',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.supportCode', props);
    return resource.getResponseField('relationalDatabase.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.createdAt'),
        outputPath: 'relationalDatabase.createdAt',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.createdAt', props);
    return resource.getResponseField('relationalDatabase.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation {
    return new LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.resourceType'),
        outputPath: 'relationalDatabase.resourceType',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.resourceType', props);
    return resource.getResponseField('relationalDatabase.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.tags'),
        outputPath: 'relationalDatabase.tags',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.tags', props);
    return resource.getResponseField('relationalDatabase.tags') as unknown as shapes.LightsailTag[];
  }

  public get relationalDatabaseBlueprintId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.relationalDatabaseBlueprintId'),
        outputPath: 'relationalDatabase.relationalDatabaseBlueprintId',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.relationalDatabaseBlueprintId', props);
    return resource.getResponseField('relationalDatabase.relationalDatabaseBlueprintId') as unknown as string;
  }

  public get relationalDatabaseBundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.relationalDatabaseBundleId'),
        outputPath: 'relationalDatabase.relationalDatabaseBundleId',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.relationalDatabaseBundleId', props);
    return resource.getResponseField('relationalDatabase.relationalDatabaseBundleId') as unknown as string;
  }

  public get masterDatabaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.masterDatabaseName'),
        outputPath: 'relationalDatabase.masterDatabaseName',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.masterDatabaseName', props);
    return resource.getResponseField('relationalDatabase.masterDatabaseName') as unknown as string;
  }

  public get hardware(): LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware {
    return new LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware(this.__scope, this.__resources, this.__input);
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.state'),
        outputPath: 'relationalDatabase.state',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.state', props);
    return resource.getResponseField('relationalDatabase.state') as unknown as string;
  }

  public get secondaryAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.secondaryAvailabilityZone'),
        outputPath: 'relationalDatabase.secondaryAvailabilityZone',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.secondaryAvailabilityZone', props);
    return resource.getResponseField('relationalDatabase.secondaryAvailabilityZone') as unknown as string;
  }

  public get backupRetentionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.backupRetentionEnabled'),
        outputPath: 'relationalDatabase.backupRetentionEnabled',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.backupRetentionEnabled', props);
    return resource.getResponseField('relationalDatabase.backupRetentionEnabled') as unknown as boolean;
  }

  public get pendingModifiedValues(): LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues {
    return new LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.engine'),
        outputPath: 'relationalDatabase.engine',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.engine', props);
    return resource.getResponseField('relationalDatabase.engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.engineVersion'),
        outputPath: 'relationalDatabase.engineVersion',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.engineVersion', props);
    return resource.getResponseField('relationalDatabase.engineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.latestRestorableTime'),
        outputPath: 'relationalDatabase.latestRestorableTime',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.latestRestorableTime', props);
    return resource.getResponseField('relationalDatabase.latestRestorableTime') as unknown as string;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.masterUsername'),
        outputPath: 'relationalDatabase.masterUsername',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.masterUsername', props);
    return resource.getResponseField('relationalDatabase.masterUsername') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.parameterApplyStatus'),
        outputPath: 'relationalDatabase.parameterApplyStatus',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.parameterApplyStatus', props);
    return resource.getResponseField('relationalDatabase.parameterApplyStatus') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.preferredBackupWindow'),
        outputPath: 'relationalDatabase.preferredBackupWindow',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.preferredBackupWindow', props);
    return resource.getResponseField('relationalDatabase.preferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.preferredMaintenanceWindow'),
        outputPath: 'relationalDatabase.preferredMaintenanceWindow',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.preferredMaintenanceWindow', props);
    return resource.getResponseField('relationalDatabase.preferredMaintenanceWindow') as unknown as string;
  }

  public get publiclyAccessible(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.publiclyAccessible'),
        outputPath: 'relationalDatabase.publiclyAccessible',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.publiclyAccessible', props);
    return resource.getResponseField('relationalDatabase.publiclyAccessible') as unknown as boolean;
  }

  public get masterEndpoint(): LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint {
    return new LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get pendingMaintenanceActions(): shapes.LightsailPendingMaintenanceAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.pendingMaintenanceActions'),
        outputPath: 'relationalDatabase.pendingMaintenanceActions',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.pendingMaintenanceActions', props);
    return resource.getResponseField('relationalDatabase.pendingMaintenanceActions') as unknown as shapes.LightsailPendingMaintenanceAction[];
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.caCertificateIdentifier'),
        outputPath: 'relationalDatabase.caCertificateIdentifier',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.caCertificateIdentifier', props);
    return resource.getResponseField('relationalDatabase.caCertificateIdentifier') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseRelationalDatabaseLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.location.availabilityZone'),
        outputPath: 'relationalDatabase.location.availabilityZone',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.location.availabilityZone', props);
    return resource.getResponseField('relationalDatabase.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.location.regionName'),
        outputPath: 'relationalDatabase.location.regionName',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.location.regionName', props);
    return resource.getResponseField('relationalDatabase.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseRelationalDatabaseHardware {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseRequest) {
  }

  public get cpuCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.hardware.cpuCount'),
        outputPath: 'relationalDatabase.hardware.cpuCount',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.hardware.cpuCount', props);
    return resource.getResponseField('relationalDatabase.hardware.cpuCount') as unknown as number;
  }

  public get diskSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.hardware.diskSizeInGb'),
        outputPath: 'relationalDatabase.hardware.diskSizeInGb',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.hardware.diskSizeInGb', props);
    return resource.getResponseField('relationalDatabase.hardware.diskSizeInGb') as unknown as number;
  }

  public get ramSizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.hardware.ramSizeInGb'),
        outputPath: 'relationalDatabase.hardware.ramSizeInGb',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.hardware.ramSizeInGb', props);
    return resource.getResponseField('relationalDatabase.hardware.ramSizeInGb') as unknown as number;
  }

}

export class LightsailResponsesFetchRelationalDatabaseRelationalDatabasePendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseRequest) {
  }

  public get masterUserPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.pendingModifiedValues.masterUserPassword'),
        outputPath: 'relationalDatabase.pendingModifiedValues.masterUserPassword',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.pendingModifiedValues.masterUserPassword', props);
    return resource.getResponseField('relationalDatabase.pendingModifiedValues.masterUserPassword') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.pendingModifiedValues.engineVersion'),
        outputPath: 'relationalDatabase.pendingModifiedValues.engineVersion',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.pendingModifiedValues.engineVersion', props);
    return resource.getResponseField('relationalDatabase.pendingModifiedValues.engineVersion') as unknown as string;
  }

  public get backupRetentionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.pendingModifiedValues.backupRetentionEnabled'),
        outputPath: 'relationalDatabase.pendingModifiedValues.backupRetentionEnabled',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.pendingModifiedValues.backupRetentionEnabled', props);
    return resource.getResponseField('relationalDatabase.pendingModifiedValues.backupRetentionEnabled') as unknown as boolean;
  }

}

export class LightsailResponsesFetchRelationalDatabaseRelationalDatabaseMasterEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseRequest) {
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.masterEndpoint.port'),
        outputPath: 'relationalDatabase.masterEndpoint.port',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.masterEndpoint.port', props);
    return resource.getResponseField('relationalDatabase.masterEndpoint.port') as unknown as number;
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabase.relationalDatabase.masterEndpoint.address'),
        outputPath: 'relationalDatabase.masterEndpoint.address',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabase.relationalDatabase.masterEndpoint.address', props);
    return resource.getResponseField('relationalDatabase.masterEndpoint.address') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseBlueprints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseBlueprintsRequest) {
  }

  public get blueprints(): shapes.LightsailRelationalDatabaseBlueprint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseBlueprints',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseBlueprints.blueprints'),
        outputPath: 'blueprints',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseBlueprints.blueprints', props);
    return resource.getResponseField('blueprints') as unknown as shapes.LightsailRelationalDatabaseBlueprint[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseBlueprints',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseBlueprints.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseBlueprints.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseBundles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseBundlesRequest) {
  }

  public get bundles(): shapes.LightsailRelationalDatabaseBundle[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseBundles',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseBundles.bundles'),
        outputPath: 'bundles',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseBundles.bundles', props);
    return resource.getResponseField('bundles') as unknown as shapes.LightsailRelationalDatabaseBundle[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseBundles',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseBundles.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseBundles.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseEventsRequest) {
  }

  public get relationalDatabaseEvents(): shapes.LightsailRelationalDatabaseEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseEvents',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseEvents.relationalDatabaseEvents'),
        outputPath: 'relationalDatabaseEvents',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          durationInMinutes: this.__input.durationInMinutes,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseEvents.relationalDatabaseEvents', props);
    return resource.getResponseField('relationalDatabaseEvents') as unknown as shapes.LightsailRelationalDatabaseEvent[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseEvents',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseEvents.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          durationInMinutes: this.__input.durationInMinutes,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseEvents.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseLogEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseLogEventsRequest) {
  }

  public get resourceLogEvents(): shapes.LightsailLogEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseLogEvents',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseLogEvents.resourceLogEvents'),
        outputPath: 'resourceLogEvents',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          logStreamName: this.__input.logStreamName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          startFromHead: this.__input.startFromHead,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseLogEvents.resourceLogEvents', props);
    return resource.getResponseField('resourceLogEvents') as unknown as shapes.LightsailLogEvent[];
  }

  public get nextBackwardToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseLogEvents',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseLogEvents.nextBackwardToken'),
        outputPath: 'nextBackwardToken',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          logStreamName: this.__input.logStreamName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          startFromHead: this.__input.startFromHead,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseLogEvents.nextBackwardToken', props);
    return resource.getResponseField('nextBackwardToken') as unknown as string;
  }

  public get nextForwardToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseLogEvents',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseLogEvents.nextForwardToken'),
        outputPath: 'nextForwardToken',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          logStreamName: this.__input.logStreamName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          startFromHead: this.__input.startFromHead,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseLogEvents.nextForwardToken', props);
    return resource.getResponseField('nextForwardToken') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseLogStreams {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseLogStreamsRequest) {
  }

  public get logStreams(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseLogStreams',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseLogStreams.logStreams'),
        outputPath: 'logStreams',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseLogStreams.logStreams', props);
    return resource.getResponseField('logStreams') as unknown as string[];
  }

}

export class LightsailResponsesFetchRelationalDatabaseMasterUserPassword {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseMasterUserPasswordRequest) {
  }

  public get masterUserPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseMasterUserPassword',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseMasterUserPassword.masterUserPassword'),
        outputPath: 'masterUserPassword',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          passwordVersion: this.__input.passwordVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseMasterUserPassword.masterUserPassword', props);
    return resource.getResponseField('masterUserPassword') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseMasterUserPassword',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseMasterUserPassword.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          passwordVersion: this.__input.passwordVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseMasterUserPassword.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseMetricData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseMetricDataRequest) {
  }

  public get metricName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseMetricData.metricName'),
        outputPath: 'metricName',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          metricName: this.__input.metricName,
          period: this.__input.period,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseMetricData.metricName', props);
    return resource.getResponseField('metricName') as unknown as string;
  }

  public get metricData(): shapes.LightsailMetricDatapoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseMetricData',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseMetricData.metricData'),
        outputPath: 'metricData',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          metricName: this.__input.metricName,
          period: this.__input.period,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
          unit: this.__input.unit,
          statistics: this.__input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailResponsesFetchRelationalDatabaseParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseParametersRequest) {
  }

  public get parameters(): shapes.LightsailRelationalDatabaseParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseParameters',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseParameters.parameters'),
        outputPath: 'parameters',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseParameters.parameters', props);
    return resource.getResponseField('parameters') as unknown as shapes.LightsailRelationalDatabaseParameter[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseParameters',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseParameters.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseParameters.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseSnapshotRequest) {
  }

  public get relationalDatabaseSnapshot(): LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot {
    return new LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseSnapshotRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.name'),
        outputPath: 'relationalDatabaseSnapshot.name',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.name', props);
    return resource.getResponseField('relationalDatabaseSnapshot.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.arn'),
        outputPath: 'relationalDatabaseSnapshot.arn',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.arn', props);
    return resource.getResponseField('relationalDatabaseSnapshot.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.supportCode'),
        outputPath: 'relationalDatabaseSnapshot.supportCode',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.supportCode', props);
    return resource.getResponseField('relationalDatabaseSnapshot.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.createdAt'),
        outputPath: 'relationalDatabaseSnapshot.createdAt',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.createdAt', props);
    return resource.getResponseField('relationalDatabaseSnapshot.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation {
    return new LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.resourceType'),
        outputPath: 'relationalDatabaseSnapshot.resourceType',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.resourceType', props);
    return resource.getResponseField('relationalDatabaseSnapshot.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.tags'),
        outputPath: 'relationalDatabaseSnapshot.tags',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.tags', props);
    return resource.getResponseField('relationalDatabaseSnapshot.tags') as unknown as shapes.LightsailTag[];
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.engine'),
        outputPath: 'relationalDatabaseSnapshot.engine',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.engine', props);
    return resource.getResponseField('relationalDatabaseSnapshot.engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.engineVersion'),
        outputPath: 'relationalDatabaseSnapshot.engineVersion',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.engineVersion', props);
    return resource.getResponseField('relationalDatabaseSnapshot.engineVersion') as unknown as string;
  }

  public get sizeInGb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.sizeInGb'),
        outputPath: 'relationalDatabaseSnapshot.sizeInGb',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.sizeInGb', props);
    return resource.getResponseField('relationalDatabaseSnapshot.sizeInGb') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.state'),
        outputPath: 'relationalDatabaseSnapshot.state',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.state', props);
    return resource.getResponseField('relationalDatabaseSnapshot.state') as unknown as string;
  }

  public get fromRelationalDatabaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseName'),
        outputPath: 'relationalDatabaseSnapshot.fromRelationalDatabaseName',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseName', props);
    return resource.getResponseField('relationalDatabaseSnapshot.fromRelationalDatabaseName') as unknown as string;
  }

  public get fromRelationalDatabaseArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseArn'),
        outputPath: 'relationalDatabaseSnapshot.fromRelationalDatabaseArn',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseArn', props);
    return resource.getResponseField('relationalDatabaseSnapshot.fromRelationalDatabaseArn') as unknown as string;
  }

  public get fromRelationalDatabaseBundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseBundleId'),
        outputPath: 'relationalDatabaseSnapshot.fromRelationalDatabaseBundleId',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseBundleId', props);
    return resource.getResponseField('relationalDatabaseSnapshot.fromRelationalDatabaseBundleId') as unknown as string;
  }

  public get fromRelationalDatabaseBlueprintId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseBlueprintId'),
        outputPath: 'relationalDatabaseSnapshot.fromRelationalDatabaseBlueprintId',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseBlueprintId', props);
    return resource.getResponseField('relationalDatabaseSnapshot.fromRelationalDatabaseBlueprintId') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseSnapshotRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.location.availabilityZone'),
        outputPath: 'relationalDatabaseSnapshot.location.availabilityZone',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.location.availabilityZone', props);
    return resource.getResponseField('relationalDatabaseSnapshot.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshot',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.location.regionName'),
        outputPath: 'relationalDatabaseSnapshot.location.regionName',
        parameters: {
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.location.regionName', props);
    return resource.getResponseField('relationalDatabaseSnapshot.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabaseSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabaseSnapshotsRequest) {
  }

  public get relationalDatabaseSnapshots(): shapes.LightsailRelationalDatabaseSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshots.relationalDatabaseSnapshots'),
        outputPath: 'relationalDatabaseSnapshots',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshots.relationalDatabaseSnapshots', props);
    return resource.getResponseField('relationalDatabaseSnapshots') as unknown as shapes.LightsailRelationalDatabaseSnapshot[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabaseSnapshots',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabaseSnapshots.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabaseSnapshots.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchRelationalDatabases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetRelationalDatabasesRequest) {
  }

  public get relationalDatabases(): shapes.LightsailRelationalDatabase[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabases',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabases.relationalDatabases'),
        outputPath: 'relationalDatabases',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabases.relationalDatabases', props);
    return resource.getResponseField('relationalDatabases') as unknown as shapes.LightsailRelationalDatabase[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRelationalDatabases',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetRelationalDatabases.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRelationalDatabases.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesFetchStaticIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetStaticIpRequest) {
  }

  public get staticIp(): LightsailResponsesFetchStaticIpStaticIp {
    return new LightsailResponsesFetchStaticIpStaticIp(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesFetchStaticIpStaticIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetStaticIpRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.name'),
        outputPath: 'staticIp.name',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.name', props);
    return resource.getResponseField('staticIp.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.arn'),
        outputPath: 'staticIp.arn',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.arn', props);
    return resource.getResponseField('staticIp.arn') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.supportCode'),
        outputPath: 'staticIp.supportCode',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.supportCode', props);
    return resource.getResponseField('staticIp.supportCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.createdAt'),
        outputPath: 'staticIp.createdAt',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.createdAt', props);
    return resource.getResponseField('staticIp.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesFetchStaticIpStaticIpLocation {
    return new LightsailResponsesFetchStaticIpStaticIpLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.resourceType'),
        outputPath: 'staticIp.resourceType',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.resourceType', props);
    return resource.getResponseField('staticIp.resourceType') as unknown as string;
  }

  public get ipAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.ipAddress'),
        outputPath: 'staticIp.ipAddress',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.ipAddress', props);
    return resource.getResponseField('staticIp.ipAddress') as unknown as string;
  }

  public get attachedTo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.attachedTo'),
        outputPath: 'staticIp.attachedTo',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.attachedTo', props);
    return resource.getResponseField('staticIp.attachedTo') as unknown as string;
  }

  public get isAttached(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.isAttached'),
        outputPath: 'staticIp.isAttached',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.isAttached', props);
    return resource.getResponseField('staticIp.isAttached') as unknown as boolean;
  }

}

export class LightsailResponsesFetchStaticIpStaticIpLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetStaticIpRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.location.availabilityZone'),
        outputPath: 'staticIp.location.availabilityZone',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.location.availabilityZone', props);
    return resource.getResponseField('staticIp.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIp.staticIp.location.regionName'),
        outputPath: 'staticIp.location.regionName',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIp.staticIp.location.regionName', props);
    return resource.getResponseField('staticIp.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesFetchStaticIps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailGetStaticIpsRequest) {
  }

  public get staticIps(): shapes.LightsailStaticIp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIps',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIps.staticIps'),
        outputPath: 'staticIps',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIps.staticIps', props);
    return resource.getResponseField('staticIps') as unknown as shapes.LightsailStaticIp[];
  }

  public get nextPageToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStaticIps',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetStaticIps.nextPageToken'),
        outputPath: 'nextPageToken',
        parameters: {
          pageToken: this.__input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStaticIps.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailResponsesImportKeyPair {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailImportKeyPairRequest) {
  }

  public get operation(): LightsailResponsesImportKeyPairOperation {
    return new LightsailResponsesImportKeyPairOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesImportKeyPairOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailImportKeyPairRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesImportKeyPairOperationLocation {
    return new LightsailResponsesImportKeyPairOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesImportKeyPairOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailImportKeyPairRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importKeyPair',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ImportKeyPair.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          keyPairName: this.__input.keyPairName,
          publicKeyBase64: this.__input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportKeyPair.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesIsVpcPeered {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get isPeered(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'isVpcPeered',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.IsVpcPeered.isPeered'),
        outputPath: 'isPeered',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IsVpcPeered.isPeered', props);
    return resource.getResponseField('isPeered') as unknown as boolean;
  }

}

export class LightsailResponsesOpenInstancePublicPorts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailOpenInstancePublicPortsRequest) {
  }

  public get operation(): LightsailResponsesOpenInstancePublicPortsOperation {
    return new LightsailResponsesOpenInstancePublicPortsOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesOpenInstancePublicPortsOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailOpenInstancePublicPortsRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesOpenInstancePublicPortsOperationLocation {
    return new LightsailResponsesOpenInstancePublicPortsOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesOpenInstancePublicPortsOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailOpenInstancePublicPortsRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'openInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.OpenInstancePublicPorts.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          portInfo: {
            fromPort: this.__input.portInfo.fromPort,
            toPort: this.__input.portInfo.toPort,
            protocol: this.__input.portInfo.protocol,
            cidrs: this.__input.portInfo.cidrs,
            ipv6Cidrs: this.__input.portInfo.ipv6Cidrs,
            cidrListAliases: this.__input.portInfo.cidrListAliases,
          },
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'OpenInstancePublicPorts.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesPeerVpc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get operation(): LightsailResponsesPeerVpcOperation {
    return new LightsailResponsesPeerVpcOperation(this.__scope, this.__resources);
  }

}

export class LightsailResponsesPeerVpcOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.id'),
        outputPath: 'operation.id',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesPeerVpcOperationLocation {
    return new LightsailResponsesPeerVpcOperationLocation(this.__scope, this.__resources);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.status'),
        outputPath: 'operation.status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesPeerVpcOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'peerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PeerVpc.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PeerVpc.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesPutAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailPutAlarmRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAlarm',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutAlarm.operations'),
        outputPath: 'operations',
        parameters: {
          alarmName: this.__input.alarmName,
          metricName: this.__input.metricName,
          monitoredResourceName: this.__input.monitoredResourceName,
          comparisonOperator: this.__input.comparisonOperator,
          threshold: this.__input.threshold,
          evaluationPeriods: this.__input.evaluationPeriods,
          datapointsToAlarm: this.__input.datapointsToAlarm,
          treatMissingData: this.__input.treatMissingData,
          contactProtocols: this.__input.contactProtocols,
          notificationTriggers: this.__input.notificationTriggers,
          notificationEnabled: this.__input.notificationEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAlarm.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesPutInstancePublicPorts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailPutInstancePublicPortsRequest) {
  }

  public get operation(): LightsailResponsesPutInstancePublicPortsOperation {
    return new LightsailResponsesPutInstancePublicPortsOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesPutInstancePublicPortsOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailPutInstancePublicPortsRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesPutInstancePublicPortsOperationLocation {
    return new LightsailResponsesPutInstancePublicPortsOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesPutInstancePublicPortsOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailPutInstancePublicPortsRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInstancePublicPorts',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.PutInstancePublicPorts.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          portInfos: this.__input.portInfos,
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInstancePublicPorts.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesRebootInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailRebootInstanceRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.RebootInstance.operations'),
        outputPath: 'operations',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesRebootRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailRebootRelationalDatabaseRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.RebootRelationalDatabase.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesRegisterContainerImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailRegisterContainerImageRequest) {
  }

  public get containerImage(): LightsailResponsesRegisterContainerImageContainerImage {
    return new LightsailResponsesRegisterContainerImageContainerImage(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesRegisterContainerImageContainerImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailRegisterContainerImageRequest) {
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerImage',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.RegisterContainerImage.containerImage.image'),
        outputPath: 'containerImage.image',
        parameters: {
          serviceName: this.__input.serviceName,
          label: this.__input.label,
          digest: this.__input.digest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerImage.containerImage.image', props);
    return resource.getResponseField('containerImage.image') as unknown as string;
  }

  public get digest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerImage',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.RegisterContainerImage.containerImage.digest'),
        outputPath: 'containerImage.digest',
        parameters: {
          serviceName: this.__input.serviceName,
          label: this.__input.label,
          digest: this.__input.digest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerImage.containerImage.digest', props);
    return resource.getResponseField('containerImage.digest') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerContainerImage',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.RegisterContainerImage.containerImage.createdAt'),
        outputPath: 'containerImage.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          label: this.__input.label,
          digest: this.__input.digest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterContainerImage.containerImage.createdAt', props);
    return resource.getResponseField('containerImage.createdAt') as unknown as string;
  }

}

export class LightsailResponsesReleaseStaticIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailReleaseStaticIpRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'releaseStaticIp',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ReleaseStaticIp.operations'),
        outputPath: 'operations',
        parameters: {
          staticIpName: this.__input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ReleaseStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesResetDistributionCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailResetDistributionCacheRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.status'),
        outputPath: 'status',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get createTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.createTime'),
        outputPath: 'createTime',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.createTime', props);
    return resource.getResponseField('createTime') as unknown as string;
  }

  public get operation(): LightsailResponsesResetDistributionCacheOperation {
    return new LightsailResponsesResetDistributionCacheOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesResetDistributionCacheOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailResetDistributionCacheRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesResetDistributionCacheOperationLocation {
    return new LightsailResponsesResetDistributionCacheOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesResetDistributionCacheOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailResetDistributionCacheRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDistributionCache',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.ResetDistributionCache.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDistributionCache.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesSendContactMethodVerification {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailSendContactMethodVerificationRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendContactMethodVerification',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.SendContactMethodVerification.operations'),
        outputPath: 'operations',
        parameters: {
          protocol: this.__input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendContactMethodVerification.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesPutIpAddressType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailSetIpAddressTypeRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setIpAddressType',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.SetIpAddressType.operations'),
        outputPath: 'operations',
        parameters: {
          resourceType: this.__input.resourceType,
          resourceName: this.__input.resourceName,
          ipAddressType: this.__input.ipAddressType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetIpAddressType.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesPutResourceAccessForBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailSetResourceAccessForBucketRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setResourceAccessForBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.SetResourceAccessForBucket.operations'),
        outputPath: 'operations',
        parameters: {
          resourceName: this.__input.resourceName,
          bucketName: this.__input.bucketName,
          access: this.__input.access,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetResourceAccessForBucket.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesStartInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailStartInstanceRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.StartInstance.operations'),
        outputPath: 'operations',
        parameters: {
          instanceName: this.__input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesStartRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailStartRelationalDatabaseRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.StartRelationalDatabase.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesStopInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailStopInstanceRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.StopInstance.operations'),
        outputPath: 'operations',
        parameters: {
          instanceName: this.__input.instanceName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesStopRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailStopRelationalDatabaseRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.StopRelationalDatabase.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          relationalDatabaseSnapshotName: this.__input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesTagResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailTagResourceRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.TagResource.operations'),
        outputPath: 'operations',
        parameters: {
          resourceName: this.__input.resourceName,
          resourceArn: this.__input.resourceArn,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TagResource.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesTestAlarm {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailTestAlarmRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testAlarm',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.TestAlarm.operations'),
        outputPath: 'operations',
        parameters: {
          alarmName: this.__input.alarmName,
          state: this.__input.state,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestAlarm.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesUnpeerVpc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get operation(): LightsailResponsesUnpeerVpcOperation {
    return new LightsailResponsesUnpeerVpcOperation(this.__scope, this.__resources);
  }

}

export class LightsailResponsesUnpeerVpcOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.id'),
        outputPath: 'operation.id',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesUnpeerVpcOperationLocation {
    return new LightsailResponsesUnpeerVpcOperationLocation(this.__scope, this.__resources);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.status'),
        outputPath: 'operation.status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesUnpeerVpcOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unpeerVpc',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UnpeerVpc.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UnpeerVpc.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesUntagResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUntagResourceRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UntagResource.operations'),
        outputPath: 'operations',
        parameters: {
          resourceName: this.__input.resourceName,
          resourceArn: this.__input.resourceArn,
          tagKeys: this.__input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UntagResource.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesUpdateBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateBucketRequest) {
  }

  public get bucket(): LightsailResponsesUpdateBucketBucket {
    return new LightsailResponsesUpdateBucketBucket(this.__scope, this.__resources, this.__input);
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.operations'),
        outputPath: 'operations',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesUpdateBucketBucket {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateBucketRequest) {
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.resourceType'),
        outputPath: 'bucket.resourceType',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.resourceType', props);
    return resource.getResponseField('bucket.resourceType') as unknown as string;
  }

  public get accessRules(): LightsailResponsesUpdateBucketBucketAccessRules {
    return new LightsailResponsesUpdateBucketBucketAccessRules(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.arn'),
        outputPath: 'bucket.arn',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.arn', props);
    return resource.getResponseField('bucket.arn') as unknown as string;
  }

  public get bundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.bundleId'),
        outputPath: 'bucket.bundleId',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.bundleId', props);
    return resource.getResponseField('bucket.bundleId') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.createdAt'),
        outputPath: 'bucket.createdAt',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.createdAt', props);
    return resource.getResponseField('bucket.createdAt') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.url'),
        outputPath: 'bucket.url',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.url', props);
    return resource.getResponseField('bucket.url') as unknown as string;
  }

  public get location(): LightsailResponsesUpdateBucketBucketLocation {
    return new LightsailResponsesUpdateBucketBucketLocation(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.name'),
        outputPath: 'bucket.name',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.name', props);
    return resource.getResponseField('bucket.name') as unknown as string;
  }

  public get supportCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.supportCode'),
        outputPath: 'bucket.supportCode',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.supportCode', props);
    return resource.getResponseField('bucket.supportCode') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.tags'),
        outputPath: 'bucket.tags',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.tags', props);
    return resource.getResponseField('bucket.tags') as unknown as shapes.LightsailTag[];
  }

  public get objectVersioning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.objectVersioning'),
        outputPath: 'bucket.objectVersioning',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.objectVersioning', props);
    return resource.getResponseField('bucket.objectVersioning') as unknown as string;
  }

  public get ableToUpdateBundle(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.ableToUpdateBundle'),
        outputPath: 'bucket.ableToUpdateBundle',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.ableToUpdateBundle', props);
    return resource.getResponseField('bucket.ableToUpdateBundle') as unknown as boolean;
  }

  public get readonlyAccessAccounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.readonlyAccessAccounts'),
        outputPath: 'bucket.readonlyAccessAccounts',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.readonlyAccessAccounts', props);
    return resource.getResponseField('bucket.readonlyAccessAccounts') as unknown as string[];
  }

  public get resourcesReceivingAccess(): shapes.LightsailResourceReceivingAccess[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.resourcesReceivingAccess'),
        outputPath: 'bucket.resourcesReceivingAccess',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.resourcesReceivingAccess', props);
    return resource.getResponseField('bucket.resourcesReceivingAccess') as unknown as shapes.LightsailResourceReceivingAccess[];
  }

  public get state(): LightsailResponsesUpdateBucketBucketState {
    return new LightsailResponsesUpdateBucketBucketState(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesUpdateBucketBucketAccessRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateBucketRequest) {
  }

  public get getObject(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.accessRules.getObject'),
        outputPath: 'bucket.accessRules.getObject',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.accessRules.getObject', props);
    return resource.getResponseField('bucket.accessRules.getObject') as unknown as string;
  }

  public get allowPublicOverrides(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.accessRules.allowPublicOverrides'),
        outputPath: 'bucket.accessRules.allowPublicOverrides',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.accessRules.allowPublicOverrides', props);
    return resource.getResponseField('bucket.accessRules.allowPublicOverrides') as unknown as boolean;
  }

}

export class LightsailResponsesUpdateBucketBucketLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateBucketRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.location.availabilityZone'),
        outputPath: 'bucket.location.availabilityZone',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.location.availabilityZone', props);
    return resource.getResponseField('bucket.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.location.regionName'),
        outputPath: 'bucket.location.regionName',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.location.regionName', props);
    return resource.getResponseField('bucket.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesUpdateBucketBucketState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateBucketRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.state.code'),
        outputPath: 'bucket.state.code',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.state.code', props);
    return resource.getResponseField('bucket.state.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucket',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucket.bucket.state.message'),
        outputPath: 'bucket.state.message',
        parameters: {
          bucketName: this.__input.bucketName,
          accessRules: {
            getObject: this.__input.accessRules?.getObject,
            allowPublicOverrides: this.__input.accessRules?.allowPublicOverrides,
          },
          versioning: this.__input.versioning,
          readonlyAccessAccounts: this.__input.readonlyAccessAccounts,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucket.bucket.state.message', props);
    return resource.getResponseField('bucket.state.message') as unknown as string;
  }

}

export class LightsailResponsesUpdateBucketBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateBucketBundleRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBucketBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateBucketBundle.operations'),
        outputPath: 'operations',
        parameters: {
          bucketName: this.__input.bucketName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBucketBundle.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesUpdateContainerService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get containerService(): LightsailResponsesUpdateContainerServiceContainerService {
    return new LightsailResponsesUpdateContainerServiceContainerService(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesUpdateContainerServiceContainerService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get containerServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.containerServiceName'),
        outputPath: 'containerService.containerServiceName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.containerServiceName', props);
    return resource.getResponseField('containerService.containerServiceName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.arn'),
        outputPath: 'containerService.arn',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.arn', props);
    return resource.getResponseField('containerService.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.createdAt'),
        outputPath: 'containerService.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.createdAt', props);
    return resource.getResponseField('containerService.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesUpdateContainerServiceContainerServiceLocation {
    return new LightsailResponsesUpdateContainerServiceContainerServiceLocation(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.resourceType'),
        outputPath: 'containerService.resourceType',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.resourceType', props);
    return resource.getResponseField('containerService.resourceType') as unknown as string;
  }

  public get tags(): shapes.LightsailTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.tags'),
        outputPath: 'containerService.tags',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.tags', props);
    return resource.getResponseField('containerService.tags') as unknown as shapes.LightsailTag[];
  }

  public get power(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.power'),
        outputPath: 'containerService.power',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.power', props);
    return resource.getResponseField('containerService.power') as unknown as string;
  }

  public get powerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.powerId'),
        outputPath: 'containerService.powerId',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.powerId', props);
    return resource.getResponseField('containerService.powerId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.state'),
        outputPath: 'containerService.state',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.state', props);
    return resource.getResponseField('containerService.state') as unknown as string;
  }

  public get stateDetail(): LightsailResponsesUpdateContainerServiceContainerServiceStateDetail {
    return new LightsailResponsesUpdateContainerServiceContainerServiceStateDetail(this.__scope, this.__resources, this.__input);
  }

  public get scale(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.scale'),
        outputPath: 'containerService.scale',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.scale', props);
    return resource.getResponseField('containerService.scale') as unknown as number;
  }

  public get currentDeployment(): LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment {
    return new LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment(this.__scope, this.__resources, this.__input);
  }

  public get nextDeployment(): LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment {
    return new LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment(this.__scope, this.__resources, this.__input);
  }

  public get isDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.isDisabled'),
        outputPath: 'containerService.isDisabled',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.isDisabled', props);
    return resource.getResponseField('containerService.isDisabled') as unknown as boolean;
  }

  public get principalArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.principalArn'),
        outputPath: 'containerService.principalArn',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.principalArn', props);
    return resource.getResponseField('containerService.principalArn') as unknown as string;
  }

  public get privateDomainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.privateDomainName'),
        outputPath: 'containerService.privateDomainName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.privateDomainName', props);
    return resource.getResponseField('containerService.privateDomainName') as unknown as string;
  }

  public get publicDomainNames(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.publicDomainNames'),
        outputPath: 'containerService.publicDomainNames',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.publicDomainNames', props);
    return resource.getResponseField('containerService.publicDomainNames') as unknown as Record<string, string[]>;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.url'),
        outputPath: 'containerService.url',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.url', props);
    return resource.getResponseField('containerService.url') as unknown as string;
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.location.availabilityZone'),
        outputPath: 'containerService.location.availabilityZone',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.location.availabilityZone', props);
    return resource.getResponseField('containerService.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.location.regionName'),
        outputPath: 'containerService.location.regionName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.location.regionName', props);
    return resource.getResponseField('containerService.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceStateDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.stateDetail.code'),
        outputPath: 'containerService.stateDetail.code',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.stateDetail.code', props);
    return resource.getResponseField('containerService.stateDetail.code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.stateDetail.message'),
        outputPath: 'containerService.stateDetail.message',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.stateDetail.message', props);
    return resource.getResponseField('containerService.stateDetail.message') as unknown as string;
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.version'),
        outputPath: 'containerService.currentDeployment.version',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.version', props);
    return resource.getResponseField('containerService.currentDeployment.version') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.state'),
        outputPath: 'containerService.currentDeployment.state',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.state', props);
    return resource.getResponseField('containerService.currentDeployment.state') as unknown as string;
  }

  public get containers(): Record<string, shapes.LightsailContainer> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.containers'),
        outputPath: 'containerService.currentDeployment.containers',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.containers', props);
    return resource.getResponseField('containerService.currentDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint {
    return new LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.createdAt'),
        outputPath: 'containerService.currentDeployment.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.createdAt', props);
    return resource.getResponseField('containerService.currentDeployment.createdAt') as unknown as string;
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.containerName'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.containerName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.containerName', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerName') as unknown as string;
  }

  public get containerPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.containerPort'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.containerPort',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck {
    return new LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold') as unknown as number;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds') as unknown as number;
  }

  public get intervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds') as unknown as number;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.path'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.path',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.path', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.path') as unknown as string;
  }

  public get successCodes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes'),
        outputPath: 'containerService.currentDeployment.publicEndpoint.healthCheck.successCodes',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceNextDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.version'),
        outputPath: 'containerService.nextDeployment.version',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.version', props);
    return resource.getResponseField('containerService.nextDeployment.version') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.state'),
        outputPath: 'containerService.nextDeployment.state',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.state', props);
    return resource.getResponseField('containerService.nextDeployment.state') as unknown as string;
  }

  public get containers(): Record<string, shapes.LightsailContainer> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.containers'),
        outputPath: 'containerService.nextDeployment.containers',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.containers', props);
    return resource.getResponseField('containerService.nextDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint {
    return new LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.createdAt'),
        outputPath: 'containerService.nextDeployment.createdAt',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.createdAt', props);
    return resource.getResponseField('containerService.nextDeployment.createdAt') as unknown as string;
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get containerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.containerName'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.containerName',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.containerName', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerName') as unknown as string;
  }

  public get containerPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.containerPort'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.containerPort',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck {
    return new LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateContainerServiceRequest) {
  }

  public get healthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold') as unknown as number;
  }

  public get unhealthyThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold') as unknown as number;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds') as unknown as number;
  }

  public get intervalSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds') as unknown as number;
  }

  public get path(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.path'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.path',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.path', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.path') as unknown as string;
  }

  public get successCodes(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContainerService',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes'),
        outputPath: 'containerService.nextDeployment.publicEndpoint.healthCheck.successCodes',
        parameters: {
          serviceName: this.__input.serviceName,
          power: this.__input.power,
          scale: this.__input.scale,
          isDisabled: this.__input.isDisabled,
          publicDomainNames: this.__input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailResponsesUpdateDistribution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateDistributionRequest) {
  }

  public get operation(): LightsailResponsesUpdateDistributionOperation {
    return new LightsailResponsesUpdateDistributionOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesUpdateDistributionOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateDistributionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesUpdateDistributionOperationLocation {
    return new LightsailResponsesUpdateDistributionOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesUpdateDistributionOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateDistributionRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistribution',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistribution.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
          origin: {
            name: this.__input.origin?.name,
            regionName: this.__input.origin?.regionName,
            protocolPolicy: this.__input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.__input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.__input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.__input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.__input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.__input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.__input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.__input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.__input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.__input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.__input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.__input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.__input.cacheBehaviors,
          isEnabled: this.__input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesUpdateDistributionBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateDistributionBundleRequest) {
  }

  public get operation(): LightsailResponsesUpdateDistributionBundleOperation {
    return new LightsailResponsesUpdateDistributionBundleOperation(this.__scope, this.__resources, this.__input);
  }

}

export class LightsailResponsesUpdateDistributionBundleOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateDistributionBundleRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.id'),
        outputPath: 'operation.id',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.id', props);
    return resource.getResponseField('operation.id') as unknown as string;
  }

  public get resourceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.resourceName'),
        outputPath: 'operation.resourceName',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.resourceName', props);
    return resource.getResponseField('operation.resourceName') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.resourceType'),
        outputPath: 'operation.resourceType',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.resourceType', props);
    return resource.getResponseField('operation.resourceType') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.createdAt'),
        outputPath: 'operation.createdAt',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResponsesUpdateDistributionBundleOperationLocation {
    return new LightsailResponsesUpdateDistributionBundleOperationLocation(this.__scope, this.__resources, this.__input);
  }

  public get isTerminal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.isTerminal'),
        outputPath: 'operation.isTerminal',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.isTerminal', props);
    return resource.getResponseField('operation.isTerminal') as unknown as boolean;
  }

  public get operationDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.operationDetails'),
        outputPath: 'operation.operationDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.operationDetails', props);
    return resource.getResponseField('operation.operationDetails') as unknown as string;
  }

  public get operationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.operationType'),
        outputPath: 'operation.operationType',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.operationType', props);
    return resource.getResponseField('operation.operationType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.status'),
        outputPath: 'operation.status',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.status', props);
    return resource.getResponseField('operation.status') as unknown as string;
  }

  public get statusChangedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.statusChangedAt'),
        outputPath: 'operation.statusChangedAt',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.statusChangedAt', props);
    return resource.getResponseField('operation.statusChangedAt') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.errorCode'),
        outputPath: 'operation.errorCode',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.errorCode', props);
    return resource.getResponseField('operation.errorCode') as unknown as string;
  }

  public get errorDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.errorDetails'),
        outputPath: 'operation.errorDetails',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResponsesUpdateDistributionBundleOperationLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateDistributionBundleRequest) {
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.location.availabilityZone'),
        outputPath: 'operation.location.availabilityZone',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.location.availabilityZone', props);
    return resource.getResponseField('operation.location.availabilityZone') as unknown as string;
  }

  public get regionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDistributionBundle',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDistributionBundle.operation.location.regionName'),
        outputPath: 'operation.location.regionName',
        parameters: {
          distributionName: this.__input.distributionName,
          bundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDistributionBundle.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailResponsesUpdateDomainEntry {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateDomainEntryRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEntry',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateDomainEntry.operations'),
        outputPath: 'operations',
        parameters: {
          domainName: this.__input.domainName,
          domainEntry: {
            id: this.__input.domainEntry.id,
            name: this.__input.domainEntry.name,
            target: this.__input.domainEntry.target,
            isAlias: this.__input.domainEntry.isAlias,
            type: this.__input.domainEntry.type,
            options: this.__input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEntry.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesUpdateLoadBalancerAttribute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateLoadBalancerAttributeRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLoadBalancerAttribute',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateLoadBalancerAttribute.operations'),
        outputPath: 'operations',
        parameters: {
          loadBalancerName: this.__input.loadBalancerName,
          attributeName: this.__input.attributeName,
          attributeValue: this.__input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateLoadBalancerAttribute.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesUpdateRelationalDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateRelationalDatabaseRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRelationalDatabase',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateRelationalDatabase.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          masterUserPassword: this.__input.masterUserPassword,
          rotateMasterUserPassword: this.__input.rotateMasterUserPassword,
          preferredBackupWindow: this.__input.preferredBackupWindow,
          preferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          enableBackupRetention: this.__input.enableBackupRetention,
          disableBackupRetention: this.__input.disableBackupRetention,
          publiclyAccessible: this.__input.publiclyAccessible,
          applyImmediately: this.__input.applyImmediately,
          caCertificateIdentifier: this.__input.caCertificateIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResponsesUpdateRelationalDatabaseParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.LightsailUpdateRelationalDatabaseParametersRequest) {
  }

  public get operations(): shapes.LightsailOperation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRelationalDatabaseParameters',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.UpdateRelationalDatabaseParameters.operations'),
        outputPath: 'operations',
        parameters: {
          relationalDatabaseName: this.__input.relationalDatabaseName,
          parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRelationalDatabaseParameters.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

