import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class LightsailClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public allocateStaticIp(input: shapes.LightsailAllocateStaticIpRequest): LightsailAllocateStaticIp {
    return new LightsailAllocateStaticIp(this, 'AllocateStaticIp', this.__resources, input);
  }

  public attachCertificateToDistribution(input: shapes.LightsailAttachCertificateToDistributionRequest): LightsailAttachCertificateToDistribution {
    return new LightsailAttachCertificateToDistribution(this, 'AttachCertificateToDistribution', this.__resources, input);
  }

  public attachDisk(input: shapes.LightsailAttachDiskRequest): LightsailAttachDisk {
    return new LightsailAttachDisk(this, 'AttachDisk', this.__resources, input);
  }

  public attachInstancesToLoadBalancer(input: shapes.LightsailAttachInstancesToLoadBalancerRequest): LightsailAttachInstancesToLoadBalancer {
    return new LightsailAttachInstancesToLoadBalancer(this, 'AttachInstancesToLoadBalancer', this.__resources, input);
  }

  public attachLoadBalancerTlsCertificate(input: shapes.LightsailAttachLoadBalancerTlsCertificateRequest): LightsailAttachLoadBalancerTlsCertificate {
    return new LightsailAttachLoadBalancerTlsCertificate(this, 'AttachLoadBalancerTlsCertificate', this.__resources, input);
  }

  public attachStaticIp(input: shapes.LightsailAttachStaticIpRequest): LightsailAttachStaticIp {
    return new LightsailAttachStaticIp(this, 'AttachStaticIp', this.__resources, input);
  }

  public closeInstancePublicPorts(input: shapes.LightsailCloseInstancePublicPortsRequest): LightsailCloseInstancePublicPorts {
    return new LightsailCloseInstancePublicPorts(this, 'CloseInstancePublicPorts', this.__resources, input);
  }

  public copySnapshot(input: shapes.LightsailCopySnapshotRequest): LightsailCopySnapshot {
    return new LightsailCopySnapshot(this, 'CopySnapshot', this.__resources, input);
  }

  public createCertificate(input: shapes.LightsailCreateCertificateRequest): LightsailCreateCertificate {
    return new LightsailCreateCertificate(this, 'CreateCertificate', this.__resources, input);
  }

  public createCloudFormationStack(input: shapes.LightsailCreateCloudFormationStackRequest): LightsailCreateCloudFormationStack {
    return new LightsailCreateCloudFormationStack(this, 'CreateCloudFormationStack', this.__resources, input);
  }

  public createContactMethod(input: shapes.LightsailCreateContactMethodRequest): LightsailCreateContactMethod {
    return new LightsailCreateContactMethod(this, 'CreateContactMethod', this.__resources, input);
  }

  public createContainerService(input: shapes.LightsailCreateContainerServiceRequest): LightsailCreateContainerService {
    return new LightsailCreateContainerService(this, 'CreateContainerService', this.__resources, input);
  }

  public createContainerServiceDeployment(input: shapes.LightsailCreateContainerServiceDeploymentRequest): LightsailCreateContainerServiceDeployment {
    return new LightsailCreateContainerServiceDeployment(this, 'CreateContainerServiceDeployment', this.__resources, input);
  }

  public createContainerServiceRegistryLogin(): LightsailCreateContainerServiceRegistryLogin {
    return new LightsailCreateContainerServiceRegistryLogin(this, 'CreateContainerServiceRegistryLogin', this.__resources);
  }

  public createDisk(input: shapes.LightsailCreateDiskRequest): LightsailCreateDisk {
    return new LightsailCreateDisk(this, 'CreateDisk', this.__resources, input);
  }

  public createDiskFromSnapshot(input: shapes.LightsailCreateDiskFromSnapshotRequest): LightsailCreateDiskFromSnapshot {
    return new LightsailCreateDiskFromSnapshot(this, 'CreateDiskFromSnapshot', this.__resources, input);
  }

  public createDiskSnapshot(input: shapes.LightsailCreateDiskSnapshotRequest): LightsailCreateDiskSnapshot {
    return new LightsailCreateDiskSnapshot(this, 'CreateDiskSnapshot', this.__resources, input);
  }

  public createDistribution(input: shapes.LightsailCreateDistributionRequest): LightsailCreateDistribution {
    return new LightsailCreateDistribution(this, 'CreateDistribution', this.__resources, input);
  }

  public createDomain(input: shapes.LightsailCreateDomainRequest): LightsailCreateDomain {
    return new LightsailCreateDomain(this, 'CreateDomain', this.__resources, input);
  }

  public createDomainEntry(input: shapes.LightsailCreateDomainEntryRequest): LightsailCreateDomainEntry {
    return new LightsailCreateDomainEntry(this, 'CreateDomainEntry', this.__resources, input);
  }

  public createInstanceSnapshot(input: shapes.LightsailCreateInstanceSnapshotRequest): LightsailCreateInstanceSnapshot {
    return new LightsailCreateInstanceSnapshot(this, 'CreateInstanceSnapshot', this.__resources, input);
  }

  public createInstances(input: shapes.LightsailCreateInstancesRequest): LightsailCreateInstances {
    return new LightsailCreateInstances(this, 'CreateInstances', this.__resources, input);
  }

  public createInstancesFromSnapshot(input: shapes.LightsailCreateInstancesFromSnapshotRequest): LightsailCreateInstancesFromSnapshot {
    return new LightsailCreateInstancesFromSnapshot(this, 'CreateInstancesFromSnapshot', this.__resources, input);
  }

  public createKeyPair(input: shapes.LightsailCreateKeyPairRequest): LightsailCreateKeyPair {
    return new LightsailCreateKeyPair(this, 'CreateKeyPair', this.__resources, input);
  }

  public createLoadBalancer(input: shapes.LightsailCreateLoadBalancerRequest): LightsailCreateLoadBalancer {
    return new LightsailCreateLoadBalancer(this, 'CreateLoadBalancer', this.__resources, input);
  }

  public createLoadBalancerTlsCertificate(input: shapes.LightsailCreateLoadBalancerTlsCertificateRequest): LightsailCreateLoadBalancerTlsCertificate {
    return new LightsailCreateLoadBalancerTlsCertificate(this, 'CreateLoadBalancerTlsCertificate', this.__resources, input);
  }

  public createRelationalDatabase(input: shapes.LightsailCreateRelationalDatabaseRequest): LightsailCreateRelationalDatabase {
    return new LightsailCreateRelationalDatabase(this, 'CreateRelationalDatabase', this.__resources, input);
  }

  public createRelationalDatabaseFromSnapshot(input: shapes.LightsailCreateRelationalDatabaseFromSnapshotRequest): LightsailCreateRelationalDatabaseFromSnapshot {
    return new LightsailCreateRelationalDatabaseFromSnapshot(this, 'CreateRelationalDatabaseFromSnapshot', this.__resources, input);
  }

  public createRelationalDatabaseSnapshot(input: shapes.LightsailCreateRelationalDatabaseSnapshotRequest): LightsailCreateRelationalDatabaseSnapshot {
    return new LightsailCreateRelationalDatabaseSnapshot(this, 'CreateRelationalDatabaseSnapshot', this.__resources, input);
  }

  public deleteAlarm(input: shapes.LightsailDeleteAlarmRequest): LightsailDeleteAlarm {
    return new LightsailDeleteAlarm(this, 'DeleteAlarm', this.__resources, input);
  }

  public deleteAutoSnapshot(input: shapes.LightsailDeleteAutoSnapshotRequest): LightsailDeleteAutoSnapshot {
    return new LightsailDeleteAutoSnapshot(this, 'DeleteAutoSnapshot', this.__resources, input);
  }

  public deleteCertificate(input: shapes.LightsailDeleteCertificateRequest): LightsailDeleteCertificate {
    return new LightsailDeleteCertificate(this, 'DeleteCertificate', this.__resources, input);
  }

  public deleteContactMethod(input: shapes.LightsailDeleteContactMethodRequest): LightsailDeleteContactMethod {
    return new LightsailDeleteContactMethod(this, 'DeleteContactMethod', this.__resources, input);
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

  public deleteDisk(input: shapes.LightsailDeleteDiskRequest): LightsailDeleteDisk {
    return new LightsailDeleteDisk(this, 'DeleteDisk', this.__resources, input);
  }

  public deleteDiskSnapshot(input: shapes.LightsailDeleteDiskSnapshotRequest): LightsailDeleteDiskSnapshot {
    return new LightsailDeleteDiskSnapshot(this, 'DeleteDiskSnapshot', this.__resources, input);
  }

  public deleteDistribution(input: shapes.LightsailDeleteDistributionRequest): LightsailDeleteDistribution {
    return new LightsailDeleteDistribution(this, 'DeleteDistribution', this.__resources, input);
  }

  public deleteDomain(input: shapes.LightsailDeleteDomainRequest): LightsailDeleteDomain {
    return new LightsailDeleteDomain(this, 'DeleteDomain', this.__resources, input);
  }

  public deleteDomainEntry(input: shapes.LightsailDeleteDomainEntryRequest): LightsailDeleteDomainEntry {
    return new LightsailDeleteDomainEntry(this, 'DeleteDomainEntry', this.__resources, input);
  }

  public deleteInstance(input: shapes.LightsailDeleteInstanceRequest): LightsailDeleteInstance {
    return new LightsailDeleteInstance(this, 'DeleteInstance', this.__resources, input);
  }

  public deleteInstanceSnapshot(input: shapes.LightsailDeleteInstanceSnapshotRequest): LightsailDeleteInstanceSnapshot {
    return new LightsailDeleteInstanceSnapshot(this, 'DeleteInstanceSnapshot', this.__resources, input);
  }

  public deleteKeyPair(input: shapes.LightsailDeleteKeyPairRequest): LightsailDeleteKeyPair {
    return new LightsailDeleteKeyPair(this, 'DeleteKeyPair', this.__resources, input);
  }

  public deleteKnownHostKeys(input: shapes.LightsailDeleteKnownHostKeysRequest): LightsailDeleteKnownHostKeys {
    return new LightsailDeleteKnownHostKeys(this, 'DeleteKnownHostKeys', this.__resources, input);
  }

  public deleteLoadBalancer(input: shapes.LightsailDeleteLoadBalancerRequest): LightsailDeleteLoadBalancer {
    return new LightsailDeleteLoadBalancer(this, 'DeleteLoadBalancer', this.__resources, input);
  }

  public deleteLoadBalancerTlsCertificate(input: shapes.LightsailDeleteLoadBalancerTlsCertificateRequest): LightsailDeleteLoadBalancerTlsCertificate {
    return new LightsailDeleteLoadBalancerTlsCertificate(this, 'DeleteLoadBalancerTlsCertificate', this.__resources, input);
  }

  public deleteRelationalDatabase(input: shapes.LightsailDeleteRelationalDatabaseRequest): LightsailDeleteRelationalDatabase {
    return new LightsailDeleteRelationalDatabase(this, 'DeleteRelationalDatabase', this.__resources, input);
  }

  public deleteRelationalDatabaseSnapshot(input: shapes.LightsailDeleteRelationalDatabaseSnapshotRequest): LightsailDeleteRelationalDatabaseSnapshot {
    return new LightsailDeleteRelationalDatabaseSnapshot(this, 'DeleteRelationalDatabaseSnapshot', this.__resources, input);
  }

  public detachCertificateFromDistribution(input: shapes.LightsailDetachCertificateFromDistributionRequest): LightsailDetachCertificateFromDistribution {
    return new LightsailDetachCertificateFromDistribution(this, 'DetachCertificateFromDistribution', this.__resources, input);
  }

  public detachDisk(input: shapes.LightsailDetachDiskRequest): LightsailDetachDisk {
    return new LightsailDetachDisk(this, 'DetachDisk', this.__resources, input);
  }

  public detachInstancesFromLoadBalancer(input: shapes.LightsailDetachInstancesFromLoadBalancerRequest): LightsailDetachInstancesFromLoadBalancer {
    return new LightsailDetachInstancesFromLoadBalancer(this, 'DetachInstancesFromLoadBalancer', this.__resources, input);
  }

  public detachStaticIp(input: shapes.LightsailDetachStaticIpRequest): LightsailDetachStaticIp {
    return new LightsailDetachStaticIp(this, 'DetachStaticIp', this.__resources, input);
  }

  public disableAddOn(input: shapes.LightsailDisableAddOnRequest): LightsailDisableAddOn {
    return new LightsailDisableAddOn(this, 'DisableAddOn', this.__resources, input);
  }

  public downloadDefaultKeyPair(): LightsailDownloadDefaultKeyPair {
    return new LightsailDownloadDefaultKeyPair(this, 'DownloadDefaultKeyPair', this.__resources);
  }

  public enableAddOn(input: shapes.LightsailEnableAddOnRequest): LightsailEnableAddOn {
    return new LightsailEnableAddOn(this, 'EnableAddOn', this.__resources, input);
  }

  public exportSnapshot(input: shapes.LightsailExportSnapshotRequest): LightsailExportSnapshot {
    return new LightsailExportSnapshot(this, 'ExportSnapshot', this.__resources, input);
  }

  public fetchActiveNames(input: shapes.LightsailGetActiveNamesRequest): LightsailFetchActiveNames {
    return new LightsailFetchActiveNames(this, 'FetchActiveNames', this.__resources, input);
  }

  public fetchAlarms(input: shapes.LightsailGetAlarmsRequest): LightsailFetchAlarms {
    return new LightsailFetchAlarms(this, 'FetchAlarms', this.__resources, input);
  }

  public fetchAutoSnapshots(input: shapes.LightsailGetAutoSnapshotsRequest): LightsailFetchAutoSnapshots {
    return new LightsailFetchAutoSnapshots(this, 'FetchAutoSnapshots', this.__resources, input);
  }

  public fetchBlueprints(input: shapes.LightsailGetBlueprintsRequest): LightsailFetchBlueprints {
    return new LightsailFetchBlueprints(this, 'FetchBlueprints', this.__resources, input);
  }

  public fetchBundles(input: shapes.LightsailGetBundlesRequest): LightsailFetchBundles {
    return new LightsailFetchBundles(this, 'FetchBundles', this.__resources, input);
  }

  public fetchCertificates(input: shapes.LightsailGetCertificatesRequest): LightsailFetchCertificates {
    return new LightsailFetchCertificates(this, 'FetchCertificates', this.__resources, input);
  }

  public fetchCloudFormationStackRecords(input: shapes.LightsailGetCloudFormationStackRecordsRequest): LightsailFetchCloudFormationStackRecords {
    return new LightsailFetchCloudFormationStackRecords(this, 'FetchCloudFormationStackRecords', this.__resources, input);
  }

  public fetchContactMethods(input: shapes.LightsailGetContactMethodsRequest): LightsailFetchContactMethods {
    return new LightsailFetchContactMethods(this, 'FetchContactMethods', this.__resources, input);
  }

  public fetchContainerApiMetadata(): LightsailFetchContainerApiMetadata {
    return new LightsailFetchContainerApiMetadata(this, 'FetchContainerApiMetadata', this.__resources);
  }

  public fetchContainerImages(input: shapes.LightsailGetContainerImagesRequest): LightsailFetchContainerImages {
    return new LightsailFetchContainerImages(this, 'FetchContainerImages', this.__resources, input);
  }

  public fetchContainerLog(input: shapes.LightsailGetContainerLogRequest): LightsailFetchContainerLog {
    return new LightsailFetchContainerLog(this, 'FetchContainerLog', this.__resources, input);
  }

  public fetchContainerServiceDeployments(input: shapes.LightsailGetContainerServiceDeploymentsRequest): LightsailFetchContainerServiceDeployments {
    return new LightsailFetchContainerServiceDeployments(this, 'FetchContainerServiceDeployments', this.__resources, input);
  }

  public fetchContainerServiceMetricData(input: shapes.LightsailGetContainerServiceMetricDataRequest): LightsailFetchContainerServiceMetricData {
    return new LightsailFetchContainerServiceMetricData(this, 'FetchContainerServiceMetricData', this.__resources, input);
  }

  public fetchContainerServicePowers(): LightsailFetchContainerServicePowers {
    return new LightsailFetchContainerServicePowers(this, 'FetchContainerServicePowers', this.__resources);
  }

  public fetchContainerServices(input: shapes.LightsailGetContainerServicesRequest): LightsailFetchContainerServices {
    return new LightsailFetchContainerServices(this, 'FetchContainerServices', this.__resources, input);
  }

  public fetchDisk(input: shapes.LightsailGetDiskRequest): LightsailFetchDisk {
    return new LightsailFetchDisk(this, 'FetchDisk', this.__resources, input);
  }

  public fetchDiskSnapshot(input: shapes.LightsailGetDiskSnapshotRequest): LightsailFetchDiskSnapshot {
    return new LightsailFetchDiskSnapshot(this, 'FetchDiskSnapshot', this.__resources, input);
  }

  public fetchDiskSnapshots(input: shapes.LightsailGetDiskSnapshotsRequest): LightsailFetchDiskSnapshots {
    return new LightsailFetchDiskSnapshots(this, 'FetchDiskSnapshots', this.__resources, input);
  }

  public fetchDisks(input: shapes.LightsailGetDisksRequest): LightsailFetchDisks {
    return new LightsailFetchDisks(this, 'FetchDisks', this.__resources, input);
  }

  public fetchDistributionBundles(): LightsailFetchDistributionBundles {
    return new LightsailFetchDistributionBundles(this, 'FetchDistributionBundles', this.__resources);
  }

  public fetchDistributionLatestCacheReset(input: shapes.LightsailGetDistributionLatestCacheResetRequest): LightsailFetchDistributionLatestCacheReset {
    return new LightsailFetchDistributionLatestCacheReset(this, 'FetchDistributionLatestCacheReset', this.__resources, input);
  }

  public fetchDistributionMetricData(input: shapes.LightsailGetDistributionMetricDataRequest): LightsailFetchDistributionMetricData {
    return new LightsailFetchDistributionMetricData(this, 'FetchDistributionMetricData', this.__resources, input);
  }

  public fetchDistributions(input: shapes.LightsailGetDistributionsRequest): LightsailFetchDistributions {
    return new LightsailFetchDistributions(this, 'FetchDistributions', this.__resources, input);
  }

  public fetchDomain(input: shapes.LightsailGetDomainRequest): LightsailFetchDomain {
    return new LightsailFetchDomain(this, 'FetchDomain', this.__resources, input);
  }

  public fetchDomains(input: shapes.LightsailGetDomainsRequest): LightsailFetchDomains {
    return new LightsailFetchDomains(this, 'FetchDomains', this.__resources, input);
  }

  public fetchExportSnapshotRecords(input: shapes.LightsailGetExportSnapshotRecordsRequest): LightsailFetchExportSnapshotRecords {
    return new LightsailFetchExportSnapshotRecords(this, 'FetchExportSnapshotRecords', this.__resources, input);
  }

  public fetchInstance(input: shapes.LightsailGetInstanceRequest): LightsailFetchInstance {
    return new LightsailFetchInstance(this, 'FetchInstance', this.__resources, input);
  }

  public fetchInstanceAccessDetails(input: shapes.LightsailGetInstanceAccessDetailsRequest): LightsailFetchInstanceAccessDetails {
    return new LightsailFetchInstanceAccessDetails(this, 'FetchInstanceAccessDetails', this.__resources, input);
  }

  public fetchInstanceMetricData(input: shapes.LightsailGetInstanceMetricDataRequest): LightsailFetchInstanceMetricData {
    return new LightsailFetchInstanceMetricData(this, 'FetchInstanceMetricData', this.__resources, input);
  }

  public fetchInstancePortStates(input: shapes.LightsailGetInstancePortStatesRequest): LightsailFetchInstancePortStates {
    return new LightsailFetchInstancePortStates(this, 'FetchInstancePortStates', this.__resources, input);
  }

  public fetchInstanceSnapshot(input: shapes.LightsailGetInstanceSnapshotRequest): LightsailFetchInstanceSnapshot {
    return new LightsailFetchInstanceSnapshot(this, 'FetchInstanceSnapshot', this.__resources, input);
  }

  public fetchInstanceSnapshots(input: shapes.LightsailGetInstanceSnapshotsRequest): LightsailFetchInstanceSnapshots {
    return new LightsailFetchInstanceSnapshots(this, 'FetchInstanceSnapshots', this.__resources, input);
  }

  public fetchInstanceState(input: shapes.LightsailGetInstanceStateRequest): LightsailFetchInstanceState {
    return new LightsailFetchInstanceState(this, 'FetchInstanceState', this.__resources, input);
  }

  public fetchInstances(input: shapes.LightsailGetInstancesRequest): LightsailFetchInstances {
    return new LightsailFetchInstances(this, 'FetchInstances', this.__resources, input);
  }

  public fetchKeyPair(input: shapes.LightsailGetKeyPairRequest): LightsailFetchKeyPair {
    return new LightsailFetchKeyPair(this, 'FetchKeyPair', this.__resources, input);
  }

  public fetchKeyPairs(input: shapes.LightsailGetKeyPairsRequest): LightsailFetchKeyPairs {
    return new LightsailFetchKeyPairs(this, 'FetchKeyPairs', this.__resources, input);
  }

  public fetchLoadBalancer(input: shapes.LightsailGetLoadBalancerRequest): LightsailFetchLoadBalancer {
    return new LightsailFetchLoadBalancer(this, 'FetchLoadBalancer', this.__resources, input);
  }

  public fetchLoadBalancerMetricData(input: shapes.LightsailGetLoadBalancerMetricDataRequest): LightsailFetchLoadBalancerMetricData {
    return new LightsailFetchLoadBalancerMetricData(this, 'FetchLoadBalancerMetricData', this.__resources, input);
  }

  public fetchLoadBalancerTlsCertificates(input: shapes.LightsailGetLoadBalancerTlsCertificatesRequest): LightsailFetchLoadBalancerTlsCertificates {
    return new LightsailFetchLoadBalancerTlsCertificates(this, 'FetchLoadBalancerTlsCertificates', this.__resources, input);
  }

  public fetchLoadBalancers(input: shapes.LightsailGetLoadBalancersRequest): LightsailFetchLoadBalancers {
    return new LightsailFetchLoadBalancers(this, 'FetchLoadBalancers', this.__resources, input);
  }

  public fetchOperation(input: shapes.LightsailGetOperationRequest): LightsailFetchOperation {
    return new LightsailFetchOperation(this, 'FetchOperation', this.__resources, input);
  }

  public fetchOperations(input: shapes.LightsailGetOperationsRequest): LightsailFetchOperations {
    return new LightsailFetchOperations(this, 'FetchOperations', this.__resources, input);
  }

  public fetchOperationsForResource(input: shapes.LightsailGetOperationsForResourceRequest): LightsailFetchOperationsForResource {
    return new LightsailFetchOperationsForResource(this, 'FetchOperationsForResource', this.__resources, input);
  }

  public fetchRegions(input: shapes.LightsailGetRegionsRequest): LightsailFetchRegions {
    return new LightsailFetchRegions(this, 'FetchRegions', this.__resources, input);
  }

  public fetchRelationalDatabase(input: shapes.LightsailGetRelationalDatabaseRequest): LightsailFetchRelationalDatabase {
    return new LightsailFetchRelationalDatabase(this, 'FetchRelationalDatabase', this.__resources, input);
  }

  public fetchRelationalDatabaseBlueprints(input: shapes.LightsailGetRelationalDatabaseBlueprintsRequest): LightsailFetchRelationalDatabaseBlueprints {
    return new LightsailFetchRelationalDatabaseBlueprints(this, 'FetchRelationalDatabaseBlueprints', this.__resources, input);
  }

  public fetchRelationalDatabaseBundles(input: shapes.LightsailGetRelationalDatabaseBundlesRequest): LightsailFetchRelationalDatabaseBundles {
    return new LightsailFetchRelationalDatabaseBundles(this, 'FetchRelationalDatabaseBundles', this.__resources, input);
  }

  public fetchRelationalDatabaseEvents(input: shapes.LightsailGetRelationalDatabaseEventsRequest): LightsailFetchRelationalDatabaseEvents {
    return new LightsailFetchRelationalDatabaseEvents(this, 'FetchRelationalDatabaseEvents', this.__resources, input);
  }

  public fetchRelationalDatabaseLogEvents(input: shapes.LightsailGetRelationalDatabaseLogEventsRequest): LightsailFetchRelationalDatabaseLogEvents {
    return new LightsailFetchRelationalDatabaseLogEvents(this, 'FetchRelationalDatabaseLogEvents', this.__resources, input);
  }

  public fetchRelationalDatabaseLogStreams(input: shapes.LightsailGetRelationalDatabaseLogStreamsRequest): LightsailFetchRelationalDatabaseLogStreams {
    return new LightsailFetchRelationalDatabaseLogStreams(this, 'FetchRelationalDatabaseLogStreams', this.__resources, input);
  }

  public fetchRelationalDatabaseMasterUserPassword(input: shapes.LightsailGetRelationalDatabaseMasterUserPasswordRequest): LightsailFetchRelationalDatabaseMasterUserPassword {
    return new LightsailFetchRelationalDatabaseMasterUserPassword(this, 'FetchRelationalDatabaseMasterUserPassword', this.__resources, input);
  }

  public fetchRelationalDatabaseMetricData(input: shapes.LightsailGetRelationalDatabaseMetricDataRequest): LightsailFetchRelationalDatabaseMetricData {
    return new LightsailFetchRelationalDatabaseMetricData(this, 'FetchRelationalDatabaseMetricData', this.__resources, input);
  }

  public fetchRelationalDatabaseParameters(input: shapes.LightsailGetRelationalDatabaseParametersRequest): LightsailFetchRelationalDatabaseParameters {
    return new LightsailFetchRelationalDatabaseParameters(this, 'FetchRelationalDatabaseParameters', this.__resources, input);
  }

  public fetchRelationalDatabaseSnapshot(input: shapes.LightsailGetRelationalDatabaseSnapshotRequest): LightsailFetchRelationalDatabaseSnapshot {
    return new LightsailFetchRelationalDatabaseSnapshot(this, 'FetchRelationalDatabaseSnapshot', this.__resources, input);
  }

  public fetchRelationalDatabaseSnapshots(input: shapes.LightsailGetRelationalDatabaseSnapshotsRequest): LightsailFetchRelationalDatabaseSnapshots {
    return new LightsailFetchRelationalDatabaseSnapshots(this, 'FetchRelationalDatabaseSnapshots', this.__resources, input);
  }

  public fetchRelationalDatabases(input: shapes.LightsailGetRelationalDatabasesRequest): LightsailFetchRelationalDatabases {
    return new LightsailFetchRelationalDatabases(this, 'FetchRelationalDatabases', this.__resources, input);
  }

  public fetchStaticIp(input: shapes.LightsailGetStaticIpRequest): LightsailFetchStaticIp {
    return new LightsailFetchStaticIp(this, 'FetchStaticIp', this.__resources, input);
  }

  public fetchStaticIps(input: shapes.LightsailGetStaticIpsRequest): LightsailFetchStaticIps {
    return new LightsailFetchStaticIps(this, 'FetchStaticIps', this.__resources, input);
  }

  public importKeyPair(input: shapes.LightsailImportKeyPairRequest): LightsailImportKeyPair {
    return new LightsailImportKeyPair(this, 'ImportKeyPair', this.__resources, input);
  }

  public isVpcPeered(): LightsailIsVpcPeered {
    return new LightsailIsVpcPeered(this, 'IsVpcPeered', this.__resources);
  }

  public openInstancePublicPorts(input: shapes.LightsailOpenInstancePublicPortsRequest): LightsailOpenInstancePublicPorts {
    return new LightsailOpenInstancePublicPorts(this, 'OpenInstancePublicPorts', this.__resources, input);
  }

  public peerVpc(): LightsailPeerVpc {
    return new LightsailPeerVpc(this, 'PeerVpc', this.__resources);
  }

  public putAlarm(input: shapes.LightsailPutAlarmRequest): LightsailPutAlarm {
    return new LightsailPutAlarm(this, 'PutAlarm', this.__resources, input);
  }

  public putInstancePublicPorts(input: shapes.LightsailPutInstancePublicPortsRequest): LightsailPutInstancePublicPorts {
    return new LightsailPutInstancePublicPorts(this, 'PutInstancePublicPorts', this.__resources, input);
  }

  public rebootInstance(input: shapes.LightsailRebootInstanceRequest): LightsailRebootInstance {
    return new LightsailRebootInstance(this, 'RebootInstance', this.__resources, input);
  }

  public rebootRelationalDatabase(input: shapes.LightsailRebootRelationalDatabaseRequest): LightsailRebootRelationalDatabase {
    return new LightsailRebootRelationalDatabase(this, 'RebootRelationalDatabase', this.__resources, input);
  }

  public registerContainerImage(input: shapes.LightsailRegisterContainerImageRequest): LightsailRegisterContainerImage {
    return new LightsailRegisterContainerImage(this, 'RegisterContainerImage', this.__resources, input);
  }

  public releaseStaticIp(input: shapes.LightsailReleaseStaticIpRequest): LightsailReleaseStaticIp {
    return new LightsailReleaseStaticIp(this, 'ReleaseStaticIp', this.__resources, input);
  }

  public resetDistributionCache(input: shapes.LightsailResetDistributionCacheRequest): LightsailResetDistributionCache {
    return new LightsailResetDistributionCache(this, 'ResetDistributionCache', this.__resources, input);
  }

  public sendContactMethodVerification(input: shapes.LightsailSendContactMethodVerificationRequest): LightsailSendContactMethodVerification {
    return new LightsailSendContactMethodVerification(this, 'SendContactMethodVerification', this.__resources, input);
  }

  public startInstance(input: shapes.LightsailStartInstanceRequest): LightsailStartInstance {
    return new LightsailStartInstance(this, 'StartInstance', this.__resources, input);
  }

  public startRelationalDatabase(input: shapes.LightsailStartRelationalDatabaseRequest): LightsailStartRelationalDatabase {
    return new LightsailStartRelationalDatabase(this, 'StartRelationalDatabase', this.__resources, input);
  }

  public stopInstance(input: shapes.LightsailStopInstanceRequest): LightsailStopInstance {
    return new LightsailStopInstance(this, 'StopInstance', this.__resources, input);
  }

  public stopRelationalDatabase(input: shapes.LightsailStopRelationalDatabaseRequest): LightsailStopRelationalDatabase {
    return new LightsailStopRelationalDatabase(this, 'StopRelationalDatabase', this.__resources, input);
  }

  public tagResource(input: shapes.LightsailTagResourceRequest): LightsailTagResource {
    return new LightsailTagResource(this, 'TagResource', this.__resources, input);
  }

  public testAlarm(input: shapes.LightsailTestAlarmRequest): LightsailTestAlarm {
    return new LightsailTestAlarm(this, 'TestAlarm', this.__resources, input);
  }

  public unpeerVpc(): LightsailUnpeerVpc {
    return new LightsailUnpeerVpc(this, 'UnpeerVpc', this.__resources);
  }

  public untagResource(input: shapes.LightsailUntagResourceRequest): LightsailUntagResource {
    return new LightsailUntagResource(this, 'UntagResource', this.__resources, input);
  }

  public updateContainerService(input: shapes.LightsailUpdateContainerServiceRequest): LightsailUpdateContainerService {
    return new LightsailUpdateContainerService(this, 'UpdateContainerService', this.__resources, input);
  }

  public updateDistribution(input: shapes.LightsailUpdateDistributionRequest): LightsailUpdateDistribution {
    return new LightsailUpdateDistribution(this, 'UpdateDistribution', this.__resources, input);
  }

  public updateDistributionBundle(input: shapes.LightsailUpdateDistributionBundleRequest): LightsailUpdateDistributionBundle {
    return new LightsailUpdateDistributionBundle(this, 'UpdateDistributionBundle', this.__resources, input);
  }

  public updateDomainEntry(input: shapes.LightsailUpdateDomainEntryRequest): LightsailUpdateDomainEntry {
    return new LightsailUpdateDomainEntry(this, 'UpdateDomainEntry', this.__resources, input);
  }

  public updateLoadBalancerAttribute(input: shapes.LightsailUpdateLoadBalancerAttributeRequest): LightsailUpdateLoadBalancerAttribute {
    return new LightsailUpdateLoadBalancerAttribute(this, 'UpdateLoadBalancerAttribute', this.__resources, input);
  }

  public updateRelationalDatabase(input: shapes.LightsailUpdateRelationalDatabaseRequest): LightsailUpdateRelationalDatabase {
    return new LightsailUpdateRelationalDatabase(this, 'UpdateRelationalDatabase', this.__resources, input);
  }

  public updateRelationalDatabaseParameters(input: shapes.LightsailUpdateRelationalDatabaseParametersRequest): LightsailUpdateRelationalDatabaseParameters {
    return new LightsailUpdateRelationalDatabaseParameters(this, 'UpdateRelationalDatabaseParameters', this.__resources, input);
  }

}

export class LightsailAllocateStaticIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAllocateStaticIpRequest) {
    super(scope, id);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AllocateStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailAttachCertificateToDistribution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAttachCertificateToDistributionRequest) {
    super(scope, id);
  }

  public get operation(): LightsailAttachCertificateToDistributionOperation {
    return new LightsailAttachCertificateToDistributionOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailAttachCertificateToDistributionOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAttachCertificateToDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.id', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.resourceName', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.resourceType', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailAttachCertificateToDistributionOperationLocation {
    return new LightsailAttachCertificateToDistributionOperationLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.isTerminal', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.operationDetails', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.operationType', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.status', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.statusChangedAt', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.errorCode', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailAttachCertificateToDistributionOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAttachCertificateToDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachCertificateToDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailAttachDisk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAttachDiskRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
          instanceName: this.input.instanceName,
          diskPath: this.input.diskPath,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailAttachInstancesToLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAttachInstancesToLoadBalancerRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          instanceNames: this.input.instanceNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachInstancesToLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailAttachLoadBalancerTlsCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAttachLoadBalancerTlsCertificateRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachLoadBalancerTlsCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailAttachStaticIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailAttachStaticIpRequest) {
    super(scope, id);
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
          staticIpName: this.input.staticIpName,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCloseInstancePublicPorts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCloseInstancePublicPortsRequest) {
    super(scope, id);
  }

  public get operation(): LightsailCloseInstancePublicPortsOperation {
    return new LightsailCloseInstancePublicPortsOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailCloseInstancePublicPortsOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCloseInstancePublicPortsRequest) {
    super(scope, id);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.id', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.resourceName', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.resourceType', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailCloseInstancePublicPortsOperationLocation {
    return new LightsailCloseInstancePublicPortsOperationLocation(this, 'Location', this.__resources, this.input);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.isTerminal', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.operationDetails', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.operationType', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.status', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.statusChangedAt', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.errorCode', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailCloseInstancePublicPortsOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCloseInstancePublicPortsRequest) {
    super(scope, id);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.location.availabilityZone', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloseInstancePublicPorts.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailCopySnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCopySnapshotRequest) {
    super(scope, id);
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
          sourceSnapshotName: this.input.sourceSnapshotName,
          sourceResourceName: this.input.sourceResourceName,
          restoreDate: this.input.restoreDate,
          useLatestRestorableAutoSnapshot: this.input.useLatestRestorableAutoSnapshot,
          targetSnapshotName: this.input.targetSnapshotName,
          sourceRegion: this.input.sourceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateCertificateRequest) {
    super(scope, id);
  }

  public get certificate(): LightsailCreateCertificateCertificate {
    return new LightsailCreateCertificateCertificate(this, 'Certificate', this.__resources, this.input);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateCertificateCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateCertificateRequest) {
    super(scope, id);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateArn', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateName', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.domainName', props);
    return resource.getResponseField('certificate.domainName') as unknown as string;
  }

  public get certificateDetail(): LightsailCreateCertificateCertificateCertificateDetail {
    return new LightsailCreateCertificateCertificateCertificateDetail(this, 'CertificateDetail', this.__resources, this.input);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.tags', props);
    return resource.getResponseField('certificate.tags') as unknown as shapes.LightsailTag[];
  }

}

export class LightsailCreateCertificateCertificateCertificateDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateCertificateRequest) {
    super(scope, id);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.arn', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.name', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.domainName', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.status', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.serialNumber', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.subjectAlternativeNames', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.domainValidationRecords', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.requestFailureReason', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.inUseResourceCount', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.keyAlgorithm', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.createdAt', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.issuedAt', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.issuerCA', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.notBefore', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.notAfter', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.eligibleToRenew', props);
    return resource.getResponseField('certificate.certificateDetail.eligibleToRenew') as unknown as string;
  }

  public get renewalSummary(): LightsailCreateCertificateCertificateCertificateDetailRenewalSummary {
    return new LightsailCreateCertificateCertificateCertificateDetailRenewalSummary(this, 'RenewalSummary', this.__resources, this.input);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.revokedAt', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.revocationReason', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.tags', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.supportCode', props);
    return resource.getResponseField('certificate.certificateDetail.supportCode') as unknown as string;
  }

}

export class LightsailCreateCertificateCertificateCertificateDetailRenewalSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateCertificateRequest) {
    super(scope, id);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.renewalSummary.domainValidationRecords', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.renewalSummary.renewalStatus', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.renewalSummary.renewalStatusReason', props);
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
          certificateName: this.input.certificateName,
          domainName: this.input.domainName,
          subjectAlternativeNames: this.input.subjectAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCertificate.certificate.certificateDetail.renewalSummary.updatedAt', props);
    return resource.getResponseField('certificate.certificateDetail.renewalSummary.updatedAt') as unknown as string;
  }

}

export class LightsailCreateCloudFormationStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateCloudFormationStackRequest) {
    super(scope, id);
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
          instances: this.input.instances,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCloudFormationStack.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateContactMethod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContactMethodRequest) {
    super(scope, id);
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
          protocol: this.input.protocol,
          contactEndpoint: this.input.contactEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContactMethod.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateContainerService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
  }

  public get containerService(): LightsailCreateContainerServiceContainerService {
    return new LightsailCreateContainerServiceContainerService(this, 'ContainerService', this.__resources, this.input);
  }

}

export class LightsailCreateContainerServiceContainerService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.containerServiceName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.arn', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.createdAt', props);
    return resource.getResponseField('containerService.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateContainerServiceContainerServiceLocation {
    return new LightsailCreateContainerServiceContainerServiceLocation(this, 'Location', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.resourceType', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.tags', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.power', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.powerId', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.state', props);
    return resource.getResponseField('containerService.state') as unknown as string;
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.scale', props);
    return resource.getResponseField('containerService.scale') as unknown as number;
  }

  public get currentDeployment(): LightsailCreateContainerServiceContainerServiceCurrentDeployment {
    return new LightsailCreateContainerServiceContainerServiceCurrentDeployment(this, 'CurrentDeployment', this.__resources, this.input);
  }

  public get nextDeployment(): LightsailCreateContainerServiceContainerServiceNextDeployment {
    return new LightsailCreateContainerServiceContainerServiceNextDeployment(this, 'NextDeployment', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.isDisabled', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.principalArn', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.privateDomainName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.publicDomainNames', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.url', props);
    return resource.getResponseField('containerService.url') as unknown as string;
  }

}

export class LightsailCreateContainerServiceContainerServiceLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.location.availabilityZone', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.location.regionName', props);
    return resource.getResponseField('containerService.location.regionName') as unknown as string;
  }

}

export class LightsailCreateContainerServiceContainerServiceCurrentDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.version', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.state', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.containers', props);
    return resource.getResponseField('containerService.currentDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint {
    return new LightsailCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint(this, 'PublicEndpoint', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.createdAt', props);
    return resource.getResponseField('containerService.currentDeployment.createdAt') as unknown as string;
  }

}

export class LightsailCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.containerName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck {
    return new LightsailCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class LightsailCreateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.path', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailCreateContainerServiceContainerServiceNextDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.version', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.state', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.containers', props);
    return resource.getResponseField('containerService.nextDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint {
    return new LightsailCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint(this, 'PublicEndpoint', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.createdAt', props);
    return resource.getResponseField('containerService.nextDeployment.createdAt') as unknown as string;
  }

}

export class LightsailCreateContainerServiceContainerServiceNextDeploymentPublicEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.containerName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck {
    return new LightsailCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class LightsailCreateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.path', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          tags: this.input.tags,
          publicDomainNames: this.input.publicDomainNames,
          deployment: {
            containers: this.input.deployment?.containers,
            publicEndpoint: {
              containerName: this.input.deployment?.publicEndpoint?.containerName,
              containerPort: this.input.deployment?.publicEndpoint?.containerPort,
              healthCheck: {
                healthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.healthyThreshold,
                unhealthyThreshold: this.input.deployment?.publicEndpoint?.healthCheck?.unhealthyThreshold,
                timeoutSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.timeoutSeconds,
                intervalSeconds: this.input.deployment?.publicEndpoint?.healthCheck?.intervalSeconds,
                path: this.input.deployment?.publicEndpoint?.healthCheck?.path,
                successCodes: this.input.deployment?.publicEndpoint?.healthCheck?.successCodes,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailCreateContainerServiceDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
  }

  public get containerService(): LightsailCreateContainerServiceDeploymentContainerService {
    return new LightsailCreateContainerServiceDeploymentContainerService(this, 'ContainerService', this.__resources, this.input);
  }

}

export class LightsailCreateContainerServiceDeploymentContainerService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.containerServiceName', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.arn', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.createdAt', props);
    return resource.getResponseField('containerService.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateContainerServiceDeploymentContainerServiceLocation {
    return new LightsailCreateContainerServiceDeploymentContainerServiceLocation(this, 'Location', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.resourceType', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.tags', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.power', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.powerId', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.state', props);
    return resource.getResponseField('containerService.state') as unknown as string;
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.scale', props);
    return resource.getResponseField('containerService.scale') as unknown as number;
  }

  public get currentDeployment(): LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeployment {
    return new LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeployment(this, 'CurrentDeployment', this.__resources, this.input);
  }

  public get nextDeployment(): LightsailCreateContainerServiceDeploymentContainerServiceNextDeployment {
    return new LightsailCreateContainerServiceDeploymentContainerServiceNextDeployment(this, 'NextDeployment', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.isDisabled', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.principalArn', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.privateDomainName', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.publicDomainNames', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.url', props);
    return resource.getResponseField('containerService.url') as unknown as string;
  }

}

export class LightsailCreateContainerServiceDeploymentContainerServiceLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.location.availabilityZone', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.location.regionName', props);
    return resource.getResponseField('containerService.location.regionName') as unknown as string;
  }

}

export class LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.version', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.state', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.containers', props);
    return resource.getResponseField('containerService.currentDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint {
    return new LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint(this, 'PublicEndpoint', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.createdAt', props);
    return resource.getResponseField('containerService.currentDeployment.createdAt') as unknown as string;
  }

}

export class LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.containerName', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck {
    return new LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class LightsailCreateContainerServiceDeploymentContainerServiceCurrentDeploymentPublicEndpointHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.path', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailCreateContainerServiceDeploymentContainerServiceNextDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.version', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.state', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.containers', props);
    return resource.getResponseField('containerService.nextDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint {
    return new LightsailCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint(this, 'PublicEndpoint', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.createdAt', props);
    return resource.getResponseField('containerService.nextDeployment.createdAt') as unknown as string;
  }

}

export class LightsailCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.containerName', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck {
    return new LightsailCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class LightsailCreateContainerServiceDeploymentContainerServiceNextDeploymentPublicEndpointHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateContainerServiceDeploymentRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.path', props);
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
          serviceName: this.input.serviceName,
          containers: this.input.containers,
          publicEndpoint: {
            containerName: this.input.publicEndpoint?.containerName,
            containerPort: this.input.publicEndpoint?.containerPort,
            healthCheck: {
              healthyThreshold: this.input.publicEndpoint?.healthCheck?.healthyThreshold,
              unhealthyThreshold: this.input.publicEndpoint?.healthCheck?.unhealthyThreshold,
              timeoutSeconds: this.input.publicEndpoint?.healthCheck?.timeoutSeconds,
              intervalSeconds: this.input.publicEndpoint?.healthCheck?.intervalSeconds,
              path: this.input.publicEndpoint?.healthCheck?.path,
              successCodes: this.input.publicEndpoint?.healthCheck?.successCodes,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceDeployment.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailCreateContainerServiceRegistryLogin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get registryLogin(): LightsailCreateContainerServiceRegistryLoginRegistryLogin {
    return new LightsailCreateContainerServiceRegistryLoginRegistryLogin(this, 'RegistryLogin', this.__resources);
  }

}

export class LightsailCreateContainerServiceRegistryLoginRegistryLogin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceRegistryLogin.registryLogin.username', props);
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
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceRegistryLogin.registryLogin.password', props);
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
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceRegistryLogin.registryLogin.expiresAt', props);
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
    const resource = new cr.AwsCustomResource(this, 'CreateContainerServiceRegistryLogin.registryLogin.registry', props);
    return resource.getResponseField('registryLogin.registry') as unknown as string;
  }

}

export class LightsailCreateDisk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDiskRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
          availabilityZone: this.input.availabilityZone,
          sizeInGb: this.input.sizeInGb,
          tags: this.input.tags,
          addOns: this.input.addOns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateDiskFromSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDiskFromSnapshotRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
          diskSnapshotName: this.input.diskSnapshotName,
          availabilityZone: this.input.availabilityZone,
          sizeInGb: this.input.sizeInGb,
          tags: this.input.tags,
          addOns: this.input.addOns,
          sourceDiskName: this.input.sourceDiskName,
          restoreDate: this.input.restoreDate,
          useLatestRestorableAutoSnapshot: this.input.useLatestRestorableAutoSnapshot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiskFromSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateDiskSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDiskSnapshotRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
          diskSnapshotName: this.input.diskSnapshotName,
          instanceName: this.input.instanceName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDiskSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateDistribution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
  }

  public get distribution(): LightsailCreateDistributionDistribution {
    return new LightsailCreateDistributionDistribution(this, 'Distribution', this.__resources, this.input);
  }

  public get operation(): LightsailCreateDistributionOperation {
    return new LightsailCreateDistributionOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailCreateDistributionDistribution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.name', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.arn', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.supportCode', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.createdAt', props);
    return resource.getResponseField('distribution.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateDistributionDistributionLocation {
    return new LightsailCreateDistributionDistributionLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.resourceType', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.alternativeDomainNames', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.status', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.isEnabled', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.domainName', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.bundleId', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.certificateName', props);
    return resource.getResponseField('distribution.certificateName') as unknown as string;
  }

  public get origin(): LightsailCreateDistributionDistributionOrigin {
    return new LightsailCreateDistributionDistributionOrigin(this, 'Origin', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.originPublicDNS', props);
    return resource.getResponseField('distribution.originPublicDNS') as unknown as string;
  }

  public get defaultCacheBehavior(): LightsailCreateDistributionDistributionDefaultCacheBehavior {
    return new LightsailCreateDistributionDistributionDefaultCacheBehavior(this, 'DefaultCacheBehavior', this.__resources, this.input);
  }

  public get cacheBehaviorSettings(): LightsailCreateDistributionDistributionCacheBehaviorSettings {
    return new LightsailCreateDistributionDistributionCacheBehaviorSettings(this, 'CacheBehaviorSettings', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviors', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.ableToUpdateBundle', props);
    return resource.getResponseField('distribution.ableToUpdateBundle') as unknown as boolean;
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.tags', props);
    return resource.getResponseField('distribution.tags') as unknown as shapes.LightsailTag[];
  }

}

export class LightsailCreateDistributionDistributionLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.location.regionName', props);
    return resource.getResponseField('distribution.location.regionName') as unknown as string;
  }

}

export class LightsailCreateDistributionDistributionOrigin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.origin.name', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.origin.resourceType', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.origin.regionName', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.origin.protocolPolicy', props);
    return resource.getResponseField('distribution.origin.protocolPolicy') as unknown as string;
  }

}

export class LightsailCreateDistributionDistributionDefaultCacheBehavior extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.defaultCacheBehavior.behavior', props);
    return resource.getResponseField('distribution.defaultCacheBehavior.behavior') as unknown as string;
  }

}

export class LightsailCreateDistributionDistributionCacheBehaviorSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.defaultTTL', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.minimumTTL', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.maximumTTL', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.allowedHTTPMethods', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.cachedHTTPMethods', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.cachedHTTPMethods') as unknown as string;
  }

  public get forwardedCookies(): LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies {
    return new LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies(this, 'ForwardedCookies', this.__resources, this.input);
  }

  public get forwardedHeaders(): LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders {
    return new LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders(this, 'ForwardedHeaders', this.__resources, this.input);
  }

  public get forwardedQueryStrings(): LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings {
    return new LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings(this, 'ForwardedQueryStrings', this.__resources, this.input);
  }

}

export class LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedCookies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedCookies.option', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedCookies.cookiesAllowList', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedCookies.cookiesAllowList') as unknown as string[];
  }

}

export class LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedHeaders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedHeaders.option', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedHeaders.headersAllowList', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedHeaders.headersAllowList') as unknown as string[];
  }

}

export class LightsailCreateDistributionDistributionCacheBehaviorSettingsForwardedQueryStrings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedQueryStrings.option', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.distribution.cacheBehaviorSettings.forwardedQueryStrings.queryStringsAllowList', props);
    return resource.getResponseField('distribution.cacheBehaviorSettings.forwardedQueryStrings.queryStringsAllowList') as unknown as string[];
  }

}

export class LightsailCreateDistributionOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.id', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.resourceName', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.resourceType', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateDistributionOperationLocation {
    return new LightsailCreateDistributionOperationLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.isTerminal', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.operationDetails', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.operationType', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.status', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.statusChangedAt', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.errorCode', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailCreateDistributionOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin.name,
            regionName: this.input.origin.regionName,
            protocolPolicy: this.input.origin.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          bundleId: this.input.bundleId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailCreateDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDomainRequest) {
    super(scope, id);
  }

  public get operation(): LightsailCreateDomainOperation {
    return new LightsailCreateDomainOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailCreateDomainOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDomainRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.id', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.resourceName', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.resourceType', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateDomainOperationLocation {
    return new LightsailCreateDomainOperationLocation(this, 'Location', this.__resources, this.input);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.isTerminal', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.operationDetails', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.operationType', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.status', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.statusChangedAt', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.errorCode', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailCreateDomainOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDomainRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.location.availabilityZone', props);
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
          domainName: this.input.domainName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailCreateDomainEntry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDomainEntryRequest) {
    super(scope, id);
  }

  public get operation(): LightsailCreateDomainEntryOperation {
    return new LightsailCreateDomainEntryOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailCreateDomainEntryOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDomainEntryRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.id', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.resourceName', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.resourceType', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateDomainEntryOperationLocation {
    return new LightsailCreateDomainEntryOperationLocation(this, 'Location', this.__resources, this.input);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.isTerminal', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.operationDetails', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.operationType', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.status', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.statusChangedAt', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.errorCode', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailCreateDomainEntryOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateDomainEntryRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.location.availabilityZone', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomainEntry.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailCreateInstanceSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateInstanceSnapshotRequest) {
    super(scope, id);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
          instanceName: this.input.instanceName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateInstancesRequest) {
    super(scope, id);
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
          instanceNames: this.input.instanceNames,
          availabilityZone: this.input.availabilityZone,
          customImageName: this.input.customImageName,
          blueprintId: this.input.blueprintId,
          bundleId: this.input.bundleId,
          userData: this.input.userData,
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
          addOns: this.input.addOns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstances.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateInstancesFromSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateInstancesFromSnapshotRequest) {
    super(scope, id);
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
          instanceNames: this.input.instanceNames,
          attachedDiskMapping: this.input.attachedDiskMapping,
          availabilityZone: this.input.availabilityZone,
          instanceSnapshotName: this.input.instanceSnapshotName,
          bundleId: this.input.bundleId,
          userData: this.input.userData,
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
          addOns: this.input.addOns,
          sourceInstanceName: this.input.sourceInstanceName,
          restoreDate: this.input.restoreDate,
          useLatestRestorableAutoSnapshot: this.input.useLatestRestorableAutoSnapshot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstancesFromSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateKeyPairRequest) {
    super(scope, id);
  }

  public get keyPair(): LightsailCreateKeyPairKeyPair {
    return new LightsailCreateKeyPairKeyPair(this, 'KeyPair', this.__resources, this.input);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.publicKeyBase64', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.privateKeyBase64', props);
    return resource.getResponseField('privateKeyBase64') as unknown as string;
  }

  public get operation(): LightsailCreateKeyPairOperation {
    return new LightsailCreateKeyPairOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailCreateKeyPairKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.name', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.arn', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.supportCode', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.createdAt', props);
    return resource.getResponseField('keyPair.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateKeyPairKeyPairLocation {
    return new LightsailCreateKeyPairKeyPairLocation(this, 'Location', this.__resources, this.input);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.resourceType', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.tags', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.fingerprint', props);
    return resource.getResponseField('keyPair.fingerprint') as unknown as string;
  }

}

export class LightsailCreateKeyPairKeyPairLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.location.availabilityZone', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.keyPair.location.regionName', props);
    return resource.getResponseField('keyPair.location.regionName') as unknown as string;
  }

}

export class LightsailCreateKeyPairOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.id', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.resourceName', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.resourceType', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailCreateKeyPairOperationLocation {
    return new LightsailCreateKeyPairOperationLocation(this, 'Location', this.__resources, this.input);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.isTerminal', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.operationDetails', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.operationType', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.status', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.statusChangedAt', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.errorCode', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailCreateKeyPairOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.location.availabilityZone', props);
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
          keyPairName: this.input.keyPairName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateKeyPair.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailCreateLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateLoadBalancerRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          instancePort: this.input.instancePort,
          healthCheckPath: this.input.healthCheckPath,
          certificateName: this.input.certificateName,
          certificateDomainName: this.input.certificateDomainName,
          certificateAlternativeNames: this.input.certificateAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateLoadBalancerTlsCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateLoadBalancerTlsCertificateRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          certificateName: this.input.certificateName,
          certificateDomainName: this.input.certificateDomainName,
          certificateAlternativeNames: this.input.certificateAlternativeNames,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLoadBalancerTlsCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          availabilityZone: this.input.availabilityZone,
          relationalDatabaseBlueprintId: this.input.relationalDatabaseBlueprintId,
          relationalDatabaseBundleId: this.input.relationalDatabaseBundleId,
          masterDatabaseName: this.input.masterDatabaseName,
          masterUsername: this.input.masterUsername,
          masterUserPassword: this.input.masterUserPassword,
          preferredBackupWindow: this.input.preferredBackupWindow,
          preferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          publiclyAccessible: this.input.publiclyAccessible,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateRelationalDatabaseFromSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateRelationalDatabaseFromSnapshotRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          availabilityZone: this.input.availabilityZone,
          publiclyAccessible: this.input.publiclyAccessible,
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
          relationalDatabaseBundleId: this.input.relationalDatabaseBundleId,
          sourceRelationalDatabaseName: this.input.sourceRelationalDatabaseName,
          restoreTime: this.input.restoreTime,
          useLatestRestorableTime: this.input.useLatestRestorableTime,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRelationalDatabaseFromSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailCreateRelationalDatabaseSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailCreateRelationalDatabaseSnapshotRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRelationalDatabaseSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteAlarm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteAlarmRequest) {
    super(scope, id);
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
          alarmName: this.input.alarmName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAlarm.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteAutoSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteAutoSnapshotRequest) {
    super(scope, id);
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
          resourceName: this.input.resourceName,
          date: this.input.date,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAutoSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteCertificateRequest) {
    super(scope, id);
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
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteContactMethod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteContactMethodRequest) {
    super(scope, id);
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
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteContactMethod.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteDisk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDiskRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
          forceDeleteAddOns: this.input.forceDeleteAddOns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteDiskSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDiskSnapshotRequest) {
    super(scope, id);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDiskSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteDistribution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDistributionRequest) {
    super(scope, id);
  }

  public get operation(): LightsailDeleteDistributionOperation {
    return new LightsailDeleteDistributionOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailDeleteDistributionOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.id', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.resourceName', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.resourceType', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailDeleteDistributionOperationLocation {
    return new LightsailDeleteDistributionOperationLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.isTerminal', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.operationDetails', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.operationType', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.status', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.statusChangedAt', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.errorCode', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailDeleteDistributionOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailDeleteDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDomainRequest) {
    super(scope, id);
  }

  public get operation(): LightsailDeleteDomainOperation {
    return new LightsailDeleteDomainOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailDeleteDomainOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDomainRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.id', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.resourceName', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.resourceType', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailDeleteDomainOperationLocation {
    return new LightsailDeleteDomainOperationLocation(this, 'Location', this.__resources, this.input);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.isTerminal', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.operationDetails', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.operationType', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.status', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.statusChangedAt', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.errorCode', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailDeleteDomainOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDomainRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.location.availabilityZone', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailDeleteDomainEntry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDomainEntryRequest) {
    super(scope, id);
  }

  public get operation(): LightsailDeleteDomainEntryOperation {
    return new LightsailDeleteDomainEntryOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailDeleteDomainEntryOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDomainEntryRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.id', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.resourceName', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.resourceType', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailDeleteDomainEntryOperationLocation {
    return new LightsailDeleteDomainEntryOperationLocation(this, 'Location', this.__resources, this.input);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.isTerminal', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.operationDetails', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.operationType', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.status', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.statusChangedAt', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.errorCode', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailDeleteDomainEntryOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteDomainEntryRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.location.availabilityZone', props);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomainEntry.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailDeleteInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
          forceDeleteAddOns: this.input.forceDeleteAddOns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteInstanceSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteInstanceSnapshotRequest) {
    super(scope, id);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInstanceSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteKeyPairRequest) {
    super(scope, id);
  }

  public get operation(): LightsailDeleteKeyPairOperation {
    return new LightsailDeleteKeyPairOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailDeleteKeyPairOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.id', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.resourceName', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.resourceType', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailDeleteKeyPairOperationLocation {
    return new LightsailDeleteKeyPairOperationLocation(this, 'Location', this.__resources, this.input);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.isTerminal', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.operationDetails', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.operationType', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.status', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.statusChangedAt', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.errorCode', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailDeleteKeyPairOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.location.availabilityZone', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKeyPair.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailDeleteKnownHostKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteKnownHostKeysRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteKnownHostKeys.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteLoadBalancerRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteLoadBalancerTlsCertificate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteLoadBalancerTlsCertificateRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          certificateName: this.input.certificateName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLoadBalancerTlsCertificate.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          skipFinalSnapshot: this.input.skipFinalSnapshot,
          finalRelationalDatabaseSnapshotName: this.input.finalRelationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDeleteRelationalDatabaseSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDeleteRelationalDatabaseSnapshotRequest) {
    super(scope, id);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRelationalDatabaseSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDetachCertificateFromDistribution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDetachCertificateFromDistributionRequest) {
    super(scope, id);
  }

  public get operation(): LightsailDetachCertificateFromDistributionOperation {
    return new LightsailDetachCertificateFromDistributionOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailDetachCertificateFromDistributionOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDetachCertificateFromDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.id', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.resourceName', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.resourceType', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailDetachCertificateFromDistributionOperationLocation {
    return new LightsailDetachCertificateFromDistributionOperationLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.isTerminal', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.operationDetails', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.operationType', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.status', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.statusChangedAt', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.errorCode', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailDetachCertificateFromDistributionOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDetachCertificateFromDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachCertificateFromDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailDetachDisk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDetachDiskRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachDisk.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDetachInstancesFromLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDetachInstancesFromLoadBalancerRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          instanceNames: this.input.instanceNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachInstancesFromLoadBalancer.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDetachStaticIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDetachStaticIpRequest) {
    super(scope, id);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDisableAddOn extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailDisableAddOnRequest) {
    super(scope, id);
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
          addOnType: this.input.addOnType,
          resourceName: this.input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableAddOn.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailDownloadDefaultKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DownloadDefaultKeyPair.publicKeyBase64', props);
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
    const resource = new cr.AwsCustomResource(this, 'DownloadDefaultKeyPair.privateKeyBase64', props);
    return resource.getResponseField('privateKeyBase64') as unknown as string;
  }

}

export class LightsailEnableAddOn extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailEnableAddOnRequest) {
    super(scope, id);
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
          resourceName: this.input.resourceName,
          addOnRequest: {
            addOnType: this.input.addOnRequest.addOnType,
            autoSnapshotAddOnRequest: {
              snapshotTimeOfDay: this.input.addOnRequest.autoSnapshotAddOnRequest?.snapshotTimeOfDay,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EnableAddOn.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailExportSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailExportSnapshotRequest) {
    super(scope, id);
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
          sourceSnapshotName: this.input.sourceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportSnapshot.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailFetchActiveNames extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetActiveNamesRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetActiveNames.activeNames', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetActiveNames.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchAlarms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetAlarmsRequest) {
    super(scope, id);
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
          alarmName: this.input.alarmName,
          pageToken: this.input.pageToken,
          monitoredResourceName: this.input.monitoredResourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlarms.alarms', props);
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
          alarmName: this.input.alarmName,
          pageToken: this.input.pageToken,
          monitoredResourceName: this.input.monitoredResourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAlarms.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchAutoSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetAutoSnapshotsRequest) {
    super(scope, id);
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
          resourceName: this.input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutoSnapshots.resourceName', props);
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
          resourceName: this.input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutoSnapshots.resourceType', props);
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
          resourceName: this.input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutoSnapshots.autoSnapshots', props);
    return resource.getResponseField('autoSnapshots') as unknown as shapes.LightsailAutoSnapshotDetails[];
  }

}

export class LightsailFetchBlueprints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetBlueprintsRequest) {
    super(scope, id);
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
          includeInactive: this.input.includeInactive,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBlueprints.blueprints', props);
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
          includeInactive: this.input.includeInactive,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBlueprints.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchBundles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetBundlesRequest) {
    super(scope, id);
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
          includeInactive: this.input.includeInactive,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBundles.bundles', props);
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
          includeInactive: this.input.includeInactive,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBundles.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetCertificatesRequest) {
    super(scope, id);
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
          certificateStatuses: this.input.certificateStatuses,
          includeCertificateDetails: this.input.includeCertificateDetails,
          certificateName: this.input.certificateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCertificates.certificates', props);
    return resource.getResponseField('certificates') as unknown as shapes.LightsailCertificateSummary[];
  }

}

export class LightsailFetchCloudFormationStackRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetCloudFormationStackRecordsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFormationStackRecords.cloudFormationStackRecords', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCloudFormationStackRecords.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchContactMethods extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetContactMethodsRequest) {
    super(scope, id);
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
          protocols: this.input.protocols,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContactMethods.contactMethods', props);
    return resource.getResponseField('contactMethods') as unknown as shapes.LightsailContactMethod[];
  }

}

export class LightsailFetchContainerApiMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetContainerAPIMetadata.metadata', props);
    return resource.getResponseField('metadata') as unknown as Record<string, string>[];
  }

}

export class LightsailFetchContainerImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetContainerImagesRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContainerImages.containerImages', props);
    return resource.getResponseField('containerImages') as unknown as shapes.LightsailContainerImage[];
  }

}

export class LightsailFetchContainerLog extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetContainerLogRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          containerName: this.input.containerName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          filterPattern: this.input.filterPattern,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContainerLog.logEvents', props);
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
          serviceName: this.input.serviceName,
          containerName: this.input.containerName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          filterPattern: this.input.filterPattern,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContainerLog.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchContainerServiceDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetContainerServiceDeploymentsRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContainerServiceDeployments.deployments', props);
    return resource.getResponseField('deployments') as unknown as shapes.LightsailContainerServiceDeployment[];
  }

}

export class LightsailFetchContainerServiceMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetContainerServiceMetricDataRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          metricName: this.input.metricName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          period: this.input.period,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContainerServiceMetricData.metricName', props);
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
          serviceName: this.input.serviceName,
          metricName: this.input.metricName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          period: this.input.period,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContainerServiceMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailFetchContainerServicePowers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetContainerServicePowers.powers', props);
    return resource.getResponseField('powers') as unknown as shapes.LightsailContainerServicePower[];
  }

}

export class LightsailFetchContainerServices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetContainerServicesRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetContainerServices.containerServices', props);
    return resource.getResponseField('containerServices') as unknown as shapes.LightsailContainerService[];
  }

}

export class LightsailFetchDisk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDiskRequest) {
    super(scope, id);
  }

  public get disk(): LightsailFetchDiskDisk {
    return new LightsailFetchDiskDisk(this, 'Disk', this.__resources, this.input);
  }

}

export class LightsailFetchDiskDisk extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDiskRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.name', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.arn', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.supportCode', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.createdAt', props);
    return resource.getResponseField('disk.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchDiskDiskLocation {
    return new LightsailFetchDiskDiskLocation(this, 'Location', this.__resources, this.input);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.resourceType', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.tags', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.addOns', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.sizeInGb', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.isSystemDisk', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.iops', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.path', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.state', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.attachedTo', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.isAttached', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.attachmentState', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.gbInUse', props);
    return resource.getResponseField('disk.gbInUse') as unknown as number;
  }

}

export class LightsailFetchDiskDiskLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDiskRequest) {
    super(scope, id);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.location.availabilityZone', props);
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
          diskName: this.input.diskName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisk.disk.location.regionName', props);
    return resource.getResponseField('disk.location.regionName') as unknown as string;
  }

}

export class LightsailFetchDiskSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDiskSnapshotRequest) {
    super(scope, id);
  }

  public get diskSnapshot(): LightsailFetchDiskSnapshotDiskSnapshot {
    return new LightsailFetchDiskSnapshotDiskSnapshot(this, 'DiskSnapshot', this.__resources, this.input);
  }

}

export class LightsailFetchDiskSnapshotDiskSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDiskSnapshotRequest) {
    super(scope, id);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.name', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.arn', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.supportCode', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.createdAt', props);
    return resource.getResponseField('diskSnapshot.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchDiskSnapshotDiskSnapshotLocation {
    return new LightsailFetchDiskSnapshotDiskSnapshotLocation(this, 'Location', this.__resources, this.input);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.resourceType', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.tags', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.sizeInGb', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.state', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.progress', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.fromDiskName', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.fromDiskArn', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.fromInstanceName', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.fromInstanceArn', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.isFromAutoSnapshot', props);
    return resource.getResponseField('diskSnapshot.isFromAutoSnapshot') as unknown as boolean;
  }

}

export class LightsailFetchDiskSnapshotDiskSnapshotLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDiskSnapshotRequest) {
    super(scope, id);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.location.availabilityZone', props);
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
          diskSnapshotName: this.input.diskSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshot.diskSnapshot.location.regionName', props);
    return resource.getResponseField('diskSnapshot.location.regionName') as unknown as string;
  }

}

export class LightsailFetchDiskSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDiskSnapshotsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshots.diskSnapshots', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDiskSnapshots.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchDisks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDisksRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisks.disks', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDisks.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchDistributionBundles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetDistributionBundles.bundles', props);
    return resource.getResponseField('bundles') as unknown as shapes.LightsailDistributionBundle[];
  }

}

export class LightsailFetchDistributionLatestCacheReset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDistributionLatestCacheResetRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionLatestCacheReset.status', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionLatestCacheReset.createTime', props);
    return resource.getResponseField('createTime') as unknown as string;
  }

}

export class LightsailFetchDistributionMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDistributionMetricDataRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          metricName: this.input.metricName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          period: this.input.period,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionMetricData.metricName', props);
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
          distributionName: this.input.distributionName,
          metricName: this.input.metricName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          period: this.input.period,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributionMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailFetchDistributions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDistributionsRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributions.distributions', props);
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
          distributionName: this.input.distributionName,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDistributions.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDomainRequest) {
    super(scope, id);
  }

  public get domain(): LightsailFetchDomainDomain {
    return new LightsailFetchDomainDomain(this, 'Domain', this.__resources, this.input);
  }

}

export class LightsailFetchDomainDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDomainRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.name', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.arn', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.supportCode', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.createdAt', props);
    return resource.getResponseField('domain.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchDomainDomainLocation {
    return new LightsailFetchDomainDomainLocation(this, 'Location', this.__resources, this.input);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.resourceType', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.tags', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.domainEntries', props);
    return resource.getResponseField('domain.domainEntries') as unknown as shapes.LightsailDomainEntry[];
  }

}

export class LightsailFetchDomainDomainLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDomainRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.location.availabilityZone', props);
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
          domainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomain.domain.location.regionName', props);
    return resource.getResponseField('domain.location.regionName') as unknown as string;
  }

}

export class LightsailFetchDomains extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetDomainsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomains.domains', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDomains.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchExportSnapshotRecords extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetExportSnapshotRecordsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExportSnapshotRecords.exportSnapshotRecords', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetExportSnapshotRecords.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceRequest) {
    super(scope, id);
  }

  public get instance(): LightsailFetchInstanceInstance {
    return new LightsailFetchInstanceInstance(this, 'Instance', this.__resources, this.input);
  }

}

export class LightsailFetchInstanceInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.name', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.arn', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.supportCode', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.createdAt', props);
    return resource.getResponseField('instance.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchInstanceInstanceLocation {
    return new LightsailFetchInstanceInstanceLocation(this, 'Location', this.__resources, this.input);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.resourceType', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.tags', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.blueprintId', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.blueprintName', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.bundleId', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.addOns', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.isStaticIp', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.privateIpAddress', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.publicIpAddress', props);
    return resource.getResponseField('instance.publicIpAddress') as unknown as string;
  }

  public get ipv6Address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstance',
        service: 'Lightsail',
        physicalResourceId: cr.PhysicalResourceId.of('Lightsail.GetInstance.instance.ipv6Address'),
        outputPath: 'instance.ipv6Address',
        parameters: {
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.ipv6Address', props);
    return resource.getResponseField('instance.ipv6Address') as unknown as string;
  }

  public get hardware(): LightsailFetchInstanceInstanceHardware {
    return new LightsailFetchInstanceInstanceHardware(this, 'Hardware', this.__resources, this.input);
  }

  public get networking(): LightsailFetchInstanceInstanceNetworking {
    return new LightsailFetchInstanceInstanceNetworking(this, 'Networking', this.__resources, this.input);
  }

  public get state(): LightsailFetchInstanceInstanceState {
    return new LightsailFetchInstanceInstanceState(this, 'State', this.__resources, this.input);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.username', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.sshKeyName', props);
    return resource.getResponseField('instance.sshKeyName') as unknown as string;
  }

}

export class LightsailFetchInstanceInstanceLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.location.availabilityZone', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.location.regionName', props);
    return resource.getResponseField('instance.location.regionName') as unknown as string;
  }

}

export class LightsailFetchInstanceInstanceHardware extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.hardware.cpuCount', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.hardware.disks', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.hardware.ramSizeInGb', props);
    return resource.getResponseField('instance.hardware.ramSizeInGb') as unknown as number;
  }

}

export class LightsailFetchInstanceInstanceNetworking extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceRequest) {
    super(scope, id);
  }

  public get monthlyTransfer(): LightsailFetchInstanceInstanceNetworkingMonthlyTransfer {
    return new LightsailFetchInstanceInstanceNetworkingMonthlyTransfer(this, 'MonthlyTransfer', this.__resources, this.input);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.networking.ports', props);
    return resource.getResponseField('instance.networking.ports') as unknown as shapes.LightsailInstancePortInfo[];
  }

}

export class LightsailFetchInstanceInstanceNetworkingMonthlyTransfer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.networking.monthlyTransfer.gbPerMonthAllocated', props);
    return resource.getResponseField('instance.networking.monthlyTransfer.gbPerMonthAllocated') as unknown as number;
  }

}

export class LightsailFetchInstanceInstanceState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.state.code', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstance.instance.state.name', props);
    return resource.getResponseField('instance.state.name') as unknown as string;
  }

}

export class LightsailFetchInstanceAccessDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceAccessDetailsRequest) {
    super(scope, id);
  }

  public get accessDetails(): LightsailFetchInstanceAccessDetailsAccessDetails {
    return new LightsailFetchInstanceAccessDetailsAccessDetails(this, 'AccessDetails', this.__resources, this.input);
  }

}

export class LightsailFetchInstanceAccessDetailsAccessDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceAccessDetailsRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.certKey', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.expiresAt', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.ipAddress', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.password', props);
    return resource.getResponseField('accessDetails.password') as unknown as string;
  }

  public get passwordData(): LightsailFetchInstanceAccessDetailsAccessDetailsPasswordData {
    return new LightsailFetchInstanceAccessDetailsAccessDetailsPasswordData(this, 'PasswordData', this.__resources, this.input);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.privateKey', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.protocol', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.instanceName', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.username', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.hostKeys', props);
    return resource.getResponseField('accessDetails.hostKeys') as unknown as shapes.LightsailHostKeyAttributes[];
  }

}

export class LightsailFetchInstanceAccessDetailsAccessDetailsPasswordData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceAccessDetailsRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.passwordData.ciphertext', props);
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
          instanceName: this.input.instanceName,
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceAccessDetails.accessDetails.passwordData.keyPairName', props);
    return resource.getResponseField('accessDetails.passwordData.keyPairName') as unknown as string;
  }

}

export class LightsailFetchInstanceMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceMetricDataRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
          metricName: this.input.metricName,
          period: this.input.period,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceMetricData.metricName', props);
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
          instanceName: this.input.instanceName,
          metricName: this.input.metricName,
          period: this.input.period,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailFetchInstancePortStates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstancePortStatesRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstancePortStates.portStates', props);
    return resource.getResponseField('portStates') as unknown as shapes.LightsailInstancePortState[];
  }

}

export class LightsailFetchInstanceSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceSnapshotRequest) {
    super(scope, id);
  }

  public get instanceSnapshot(): LightsailFetchInstanceSnapshotInstanceSnapshot {
    return new LightsailFetchInstanceSnapshotInstanceSnapshot(this, 'InstanceSnapshot', this.__resources, this.input);
  }

}

export class LightsailFetchInstanceSnapshotInstanceSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceSnapshotRequest) {
    super(scope, id);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.name', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.arn', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.supportCode', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.createdAt', props);
    return resource.getResponseField('instanceSnapshot.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchInstanceSnapshotInstanceSnapshotLocation {
    return new LightsailFetchInstanceSnapshotInstanceSnapshotLocation(this, 'Location', this.__resources, this.input);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.resourceType', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.tags', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.state', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.progress', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.fromAttachedDisks', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.fromInstanceName', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.fromInstanceArn', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.fromBlueprintId', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.fromBundleId', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.isFromAutoSnapshot', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.sizeInGb', props);
    return resource.getResponseField('instanceSnapshot.sizeInGb') as unknown as number;
  }

}

export class LightsailFetchInstanceSnapshotInstanceSnapshotLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceSnapshotRequest) {
    super(scope, id);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.location.availabilityZone', props);
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
          instanceSnapshotName: this.input.instanceSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshot.instanceSnapshot.location.regionName', props);
    return resource.getResponseField('instanceSnapshot.location.regionName') as unknown as string;
  }

}

export class LightsailFetchInstanceSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceSnapshotsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshots.instanceSnapshots', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceSnapshots.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchInstanceState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceStateRequest) {
    super(scope, id);
  }

  public get state(): LightsailFetchInstanceStateState {
    return new LightsailFetchInstanceStateState(this, 'State', this.__resources, this.input);
  }

}

export class LightsailFetchInstanceStateState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstanceStateRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceState.state.code', props);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceState.state.name', props);
    return resource.getResponseField('state.name') as unknown as string;
  }

}

export class LightsailFetchInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetInstancesRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstances.instances', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstances.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetKeyPairRequest) {
    super(scope, id);
  }

  public get keyPair(): LightsailFetchKeyPairKeyPair {
    return new LightsailFetchKeyPairKeyPair(this, 'KeyPair', this.__resources, this.input);
  }

}

export class LightsailFetchKeyPairKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.name', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.arn', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.supportCode', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.createdAt', props);
    return resource.getResponseField('keyPair.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchKeyPairKeyPairLocation {
    return new LightsailFetchKeyPairKeyPairLocation(this, 'Location', this.__resources, this.input);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.resourceType', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.tags', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.fingerprint', props);
    return resource.getResponseField('keyPair.fingerprint') as unknown as string;
  }

}

export class LightsailFetchKeyPairKeyPairLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.location.availabilityZone', props);
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
          keyPairName: this.input.keyPairName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPair.keyPair.location.regionName', props);
    return resource.getResponseField('keyPair.location.regionName') as unknown as string;
  }

}

export class LightsailFetchKeyPairs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetKeyPairsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPairs.keyPairs', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetKeyPairs.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetLoadBalancerRequest) {
    super(scope, id);
  }

  public get loadBalancer(): LightsailFetchLoadBalancerLoadBalancer {
    return new LightsailFetchLoadBalancerLoadBalancer(this, 'LoadBalancer', this.__resources, this.input);
  }

}

export class LightsailFetchLoadBalancerLoadBalancer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetLoadBalancerRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.name', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.arn', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.supportCode', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.createdAt', props);
    return resource.getResponseField('loadBalancer.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchLoadBalancerLoadBalancerLocation {
    return new LightsailFetchLoadBalancerLoadBalancerLocation(this, 'Location', this.__resources, this.input);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.resourceType', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.tags', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.dnsName', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.state', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.protocol', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.publicPorts', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.healthCheckPath', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.instancePort', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.instanceHealthSummary', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.tlsCertificateSummaries', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.configurationOptions', props);
    return resource.getResponseField('loadBalancer.configurationOptions') as unknown as Record<string, string>;
  }

}

export class LightsailFetchLoadBalancerLoadBalancerLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetLoadBalancerRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.location.availabilityZone', props);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancer.loadBalancer.location.regionName', props);
    return resource.getResponseField('loadBalancer.location.regionName') as unknown as string;
  }

}

export class LightsailFetchLoadBalancerMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetLoadBalancerMetricDataRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          metricName: this.input.metricName,
          period: this.input.period,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancerMetricData.metricName', props);
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
          loadBalancerName: this.input.loadBalancerName,
          metricName: this.input.metricName,
          period: this.input.period,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancerMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailFetchLoadBalancerTlsCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetLoadBalancerTlsCertificatesRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancerTlsCertificates.tlsCertificates', props);
    return resource.getResponseField('tlsCertificates') as unknown as shapes.LightsailLoadBalancerTlsCertificate[];
  }

}

export class LightsailFetchLoadBalancers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetLoadBalancersRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancers.loadBalancers', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLoadBalancers.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetOperationRequest) {
    super(scope, id);
  }

  public get operation(): LightsailFetchOperationOperation {
    return new LightsailFetchOperationOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailFetchOperationOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetOperationRequest) {
    super(scope, id);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.id', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.resourceName', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.resourceType', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchOperationOperationLocation {
    return new LightsailFetchOperationOperationLocation(this, 'Location', this.__resources, this.input);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.isTerminal', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.operationDetails', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.operationType', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.status', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.statusChangedAt', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.errorCode', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailFetchOperationOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetOperationRequest) {
    super(scope, id);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.location.availabilityZone', props);
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
          operationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperation.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailFetchOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetOperationsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperations.operations', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperations.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchOperationsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetOperationsForResourceRequest) {
    super(scope, id);
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
          resourceName: this.input.resourceName,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationsForResource.operations', props);
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
          resourceName: this.input.resourceName,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationsForResource.nextPageCount', props);
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
          resourceName: this.input.resourceName,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOperationsForResource.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchRegions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRegionsRequest) {
    super(scope, id);
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
          includeAvailabilityZones: this.input.includeAvailabilityZones,
          includeRelationalDatabaseAvailabilityZones: this.input.includeRelationalDatabaseAvailabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRegions.regions', props);
    return resource.getResponseField('regions') as unknown as shapes.LightsailRegion[];
  }

}

export class LightsailFetchRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseRequest) {
    super(scope, id);
  }

  public get relationalDatabase(): LightsailFetchRelationalDatabaseRelationalDatabase {
    return new LightsailFetchRelationalDatabaseRelationalDatabase(this, 'RelationalDatabase', this.__resources, this.input);
  }

}

export class LightsailFetchRelationalDatabaseRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.name', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.arn', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.supportCode', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.createdAt', props);
    return resource.getResponseField('relationalDatabase.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchRelationalDatabaseRelationalDatabaseLocation {
    return new LightsailFetchRelationalDatabaseRelationalDatabaseLocation(this, 'Location', this.__resources, this.input);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.resourceType', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.tags', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.relationalDatabaseBlueprintId', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.relationalDatabaseBundleId', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.masterDatabaseName', props);
    return resource.getResponseField('relationalDatabase.masterDatabaseName') as unknown as string;
  }

  public get hardware(): LightsailFetchRelationalDatabaseRelationalDatabaseHardware {
    return new LightsailFetchRelationalDatabaseRelationalDatabaseHardware(this, 'Hardware', this.__resources, this.input);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.state', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.secondaryAvailabilityZone', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.backupRetentionEnabled', props);
    return resource.getResponseField('relationalDatabase.backupRetentionEnabled') as unknown as boolean;
  }

  public get pendingModifiedValues(): LightsailFetchRelationalDatabaseRelationalDatabasePendingModifiedValues {
    return new LightsailFetchRelationalDatabaseRelationalDatabasePendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.engine', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.engineVersion', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.latestRestorableTime', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.masterUsername', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.parameterApplyStatus', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.preferredBackupWindow', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.preferredMaintenanceWindow', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.publiclyAccessible', props);
    return resource.getResponseField('relationalDatabase.publiclyAccessible') as unknown as boolean;
  }

  public get masterEndpoint(): LightsailFetchRelationalDatabaseRelationalDatabaseMasterEndpoint {
    return new LightsailFetchRelationalDatabaseRelationalDatabaseMasterEndpoint(this, 'MasterEndpoint', this.__resources, this.input);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.pendingMaintenanceActions', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.caCertificateIdentifier', props);
    return resource.getResponseField('relationalDatabase.caCertificateIdentifier') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseRelationalDatabaseLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.location.availabilityZone', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.location.regionName', props);
    return resource.getResponseField('relationalDatabase.location.regionName') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseRelationalDatabaseHardware extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.hardware.cpuCount', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.hardware.diskSizeInGb', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.hardware.ramSizeInGb', props);
    return resource.getResponseField('relationalDatabase.hardware.ramSizeInGb') as unknown as number;
  }

}

export class LightsailFetchRelationalDatabaseRelationalDatabasePendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.pendingModifiedValues.masterUserPassword', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.pendingModifiedValues.engineVersion', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.pendingModifiedValues.backupRetentionEnabled', props);
    return resource.getResponseField('relationalDatabase.pendingModifiedValues.backupRetentionEnabled') as unknown as boolean;
  }

}

export class LightsailFetchRelationalDatabaseRelationalDatabaseMasterEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.masterEndpoint.port', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabase.relationalDatabase.masterEndpoint.address', props);
    return resource.getResponseField('relationalDatabase.masterEndpoint.address') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseBlueprints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseBlueprintsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseBlueprints.blueprints', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseBlueprints.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseBundles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseBundlesRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseBundles.bundles', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseBundles.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseEventsRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          durationInMinutes: this.input.durationInMinutes,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseEvents.relationalDatabaseEvents', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          durationInMinutes: this.input.durationInMinutes,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseEvents.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseLogEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseLogEventsRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          logStreamName: this.input.logStreamName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          startFromHead: this.input.startFromHead,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseLogEvents.resourceLogEvents', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          logStreamName: this.input.logStreamName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          startFromHead: this.input.startFromHead,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseLogEvents.nextBackwardToken', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          logStreamName: this.input.logStreamName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          startFromHead: this.input.startFromHead,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseLogEvents.nextForwardToken', props);
    return resource.getResponseField('nextForwardToken') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseLogStreams extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseLogStreamsRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseLogStreams.logStreams', props);
    return resource.getResponseField('logStreams') as unknown as string[];
  }

}

export class LightsailFetchRelationalDatabaseMasterUserPassword extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseMasterUserPasswordRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          passwordVersion: this.input.passwordVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseMasterUserPassword.masterUserPassword', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          passwordVersion: this.input.passwordVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseMasterUserPassword.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseMetricData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseMetricDataRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          metricName: this.input.metricName,
          period: this.input.period,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseMetricData.metricName', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          metricName: this.input.metricName,
          period: this.input.period,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
          unit: this.input.unit,
          statistics: this.input.statistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseMetricData.metricData', props);
    return resource.getResponseField('metricData') as unknown as shapes.LightsailMetricDatapoint[];
  }

}

export class LightsailFetchRelationalDatabaseParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseParametersRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseParameters.parameters', props);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseParameters.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseSnapshotRequest) {
    super(scope, id);
  }

  public get relationalDatabaseSnapshot(): LightsailFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot {
    return new LightsailFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot(this, 'RelationalDatabaseSnapshot', this.__resources, this.input);
  }

}

export class LightsailFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseSnapshotRequest) {
    super(scope, id);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.name', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.arn', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.supportCode', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.createdAt', props);
    return resource.getResponseField('relationalDatabaseSnapshot.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation {
    return new LightsailFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation(this, 'Location', this.__resources, this.input);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.resourceType', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.tags', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.engine', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.engineVersion', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.sizeInGb', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.state', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseName', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseArn', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseBundleId', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.fromRelationalDatabaseBlueprintId', props);
    return resource.getResponseField('relationalDatabaseSnapshot.fromRelationalDatabaseBlueprintId') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseSnapshotRelationalDatabaseSnapshotLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseSnapshotRequest) {
    super(scope, id);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.location.availabilityZone', props);
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
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshot.relationalDatabaseSnapshot.location.regionName', props);
    return resource.getResponseField('relationalDatabaseSnapshot.location.regionName') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabaseSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabaseSnapshotsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshots.relationalDatabaseSnapshots', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabaseSnapshots.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchRelationalDatabases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetRelationalDatabasesRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabases.relationalDatabases', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRelationalDatabases.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailFetchStaticIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetStaticIpRequest) {
    super(scope, id);
  }

  public get staticIp(): LightsailFetchStaticIpStaticIp {
    return new LightsailFetchStaticIpStaticIp(this, 'StaticIp', this.__resources, this.input);
  }

}

export class LightsailFetchStaticIpStaticIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetStaticIpRequest) {
    super(scope, id);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.name', props);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.arn', props);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.supportCode', props);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.createdAt', props);
    return resource.getResponseField('staticIp.createdAt') as unknown as string;
  }

  public get location(): LightsailFetchStaticIpStaticIpLocation {
    return new LightsailFetchStaticIpStaticIpLocation(this, 'Location', this.__resources, this.input);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.resourceType', props);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.ipAddress', props);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.attachedTo', props);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.isAttached', props);
    return resource.getResponseField('staticIp.isAttached') as unknown as boolean;
  }

}

export class LightsailFetchStaticIpStaticIpLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetStaticIpRequest) {
    super(scope, id);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.location.availabilityZone', props);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIp.staticIp.location.regionName', props);
    return resource.getResponseField('staticIp.location.regionName') as unknown as string;
  }

}

export class LightsailFetchStaticIps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailGetStaticIpsRequest) {
    super(scope, id);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIps.staticIps', props);
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
          pageToken: this.input.pageToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStaticIps.nextPageToken', props);
    return resource.getResponseField('nextPageToken') as unknown as string;
  }

}

export class LightsailImportKeyPair extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailImportKeyPairRequest) {
    super(scope, id);
  }

  public get operation(): LightsailImportKeyPairOperation {
    return new LightsailImportKeyPairOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailImportKeyPairOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailImportKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.id', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.resourceName', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.resourceType', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailImportKeyPairOperationLocation {
    return new LightsailImportKeyPairOperationLocation(this, 'Location', this.__resources, this.input);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.isTerminal', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.operationDetails', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.operationType', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.status', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.statusChangedAt', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.errorCode', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailImportKeyPairOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailImportKeyPairRequest) {
    super(scope, id);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.location.availabilityZone', props);
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
          keyPairName: this.input.keyPairName,
          publicKeyBase64: this.input.publicKeyBase64,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportKeyPair.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailIsVpcPeered extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'IsVpcPeered.isPeered', props);
    return resource.getResponseField('isPeered') as unknown as boolean;
  }

}

export class LightsailOpenInstancePublicPorts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailOpenInstancePublicPortsRequest) {
    super(scope, id);
  }

  public get operation(): LightsailOpenInstancePublicPortsOperation {
    return new LightsailOpenInstancePublicPortsOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailOpenInstancePublicPortsOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailOpenInstancePublicPortsRequest) {
    super(scope, id);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.id', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.resourceName', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.resourceType', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailOpenInstancePublicPortsOperationLocation {
    return new LightsailOpenInstancePublicPortsOperationLocation(this, 'Location', this.__resources, this.input);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.isTerminal', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.operationDetails', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.operationType', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.status', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.statusChangedAt', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.errorCode', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailOpenInstancePublicPortsOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailOpenInstancePublicPortsRequest) {
    super(scope, id);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.location.availabilityZone', props);
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
            fromPort: this.input.portInfo.fromPort,
            toPort: this.input.portInfo.toPort,
            protocol: this.input.portInfo.protocol,
            cidrs: this.input.portInfo.cidrs,
            cidrListAliases: this.input.portInfo.cidrListAliases,
          },
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'OpenInstancePublicPorts.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailPeerVpc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get operation(): LightsailPeerVpcOperation {
    return new LightsailPeerVpcOperation(this, 'Operation', this.__resources);
  }

}

export class LightsailPeerVpcOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.id', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.resourceName', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.resourceType', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailPeerVpcOperationLocation {
    return new LightsailPeerVpcOperationLocation(this, 'Location', this.__resources);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.isTerminal', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.operationDetails', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.operationType', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.status', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.statusChangedAt', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.errorCode', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailPeerVpcOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.location.availabilityZone', props);
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
    const resource = new cr.AwsCustomResource(this, 'PeerVpc.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailPutAlarm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailPutAlarmRequest) {
    super(scope, id);
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
          alarmName: this.input.alarmName,
          metricName: this.input.metricName,
          monitoredResourceName: this.input.monitoredResourceName,
          comparisonOperator: this.input.comparisonOperator,
          threshold: this.input.threshold,
          evaluationPeriods: this.input.evaluationPeriods,
          datapointsToAlarm: this.input.datapointsToAlarm,
          treatMissingData: this.input.treatMissingData,
          contactProtocols: this.input.contactProtocols,
          notificationTriggers: this.input.notificationTriggers,
          notificationEnabled: this.input.notificationEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutAlarm.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailPutInstancePublicPorts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailPutInstancePublicPortsRequest) {
    super(scope, id);
  }

  public get operation(): LightsailPutInstancePublicPortsOperation {
    return new LightsailPutInstancePublicPortsOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailPutInstancePublicPortsOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailPutInstancePublicPortsRequest) {
    super(scope, id);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.id', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.resourceName', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.resourceType', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailPutInstancePublicPortsOperationLocation {
    return new LightsailPutInstancePublicPortsOperationLocation(this, 'Location', this.__resources, this.input);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.isTerminal', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.operationDetails', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.operationType', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.status', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.statusChangedAt', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.errorCode', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailPutInstancePublicPortsOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailPutInstancePublicPortsRequest) {
    super(scope, id);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.location.availabilityZone', props);
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
          portInfos: this.input.portInfos,
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInstancePublicPorts.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailRebootInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailRebootInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailRebootRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailRebootRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailRegisterContainerImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailRegisterContainerImageRequest) {
    super(scope, id);
  }

  public get containerImage(): LightsailRegisterContainerImageContainerImage {
    return new LightsailRegisterContainerImageContainerImage(this, 'ContainerImage', this.__resources, this.input);
  }

}

export class LightsailRegisterContainerImageContainerImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailRegisterContainerImageRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          label: this.input.label,
          digest: this.input.digest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerImage.containerImage.image', props);
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
          serviceName: this.input.serviceName,
          label: this.input.label,
          digest: this.input.digest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerImage.containerImage.digest', props);
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
          serviceName: this.input.serviceName,
          label: this.input.label,
          digest: this.input.digest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterContainerImage.containerImage.createdAt', props);
    return resource.getResponseField('containerImage.createdAt') as unknown as string;
  }

}

export class LightsailReleaseStaticIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailReleaseStaticIpRequest) {
    super(scope, id);
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
          staticIpName: this.input.staticIpName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ReleaseStaticIp.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailResetDistributionCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailResetDistributionCacheRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.status', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.createTime', props);
    return resource.getResponseField('createTime') as unknown as string;
  }

  public get operation(): LightsailResetDistributionCacheOperation {
    return new LightsailResetDistributionCacheOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailResetDistributionCacheOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailResetDistributionCacheRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.id', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.resourceName', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.resourceType', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailResetDistributionCacheOperationLocation {
    return new LightsailResetDistributionCacheOperationLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.isTerminal', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.operationDetails', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.operationType', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.status', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.statusChangedAt', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.errorCode', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailResetDistributionCacheOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailResetDistributionCacheRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDistributionCache.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailSendContactMethodVerification extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailSendContactMethodVerificationRequest) {
    super(scope, id);
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
          protocol: this.input.protocol,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendContactMethodVerification.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailStartInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailStartInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailStartRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailStartRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailStopInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailStopInstanceRequest) {
    super(scope, id);
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
          instanceName: this.input.instanceName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopInstance.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailStopRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailStopRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          relationalDatabaseSnapshotName: this.input.relationalDatabaseSnapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailTagResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailTagResourceRequest) {
    super(scope, id);
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
          resourceName: this.input.resourceName,
          resourceArn: this.input.resourceArn,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TagResource.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailTestAlarm extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailTestAlarmRequest) {
    super(scope, id);
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
          alarmName: this.input.alarmName,
          state: this.input.state,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestAlarm.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailUnpeerVpc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get operation(): LightsailUnpeerVpcOperation {
    return new LightsailUnpeerVpcOperation(this, 'Operation', this.__resources);
  }

}

export class LightsailUnpeerVpcOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.id', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.resourceName', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.resourceType', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailUnpeerVpcOperationLocation {
    return new LightsailUnpeerVpcOperationLocation(this, 'Location', this.__resources);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.isTerminal', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.operationDetails', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.operationType', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.status', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.statusChangedAt', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.errorCode', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailUnpeerVpcOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.location.availabilityZone', props);
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
    const resource = new cr.AwsCustomResource(this, 'UnpeerVpc.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailUntagResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUntagResourceRequest) {
    super(scope, id);
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
          resourceName: this.input.resourceName,
          resourceArn: this.input.resourceArn,
          tagKeys: this.input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UntagResource.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailUpdateContainerService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
  }

  public get containerService(): LightsailUpdateContainerServiceContainerService {
    return new LightsailUpdateContainerServiceContainerService(this, 'ContainerService', this.__resources, this.input);
  }

}

export class LightsailUpdateContainerServiceContainerService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.containerServiceName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.arn', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.createdAt', props);
    return resource.getResponseField('containerService.createdAt') as unknown as string;
  }

  public get location(): LightsailUpdateContainerServiceContainerServiceLocation {
    return new LightsailUpdateContainerServiceContainerServiceLocation(this, 'Location', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.resourceType', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.tags', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.power', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.powerId', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.state', props);
    return resource.getResponseField('containerService.state') as unknown as string;
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.scale', props);
    return resource.getResponseField('containerService.scale') as unknown as number;
  }

  public get currentDeployment(): LightsailUpdateContainerServiceContainerServiceCurrentDeployment {
    return new LightsailUpdateContainerServiceContainerServiceCurrentDeployment(this, 'CurrentDeployment', this.__resources, this.input);
  }

  public get nextDeployment(): LightsailUpdateContainerServiceContainerServiceNextDeployment {
    return new LightsailUpdateContainerServiceContainerServiceNextDeployment(this, 'NextDeployment', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.isDisabled', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.principalArn', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.privateDomainName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.publicDomainNames', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.url', props);
    return resource.getResponseField('containerService.url') as unknown as string;
  }

}

export class LightsailUpdateContainerServiceContainerServiceLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.location.availabilityZone', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.location.regionName', props);
    return resource.getResponseField('containerService.location.regionName') as unknown as string;
  }

}

export class LightsailUpdateContainerServiceContainerServiceCurrentDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.version', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.state', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.containers', props);
    return resource.getResponseField('containerService.currentDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint {
    return new LightsailUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint(this, 'PublicEndpoint', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.createdAt', props);
    return resource.getResponseField('containerService.currentDeployment.createdAt') as unknown as string;
  }

}

export class LightsailUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.containerName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck {
    return new LightsailUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class LightsailUpdateContainerServiceContainerServiceCurrentDeploymentPublicEndpointHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.path', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.currentDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.currentDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailUpdateContainerServiceContainerServiceNextDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.version', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.state', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.containers', props);
    return resource.getResponseField('containerService.nextDeployment.containers') as unknown as Record<string, shapes.LightsailContainer>;
  }

  public get publicEndpoint(): LightsailUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint {
    return new LightsailUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint(this, 'PublicEndpoint', this.__resources, this.input);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.createdAt', props);
    return resource.getResponseField('containerService.nextDeployment.createdAt') as unknown as string;
  }

}

export class LightsailUpdateContainerServiceContainerServiceNextDeploymentPublicEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.containerName', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.containerPort', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.containerPort') as unknown as number;
  }

  public get healthCheck(): LightsailUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck {
    return new LightsailUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck(this, 'HealthCheck', this.__resources, this.input);
  }

}

export class LightsailUpdateContainerServiceContainerServiceNextDeploymentPublicEndpointHealthCheck extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateContainerServiceRequest) {
    super(scope, id);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.healthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.unhealthyThreshold', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.timeoutSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.intervalSeconds', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.path', props);
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
          serviceName: this.input.serviceName,
          power: this.input.power,
          scale: this.input.scale,
          isDisabled: this.input.isDisabled,
          publicDomainNames: this.input.publicDomainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateContainerService.containerService.nextDeployment.publicEndpoint.healthCheck.successCodes', props);
    return resource.getResponseField('containerService.nextDeployment.publicEndpoint.healthCheck.successCodes') as unknown as string;
  }

}

export class LightsailUpdateDistribution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateDistributionRequest) {
    super(scope, id);
  }

  public get operation(): LightsailUpdateDistributionOperation {
    return new LightsailUpdateDistributionOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailUpdateDistributionOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.id', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.resourceName', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.resourceType', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailUpdateDistributionOperationLocation {
    return new LightsailUpdateDistributionOperationLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.isTerminal', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.operationDetails', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.operationType', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.status', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.statusChangedAt', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.errorCode', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailUpdateDistributionOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateDistributionRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
          origin: {
            name: this.input.origin?.name,
            regionName: this.input.origin?.regionName,
            protocolPolicy: this.input.origin?.protocolPolicy,
          },
          defaultCacheBehavior: {
            behavior: this.input.defaultCacheBehavior?.behavior,
          },
          cacheBehaviorSettings: {
            defaultTTL: this.input.cacheBehaviorSettings?.defaultTTL,
            minimumTTL: this.input.cacheBehaviorSettings?.minimumTTL,
            maximumTTL: this.input.cacheBehaviorSettings?.maximumTTL,
            allowedHTTPMethods: this.input.cacheBehaviorSettings?.allowedHTTPMethods,
            cachedHTTPMethods: this.input.cacheBehaviorSettings?.cachedHTTPMethods,
            forwardedCookies: {
              option: this.input.cacheBehaviorSettings?.forwardedCookies?.option,
              cookiesAllowList: this.input.cacheBehaviorSettings?.forwardedCookies?.cookiesAllowList,
            },
            forwardedHeaders: {
              option: this.input.cacheBehaviorSettings?.forwardedHeaders?.option,
              headersAllowList: this.input.cacheBehaviorSettings?.forwardedHeaders?.headersAllowList,
            },
            forwardedQueryStrings: {
              option: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.option,
              queryStringsAllowList: this.input.cacheBehaviorSettings?.forwardedQueryStrings?.queryStringsAllowList,
            },
          },
          cacheBehaviors: this.input.cacheBehaviors,
          isEnabled: this.input.isEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistribution.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailUpdateDistributionBundle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateDistributionBundleRequest) {
    super(scope, id);
  }

  public get operation(): LightsailUpdateDistributionBundleOperation {
    return new LightsailUpdateDistributionBundleOperation(this, 'Operation', this.__resources, this.input);
  }

}

export class LightsailUpdateDistributionBundleOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateDistributionBundleRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.id', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.resourceName', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.resourceType', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.createdAt', props);
    return resource.getResponseField('operation.createdAt') as unknown as string;
  }

  public get location(): LightsailUpdateDistributionBundleOperationLocation {
    return new LightsailUpdateDistributionBundleOperationLocation(this, 'Location', this.__resources, this.input);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.isTerminal', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.operationDetails', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.operationType', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.status', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.statusChangedAt', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.errorCode', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.errorDetails', props);
    return resource.getResponseField('operation.errorDetails') as unknown as string;
  }

}

export class LightsailUpdateDistributionBundleOperationLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateDistributionBundleRequest) {
    super(scope, id);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.location.availabilityZone', props);
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
          distributionName: this.input.distributionName,
          bundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDistributionBundle.operation.location.regionName', props);
    return resource.getResponseField('operation.location.regionName') as unknown as string;
  }

}

export class LightsailUpdateDomainEntry extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateDomainEntryRequest) {
    super(scope, id);
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
          domainName: this.input.domainName,
          domainEntry: {
            id: this.input.domainEntry.id,
            name: this.input.domainEntry.name,
            target: this.input.domainEntry.target,
            isAlias: this.input.domainEntry.isAlias,
            type: this.input.domainEntry.type,
            options: this.input.domainEntry.options,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEntry.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailUpdateLoadBalancerAttribute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateLoadBalancerAttributeRequest) {
    super(scope, id);
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
          loadBalancerName: this.input.loadBalancerName,
          attributeName: this.input.attributeName,
          attributeValue: this.input.attributeValue,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateLoadBalancerAttribute.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailUpdateRelationalDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateRelationalDatabaseRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          masterUserPassword: this.input.masterUserPassword,
          rotateMasterUserPassword: this.input.rotateMasterUserPassword,
          preferredBackupWindow: this.input.preferredBackupWindow,
          preferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          enableBackupRetention: this.input.enableBackupRetention,
          disableBackupRetention: this.input.disableBackupRetention,
          publiclyAccessible: this.input.publiclyAccessible,
          applyImmediately: this.input.applyImmediately,
          caCertificateIdentifier: this.input.caCertificateIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRelationalDatabase.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

export class LightsailUpdateRelationalDatabaseParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.LightsailUpdateRelationalDatabaseParametersRequest) {
    super(scope, id);
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
          relationalDatabaseName: this.input.relationalDatabaseName,
          parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRelationalDatabaseParameters.operations', props);
    return resource.getResponseField('operations') as unknown as shapes.LightsailOperation[];
  }

}

