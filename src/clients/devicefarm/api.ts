import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DeviceFarmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDevicePool(input: shapes.DeviceFarmCreateDevicePoolRequest): DeviceFarmCreateDevicePool {
    return new DeviceFarmCreateDevicePool(this, 'CreateDevicePool', this.__resources, input);
  }

  public createInstanceProfile(input: shapes.DeviceFarmCreateInstanceProfileRequest): DeviceFarmCreateInstanceProfile {
    return new DeviceFarmCreateInstanceProfile(this, 'CreateInstanceProfile', this.__resources, input);
  }

  public createNetworkProfile(input: shapes.DeviceFarmCreateNetworkProfileRequest): DeviceFarmCreateNetworkProfile {
    return new DeviceFarmCreateNetworkProfile(this, 'CreateNetworkProfile', this.__resources, input);
  }

  public createProject(input: shapes.DeviceFarmCreateProjectRequest): DeviceFarmCreateProject {
    return new DeviceFarmCreateProject(this, 'CreateProject', this.__resources, input);
  }

  public createRemoteAccessSession(input: shapes.DeviceFarmCreateRemoteAccessSessionRequest): DeviceFarmCreateRemoteAccessSession {
    return new DeviceFarmCreateRemoteAccessSession(this, 'CreateRemoteAccessSession', this.__resources, input);
  }

  public createTestGridProject(input: shapes.DeviceFarmCreateTestGridProjectRequest): DeviceFarmCreateTestGridProject {
    return new DeviceFarmCreateTestGridProject(this, 'CreateTestGridProject', this.__resources, input);
  }

  public createTestGridUrl(input: shapes.DeviceFarmCreateTestGridUrlRequest): DeviceFarmCreateTestGridUrl {
    return new DeviceFarmCreateTestGridUrl(this, 'CreateTestGridUrl', this.__resources, input);
  }

  public createUpload(input: shapes.DeviceFarmCreateUploadRequest): DeviceFarmCreateUpload {
    return new DeviceFarmCreateUpload(this, 'CreateUpload', this.__resources, input);
  }

  public createVpceConfiguration(input: shapes.DeviceFarmCreateVpceConfigurationRequest): DeviceFarmCreateVpceConfiguration {
    return new DeviceFarmCreateVpceConfiguration(this, 'CreateVpceConfiguration', this.__resources, input);
  }

  public deleteDevicePool(input: shapes.DeviceFarmDeleteDevicePoolRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteDevicePool'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDevicePool', props);
  }

  public deleteInstanceProfile(input: shapes.DeviceFarmDeleteInstanceProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteInstanceProfile'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInstanceProfile', props);
  }

  public deleteNetworkProfile(input: shapes.DeviceFarmDeleteNetworkProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteNetworkProfile'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNetworkProfile', props);
  }

  public deleteProject(input: shapes.DeviceFarmDeleteProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteProject'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProject', props);
  }

  public deleteRemoteAccessSession(input: shapes.DeviceFarmDeleteRemoteAccessSessionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteRemoteAccessSession'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRemoteAccessSession', props);
  }

  public deleteRun(input: shapes.DeviceFarmDeleteRunRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteRun'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRun', props);
  }

  public deleteTestGridProject(input: shapes.DeviceFarmDeleteTestGridProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteTestGridProject'),
        parameters: {
          projectArn: input.projectArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTestGridProject', props);
  }

  public deleteUpload(input: shapes.DeviceFarmDeleteUploadRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteUpload'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUpload', props);
  }

  public deleteVpceConfiguration(input: shapes.DeviceFarmDeleteVpceConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.DeleteVPCEConfiguration'),
        parameters: {
          arn: input.arn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVPCEConfiguration', props);
  }

  public fetchAccountSettings(): DeviceFarmFetchAccountSettings {
    return new DeviceFarmFetchAccountSettings(this, 'FetchAccountSettings', this.__resources);
  }

  public fetchDevice(input: shapes.DeviceFarmGetDeviceRequest): DeviceFarmFetchDevice {
    return new DeviceFarmFetchDevice(this, 'FetchDevice', this.__resources, input);
  }

  public fetchDeviceInstance(input: shapes.DeviceFarmGetDeviceInstanceRequest): DeviceFarmFetchDeviceInstance {
    return new DeviceFarmFetchDeviceInstance(this, 'FetchDeviceInstance', this.__resources, input);
  }

  public fetchDevicePool(input: shapes.DeviceFarmGetDevicePoolRequest): DeviceFarmFetchDevicePool {
    return new DeviceFarmFetchDevicePool(this, 'FetchDevicePool', this.__resources, input);
  }

  public fetchDevicePoolCompatibility(input: shapes.DeviceFarmGetDevicePoolCompatibilityRequest): DeviceFarmFetchDevicePoolCompatibility {
    return new DeviceFarmFetchDevicePoolCompatibility(this, 'FetchDevicePoolCompatibility', this.__resources, input);
  }

  public fetchInstanceProfile(input: shapes.DeviceFarmGetInstanceProfileRequest): DeviceFarmFetchInstanceProfile {
    return new DeviceFarmFetchInstanceProfile(this, 'FetchInstanceProfile', this.__resources, input);
  }

  public fetchJob(input: shapes.DeviceFarmGetJobRequest): DeviceFarmFetchJob {
    return new DeviceFarmFetchJob(this, 'FetchJob', this.__resources, input);
  }

  public fetchNetworkProfile(input: shapes.DeviceFarmGetNetworkProfileRequest): DeviceFarmFetchNetworkProfile {
    return new DeviceFarmFetchNetworkProfile(this, 'FetchNetworkProfile', this.__resources, input);
  }

  public fetchOfferingStatus(input: shapes.DeviceFarmGetOfferingStatusRequest): DeviceFarmFetchOfferingStatus {
    return new DeviceFarmFetchOfferingStatus(this, 'FetchOfferingStatus', this.__resources, input);
  }

  public fetchProject(input: shapes.DeviceFarmGetProjectRequest): DeviceFarmFetchProject {
    return new DeviceFarmFetchProject(this, 'FetchProject', this.__resources, input);
  }

  public fetchRemoteAccessSession(input: shapes.DeviceFarmGetRemoteAccessSessionRequest): DeviceFarmFetchRemoteAccessSession {
    return new DeviceFarmFetchRemoteAccessSession(this, 'FetchRemoteAccessSession', this.__resources, input);
  }

  public fetchRun(input: shapes.DeviceFarmGetRunRequest): DeviceFarmFetchRun {
    return new DeviceFarmFetchRun(this, 'FetchRun', this.__resources, input);
  }

  public fetchSuite(input: shapes.DeviceFarmGetSuiteRequest): DeviceFarmFetchSuite {
    return new DeviceFarmFetchSuite(this, 'FetchSuite', this.__resources, input);
  }

  public fetchTest(input: shapes.DeviceFarmGetTestRequest): DeviceFarmFetchTest {
    return new DeviceFarmFetchTest(this, 'FetchTest', this.__resources, input);
  }

  public fetchTestGridProject(input: shapes.DeviceFarmGetTestGridProjectRequest): DeviceFarmFetchTestGridProject {
    return new DeviceFarmFetchTestGridProject(this, 'FetchTestGridProject', this.__resources, input);
  }

  public fetchTestGridSession(input: shapes.DeviceFarmGetTestGridSessionRequest): DeviceFarmFetchTestGridSession {
    return new DeviceFarmFetchTestGridSession(this, 'FetchTestGridSession', this.__resources, input);
  }

  public fetchUpload(input: shapes.DeviceFarmGetUploadRequest): DeviceFarmFetchUpload {
    return new DeviceFarmFetchUpload(this, 'FetchUpload', this.__resources, input);
  }

  public fetchVpceConfiguration(input: shapes.DeviceFarmGetVpceConfigurationRequest): DeviceFarmFetchVpceConfiguration {
    return new DeviceFarmFetchVpceConfiguration(this, 'FetchVpceConfiguration', this.__resources, input);
  }

  public installToRemoteAccessSession(input: shapes.DeviceFarmInstallToRemoteAccessSessionRequest): DeviceFarmInstallToRemoteAccessSession {
    return new DeviceFarmInstallToRemoteAccessSession(this, 'InstallToRemoteAccessSession', this.__resources, input);
  }

  public listArtifacts(input: shapes.DeviceFarmListArtifactsRequest): DeviceFarmListArtifacts {
    return new DeviceFarmListArtifacts(this, 'ListArtifacts', this.__resources, input);
  }

  public listDeviceInstances(input: shapes.DeviceFarmListDeviceInstancesRequest): DeviceFarmListDeviceInstances {
    return new DeviceFarmListDeviceInstances(this, 'ListDeviceInstances', this.__resources, input);
  }

  public listDevicePools(input: shapes.DeviceFarmListDevicePoolsRequest): DeviceFarmListDevicePools {
    return new DeviceFarmListDevicePools(this, 'ListDevicePools', this.__resources, input);
  }

  public listDevices(input: shapes.DeviceFarmListDevicesRequest): DeviceFarmListDevices {
    return new DeviceFarmListDevices(this, 'ListDevices', this.__resources, input);
  }

  public listInstanceProfiles(input: shapes.DeviceFarmListInstanceProfilesRequest): DeviceFarmListInstanceProfiles {
    return new DeviceFarmListInstanceProfiles(this, 'ListInstanceProfiles', this.__resources, input);
  }

  public listJobs(input: shapes.DeviceFarmListJobsRequest): DeviceFarmListJobs {
    return new DeviceFarmListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listNetworkProfiles(input: shapes.DeviceFarmListNetworkProfilesRequest): DeviceFarmListNetworkProfiles {
    return new DeviceFarmListNetworkProfiles(this, 'ListNetworkProfiles', this.__resources, input);
  }

  public listOfferingPromotions(input: shapes.DeviceFarmListOfferingPromotionsRequest): DeviceFarmListOfferingPromotions {
    return new DeviceFarmListOfferingPromotions(this, 'ListOfferingPromotions', this.__resources, input);
  }

  public listOfferingTransactions(input: shapes.DeviceFarmListOfferingTransactionsRequest): DeviceFarmListOfferingTransactions {
    return new DeviceFarmListOfferingTransactions(this, 'ListOfferingTransactions', this.__resources, input);
  }

  public listOfferings(input: shapes.DeviceFarmListOfferingsRequest): DeviceFarmListOfferings {
    return new DeviceFarmListOfferings(this, 'ListOfferings', this.__resources, input);
  }

  public listProjects(input: shapes.DeviceFarmListProjectsRequest): DeviceFarmListProjects {
    return new DeviceFarmListProjects(this, 'ListProjects', this.__resources, input);
  }

  public listRemoteAccessSessions(input: shapes.DeviceFarmListRemoteAccessSessionsRequest): DeviceFarmListRemoteAccessSessions {
    return new DeviceFarmListRemoteAccessSessions(this, 'ListRemoteAccessSessions', this.__resources, input);
  }

  public listRuns(input: shapes.DeviceFarmListRunsRequest): DeviceFarmListRuns {
    return new DeviceFarmListRuns(this, 'ListRuns', this.__resources, input);
  }

  public listSamples(input: shapes.DeviceFarmListSamplesRequest): DeviceFarmListSamples {
    return new DeviceFarmListSamples(this, 'ListSamples', this.__resources, input);
  }

  public listSuites(input: shapes.DeviceFarmListSuitesRequest): DeviceFarmListSuites {
    return new DeviceFarmListSuites(this, 'ListSuites', this.__resources, input);
  }

  public listTagsForResource(input: shapes.DeviceFarmListTagsForResourceRequest): DeviceFarmListTagsForResource {
    return new DeviceFarmListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTestGridProjects(input: shapes.DeviceFarmListTestGridProjectsRequest): DeviceFarmListTestGridProjects {
    return new DeviceFarmListTestGridProjects(this, 'ListTestGridProjects', this.__resources, input);
  }

  public listTestGridSessionActions(input: shapes.DeviceFarmListTestGridSessionActionsRequest): DeviceFarmListTestGridSessionActions {
    return new DeviceFarmListTestGridSessionActions(this, 'ListTestGridSessionActions', this.__resources, input);
  }

  public listTestGridSessionArtifacts(input: shapes.DeviceFarmListTestGridSessionArtifactsRequest): DeviceFarmListTestGridSessionArtifacts {
    return new DeviceFarmListTestGridSessionArtifacts(this, 'ListTestGridSessionArtifacts', this.__resources, input);
  }

  public listTestGridSessions(input: shapes.DeviceFarmListTestGridSessionsRequest): DeviceFarmListTestGridSessions {
    return new DeviceFarmListTestGridSessions(this, 'ListTestGridSessions', this.__resources, input);
  }

  public listTests(input: shapes.DeviceFarmListTestsRequest): DeviceFarmListTests {
    return new DeviceFarmListTests(this, 'ListTests', this.__resources, input);
  }

  public listUniqueProblems(input: shapes.DeviceFarmListUniqueProblemsRequest): DeviceFarmListUniqueProblems {
    return new DeviceFarmListUniqueProblems(this, 'ListUniqueProblems', this.__resources, input);
  }

  public listUploads(input: shapes.DeviceFarmListUploadsRequest): DeviceFarmListUploads {
    return new DeviceFarmListUploads(this, 'ListUploads', this.__resources, input);
  }

  public listVpceConfigurations(input: shapes.DeviceFarmListVpceConfigurationsRequest): DeviceFarmListVpceConfigurations {
    return new DeviceFarmListVpceConfigurations(this, 'ListVpceConfigurations', this.__resources, input);
  }

  public purchaseOffering(input: shapes.DeviceFarmPurchaseOfferingRequest): DeviceFarmPurchaseOffering {
    return new DeviceFarmPurchaseOffering(this, 'PurchaseOffering', this.__resources, input);
  }

  public renewOffering(input: shapes.DeviceFarmRenewOfferingRequest): DeviceFarmRenewOffering {
    return new DeviceFarmRenewOffering(this, 'RenewOffering', this.__resources, input);
  }

  public scheduleRun(input: shapes.DeviceFarmScheduleRunRequest): DeviceFarmScheduleRun {
    return new DeviceFarmScheduleRun(this, 'ScheduleRun', this.__resources, input);
  }

  public stopJob(input: shapes.DeviceFarmStopJobRequest): DeviceFarmStopJob {
    return new DeviceFarmStopJob(this, 'StopJob', this.__resources, input);
  }

  public stopRemoteAccessSession(input: shapes.DeviceFarmStopRemoteAccessSessionRequest): DeviceFarmStopRemoteAccessSession {
    return new DeviceFarmStopRemoteAccessSession(this, 'StopRemoteAccessSession', this.__resources, input);
  }

  public stopRun(input: shapes.DeviceFarmStopRunRequest): DeviceFarmStopRun {
    return new DeviceFarmStopRun(this, 'StopRun', this.__resources, input);
  }

  public tagResource(input: shapes.DeviceFarmTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.TagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.DeviceFarmUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UntagResource'),
        parameters: {
          ResourceARN: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDeviceInstance(input: shapes.DeviceFarmUpdateDeviceInstanceRequest): DeviceFarmUpdateDeviceInstance {
    return new DeviceFarmUpdateDeviceInstance(this, 'UpdateDeviceInstance', this.__resources, input);
  }

  public updateDevicePool(input: shapes.DeviceFarmUpdateDevicePoolRequest): DeviceFarmUpdateDevicePool {
    return new DeviceFarmUpdateDevicePool(this, 'UpdateDevicePool', this.__resources, input);
  }

  public updateInstanceProfile(input: shapes.DeviceFarmUpdateInstanceProfileRequest): DeviceFarmUpdateInstanceProfile {
    return new DeviceFarmUpdateInstanceProfile(this, 'UpdateInstanceProfile', this.__resources, input);
  }

  public updateNetworkProfile(input: shapes.DeviceFarmUpdateNetworkProfileRequest): DeviceFarmUpdateNetworkProfile {
    return new DeviceFarmUpdateNetworkProfile(this, 'UpdateNetworkProfile', this.__resources, input);
  }

  public updateProject(input: shapes.DeviceFarmUpdateProjectRequest): DeviceFarmUpdateProject {
    return new DeviceFarmUpdateProject(this, 'UpdateProject', this.__resources, input);
  }

  public updateTestGridProject(input: shapes.DeviceFarmUpdateTestGridProjectRequest): DeviceFarmUpdateTestGridProject {
    return new DeviceFarmUpdateTestGridProject(this, 'UpdateTestGridProject', this.__resources, input);
  }

  public updateUpload(input: shapes.DeviceFarmUpdateUploadRequest): DeviceFarmUpdateUpload {
    return new DeviceFarmUpdateUpload(this, 'UpdateUpload', this.__resources, input);
  }

  public updateVpceConfiguration(input: shapes.DeviceFarmUpdateVpceConfigurationRequest): DeviceFarmUpdateVpceConfiguration {
    return new DeviceFarmUpdateVpceConfiguration(this, 'UpdateVpceConfiguration', this.__resources, input);
  }

}

export class DeviceFarmCreateDevicePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateDevicePoolRequest) {
    super(scope, id);
  }

  public get devicePool(): DeviceFarmCreateDevicePoolDevicePool {
    return new DeviceFarmCreateDevicePoolDevicePool(this, 'DevicePool', this.__resources, this.input);
  }

}

export class DeviceFarmCreateDevicePoolDevicePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateDevicePoolRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateDevicePool.devicePool.arn'),
        outputPath: 'devicePool.arn',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevicePool.devicePool.arn', props);
    return resource.getResponseField('devicePool.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateDevicePool.devicePool.name'),
        outputPath: 'devicePool.name',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevicePool.devicePool.name', props);
    return resource.getResponseField('devicePool.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateDevicePool.devicePool.description'),
        outputPath: 'devicePool.description',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevicePool.devicePool.description', props);
    return resource.getResponseField('devicePool.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateDevicePool.devicePool.type'),
        outputPath: 'devicePool.type',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevicePool.devicePool.type', props);
    return resource.getResponseField('devicePool.type') as unknown as string;
  }

  public get rules(): shapes.DeviceFarmRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateDevicePool.devicePool.rules'),
        outputPath: 'devicePool.rules',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevicePool.devicePool.rules', props);
    return resource.getResponseField('devicePool.rules') as unknown as shapes.DeviceFarmRule[];
  }

  public get maxDevices(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateDevicePool.devicePool.maxDevices'),
        outputPath: 'devicePool.maxDevices',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDevicePool.devicePool.maxDevices', props);
    return resource.getResponseField('devicePool.maxDevices') as unknown as number;
  }

}

export class DeviceFarmCreateInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateInstanceProfileRequest) {
    super(scope, id);
  }

  public get instanceProfile(): DeviceFarmCreateInstanceProfileInstanceProfile {
    return new DeviceFarmCreateInstanceProfileInstanceProfile(this, 'InstanceProfile', this.__resources, this.input);
  }

}

export class DeviceFarmCreateInstanceProfileInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateInstanceProfileRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateInstanceProfile.instanceProfile.arn'),
        outputPath: 'instanceProfile.arn',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.instanceProfile.arn', props);
    return resource.getResponseField('instanceProfile.arn') as unknown as string;
  }

  public get packageCleanup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateInstanceProfile.instanceProfile.packageCleanup'),
        outputPath: 'instanceProfile.packageCleanup',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.instanceProfile.packageCleanup', props);
    return resource.getResponseField('instanceProfile.packageCleanup') as unknown as boolean;
  }

  public get excludeAppPackagesFromCleanup(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup'),
        outputPath: 'instanceProfile.excludeAppPackagesFromCleanup',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup', props);
    return resource.getResponseField('instanceProfile.excludeAppPackagesFromCleanup') as unknown as string[];
  }

  public get rebootAfterUse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateInstanceProfile.instanceProfile.rebootAfterUse'),
        outputPath: 'instanceProfile.rebootAfterUse',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.instanceProfile.rebootAfterUse', props);
    return resource.getResponseField('instanceProfile.rebootAfterUse') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateInstanceProfile.instanceProfile.name'),
        outputPath: 'instanceProfile.name',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.instanceProfile.name', props);
    return resource.getResponseField('instanceProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateInstanceProfile.instanceProfile.description'),
        outputPath: 'instanceProfile.description',
        parameters: {
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstanceProfile.instanceProfile.description', props);
    return resource.getResponseField('instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmCreateNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateNetworkProfileRequest) {
    super(scope, id);
  }

  public get networkProfile(): DeviceFarmCreateNetworkProfileNetworkProfile {
    return new DeviceFarmCreateNetworkProfileNetworkProfile(this, 'NetworkProfile', this.__resources, this.input);
  }

}

export class DeviceFarmCreateNetworkProfileNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateNetworkProfileRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.arn'),
        outputPath: 'networkProfile.arn',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.arn', props);
    return resource.getResponseField('networkProfile.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.name'),
        outputPath: 'networkProfile.name',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.name', props);
    return resource.getResponseField('networkProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.description'),
        outputPath: 'networkProfile.description',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.description', props);
    return resource.getResponseField('networkProfile.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.type'),
        outputPath: 'networkProfile.type',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.type', props);
    return resource.getResponseField('networkProfile.type') as unknown as string;
  }

  public get uplinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.uplinkBandwidthBits'),
        outputPath: 'networkProfile.uplinkBandwidthBits',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.uplinkBandwidthBits', props);
    return resource.getResponseField('networkProfile.uplinkBandwidthBits') as unknown as number;
  }

  public get downlinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.downlinkBandwidthBits'),
        outputPath: 'networkProfile.downlinkBandwidthBits',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.downlinkBandwidthBits', props);
    return resource.getResponseField('networkProfile.downlinkBandwidthBits') as unknown as number;
  }

  public get uplinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.uplinkDelayMs'),
        outputPath: 'networkProfile.uplinkDelayMs',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.uplinkDelayMs', props);
    return resource.getResponseField('networkProfile.uplinkDelayMs') as unknown as number;
  }

  public get downlinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.downlinkDelayMs'),
        outputPath: 'networkProfile.downlinkDelayMs',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.downlinkDelayMs', props);
    return resource.getResponseField('networkProfile.downlinkDelayMs') as unknown as number;
  }

  public get uplinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.uplinkJitterMs'),
        outputPath: 'networkProfile.uplinkJitterMs',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.uplinkJitterMs', props);
    return resource.getResponseField('networkProfile.uplinkJitterMs') as unknown as number;
  }

  public get downlinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.downlinkJitterMs'),
        outputPath: 'networkProfile.downlinkJitterMs',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.downlinkJitterMs', props);
    return resource.getResponseField('networkProfile.downlinkJitterMs') as unknown as number;
  }

  public get uplinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.uplinkLossPercent'),
        outputPath: 'networkProfile.uplinkLossPercent',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.uplinkLossPercent', props);
    return resource.getResponseField('networkProfile.uplinkLossPercent') as unknown as number;
  }

  public get downlinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateNetworkProfile.networkProfile.downlinkLossPercent'),
        outputPath: 'networkProfile.downlinkLossPercent',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNetworkProfile.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmCreateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateProjectRequest) {
    super(scope, id);
  }

  public get project(): DeviceFarmCreateProjectProject {
    return new DeviceFarmCreateProjectProject(this, 'Project', this.__resources, this.input);
  }

}

export class DeviceFarmCreateProjectProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateProjectRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateProject.project.arn'),
        outputPath: 'project.arn',
        parameters: {
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.project.arn', props);
    return resource.getResponseField('project.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateProject.project.name'),
        outputPath: 'project.name',
        parameters: {
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.project.name', props);
    return resource.getResponseField('project.name') as unknown as string;
  }

  public get defaultJobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateProject.project.defaultJobTimeoutMinutes'),
        outputPath: 'project.defaultJobTimeoutMinutes',
        parameters: {
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.project.defaultJobTimeoutMinutes', props);
    return resource.getResponseField('project.defaultJobTimeoutMinutes') as unknown as number;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateProject.project.created'),
        outputPath: 'project.created',
        parameters: {
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.project.created', props);
    return resource.getResponseField('project.created') as unknown as string;
  }

}

export class DeviceFarmCreateRemoteAccessSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get remoteAccessSession(): DeviceFarmCreateRemoteAccessSessionRemoteAccessSession {
    return new DeviceFarmCreateRemoteAccessSessionRemoteAccessSession(this, 'RemoteAccessSession', this.__resources, this.input);
  }

}

export class DeviceFarmCreateRemoteAccessSessionRemoteAccessSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.arn'),
        outputPath: 'remoteAccessSession.arn',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.arn', props);
    return resource.getResponseField('remoteAccessSession.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.name'),
        outputPath: 'remoteAccessSession.name',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.name', props);
    return resource.getResponseField('remoteAccessSession.name') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.created'),
        outputPath: 'remoteAccessSession.created',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.created', props);
    return resource.getResponseField('remoteAccessSession.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.status'),
        outputPath: 'remoteAccessSession.status',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.status', props);
    return resource.getResponseField('remoteAccessSession.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.result'),
        outputPath: 'remoteAccessSession.result',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.result', props);
    return resource.getResponseField('remoteAccessSession.result') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.message'),
        outputPath: 'remoteAccessSession.message',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.message', props);
    return resource.getResponseField('remoteAccessSession.message') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.started'),
        outputPath: 'remoteAccessSession.started',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.started', props);
    return resource.getResponseField('remoteAccessSession.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.stopped'),
        outputPath: 'remoteAccessSession.stopped',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.stopped', props);
    return resource.getResponseField('remoteAccessSession.stopped') as unknown as string;
  }

  public get device(): DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDevice {
    return new DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDevice(this, 'Device', this.__resources, this.input);
  }

  public get instanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.instanceArn'),
        outputPath: 'remoteAccessSession.instanceArn',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.instanceArn', props);
    return resource.getResponseField('remoteAccessSession.instanceArn') as unknown as string;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.remoteDebugEnabled'),
        outputPath: 'remoteAccessSession.remoteDebugEnabled',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.remoteDebugEnabled', props);
    return resource.getResponseField('remoteAccessSession.remoteDebugEnabled') as unknown as boolean;
  }

  public get remoteRecordEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.remoteRecordEnabled'),
        outputPath: 'remoteAccessSession.remoteRecordEnabled',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.remoteRecordEnabled', props);
    return resource.getResponseField('remoteAccessSession.remoteRecordEnabled') as unknown as boolean;
  }

  public get remoteRecordAppArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.remoteRecordAppArn'),
        outputPath: 'remoteAccessSession.remoteRecordAppArn',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.remoteRecordAppArn', props);
    return resource.getResponseField('remoteAccessSession.remoteRecordAppArn') as unknown as string;
  }

  public get hostAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.hostAddress'),
        outputPath: 'remoteAccessSession.hostAddress',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.hostAddress', props);
    return resource.getResponseField('remoteAccessSession.hostAddress') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.clientId'),
        outputPath: 'remoteAccessSession.clientId',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.clientId', props);
    return resource.getResponseField('remoteAccessSession.clientId') as unknown as string;
  }

  public get billingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.billingMethod'),
        outputPath: 'remoteAccessSession.billingMethod',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.billingMethod', props);
    return resource.getResponseField('remoteAccessSession.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes {
    return new DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.endpoint'),
        outputPath: 'remoteAccessSession.endpoint',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.endpoint', props);
    return resource.getResponseField('remoteAccessSession.endpoint') as unknown as string;
  }

  public get deviceUdid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.deviceUdid'),
        outputPath: 'remoteAccessSession.deviceUdid',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.deviceUdid', props);
    return resource.getResponseField('remoteAccessSession.deviceUdid') as unknown as string;
  }

  public get interactionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.interactionMode'),
        outputPath: 'remoteAccessSession.interactionMode',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.interactionMode', props);
    return resource.getResponseField('remoteAccessSession.interactionMode') as unknown as string;
  }

  public get skipAppResign(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.skipAppResign'),
        outputPath: 'remoteAccessSession.skipAppResign',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.skipAppResign', props);
    return resource.getResponseField('remoteAccessSession.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.arn'),
        outputPath: 'remoteAccessSession.device.arn',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.arn', props);
    return resource.getResponseField('remoteAccessSession.device.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.name'),
        outputPath: 'remoteAccessSession.device.name',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.name', props);
    return resource.getResponseField('remoteAccessSession.device.name') as unknown as string;
  }

  public get manufacturer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.manufacturer'),
        outputPath: 'remoteAccessSession.device.manufacturer',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.manufacturer', props);
    return resource.getResponseField('remoteAccessSession.device.manufacturer') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.model'),
        outputPath: 'remoteAccessSession.device.model',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.model', props);
    return resource.getResponseField('remoteAccessSession.device.model') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.modelId'),
        outputPath: 'remoteAccessSession.device.modelId',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.modelId', props);
    return resource.getResponseField('remoteAccessSession.device.modelId') as unknown as string;
  }

  public get formFactor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.formFactor'),
        outputPath: 'remoteAccessSession.device.formFactor',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.formFactor', props);
    return resource.getResponseField('remoteAccessSession.device.formFactor') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.platform'),
        outputPath: 'remoteAccessSession.device.platform',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.platform', props);
    return resource.getResponseField('remoteAccessSession.device.platform') as unknown as string;
  }

  public get os(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.os'),
        outputPath: 'remoteAccessSession.device.os',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.os', props);
    return resource.getResponseField('remoteAccessSession.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu {
    return new DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu(this, 'Cpu', this.__resources, this.input);
  }

  public get resolution(): DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution {
    return new DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution(this, 'Resolution', this.__resources, this.input);
  }

  public get heapSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.heapSize'),
        outputPath: 'remoteAccessSession.device.heapSize',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.heapSize', props);
    return resource.getResponseField('remoteAccessSession.device.heapSize') as unknown as number;
  }

  public get memory(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.memory'),
        outputPath: 'remoteAccessSession.device.memory',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.memory', props);
    return resource.getResponseField('remoteAccessSession.device.memory') as unknown as number;
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.image'),
        outputPath: 'remoteAccessSession.device.image',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.image', props);
    return resource.getResponseField('remoteAccessSession.device.image') as unknown as string;
  }

  public get carrier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.carrier'),
        outputPath: 'remoteAccessSession.device.carrier',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.carrier', props);
    return resource.getResponseField('remoteAccessSession.device.carrier') as unknown as string;
  }

  public get radio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.radio'),
        outputPath: 'remoteAccessSession.device.radio',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.radio', props);
    return resource.getResponseField('remoteAccessSession.device.radio') as unknown as string;
  }

  public get remoteAccessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled'),
        outputPath: 'remoteAccessSession.device.remoteAccessEnabled',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled', props);
    return resource.getResponseField('remoteAccessSession.device.remoteAccessEnabled') as unknown as boolean;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled'),
        outputPath: 'remoteAccessSession.device.remoteDebugEnabled',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled', props);
    return resource.getResponseField('remoteAccessSession.device.remoteDebugEnabled') as unknown as boolean;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.fleetType'),
        outputPath: 'remoteAccessSession.device.fleetType',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.fleetType', props);
    return resource.getResponseField('remoteAccessSession.device.fleetType') as unknown as string;
  }

  public get fleetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.fleetName'),
        outputPath: 'remoteAccessSession.device.fleetName',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.fleetName', props);
    return resource.getResponseField('remoteAccessSession.device.fleetName') as unknown as string;
  }

  public get instances(): shapes.DeviceFarmDeviceInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.instances'),
        outputPath: 'remoteAccessSession.device.instances',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.instances', props);
    return resource.getResponseField('remoteAccessSession.device.instances') as unknown as shapes.DeviceFarmDeviceInstance[];
  }

  public get availability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.availability'),
        outputPath: 'remoteAccessSession.device.availability',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.availability', props);
    return resource.getResponseField('remoteAccessSession.device.availability') as unknown as string;
  }

}

export class DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.cpu.frequency'),
        outputPath: 'remoteAccessSession.device.cpu.frequency',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.cpu.frequency', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.frequency') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.cpu.architecture'),
        outputPath: 'remoteAccessSession.device.cpu.architecture',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.cpu.architecture', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.architecture') as unknown as string;
  }

  public get clock(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.cpu.clock'),
        outputPath: 'remoteAccessSession.device.cpu.clock',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.cpu.clock', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.resolution.width'),
        outputPath: 'remoteAccessSession.device.resolution.width',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.resolution.width', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.device.resolution.height'),
        outputPath: 'remoteAccessSession.device.resolution.height',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.device.resolution.height', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.total'),
        outputPath: 'remoteAccessSession.deviceMinutes.total',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.total', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.metered'),
        outputPath: 'remoteAccessSession.deviceMinutes.metered',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.metered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered'),
        outputPath: 'remoteAccessSession.deviceMinutes.unmetered',
        parameters: {
          projectArn: this.input.projectArn,
          deviceArn: this.input.deviceArn,
          instanceArn: this.input.instanceArn,
          sshPublicKey: this.input.sshPublicKey,
          remoteDebugEnabled: this.input.remoteDebugEnabled,
          remoteRecordEnabled: this.input.remoteRecordEnabled,
          remoteRecordAppArn: this.input.remoteRecordAppArn,
          name: this.input.name,
          clientId: this.input.clientId,
          configuration: {
            billingMethod: this.input.configuration?.billingMethod,
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.input.interactionMode,
          skipAppResign: this.input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmCreateTestGridProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateTestGridProjectRequest) {
    super(scope, id);
  }

  public get testGridProject(): DeviceFarmCreateTestGridProjectTestGridProject {
    return new DeviceFarmCreateTestGridProjectTestGridProject(this, 'TestGridProject', this.__resources, this.input);
  }

}

export class DeviceFarmCreateTestGridProjectTestGridProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateTestGridProjectRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridProject.testGridProject.arn'),
        outputPath: 'testGridProject.arn',
        parameters: {
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTestGridProject.testGridProject.arn', props);
    return resource.getResponseField('testGridProject.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridProject.testGridProject.name'),
        outputPath: 'testGridProject.name',
        parameters: {
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTestGridProject.testGridProject.name', props);
    return resource.getResponseField('testGridProject.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridProject.testGridProject.description'),
        outputPath: 'testGridProject.description',
        parameters: {
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTestGridProject.testGridProject.description', props);
    return resource.getResponseField('testGridProject.description') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridProject.testGridProject.created'),
        outputPath: 'testGridProject.created',
        parameters: {
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTestGridProject.testGridProject.created', props);
    return resource.getResponseField('testGridProject.created') as unknown as string;
  }

}

export class DeviceFarmCreateTestGridUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateTestGridUrlRequest) {
    super(scope, id);
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridUrl',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridUrl.url'),
        outputPath: 'url',
        parameters: {
          projectArn: this.input.projectArn,
          expiresInSeconds: this.input.expiresInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTestGridUrl.url', props);
    return resource.getResponseField('url') as unknown as string;
  }

  public get expires(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridUrl',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridUrl.expires'),
        outputPath: 'expires',
        parameters: {
          projectArn: this.input.projectArn,
          expiresInSeconds: this.input.expiresInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTestGridUrl.expires', props);
    return resource.getResponseField('expires') as unknown as string;
  }

}

export class DeviceFarmCreateUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateUploadRequest) {
    super(scope, id);
  }

  public get upload(): DeviceFarmCreateUploadUpload {
    return new DeviceFarmCreateUploadUpload(this, 'Upload', this.__resources, this.input);
  }

}

export class DeviceFarmCreateUploadUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateUploadRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.arn'),
        outputPath: 'upload.arn',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.arn', props);
    return resource.getResponseField('upload.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.name'),
        outputPath: 'upload.name',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.name', props);
    return resource.getResponseField('upload.name') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.created'),
        outputPath: 'upload.created',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.created', props);
    return resource.getResponseField('upload.created') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.type'),
        outputPath: 'upload.type',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.type', props);
    return resource.getResponseField('upload.type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.status'),
        outputPath: 'upload.status',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.status', props);
    return resource.getResponseField('upload.status') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.url'),
        outputPath: 'upload.url',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.url', props);
    return resource.getResponseField('upload.url') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.metadata'),
        outputPath: 'upload.metadata',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.metadata', props);
    return resource.getResponseField('upload.metadata') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.contentType'),
        outputPath: 'upload.contentType',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.contentType', props);
    return resource.getResponseField('upload.contentType') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.message'),
        outputPath: 'upload.message',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.message', props);
    return resource.getResponseField('upload.message') as unknown as string;
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateUpload.upload.category'),
        outputPath: 'upload.category',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          type: this.input.type,
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUpload.upload.category', props);
    return resource.getResponseField('upload.category') as unknown as string;
  }

}

export class DeviceFarmCreateVpceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateVpceConfigurationRequest) {
    super(scope, id);
  }

  public get vpceConfiguration(): DeviceFarmCreateVpceConfigurationVpceConfiguration {
    return new DeviceFarmCreateVpceConfigurationVpceConfiguration(this, 'VpceConfiguration', this.__resources, this.input);
  }

}

export class DeviceFarmCreateVpceConfigurationVpceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmCreateVpceConfigurationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateVPCEConfiguration.vpceConfiguration.arn'),
        outputPath: 'vpceConfiguration.arn',
        parameters: {
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCEConfiguration.vpceConfiguration.arn', props);
    return resource.getResponseField('vpceConfiguration.arn') as unknown as string;
  }

  public get vpceConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateVPCEConfiguration.vpceConfiguration.vpceConfigurationName'),
        outputPath: 'vpceConfiguration.vpceConfigurationName',
        parameters: {
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCEConfiguration.vpceConfiguration.vpceConfigurationName', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationName') as unknown as string;
  }

  public get vpceServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateVPCEConfiguration.vpceConfiguration.vpceServiceName'),
        outputPath: 'vpceConfiguration.vpceServiceName',
        parameters: {
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCEConfiguration.vpceConfiguration.vpceServiceName', props);
    return resource.getResponseField('vpceConfiguration.vpceServiceName') as unknown as string;
  }

  public get serviceDnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateVPCEConfiguration.vpceConfiguration.serviceDnsName'),
        outputPath: 'vpceConfiguration.serviceDnsName',
        parameters: {
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCEConfiguration.vpceConfiguration.serviceDnsName', props);
    return resource.getResponseField('vpceConfiguration.serviceDnsName') as unknown as string;
  }

  public get vpceConfigurationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription'),
        outputPath: 'vpceConfiguration.vpceConfigurationDescription',
        parameters: {
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationDescription') as unknown as string;
  }

}

export class DeviceFarmFetchAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get accountSettings(): DeviceFarmFetchAccountSettingsAccountSettings {
    return new DeviceFarmFetchAccountSettingsAccountSettings(this, 'AccountSettings', this.__resources);
  }

}

export class DeviceFarmFetchAccountSettingsAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get awsAccountNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.awsAccountNumber'),
        outputPath: 'accountSettings.awsAccountNumber',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.awsAccountNumber', props);
    return resource.getResponseField('accountSettings.awsAccountNumber') as unknown as string;
  }

  public get unmeteredDevices(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.unmeteredDevices'),
        outputPath: 'accountSettings.unmeteredDevices',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.unmeteredDevices', props);
    return resource.getResponseField('accountSettings.unmeteredDevices') as unknown as Record<string, number>;
  }

  public get unmeteredRemoteAccessDevices(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.unmeteredRemoteAccessDevices'),
        outputPath: 'accountSettings.unmeteredRemoteAccessDevices',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.unmeteredRemoteAccessDevices', props);
    return resource.getResponseField('accountSettings.unmeteredRemoteAccessDevices') as unknown as Record<string, number>;
  }

  public get maxJobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.maxJobTimeoutMinutes'),
        outputPath: 'accountSettings.maxJobTimeoutMinutes',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.maxJobTimeoutMinutes', props);
    return resource.getResponseField('accountSettings.maxJobTimeoutMinutes') as unknown as number;
  }

  public get trialMinutes(): DeviceFarmFetchAccountSettingsAccountSettingsTrialMinutes {
    return new DeviceFarmFetchAccountSettingsAccountSettingsTrialMinutes(this, 'TrialMinutes', this.__resources);
  }

  public get maxSlots(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.maxSlots'),
        outputPath: 'accountSettings.maxSlots',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.maxSlots', props);
    return resource.getResponseField('accountSettings.maxSlots') as unknown as Record<string, number>;
  }

  public get defaultJobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.defaultJobTimeoutMinutes'),
        outputPath: 'accountSettings.defaultJobTimeoutMinutes',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.defaultJobTimeoutMinutes', props);
    return resource.getResponseField('accountSettings.defaultJobTimeoutMinutes') as unknown as number;
  }

  public get skipAppResign(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.skipAppResign'),
        outputPath: 'accountSettings.skipAppResign',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.skipAppResign', props);
    return resource.getResponseField('accountSettings.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmFetchAccountSettingsAccountSettingsTrialMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.trialMinutes.total'),
        outputPath: 'accountSettings.trialMinutes.total',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.trialMinutes.total', props);
    return resource.getResponseField('accountSettings.trialMinutes.total') as unknown as number;
  }

  public get remaining(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAccountSettings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetAccountSettings.accountSettings.trialMinutes.remaining'),
        outputPath: 'accountSettings.trialMinutes.remaining',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAccountSettings.accountSettings.trialMinutes.remaining', props);
    return resource.getResponseField('accountSettings.trialMinutes.remaining') as unknown as number;
  }

}

export class DeviceFarmFetchDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDeviceRequest) {
    super(scope, id);
  }

  public get device(): DeviceFarmFetchDeviceDevice {
    return new DeviceFarmFetchDeviceDevice(this, 'Device', this.__resources, this.input);
  }

}

export class DeviceFarmFetchDeviceDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDeviceRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.arn'),
        outputPath: 'device.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.arn', props);
    return resource.getResponseField('device.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.name'),
        outputPath: 'device.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.name', props);
    return resource.getResponseField('device.name') as unknown as string;
  }

  public get manufacturer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.manufacturer'),
        outputPath: 'device.manufacturer',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.manufacturer', props);
    return resource.getResponseField('device.manufacturer') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.model'),
        outputPath: 'device.model',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.model', props);
    return resource.getResponseField('device.model') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.modelId'),
        outputPath: 'device.modelId',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.modelId', props);
    return resource.getResponseField('device.modelId') as unknown as string;
  }

  public get formFactor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.formFactor'),
        outputPath: 'device.formFactor',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.formFactor', props);
    return resource.getResponseField('device.formFactor') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.platform'),
        outputPath: 'device.platform',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.platform', props);
    return resource.getResponseField('device.platform') as unknown as string;
  }

  public get os(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.os'),
        outputPath: 'device.os',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.os', props);
    return resource.getResponseField('device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmFetchDeviceDeviceCpu {
    return new DeviceFarmFetchDeviceDeviceCpu(this, 'Cpu', this.__resources, this.input);
  }

  public get resolution(): DeviceFarmFetchDeviceDeviceResolution {
    return new DeviceFarmFetchDeviceDeviceResolution(this, 'Resolution', this.__resources, this.input);
  }

  public get heapSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.heapSize'),
        outputPath: 'device.heapSize',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.heapSize', props);
    return resource.getResponseField('device.heapSize') as unknown as number;
  }

  public get memory(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.memory'),
        outputPath: 'device.memory',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.memory', props);
    return resource.getResponseField('device.memory') as unknown as number;
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.image'),
        outputPath: 'device.image',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.image', props);
    return resource.getResponseField('device.image') as unknown as string;
  }

  public get carrier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.carrier'),
        outputPath: 'device.carrier',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.carrier', props);
    return resource.getResponseField('device.carrier') as unknown as string;
  }

  public get radio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.radio'),
        outputPath: 'device.radio',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.radio', props);
    return resource.getResponseField('device.radio') as unknown as string;
  }

  public get remoteAccessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.remoteAccessEnabled'),
        outputPath: 'device.remoteAccessEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.remoteAccessEnabled', props);
    return resource.getResponseField('device.remoteAccessEnabled') as unknown as boolean;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.remoteDebugEnabled'),
        outputPath: 'device.remoteDebugEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.remoteDebugEnabled', props);
    return resource.getResponseField('device.remoteDebugEnabled') as unknown as boolean;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.fleetType'),
        outputPath: 'device.fleetType',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.fleetType', props);
    return resource.getResponseField('device.fleetType') as unknown as string;
  }

  public get fleetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.fleetName'),
        outputPath: 'device.fleetName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.fleetName', props);
    return resource.getResponseField('device.fleetName') as unknown as string;
  }

  public get instances(): shapes.DeviceFarmDeviceInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.instances'),
        outputPath: 'device.instances',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.instances', props);
    return resource.getResponseField('device.instances') as unknown as shapes.DeviceFarmDeviceInstance[];
  }

  public get availability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.availability'),
        outputPath: 'device.availability',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.availability', props);
    return resource.getResponseField('device.availability') as unknown as string;
  }

}

export class DeviceFarmFetchDeviceDeviceCpu extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDeviceRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.cpu.frequency'),
        outputPath: 'device.cpu.frequency',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.cpu.frequency', props);
    return resource.getResponseField('device.cpu.frequency') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.cpu.architecture'),
        outputPath: 'device.cpu.architecture',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.cpu.architecture', props);
    return resource.getResponseField('device.cpu.architecture') as unknown as string;
  }

  public get clock(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.cpu.clock'),
        outputPath: 'device.cpu.clock',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.cpu.clock', props);
    return resource.getResponseField('device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmFetchDeviceDeviceResolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDeviceRequest) {
    super(scope, id);
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.resolution.width'),
        outputPath: 'device.resolution.width',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.resolution.width', props);
    return resource.getResponseField('device.resolution.width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevice.device.resolution.height'),
        outputPath: 'device.resolution.height',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevice.device.resolution.height', props);
    return resource.getResponseField('device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmFetchDeviceInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDeviceInstanceRequest) {
    super(scope, id);
  }

  public get deviceInstance(): DeviceFarmFetchDeviceInstanceDeviceInstance {
    return new DeviceFarmFetchDeviceInstanceDeviceInstance(this, 'DeviceInstance', this.__resources, this.input);
  }

}

export class DeviceFarmFetchDeviceInstanceDeviceInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDeviceInstanceRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.arn'),
        outputPath: 'deviceInstance.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.arn', props);
    return resource.getResponseField('deviceInstance.arn') as unknown as string;
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.deviceArn'),
        outputPath: 'deviceInstance.deviceArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.deviceArn', props);
    return resource.getResponseField('deviceInstance.deviceArn') as unknown as string;
  }

  public get labels(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.labels'),
        outputPath: 'deviceInstance.labels',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.labels', props);
    return resource.getResponseField('deviceInstance.labels') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.status'),
        outputPath: 'deviceInstance.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.status', props);
    return resource.getResponseField('deviceInstance.status') as unknown as string;
  }

  public get udid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.udid'),
        outputPath: 'deviceInstance.udid',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.udid', props);
    return resource.getResponseField('deviceInstance.udid') as unknown as string;
  }

  public get instanceProfile(): DeviceFarmFetchDeviceInstanceDeviceInstanceInstanceProfile {
    return new DeviceFarmFetchDeviceInstanceDeviceInstanceInstanceProfile(this, 'InstanceProfile', this.__resources, this.input);
  }

}

export class DeviceFarmFetchDeviceInstanceDeviceInstanceInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDeviceInstanceRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.instanceProfile.arn'),
        outputPath: 'deviceInstance.instanceProfile.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.instanceProfile.arn', props);
    return resource.getResponseField('deviceInstance.instanceProfile.arn') as unknown as string;
  }

  public get packageCleanup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.instanceProfile.packageCleanup'),
        outputPath: 'deviceInstance.instanceProfile.packageCleanup',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.instanceProfile.packageCleanup', props);
    return resource.getResponseField('deviceInstance.instanceProfile.packageCleanup') as unknown as boolean;
  }

  public get excludeAppPackagesFromCleanup(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.instanceProfile.excludeAppPackagesFromCleanup'),
        outputPath: 'deviceInstance.instanceProfile.excludeAppPackagesFromCleanup',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.instanceProfile.excludeAppPackagesFromCleanup', props);
    return resource.getResponseField('deviceInstance.instanceProfile.excludeAppPackagesFromCleanup') as unknown as string[];
  }

  public get rebootAfterUse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.instanceProfile.rebootAfterUse'),
        outputPath: 'deviceInstance.instanceProfile.rebootAfterUse',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.instanceProfile.rebootAfterUse', props);
    return resource.getResponseField('deviceInstance.instanceProfile.rebootAfterUse') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.instanceProfile.name'),
        outputPath: 'deviceInstance.instanceProfile.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.instanceProfile.name', props);
    return resource.getResponseField('deviceInstance.instanceProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDeviceInstance.deviceInstance.instanceProfile.description'),
        outputPath: 'deviceInstance.instanceProfile.description',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeviceInstance.deviceInstance.instanceProfile.description', props);
    return resource.getResponseField('deviceInstance.instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmFetchDevicePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDevicePoolRequest) {
    super(scope, id);
  }

  public get devicePool(): DeviceFarmFetchDevicePoolDevicePool {
    return new DeviceFarmFetchDevicePoolDevicePool(this, 'DevicePool', this.__resources, this.input);
  }

}

export class DeviceFarmFetchDevicePoolDevicePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDevicePoolRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePool.devicePool.arn'),
        outputPath: 'devicePool.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePool.devicePool.arn', props);
    return resource.getResponseField('devicePool.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePool.devicePool.name'),
        outputPath: 'devicePool.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePool.devicePool.name', props);
    return resource.getResponseField('devicePool.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePool.devicePool.description'),
        outputPath: 'devicePool.description',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePool.devicePool.description', props);
    return resource.getResponseField('devicePool.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePool.devicePool.type'),
        outputPath: 'devicePool.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePool.devicePool.type', props);
    return resource.getResponseField('devicePool.type') as unknown as string;
  }

  public get rules(): shapes.DeviceFarmRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePool.devicePool.rules'),
        outputPath: 'devicePool.rules',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePool.devicePool.rules', props);
    return resource.getResponseField('devicePool.rules') as unknown as shapes.DeviceFarmRule[];
  }

  public get maxDevices(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePool.devicePool.maxDevices'),
        outputPath: 'devicePool.maxDevices',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePool.devicePool.maxDevices', props);
    return resource.getResponseField('devicePool.maxDevices') as unknown as number;
  }

}

export class DeviceFarmFetchDevicePoolCompatibility extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetDevicePoolCompatibilityRequest) {
    super(scope, id);
  }

  public get compatibleDevices(): shapes.DeviceFarmDevicePoolCompatibilityResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePoolCompatibility',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePoolCompatibility.compatibleDevices'),
        outputPath: 'compatibleDevices',
        parameters: {
          devicePoolArn: this.input.devicePoolArn,
          appArn: this.input.appArn,
          testType: this.input.testType,
          test: {
            type: this.input.test?.type,
            testPackageArn: this.input.test?.testPackageArn,
            testSpecArn: this.input.test?.testSpecArn,
            filter: this.input.test?.filter,
            parameters: this.input.test?.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePoolCompatibility.compatibleDevices', props);
    return resource.getResponseField('compatibleDevices') as unknown as shapes.DeviceFarmDevicePoolCompatibilityResult[];
  }

  public get incompatibleDevices(): shapes.DeviceFarmDevicePoolCompatibilityResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevicePoolCompatibility',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetDevicePoolCompatibility.incompatibleDevices'),
        outputPath: 'incompatibleDevices',
        parameters: {
          devicePoolArn: this.input.devicePoolArn,
          appArn: this.input.appArn,
          testType: this.input.testType,
          test: {
            type: this.input.test?.type,
            testPackageArn: this.input.test?.testPackageArn,
            testSpecArn: this.input.test?.testSpecArn,
            filter: this.input.test?.filter,
            parameters: this.input.test?.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDevicePoolCompatibility.incompatibleDevices', props);
    return resource.getResponseField('incompatibleDevices') as unknown as shapes.DeviceFarmDevicePoolCompatibilityResult[];
  }

}

export class DeviceFarmFetchInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetInstanceProfileRequest) {
    super(scope, id);
  }

  public get instanceProfile(): DeviceFarmFetchInstanceProfileInstanceProfile {
    return new DeviceFarmFetchInstanceProfileInstanceProfile(this, 'InstanceProfile', this.__resources, this.input);
  }

}

export class DeviceFarmFetchInstanceProfileInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetInstanceProfileRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetInstanceProfile.instanceProfile.arn'),
        outputPath: 'instanceProfile.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.instanceProfile.arn', props);
    return resource.getResponseField('instanceProfile.arn') as unknown as string;
  }

  public get packageCleanup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetInstanceProfile.instanceProfile.packageCleanup'),
        outputPath: 'instanceProfile.packageCleanup',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.instanceProfile.packageCleanup', props);
    return resource.getResponseField('instanceProfile.packageCleanup') as unknown as boolean;
  }

  public get excludeAppPackagesFromCleanup(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup'),
        outputPath: 'instanceProfile.excludeAppPackagesFromCleanup',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup', props);
    return resource.getResponseField('instanceProfile.excludeAppPackagesFromCleanup') as unknown as string[];
  }

  public get rebootAfterUse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetInstanceProfile.instanceProfile.rebootAfterUse'),
        outputPath: 'instanceProfile.rebootAfterUse',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.instanceProfile.rebootAfterUse', props);
    return resource.getResponseField('instanceProfile.rebootAfterUse') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetInstanceProfile.instanceProfile.name'),
        outputPath: 'instanceProfile.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.instanceProfile.name', props);
    return resource.getResponseField('instanceProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetInstanceProfile.instanceProfile.description'),
        outputPath: 'instanceProfile.description',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInstanceProfile.instanceProfile.description', props);
    return resource.getResponseField('instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmFetchJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetJobRequest) {
    super(scope, id);
  }

  public get job(): DeviceFarmFetchJobJob {
    return new DeviceFarmFetchJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class DeviceFarmFetchJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.arn'),
        outputPath: 'job.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.arn', props);
    return resource.getResponseField('job.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.name'),
        outputPath: 'job.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.name', props);
    return resource.getResponseField('job.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.type'),
        outputPath: 'job.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.type', props);
    return resource.getResponseField('job.type') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.created'),
        outputPath: 'job.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.created', props);
    return resource.getResponseField('job.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.status'),
        outputPath: 'job.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.status', props);
    return resource.getResponseField('job.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.result'),
        outputPath: 'job.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.result', props);
    return resource.getResponseField('job.result') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.started'),
        outputPath: 'job.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.started', props);
    return resource.getResponseField('job.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.stopped'),
        outputPath: 'job.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.stopped', props);
    return resource.getResponseField('job.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmFetchJobJobCounters {
    return new DeviceFarmFetchJobJobCounters(this, 'Counters', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.message'),
        outputPath: 'job.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.message', props);
    return resource.getResponseField('job.message') as unknown as string;
  }

  public get device(): DeviceFarmFetchJobJobDevice {
    return new DeviceFarmFetchJobJobDevice(this, 'Device', this.__resources, this.input);
  }

  public get instanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.instanceArn'),
        outputPath: 'job.instanceArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.instanceArn', props);
    return resource.getResponseField('job.instanceArn') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmFetchJobJobDeviceMinutes {
    return new DeviceFarmFetchJobJobDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get videoEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.videoEndpoint'),
        outputPath: 'job.videoEndpoint',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.videoEndpoint', props);
    return resource.getResponseField('job.videoEndpoint') as unknown as string;
  }

  public get videoCapture(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.videoCapture'),
        outputPath: 'job.videoCapture',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.videoCapture', props);
    return resource.getResponseField('job.videoCapture') as unknown as boolean;
  }

}

export class DeviceFarmFetchJobJobCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetJobRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.counters.total'),
        outputPath: 'job.counters.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.counters.total', props);
    return resource.getResponseField('job.counters.total') as unknown as number;
  }

  public get passed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.counters.passed'),
        outputPath: 'job.counters.passed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.counters.passed', props);
    return resource.getResponseField('job.counters.passed') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.counters.failed'),
        outputPath: 'job.counters.failed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.counters.failed', props);
    return resource.getResponseField('job.counters.failed') as unknown as number;
  }

  public get warned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.counters.warned'),
        outputPath: 'job.counters.warned',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.counters.warned', props);
    return resource.getResponseField('job.counters.warned') as unknown as number;
  }

  public get errored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.counters.errored'),
        outputPath: 'job.counters.errored',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.counters.errored', props);
    return resource.getResponseField('job.counters.errored') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.counters.stopped'),
        outputPath: 'job.counters.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.counters.stopped', props);
    return resource.getResponseField('job.counters.stopped') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.counters.skipped'),
        outputPath: 'job.counters.skipped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.counters.skipped', props);
    return resource.getResponseField('job.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmFetchJobJobDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.arn'),
        outputPath: 'job.device.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.arn', props);
    return resource.getResponseField('job.device.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.name'),
        outputPath: 'job.device.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.name', props);
    return resource.getResponseField('job.device.name') as unknown as string;
  }

  public get manufacturer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.manufacturer'),
        outputPath: 'job.device.manufacturer',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.manufacturer', props);
    return resource.getResponseField('job.device.manufacturer') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.model'),
        outputPath: 'job.device.model',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.model', props);
    return resource.getResponseField('job.device.model') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.modelId'),
        outputPath: 'job.device.modelId',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.modelId', props);
    return resource.getResponseField('job.device.modelId') as unknown as string;
  }

  public get formFactor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.formFactor'),
        outputPath: 'job.device.formFactor',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.formFactor', props);
    return resource.getResponseField('job.device.formFactor') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.platform'),
        outputPath: 'job.device.platform',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.platform', props);
    return resource.getResponseField('job.device.platform') as unknown as string;
  }

  public get os(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.os'),
        outputPath: 'job.device.os',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.os', props);
    return resource.getResponseField('job.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmFetchJobJobDeviceCpu {
    return new DeviceFarmFetchJobJobDeviceCpu(this, 'Cpu', this.__resources, this.input);
  }

  public get resolution(): DeviceFarmFetchJobJobDeviceResolution {
    return new DeviceFarmFetchJobJobDeviceResolution(this, 'Resolution', this.__resources, this.input);
  }

  public get heapSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.heapSize'),
        outputPath: 'job.device.heapSize',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.heapSize', props);
    return resource.getResponseField('job.device.heapSize') as unknown as number;
  }

  public get memory(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.memory'),
        outputPath: 'job.device.memory',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.memory', props);
    return resource.getResponseField('job.device.memory') as unknown as number;
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.image'),
        outputPath: 'job.device.image',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.image', props);
    return resource.getResponseField('job.device.image') as unknown as string;
  }

  public get carrier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.carrier'),
        outputPath: 'job.device.carrier',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.carrier', props);
    return resource.getResponseField('job.device.carrier') as unknown as string;
  }

  public get radio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.radio'),
        outputPath: 'job.device.radio',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.radio', props);
    return resource.getResponseField('job.device.radio') as unknown as string;
  }

  public get remoteAccessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.remoteAccessEnabled'),
        outputPath: 'job.device.remoteAccessEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.remoteAccessEnabled', props);
    return resource.getResponseField('job.device.remoteAccessEnabled') as unknown as boolean;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.remoteDebugEnabled'),
        outputPath: 'job.device.remoteDebugEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.remoteDebugEnabled', props);
    return resource.getResponseField('job.device.remoteDebugEnabled') as unknown as boolean;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.fleetType'),
        outputPath: 'job.device.fleetType',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.fleetType', props);
    return resource.getResponseField('job.device.fleetType') as unknown as string;
  }

  public get fleetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.fleetName'),
        outputPath: 'job.device.fleetName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.fleetName', props);
    return resource.getResponseField('job.device.fleetName') as unknown as string;
  }

  public get instances(): shapes.DeviceFarmDeviceInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.instances'),
        outputPath: 'job.device.instances',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.instances', props);
    return resource.getResponseField('job.device.instances') as unknown as shapes.DeviceFarmDeviceInstance[];
  }

  public get availability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.availability'),
        outputPath: 'job.device.availability',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.availability', props);
    return resource.getResponseField('job.device.availability') as unknown as string;
  }

}

export class DeviceFarmFetchJobJobDeviceCpu extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetJobRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.cpu.frequency'),
        outputPath: 'job.device.cpu.frequency',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.cpu.frequency', props);
    return resource.getResponseField('job.device.cpu.frequency') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.cpu.architecture'),
        outputPath: 'job.device.cpu.architecture',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.cpu.architecture', props);
    return resource.getResponseField('job.device.cpu.architecture') as unknown as string;
  }

  public get clock(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.cpu.clock'),
        outputPath: 'job.device.cpu.clock',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.cpu.clock', props);
    return resource.getResponseField('job.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmFetchJobJobDeviceResolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetJobRequest) {
    super(scope, id);
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.resolution.width'),
        outputPath: 'job.device.resolution.width',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.resolution.width', props);
    return resource.getResponseField('job.device.resolution.width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.device.resolution.height'),
        outputPath: 'job.device.resolution.height',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.device.resolution.height', props);
    return resource.getResponseField('job.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmFetchJobJobDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetJobRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.deviceMinutes.total'),
        outputPath: 'job.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.deviceMinutes.total', props);
    return resource.getResponseField('job.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.deviceMinutes.metered'),
        outputPath: 'job.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.deviceMinutes.metered', props);
    return resource.getResponseField('job.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetJob.job.deviceMinutes.unmetered'),
        outputPath: 'job.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJob.job.deviceMinutes.unmetered', props);
    return resource.getResponseField('job.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmFetchNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetNetworkProfileRequest) {
    super(scope, id);
  }

  public get networkProfile(): DeviceFarmFetchNetworkProfileNetworkProfile {
    return new DeviceFarmFetchNetworkProfileNetworkProfile(this, 'NetworkProfile', this.__resources, this.input);
  }

}

export class DeviceFarmFetchNetworkProfileNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetNetworkProfileRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.arn'),
        outputPath: 'networkProfile.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.arn', props);
    return resource.getResponseField('networkProfile.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.name'),
        outputPath: 'networkProfile.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.name', props);
    return resource.getResponseField('networkProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.description'),
        outputPath: 'networkProfile.description',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.description', props);
    return resource.getResponseField('networkProfile.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.type'),
        outputPath: 'networkProfile.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.type', props);
    return resource.getResponseField('networkProfile.type') as unknown as string;
  }

  public get uplinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.uplinkBandwidthBits'),
        outputPath: 'networkProfile.uplinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.uplinkBandwidthBits', props);
    return resource.getResponseField('networkProfile.uplinkBandwidthBits') as unknown as number;
  }

  public get downlinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.downlinkBandwidthBits'),
        outputPath: 'networkProfile.downlinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.downlinkBandwidthBits', props);
    return resource.getResponseField('networkProfile.downlinkBandwidthBits') as unknown as number;
  }

  public get uplinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.uplinkDelayMs'),
        outputPath: 'networkProfile.uplinkDelayMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.uplinkDelayMs', props);
    return resource.getResponseField('networkProfile.uplinkDelayMs') as unknown as number;
  }

  public get downlinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.downlinkDelayMs'),
        outputPath: 'networkProfile.downlinkDelayMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.downlinkDelayMs', props);
    return resource.getResponseField('networkProfile.downlinkDelayMs') as unknown as number;
  }

  public get uplinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.uplinkJitterMs'),
        outputPath: 'networkProfile.uplinkJitterMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.uplinkJitterMs', props);
    return resource.getResponseField('networkProfile.uplinkJitterMs') as unknown as number;
  }

  public get downlinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.downlinkJitterMs'),
        outputPath: 'networkProfile.downlinkJitterMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.downlinkJitterMs', props);
    return resource.getResponseField('networkProfile.downlinkJitterMs') as unknown as number;
  }

  public get uplinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.uplinkLossPercent'),
        outputPath: 'networkProfile.uplinkLossPercent',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.uplinkLossPercent', props);
    return resource.getResponseField('networkProfile.uplinkLossPercent') as unknown as number;
  }

  public get downlinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetNetworkProfile.networkProfile.downlinkLossPercent'),
        outputPath: 'networkProfile.downlinkLossPercent',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetNetworkProfile.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmFetchOfferingStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetOfferingStatusRequest) {
    super(scope, id);
  }

  public get current(): Record<string, shapes.DeviceFarmOfferingStatus> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOfferingStatus',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetOfferingStatus.current'),
        outputPath: 'current',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOfferingStatus.current', props);
    return resource.getResponseField('current') as unknown as Record<string, shapes.DeviceFarmOfferingStatus>;
  }

  public get nextPeriod(): Record<string, shapes.DeviceFarmOfferingStatus> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOfferingStatus',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetOfferingStatus.nextPeriod'),
        outputPath: 'nextPeriod',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOfferingStatus.nextPeriod', props);
    return resource.getResponseField('nextPeriod') as unknown as Record<string, shapes.DeviceFarmOfferingStatus>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOfferingStatus',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetOfferingStatus.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOfferingStatus.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmFetchProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetProjectRequest) {
    super(scope, id);
  }

  public get project(): DeviceFarmFetchProjectProject {
    return new DeviceFarmFetchProjectProject(this, 'Project', this.__resources, this.input);
  }

}

export class DeviceFarmFetchProjectProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetProjectRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetProject.project.arn'),
        outputPath: 'project.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProject.project.arn', props);
    return resource.getResponseField('project.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetProject.project.name'),
        outputPath: 'project.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProject.project.name', props);
    return resource.getResponseField('project.name') as unknown as string;
  }

  public get defaultJobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetProject.project.defaultJobTimeoutMinutes'),
        outputPath: 'project.defaultJobTimeoutMinutes',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProject.project.defaultJobTimeoutMinutes', props);
    return resource.getResponseField('project.defaultJobTimeoutMinutes') as unknown as number;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetProject.project.created'),
        outputPath: 'project.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProject.project.created', props);
    return resource.getResponseField('project.created') as unknown as string;
  }

}

export class DeviceFarmFetchRemoteAccessSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get remoteAccessSession(): DeviceFarmFetchRemoteAccessSessionRemoteAccessSession {
    return new DeviceFarmFetchRemoteAccessSessionRemoteAccessSession(this, 'RemoteAccessSession', this.__resources, this.input);
  }

}

export class DeviceFarmFetchRemoteAccessSessionRemoteAccessSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.arn'),
        outputPath: 'remoteAccessSession.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.arn', props);
    return resource.getResponseField('remoteAccessSession.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.name'),
        outputPath: 'remoteAccessSession.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.name', props);
    return resource.getResponseField('remoteAccessSession.name') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.created'),
        outputPath: 'remoteAccessSession.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.created', props);
    return resource.getResponseField('remoteAccessSession.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.status'),
        outputPath: 'remoteAccessSession.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.status', props);
    return resource.getResponseField('remoteAccessSession.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.result'),
        outputPath: 'remoteAccessSession.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.result', props);
    return resource.getResponseField('remoteAccessSession.result') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.message'),
        outputPath: 'remoteAccessSession.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.message', props);
    return resource.getResponseField('remoteAccessSession.message') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.started'),
        outputPath: 'remoteAccessSession.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.started', props);
    return resource.getResponseField('remoteAccessSession.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.stopped'),
        outputPath: 'remoteAccessSession.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.stopped', props);
    return resource.getResponseField('remoteAccessSession.stopped') as unknown as string;
  }

  public get device(): DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDevice {
    return new DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDevice(this, 'Device', this.__resources, this.input);
  }

  public get instanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.instanceArn'),
        outputPath: 'remoteAccessSession.instanceArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.instanceArn', props);
    return resource.getResponseField('remoteAccessSession.instanceArn') as unknown as string;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.remoteDebugEnabled'),
        outputPath: 'remoteAccessSession.remoteDebugEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.remoteDebugEnabled', props);
    return resource.getResponseField('remoteAccessSession.remoteDebugEnabled') as unknown as boolean;
  }

  public get remoteRecordEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.remoteRecordEnabled'),
        outputPath: 'remoteAccessSession.remoteRecordEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.remoteRecordEnabled', props);
    return resource.getResponseField('remoteAccessSession.remoteRecordEnabled') as unknown as boolean;
  }

  public get remoteRecordAppArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.remoteRecordAppArn'),
        outputPath: 'remoteAccessSession.remoteRecordAppArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.remoteRecordAppArn', props);
    return resource.getResponseField('remoteAccessSession.remoteRecordAppArn') as unknown as string;
  }

  public get hostAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.hostAddress'),
        outputPath: 'remoteAccessSession.hostAddress',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.hostAddress', props);
    return resource.getResponseField('remoteAccessSession.hostAddress') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.clientId'),
        outputPath: 'remoteAccessSession.clientId',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.clientId', props);
    return resource.getResponseField('remoteAccessSession.clientId') as unknown as string;
  }

  public get billingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.billingMethod'),
        outputPath: 'remoteAccessSession.billingMethod',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.billingMethod', props);
    return resource.getResponseField('remoteAccessSession.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes {
    return new DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.endpoint'),
        outputPath: 'remoteAccessSession.endpoint',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.endpoint', props);
    return resource.getResponseField('remoteAccessSession.endpoint') as unknown as string;
  }

  public get deviceUdid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.deviceUdid'),
        outputPath: 'remoteAccessSession.deviceUdid',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.deviceUdid', props);
    return resource.getResponseField('remoteAccessSession.deviceUdid') as unknown as string;
  }

  public get interactionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.interactionMode'),
        outputPath: 'remoteAccessSession.interactionMode',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.interactionMode', props);
    return resource.getResponseField('remoteAccessSession.interactionMode') as unknown as string;
  }

  public get skipAppResign(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.skipAppResign'),
        outputPath: 'remoteAccessSession.skipAppResign',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.skipAppResign', props);
    return resource.getResponseField('remoteAccessSession.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.arn'),
        outputPath: 'remoteAccessSession.device.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.arn', props);
    return resource.getResponseField('remoteAccessSession.device.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.name'),
        outputPath: 'remoteAccessSession.device.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.name', props);
    return resource.getResponseField('remoteAccessSession.device.name') as unknown as string;
  }

  public get manufacturer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.manufacturer'),
        outputPath: 'remoteAccessSession.device.manufacturer',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.manufacturer', props);
    return resource.getResponseField('remoteAccessSession.device.manufacturer') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.model'),
        outputPath: 'remoteAccessSession.device.model',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.model', props);
    return resource.getResponseField('remoteAccessSession.device.model') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.modelId'),
        outputPath: 'remoteAccessSession.device.modelId',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.modelId', props);
    return resource.getResponseField('remoteAccessSession.device.modelId') as unknown as string;
  }

  public get formFactor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.formFactor'),
        outputPath: 'remoteAccessSession.device.formFactor',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.formFactor', props);
    return resource.getResponseField('remoteAccessSession.device.formFactor') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.platform'),
        outputPath: 'remoteAccessSession.device.platform',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.platform', props);
    return resource.getResponseField('remoteAccessSession.device.platform') as unknown as string;
  }

  public get os(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.os'),
        outputPath: 'remoteAccessSession.device.os',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.os', props);
    return resource.getResponseField('remoteAccessSession.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu {
    return new DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu(this, 'Cpu', this.__resources, this.input);
  }

  public get resolution(): DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution {
    return new DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution(this, 'Resolution', this.__resources, this.input);
  }

  public get heapSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.heapSize'),
        outputPath: 'remoteAccessSession.device.heapSize',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.heapSize', props);
    return resource.getResponseField('remoteAccessSession.device.heapSize') as unknown as number;
  }

  public get memory(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.memory'),
        outputPath: 'remoteAccessSession.device.memory',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.memory', props);
    return resource.getResponseField('remoteAccessSession.device.memory') as unknown as number;
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.image'),
        outputPath: 'remoteAccessSession.device.image',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.image', props);
    return resource.getResponseField('remoteAccessSession.device.image') as unknown as string;
  }

  public get carrier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.carrier'),
        outputPath: 'remoteAccessSession.device.carrier',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.carrier', props);
    return resource.getResponseField('remoteAccessSession.device.carrier') as unknown as string;
  }

  public get radio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.radio'),
        outputPath: 'remoteAccessSession.device.radio',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.radio', props);
    return resource.getResponseField('remoteAccessSession.device.radio') as unknown as string;
  }

  public get remoteAccessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled'),
        outputPath: 'remoteAccessSession.device.remoteAccessEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled', props);
    return resource.getResponseField('remoteAccessSession.device.remoteAccessEnabled') as unknown as boolean;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled'),
        outputPath: 'remoteAccessSession.device.remoteDebugEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled', props);
    return resource.getResponseField('remoteAccessSession.device.remoteDebugEnabled') as unknown as boolean;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.fleetType'),
        outputPath: 'remoteAccessSession.device.fleetType',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.fleetType', props);
    return resource.getResponseField('remoteAccessSession.device.fleetType') as unknown as string;
  }

  public get fleetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.fleetName'),
        outputPath: 'remoteAccessSession.device.fleetName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.fleetName', props);
    return resource.getResponseField('remoteAccessSession.device.fleetName') as unknown as string;
  }

  public get instances(): shapes.DeviceFarmDeviceInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.instances'),
        outputPath: 'remoteAccessSession.device.instances',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.instances', props);
    return resource.getResponseField('remoteAccessSession.device.instances') as unknown as shapes.DeviceFarmDeviceInstance[];
  }

  public get availability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.availability'),
        outputPath: 'remoteAccessSession.device.availability',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.availability', props);
    return resource.getResponseField('remoteAccessSession.device.availability') as unknown as string;
  }

}

export class DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.cpu.frequency'),
        outputPath: 'remoteAccessSession.device.cpu.frequency',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.cpu.frequency', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.frequency') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.cpu.architecture'),
        outputPath: 'remoteAccessSession.device.cpu.architecture',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.cpu.architecture', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.architecture') as unknown as string;
  }

  public get clock(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.cpu.clock'),
        outputPath: 'remoteAccessSession.device.cpu.clock',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.cpu.clock', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.resolution.width'),
        outputPath: 'remoteAccessSession.device.resolution.width',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.resolution.width', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.device.resolution.height'),
        outputPath: 'remoteAccessSession.device.resolution.height',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.device.resolution.height', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.deviceMinutes.total'),
        outputPath: 'remoteAccessSession.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.deviceMinutes.total', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.deviceMinutes.metered'),
        outputPath: 'remoteAccessSession.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.deviceMinutes.metered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered'),
        outputPath: 'remoteAccessSession.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmFetchRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get run(): DeviceFarmFetchRunRun {
    return new DeviceFarmFetchRunRun(this, 'Run', this.__resources, this.input);
  }

}

export class DeviceFarmFetchRunRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.arn'),
        outputPath: 'run.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.arn', props);
    return resource.getResponseField('run.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.name'),
        outputPath: 'run.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.name', props);
    return resource.getResponseField('run.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.type'),
        outputPath: 'run.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.type', props);
    return resource.getResponseField('run.type') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.platform'),
        outputPath: 'run.platform',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.platform', props);
    return resource.getResponseField('run.platform') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.created'),
        outputPath: 'run.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.created', props);
    return resource.getResponseField('run.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.status'),
        outputPath: 'run.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.status', props);
    return resource.getResponseField('run.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.result'),
        outputPath: 'run.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.result', props);
    return resource.getResponseField('run.result') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.started'),
        outputPath: 'run.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.started', props);
    return resource.getResponseField('run.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.stopped'),
        outputPath: 'run.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.stopped', props);
    return resource.getResponseField('run.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmFetchRunRunCounters {
    return new DeviceFarmFetchRunRunCounters(this, 'Counters', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.message'),
        outputPath: 'run.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.message', props);
    return resource.getResponseField('run.message') as unknown as string;
  }

  public get totalJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.totalJobs'),
        outputPath: 'run.totalJobs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.totalJobs', props);
    return resource.getResponseField('run.totalJobs') as unknown as number;
  }

  public get completedJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.completedJobs'),
        outputPath: 'run.completedJobs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.completedJobs', props);
    return resource.getResponseField('run.completedJobs') as unknown as number;
  }

  public get billingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.billingMethod'),
        outputPath: 'run.billingMethod',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.billingMethod', props);
    return resource.getResponseField('run.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmFetchRunRunDeviceMinutes {
    return new DeviceFarmFetchRunRunDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get networkProfile(): DeviceFarmFetchRunRunNetworkProfile {
    return new DeviceFarmFetchRunRunNetworkProfile(this, 'NetworkProfile', this.__resources, this.input);
  }

  public get parsingResultUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.parsingResultUrl'),
        outputPath: 'run.parsingResultUrl',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.parsingResultUrl', props);
    return resource.getResponseField('run.parsingResultUrl') as unknown as string;
  }

  public get resultCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.resultCode'),
        outputPath: 'run.resultCode',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.resultCode', props);
    return resource.getResponseField('run.resultCode') as unknown as string;
  }

  public get seed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.seed'),
        outputPath: 'run.seed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.seed', props);
    return resource.getResponseField('run.seed') as unknown as number;
  }

  public get appUpload(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.appUpload'),
        outputPath: 'run.appUpload',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.appUpload', props);
    return resource.getResponseField('run.appUpload') as unknown as string;
  }

  public get eventCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.eventCount'),
        outputPath: 'run.eventCount',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.eventCount', props);
    return resource.getResponseField('run.eventCount') as unknown as number;
  }

  public get jobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.jobTimeoutMinutes'),
        outputPath: 'run.jobTimeoutMinutes',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.jobTimeoutMinutes', props);
    return resource.getResponseField('run.jobTimeoutMinutes') as unknown as number;
  }

  public get devicePoolArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.devicePoolArn'),
        outputPath: 'run.devicePoolArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.devicePoolArn', props);
    return resource.getResponseField('run.devicePoolArn') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.locale'),
        outputPath: 'run.locale',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.locale', props);
    return resource.getResponseField('run.locale') as unknown as string;
  }

  public get radios(): DeviceFarmFetchRunRunRadios {
    return new DeviceFarmFetchRunRunRadios(this, 'Radios', this.__resources, this.input);
  }

  public get location(): DeviceFarmFetchRunRunLocation {
    return new DeviceFarmFetchRunRunLocation(this, 'Location', this.__resources, this.input);
  }

  public get customerArtifactPaths(): DeviceFarmFetchRunRunCustomerArtifactPaths {
    return new DeviceFarmFetchRunRunCustomerArtifactPaths(this, 'CustomerArtifactPaths', this.__resources, this.input);
  }

  public get webUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.webUrl'),
        outputPath: 'run.webUrl',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.webUrl', props);
    return resource.getResponseField('run.webUrl') as unknown as string;
  }

  public get skipAppResign(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.skipAppResign'),
        outputPath: 'run.skipAppResign',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.skipAppResign', props);
    return resource.getResponseField('run.skipAppResign') as unknown as boolean;
  }

  public get testSpecArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.testSpecArn'),
        outputPath: 'run.testSpecArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.testSpecArn', props);
    return resource.getResponseField('run.testSpecArn') as unknown as string;
  }

  public get deviceSelectionResult(): DeviceFarmFetchRunRunDeviceSelectionResult {
    return new DeviceFarmFetchRunRunDeviceSelectionResult(this, 'DeviceSelectionResult', this.__resources, this.input);
  }

}

export class DeviceFarmFetchRunRunCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.counters.total'),
        outputPath: 'run.counters.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.counters.total', props);
    return resource.getResponseField('run.counters.total') as unknown as number;
  }

  public get passed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.counters.passed'),
        outputPath: 'run.counters.passed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.counters.passed', props);
    return resource.getResponseField('run.counters.passed') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.counters.failed'),
        outputPath: 'run.counters.failed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.counters.failed', props);
    return resource.getResponseField('run.counters.failed') as unknown as number;
  }

  public get warned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.counters.warned'),
        outputPath: 'run.counters.warned',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.counters.warned', props);
    return resource.getResponseField('run.counters.warned') as unknown as number;
  }

  public get errored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.counters.errored'),
        outputPath: 'run.counters.errored',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.counters.errored', props);
    return resource.getResponseField('run.counters.errored') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.counters.stopped'),
        outputPath: 'run.counters.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.counters.stopped', props);
    return resource.getResponseField('run.counters.stopped') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.counters.skipped'),
        outputPath: 'run.counters.skipped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.counters.skipped', props);
    return resource.getResponseField('run.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmFetchRunRunDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.deviceMinutes.total'),
        outputPath: 'run.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.deviceMinutes.total', props);
    return resource.getResponseField('run.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.deviceMinutes.metered'),
        outputPath: 'run.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.deviceMinutes.metered', props);
    return resource.getResponseField('run.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.deviceMinutes.unmetered'),
        outputPath: 'run.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.deviceMinutes.unmetered', props);
    return resource.getResponseField('run.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmFetchRunRunNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.arn'),
        outputPath: 'run.networkProfile.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.arn', props);
    return resource.getResponseField('run.networkProfile.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.name'),
        outputPath: 'run.networkProfile.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.name', props);
    return resource.getResponseField('run.networkProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.description'),
        outputPath: 'run.networkProfile.description',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.description', props);
    return resource.getResponseField('run.networkProfile.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.type'),
        outputPath: 'run.networkProfile.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.type', props);
    return resource.getResponseField('run.networkProfile.type') as unknown as string;
  }

  public get uplinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.uplinkBandwidthBits'),
        outputPath: 'run.networkProfile.uplinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.uplinkBandwidthBits', props);
    return resource.getResponseField('run.networkProfile.uplinkBandwidthBits') as unknown as number;
  }

  public get downlinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.downlinkBandwidthBits'),
        outputPath: 'run.networkProfile.downlinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.downlinkBandwidthBits', props);
    return resource.getResponseField('run.networkProfile.downlinkBandwidthBits') as unknown as number;
  }

  public get uplinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.uplinkDelayMs'),
        outputPath: 'run.networkProfile.uplinkDelayMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.uplinkDelayMs', props);
    return resource.getResponseField('run.networkProfile.uplinkDelayMs') as unknown as number;
  }

  public get downlinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.downlinkDelayMs'),
        outputPath: 'run.networkProfile.downlinkDelayMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.downlinkDelayMs', props);
    return resource.getResponseField('run.networkProfile.downlinkDelayMs') as unknown as number;
  }

  public get uplinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.uplinkJitterMs'),
        outputPath: 'run.networkProfile.uplinkJitterMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.uplinkJitterMs', props);
    return resource.getResponseField('run.networkProfile.uplinkJitterMs') as unknown as number;
  }

  public get downlinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.downlinkJitterMs'),
        outputPath: 'run.networkProfile.downlinkJitterMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.downlinkJitterMs', props);
    return resource.getResponseField('run.networkProfile.downlinkJitterMs') as unknown as number;
  }

  public get uplinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.uplinkLossPercent'),
        outputPath: 'run.networkProfile.uplinkLossPercent',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.uplinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.uplinkLossPercent') as unknown as number;
  }

  public get downlinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.networkProfile.downlinkLossPercent'),
        outputPath: 'run.networkProfile.downlinkLossPercent',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmFetchRunRunRadios extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get wifi(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.radios.wifi'),
        outputPath: 'run.radios.wifi',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.radios.wifi', props);
    return resource.getResponseField('run.radios.wifi') as unknown as boolean;
  }

  public get bluetooth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.radios.bluetooth'),
        outputPath: 'run.radios.bluetooth',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.radios.bluetooth', props);
    return resource.getResponseField('run.radios.bluetooth') as unknown as boolean;
  }

  public get nfc(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.radios.nfc'),
        outputPath: 'run.radios.nfc',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.radios.nfc', props);
    return resource.getResponseField('run.radios.nfc') as unknown as boolean;
  }

  public get gps(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.radios.gps'),
        outputPath: 'run.radios.gps',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.radios.gps', props);
    return resource.getResponseField('run.radios.gps') as unknown as boolean;
  }

}

export class DeviceFarmFetchRunRunLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get latitude(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.location.latitude'),
        outputPath: 'run.location.latitude',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.location.latitude', props);
    return resource.getResponseField('run.location.latitude') as unknown as number;
  }

  public get longitude(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.location.longitude'),
        outputPath: 'run.location.longitude',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.location.longitude', props);
    return resource.getResponseField('run.location.longitude') as unknown as number;
  }

}

export class DeviceFarmFetchRunRunCustomerArtifactPaths extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get iosPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.customerArtifactPaths.iosPaths'),
        outputPath: 'run.customerArtifactPaths.iosPaths',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.customerArtifactPaths.iosPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.iosPaths') as unknown as string[];
  }

  public get androidPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.customerArtifactPaths.androidPaths'),
        outputPath: 'run.customerArtifactPaths.androidPaths',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.customerArtifactPaths.androidPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.androidPaths') as unknown as string[];
  }

  public get deviceHostPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.customerArtifactPaths.deviceHostPaths'),
        outputPath: 'run.customerArtifactPaths.deviceHostPaths',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.customerArtifactPaths.deviceHostPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.deviceHostPaths') as unknown as string[];
  }

}

export class DeviceFarmFetchRunRunDeviceSelectionResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetRunRequest) {
    super(scope, id);
  }

  public get filters(): shapes.DeviceFarmDeviceFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.deviceSelectionResult.filters'),
        outputPath: 'run.deviceSelectionResult.filters',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.deviceSelectionResult.filters', props);
    return resource.getResponseField('run.deviceSelectionResult.filters') as unknown as shapes.DeviceFarmDeviceFilter[];
  }

  public get matchedDevicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.deviceSelectionResult.matchedDevicesCount'),
        outputPath: 'run.deviceSelectionResult.matchedDevicesCount',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.deviceSelectionResult.matchedDevicesCount', props);
    return resource.getResponseField('run.deviceSelectionResult.matchedDevicesCount') as unknown as number;
  }

  public get maxDevices(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetRun.run.deviceSelectionResult.maxDevices'),
        outputPath: 'run.deviceSelectionResult.maxDevices',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRun.run.deviceSelectionResult.maxDevices', props);
    return resource.getResponseField('run.deviceSelectionResult.maxDevices') as unknown as number;
  }

}

export class DeviceFarmFetchSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetSuiteRequest) {
    super(scope, id);
  }

  public get suite(): DeviceFarmFetchSuiteSuite {
    return new DeviceFarmFetchSuiteSuite(this, 'Suite', this.__resources, this.input);
  }

}

export class DeviceFarmFetchSuiteSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetSuiteRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.arn'),
        outputPath: 'suite.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.arn', props);
    return resource.getResponseField('suite.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.name'),
        outputPath: 'suite.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.name', props);
    return resource.getResponseField('suite.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.type'),
        outputPath: 'suite.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.type', props);
    return resource.getResponseField('suite.type') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.created'),
        outputPath: 'suite.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.created', props);
    return resource.getResponseField('suite.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.status'),
        outputPath: 'suite.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.status', props);
    return resource.getResponseField('suite.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.result'),
        outputPath: 'suite.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.result', props);
    return resource.getResponseField('suite.result') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.started'),
        outputPath: 'suite.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.started', props);
    return resource.getResponseField('suite.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.stopped'),
        outputPath: 'suite.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.stopped', props);
    return resource.getResponseField('suite.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmFetchSuiteSuiteCounters {
    return new DeviceFarmFetchSuiteSuiteCounters(this, 'Counters', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.message'),
        outputPath: 'suite.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.message', props);
    return resource.getResponseField('suite.message') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmFetchSuiteSuiteDeviceMinutes {
    return new DeviceFarmFetchSuiteSuiteDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

}

export class DeviceFarmFetchSuiteSuiteCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetSuiteRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.counters.total'),
        outputPath: 'suite.counters.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.counters.total', props);
    return resource.getResponseField('suite.counters.total') as unknown as number;
  }

  public get passed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.counters.passed'),
        outputPath: 'suite.counters.passed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.counters.passed', props);
    return resource.getResponseField('suite.counters.passed') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.counters.failed'),
        outputPath: 'suite.counters.failed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.counters.failed', props);
    return resource.getResponseField('suite.counters.failed') as unknown as number;
  }

  public get warned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.counters.warned'),
        outputPath: 'suite.counters.warned',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.counters.warned', props);
    return resource.getResponseField('suite.counters.warned') as unknown as number;
  }

  public get errored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.counters.errored'),
        outputPath: 'suite.counters.errored',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.counters.errored', props);
    return resource.getResponseField('suite.counters.errored') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.counters.stopped'),
        outputPath: 'suite.counters.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.counters.stopped', props);
    return resource.getResponseField('suite.counters.stopped') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.counters.skipped'),
        outputPath: 'suite.counters.skipped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.counters.skipped', props);
    return resource.getResponseField('suite.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmFetchSuiteSuiteDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetSuiteRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.deviceMinutes.total'),
        outputPath: 'suite.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.deviceMinutes.total', props);
    return resource.getResponseField('suite.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.deviceMinutes.metered'),
        outputPath: 'suite.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.deviceMinutes.metered', props);
    return resource.getResponseField('suite.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSuite',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetSuite.suite.deviceMinutes.unmetered'),
        outputPath: 'suite.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSuite.suite.deviceMinutes.unmetered', props);
    return resource.getResponseField('suite.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmFetchTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestRequest) {
    super(scope, id);
  }

  public get test(): DeviceFarmFetchTestTest {
    return new DeviceFarmFetchTestTest(this, 'Test', this.__resources, this.input);
  }

}

export class DeviceFarmFetchTestTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.arn'),
        outputPath: 'test.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.arn', props);
    return resource.getResponseField('test.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.name'),
        outputPath: 'test.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.name', props);
    return resource.getResponseField('test.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.type'),
        outputPath: 'test.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.type', props);
    return resource.getResponseField('test.type') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.created'),
        outputPath: 'test.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.created', props);
    return resource.getResponseField('test.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.status'),
        outputPath: 'test.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.status', props);
    return resource.getResponseField('test.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.result'),
        outputPath: 'test.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.result', props);
    return resource.getResponseField('test.result') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.started'),
        outputPath: 'test.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.started', props);
    return resource.getResponseField('test.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.stopped'),
        outputPath: 'test.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.stopped', props);
    return resource.getResponseField('test.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmFetchTestTestCounters {
    return new DeviceFarmFetchTestTestCounters(this, 'Counters', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.message'),
        outputPath: 'test.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.message', props);
    return resource.getResponseField('test.message') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmFetchTestTestDeviceMinutes {
    return new DeviceFarmFetchTestTestDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

}

export class DeviceFarmFetchTestTestCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.counters.total'),
        outputPath: 'test.counters.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.counters.total', props);
    return resource.getResponseField('test.counters.total') as unknown as number;
  }

  public get passed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.counters.passed'),
        outputPath: 'test.counters.passed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.counters.passed', props);
    return resource.getResponseField('test.counters.passed') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.counters.failed'),
        outputPath: 'test.counters.failed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.counters.failed', props);
    return resource.getResponseField('test.counters.failed') as unknown as number;
  }

  public get warned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.counters.warned'),
        outputPath: 'test.counters.warned',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.counters.warned', props);
    return resource.getResponseField('test.counters.warned') as unknown as number;
  }

  public get errored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.counters.errored'),
        outputPath: 'test.counters.errored',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.counters.errored', props);
    return resource.getResponseField('test.counters.errored') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.counters.stopped'),
        outputPath: 'test.counters.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.counters.stopped', props);
    return resource.getResponseField('test.counters.stopped') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.counters.skipped'),
        outputPath: 'test.counters.skipped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.counters.skipped', props);
    return resource.getResponseField('test.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmFetchTestTestDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.deviceMinutes.total'),
        outputPath: 'test.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.deviceMinutes.total', props);
    return resource.getResponseField('test.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.deviceMinutes.metered'),
        outputPath: 'test.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.deviceMinutes.metered', props);
    return resource.getResponseField('test.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTest',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTest.test.deviceMinutes.unmetered'),
        outputPath: 'test.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTest.test.deviceMinutes.unmetered', props);
    return resource.getResponseField('test.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmFetchTestGridProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestGridProjectRequest) {
    super(scope, id);
  }

  public get testGridProject(): DeviceFarmFetchTestGridProjectTestGridProject {
    return new DeviceFarmFetchTestGridProjectTestGridProject(this, 'TestGridProject', this.__resources, this.input);
  }

}

export class DeviceFarmFetchTestGridProjectTestGridProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestGridProjectRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridProject.testGridProject.arn'),
        outputPath: 'testGridProject.arn',
        parameters: {
          projectArn: this.input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridProject.testGridProject.arn', props);
    return resource.getResponseField('testGridProject.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridProject.testGridProject.name'),
        outputPath: 'testGridProject.name',
        parameters: {
          projectArn: this.input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridProject.testGridProject.name', props);
    return resource.getResponseField('testGridProject.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridProject.testGridProject.description'),
        outputPath: 'testGridProject.description',
        parameters: {
          projectArn: this.input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridProject.testGridProject.description', props);
    return resource.getResponseField('testGridProject.description') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridProject.testGridProject.created'),
        outputPath: 'testGridProject.created',
        parameters: {
          projectArn: this.input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridProject.testGridProject.created', props);
    return resource.getResponseField('testGridProject.created') as unknown as string;
  }

}

export class DeviceFarmFetchTestGridSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestGridSessionRequest) {
    super(scope, id);
  }

  public get testGridSession(): DeviceFarmFetchTestGridSessionTestGridSession {
    return new DeviceFarmFetchTestGridSessionTestGridSession(this, 'TestGridSession', this.__resources, this.input);
  }

}

export class DeviceFarmFetchTestGridSessionTestGridSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetTestGridSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridSession.testGridSession.arn'),
        outputPath: 'testGridSession.arn',
        parameters: {
          projectArn: this.input.projectArn,
          sessionId: this.input.sessionId,
          sessionArn: this.input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridSession.testGridSession.arn', props);
    return resource.getResponseField('testGridSession.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridSession.testGridSession.status'),
        outputPath: 'testGridSession.status',
        parameters: {
          projectArn: this.input.projectArn,
          sessionId: this.input.sessionId,
          sessionArn: this.input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridSession.testGridSession.status', props);
    return resource.getResponseField('testGridSession.status') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridSession.testGridSession.created'),
        outputPath: 'testGridSession.created',
        parameters: {
          projectArn: this.input.projectArn,
          sessionId: this.input.sessionId,
          sessionArn: this.input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridSession.testGridSession.created', props);
    return resource.getResponseField('testGridSession.created') as unknown as string;
  }

  public get ended(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridSession.testGridSession.ended'),
        outputPath: 'testGridSession.ended',
        parameters: {
          projectArn: this.input.projectArn,
          sessionId: this.input.sessionId,
          sessionArn: this.input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridSession.testGridSession.ended', props);
    return resource.getResponseField('testGridSession.ended') as unknown as string;
  }

  public get billingMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridSession.testGridSession.billingMinutes'),
        outputPath: 'testGridSession.billingMinutes',
        parameters: {
          projectArn: this.input.projectArn,
          sessionId: this.input.sessionId,
          sessionArn: this.input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridSession.testGridSession.billingMinutes', props);
    return resource.getResponseField('testGridSession.billingMinutes') as unknown as number;
  }

  public get seleniumProperties(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridSession.testGridSession.seleniumProperties'),
        outputPath: 'testGridSession.seleniumProperties',
        parameters: {
          projectArn: this.input.projectArn,
          sessionId: this.input.sessionId,
          sessionArn: this.input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTestGridSession.testGridSession.seleniumProperties', props);
    return resource.getResponseField('testGridSession.seleniumProperties') as unknown as string;
  }

}

export class DeviceFarmFetchUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetUploadRequest) {
    super(scope, id);
  }

  public get upload(): DeviceFarmFetchUploadUpload {
    return new DeviceFarmFetchUploadUpload(this, 'Upload', this.__resources, this.input);
  }

}

export class DeviceFarmFetchUploadUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetUploadRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.arn'),
        outputPath: 'upload.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.arn', props);
    return resource.getResponseField('upload.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.name'),
        outputPath: 'upload.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.name', props);
    return resource.getResponseField('upload.name') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.created'),
        outputPath: 'upload.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.created', props);
    return resource.getResponseField('upload.created') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.type'),
        outputPath: 'upload.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.type', props);
    return resource.getResponseField('upload.type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.status'),
        outputPath: 'upload.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.status', props);
    return resource.getResponseField('upload.status') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.url'),
        outputPath: 'upload.url',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.url', props);
    return resource.getResponseField('upload.url') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.metadata'),
        outputPath: 'upload.metadata',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.metadata', props);
    return resource.getResponseField('upload.metadata') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.contentType'),
        outputPath: 'upload.contentType',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.contentType', props);
    return resource.getResponseField('upload.contentType') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.message'),
        outputPath: 'upload.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.message', props);
    return resource.getResponseField('upload.message') as unknown as string;
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetUpload.upload.category'),
        outputPath: 'upload.category',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetUpload.upload.category', props);
    return resource.getResponseField('upload.category') as unknown as string;
  }

}

export class DeviceFarmFetchVpceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetVpceConfigurationRequest) {
    super(scope, id);
  }

  public get vpceConfiguration(): DeviceFarmFetchVpceConfigurationVpceConfiguration {
    return new DeviceFarmFetchVpceConfigurationVpceConfiguration(this, 'VpceConfiguration', this.__resources, this.input);
  }

}

export class DeviceFarmFetchVpceConfigurationVpceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmGetVpceConfigurationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetVPCEConfiguration.vpceConfiguration.arn'),
        outputPath: 'vpceConfiguration.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVPCEConfiguration.vpceConfiguration.arn', props);
    return resource.getResponseField('vpceConfiguration.arn') as unknown as string;
  }

  public get vpceConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetVPCEConfiguration.vpceConfiguration.vpceConfigurationName'),
        outputPath: 'vpceConfiguration.vpceConfigurationName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVPCEConfiguration.vpceConfiguration.vpceConfigurationName', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationName') as unknown as string;
  }

  public get vpceServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetVPCEConfiguration.vpceConfiguration.vpceServiceName'),
        outputPath: 'vpceConfiguration.vpceServiceName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVPCEConfiguration.vpceConfiguration.vpceServiceName', props);
    return resource.getResponseField('vpceConfiguration.vpceServiceName') as unknown as string;
  }

  public get serviceDnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetVPCEConfiguration.vpceConfiguration.serviceDnsName'),
        outputPath: 'vpceConfiguration.serviceDnsName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVPCEConfiguration.vpceConfiguration.serviceDnsName', props);
    return resource.getResponseField('vpceConfiguration.serviceDnsName') as unknown as string;
  }

  public get vpceConfigurationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription'),
        outputPath: 'vpceConfiguration.vpceConfigurationDescription',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationDescription') as unknown as string;
  }

}

export class DeviceFarmInstallToRemoteAccessSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmInstallToRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get appUpload(): DeviceFarmInstallToRemoteAccessSessionAppUpload {
    return new DeviceFarmInstallToRemoteAccessSessionAppUpload(this, 'AppUpload', this.__resources, this.input);
  }

}

export class DeviceFarmInstallToRemoteAccessSessionAppUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmInstallToRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.arn'),
        outputPath: 'appUpload.arn',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.arn', props);
    return resource.getResponseField('appUpload.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.name'),
        outputPath: 'appUpload.name',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.name', props);
    return resource.getResponseField('appUpload.name') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.created'),
        outputPath: 'appUpload.created',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.created', props);
    return resource.getResponseField('appUpload.created') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.type'),
        outputPath: 'appUpload.type',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.type', props);
    return resource.getResponseField('appUpload.type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.status'),
        outputPath: 'appUpload.status',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.status', props);
    return resource.getResponseField('appUpload.status') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.url'),
        outputPath: 'appUpload.url',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.url', props);
    return resource.getResponseField('appUpload.url') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.metadata'),
        outputPath: 'appUpload.metadata',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.metadata', props);
    return resource.getResponseField('appUpload.metadata') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.contentType'),
        outputPath: 'appUpload.contentType',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.contentType', props);
    return resource.getResponseField('appUpload.contentType') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.message'),
        outputPath: 'appUpload.message',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.message', props);
    return resource.getResponseField('appUpload.message') as unknown as string;
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'installToRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.InstallToRemoteAccessSession.appUpload.category'),
        outputPath: 'appUpload.category',
        parameters: {
          remoteAccessSessionArn: this.input.remoteAccessSessionArn,
          appArn: this.input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InstallToRemoteAccessSession.appUpload.category', props);
    return resource.getResponseField('appUpload.category') as unknown as string;
  }

}

export class DeviceFarmListArtifacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListArtifactsRequest) {
    super(scope, id);
  }

  public get artifacts(): shapes.DeviceFarmArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArtifacts',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListArtifacts.artifacts'),
        outputPath: 'artifacts',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListArtifacts.artifacts', props);
    return resource.getResponseField('artifacts') as unknown as shapes.DeviceFarmArtifact[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listArtifacts',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListArtifacts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListArtifacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListDeviceInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListDeviceInstancesRequest) {
    super(scope, id);
  }

  public get deviceInstances(): shapes.DeviceFarmDeviceInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceInstances',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListDeviceInstances.deviceInstances'),
        outputPath: 'deviceInstances',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeviceInstances.deviceInstances', props);
    return resource.getResponseField('deviceInstances') as unknown as shapes.DeviceFarmDeviceInstance[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceInstances',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListDeviceInstances.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeviceInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListDevicePools extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListDevicePoolsRequest) {
    super(scope, id);
  }

  public get devicePools(): shapes.DeviceFarmDevicePool[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevicePools',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListDevicePools.devicePools'),
        outputPath: 'devicePools',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevicePools.devicePools', props);
    return resource.getResponseField('devicePools') as unknown as shapes.DeviceFarmDevicePool[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevicePools',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListDevicePools.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevicePools.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListDevices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListDevicesRequest) {
    super(scope, id);
  }

  public get devices(): shapes.DeviceFarmDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevices',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListDevices.devices'),
        outputPath: 'devices',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevices.devices', props);
    return resource.getResponseField('devices') as unknown as shapes.DeviceFarmDevice[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDevices',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListDevices.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDevices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListInstanceProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListInstanceProfilesRequest) {
    super(scope, id);
  }

  public get instanceProfiles(): shapes.DeviceFarmInstanceProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfiles',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListInstanceProfiles.instanceProfiles'),
        outputPath: 'instanceProfiles',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfiles.instanceProfiles', props);
    return resource.getResponseField('instanceProfiles') as unknown as shapes.DeviceFarmInstanceProfile[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInstanceProfiles',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListInstanceProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInstanceProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListJobsRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.DeviceFarmJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListJobs.jobs'),
        outputPath: 'jobs',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.DeviceFarmJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListNetworkProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListNetworkProfilesRequest) {
    super(scope, id);
  }

  public get networkProfiles(): shapes.DeviceFarmNetworkProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNetworkProfiles',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListNetworkProfiles.networkProfiles'),
        outputPath: 'networkProfiles',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNetworkProfiles.networkProfiles', props);
    return resource.getResponseField('networkProfiles') as unknown as shapes.DeviceFarmNetworkProfile[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNetworkProfiles',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListNetworkProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNetworkProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListOfferingPromotions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListOfferingPromotionsRequest) {
    super(scope, id);
  }

  public get offeringPromotions(): shapes.DeviceFarmOfferingPromotion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferingPromotions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListOfferingPromotions.offeringPromotions'),
        outputPath: 'offeringPromotions',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferingPromotions.offeringPromotions', props);
    return resource.getResponseField('offeringPromotions') as unknown as shapes.DeviceFarmOfferingPromotion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferingPromotions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListOfferingPromotions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferingPromotions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListOfferingTransactions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListOfferingTransactionsRequest) {
    super(scope, id);
  }

  public get offeringTransactions(): shapes.DeviceFarmOfferingTransaction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferingTransactions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListOfferingTransactions.offeringTransactions'),
        outputPath: 'offeringTransactions',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferingTransactions.offeringTransactions', props);
    return resource.getResponseField('offeringTransactions') as unknown as shapes.DeviceFarmOfferingTransaction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferingTransactions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListOfferingTransactions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferingTransactions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListOfferings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListOfferingsRequest) {
    super(scope, id);
  }

  public get offerings(): shapes.DeviceFarmOffering[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListOfferings.offerings'),
        outputPath: 'offerings',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferings.offerings', props);
    return resource.getResponseField('offerings') as unknown as shapes.DeviceFarmOffering[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listOfferings',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListOfferings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListOfferings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListProjectsRequest) {
    super(scope, id);
  }

  public get projects(): shapes.DeviceFarmProject[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListProjects.projects'),
        outputPath: 'projects',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.projects', props);
    return resource.getResponseField('projects') as unknown as shapes.DeviceFarmProject[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListProjects.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListRemoteAccessSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListRemoteAccessSessionsRequest) {
    super(scope, id);
  }

  public get remoteAccessSessions(): shapes.DeviceFarmRemoteAccessSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRemoteAccessSessions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListRemoteAccessSessions.remoteAccessSessions'),
        outputPath: 'remoteAccessSessions',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRemoteAccessSessions.remoteAccessSessions', props);
    return resource.getResponseField('remoteAccessSessions') as unknown as shapes.DeviceFarmRemoteAccessSession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRemoteAccessSessions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListRemoteAccessSessions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRemoteAccessSessions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListRuns extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListRunsRequest) {
    super(scope, id);
  }

  public get runs(): shapes.DeviceFarmRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuns',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListRuns.runs'),
        outputPath: 'runs',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuns.runs', props);
    return resource.getResponseField('runs') as unknown as shapes.DeviceFarmRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRuns',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListRuns.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRuns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListSamples extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListSamplesRequest) {
    super(scope, id);
  }

  public get samples(): shapes.DeviceFarmSample[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSamples',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListSamples.samples'),
        outputPath: 'samples',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSamples.samples', props);
    return resource.getResponseField('samples') as unknown as shapes.DeviceFarmSample[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSamples',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListSamples.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSamples.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListSuites extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListSuitesRequest) {
    super(scope, id);
  }

  public get suites(): shapes.DeviceFarmSuite[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuites',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListSuites.suites'),
        outputPath: 'suites',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSuites.suites', props);
    return resource.getResponseField('suites') as unknown as shapes.DeviceFarmSuite[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSuites',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListSuites.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSuites.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): shapes.DeviceFarmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DeviceFarmTag[];
  }

}

export class DeviceFarmListTestGridProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListTestGridProjectsRequest) {
    super(scope, id);
  }

  public get testGridProjects(): shapes.DeviceFarmTestGridProject[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridProjects',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridProjects.testGridProjects'),
        outputPath: 'testGridProjects',
        parameters: {
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridProjects.testGridProjects', props);
    return resource.getResponseField('testGridProjects') as unknown as shapes.DeviceFarmTestGridProject[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridProjects',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridProjects.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListTestGridSessionActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListTestGridSessionActionsRequest) {
    super(scope, id);
  }

  public get actions(): shapes.DeviceFarmTestGridSessionAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridSessionActions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridSessionActions.actions'),
        outputPath: 'actions',
        parameters: {
          sessionArn: this.input.sessionArn,
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridSessionActions.actions', props);
    return resource.getResponseField('actions') as unknown as shapes.DeviceFarmTestGridSessionAction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridSessionActions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridSessionActions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          sessionArn: this.input.sessionArn,
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridSessionActions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListTestGridSessionArtifacts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListTestGridSessionArtifactsRequest) {
    super(scope, id);
  }

  public get artifacts(): shapes.DeviceFarmTestGridSessionArtifact[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridSessionArtifacts',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridSessionArtifacts.artifacts'),
        outputPath: 'artifacts',
        parameters: {
          sessionArn: this.input.sessionArn,
          type: this.input.type,
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridSessionArtifacts.artifacts', props);
    return resource.getResponseField('artifacts') as unknown as shapes.DeviceFarmTestGridSessionArtifact[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridSessionArtifacts',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridSessionArtifacts.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          sessionArn: this.input.sessionArn,
          type: this.input.type,
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridSessionArtifacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListTestGridSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListTestGridSessionsRequest) {
    super(scope, id);
  }

  public get testGridSessions(): shapes.DeviceFarmTestGridSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridSessions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridSessions.testGridSessions'),
        outputPath: 'testGridSessions',
        parameters: {
          projectArn: this.input.projectArn,
          status: this.input.status,
          creationTimeAfter: this.input.creationTimeAfter,
          creationTimeBefore: this.input.creationTimeBefore,
          endTimeAfter: this.input.endTimeAfter,
          endTimeBefore: this.input.endTimeBefore,
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridSessions.testGridSessions', props);
    return resource.getResponseField('testGridSessions') as unknown as shapes.DeviceFarmTestGridSession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTestGridSessions',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTestGridSessions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          projectArn: this.input.projectArn,
          status: this.input.status,
          creationTimeAfter: this.input.creationTimeAfter,
          creationTimeBefore: this.input.creationTimeBefore,
          endTimeAfter: this.input.endTimeAfter,
          endTimeBefore: this.input.endTimeBefore,
          maxResult: this.input.maxResult,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTestGridSessions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListTests extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListTestsRequest) {
    super(scope, id);
  }

  public get tests(): shapes.DeviceFarmTest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTests',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTests.tests'),
        outputPath: 'tests',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTests.tests', props);
    return resource.getResponseField('tests') as unknown as shapes.DeviceFarmTest[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTests',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListTests.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTests.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListUniqueProblems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListUniqueProblemsRequest) {
    super(scope, id);
  }

  public get uniqueProblems(): Record<string, shapes.DeviceFarmUniqueProblem[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUniqueProblems',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListUniqueProblems.uniqueProblems'),
        outputPath: 'uniqueProblems',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUniqueProblems.uniqueProblems', props);
    return resource.getResponseField('uniqueProblems') as unknown as Record<string, shapes.DeviceFarmUniqueProblem[]>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUniqueProblems',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListUniqueProblems.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUniqueProblems.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListUploads extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListUploadsRequest) {
    super(scope, id);
  }

  public get uploads(): shapes.DeviceFarmUpload[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUploads',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListUploads.uploads'),
        outputPath: 'uploads',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUploads.uploads', props);
    return resource.getResponseField('uploads') as unknown as shapes.DeviceFarmUpload[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUploads',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListUploads.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          arn: this.input.arn,
          type: this.input.type,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUploads.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmListVpceConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmListVpceConfigurationsRequest) {
    super(scope, id);
  }

  public get vpceConfigurations(): shapes.DeviceFarmVpceConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVpceConfigurations',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListVPCEConfigurations.vpceConfigurations'),
        outputPath: 'vpceConfigurations',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVPCEConfigurations.vpceConfigurations', props);
    return resource.getResponseField('vpceConfigurations') as unknown as shapes.DeviceFarmVpceConfiguration[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVpceConfigurations',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ListVPCEConfigurations.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVPCEConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmPurchaseOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get offeringTransaction(): DeviceFarmPurchaseOfferingOfferingTransaction {
    return new DeviceFarmPurchaseOfferingOfferingTransaction(this, 'OfferingTransaction', this.__resources, this.input);
  }

}

export class DeviceFarmPurchaseOfferingOfferingTransaction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get offeringStatus(): DeviceFarmPurchaseOfferingOfferingTransactionOfferingStatus {
    return new DeviceFarmPurchaseOfferingOfferingTransactionOfferingStatus(this, 'OfferingStatus', this.__resources, this.input);
  }

  public get transactionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.transactionId'),
        outputPath: 'offeringTransaction.transactionId',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.transactionId', props);
    return resource.getResponseField('offeringTransaction.transactionId') as unknown as string;
  }

  public get offeringPromotionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringPromotionId'),
        outputPath: 'offeringTransaction.offeringPromotionId',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringPromotionId', props);
    return resource.getResponseField('offeringTransaction.offeringPromotionId') as unknown as string;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.createdOn'),
        outputPath: 'offeringTransaction.createdOn',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.createdOn', props);
    return resource.getResponseField('offeringTransaction.createdOn') as unknown as string;
  }

  public get cost(): DeviceFarmPurchaseOfferingOfferingTransactionCost {
    return new DeviceFarmPurchaseOfferingOfferingTransactionCost(this, 'Cost', this.__resources, this.input);
  }

}

export class DeviceFarmPurchaseOfferingOfferingTransactionOfferingStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.type'),
        outputPath: 'offeringTransaction.offeringStatus.type',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.type', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.type') as unknown as string;
  }

  public get offering(): DeviceFarmPurchaseOfferingOfferingTransactionOfferingStatusOffering {
    return new DeviceFarmPurchaseOfferingOfferingTransactionOfferingStatusOffering(this, 'Offering', this.__resources, this.input);
  }

  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.quantity'),
        outputPath: 'offeringTransaction.offeringStatus.quantity',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.quantity', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.quantity') as unknown as number;
  }

  public get effectiveOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.effectiveOn'),
        outputPath: 'offeringTransaction.offeringStatus.effectiveOn',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.effectiveOn', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.effectiveOn') as unknown as string;
  }

}

export class DeviceFarmPurchaseOfferingOfferingTransactionOfferingStatusOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.offering.id'),
        outputPath: 'offeringTransaction.offeringStatus.offering.id',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.id', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.offering.description'),
        outputPath: 'offeringTransaction.offeringStatus.offering.description',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.description', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.offering.type'),
        outputPath: 'offeringTransaction.offeringStatus.offering.type',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.type', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.type') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.offering.platform'),
        outputPath: 'offeringTransaction.offeringStatus.offering.platform',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.platform', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.platform') as unknown as string;
  }

  public get recurringCharges(): shapes.DeviceFarmRecurringCharge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.offeringStatus.offering.recurringCharges'),
        outputPath: 'offeringTransaction.offeringStatus.offering.recurringCharges',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.recurringCharges', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.recurringCharges') as unknown as shapes.DeviceFarmRecurringCharge[];
  }

}

export class DeviceFarmPurchaseOfferingOfferingTransactionCost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmPurchaseOfferingRequest) {
    super(scope, id);
  }

  public get amount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.cost.amount'),
        outputPath: 'offeringTransaction.cost.amount',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.cost.amount', props);
    return resource.getResponseField('offeringTransaction.cost.amount') as unknown as number;
  }

  public get currencyCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.PurchaseOffering.offeringTransaction.cost.currencyCode'),
        outputPath: 'offeringTransaction.cost.currencyCode',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
          offeringPromotionId: this.input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseOffering.offeringTransaction.cost.currencyCode', props);
    return resource.getResponseField('offeringTransaction.cost.currencyCode') as unknown as string;
  }

}

export class DeviceFarmRenewOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmRenewOfferingRequest) {
    super(scope, id);
  }

  public get offeringTransaction(): DeviceFarmRenewOfferingOfferingTransaction {
    return new DeviceFarmRenewOfferingOfferingTransaction(this, 'OfferingTransaction', this.__resources, this.input);
  }

}

export class DeviceFarmRenewOfferingOfferingTransaction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmRenewOfferingRequest) {
    super(scope, id);
  }

  public get offeringStatus(): DeviceFarmRenewOfferingOfferingTransactionOfferingStatus {
    return new DeviceFarmRenewOfferingOfferingTransactionOfferingStatus(this, 'OfferingStatus', this.__resources, this.input);
  }

  public get transactionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.transactionId'),
        outputPath: 'offeringTransaction.transactionId',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.transactionId', props);
    return resource.getResponseField('offeringTransaction.transactionId') as unknown as string;
  }

  public get offeringPromotionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringPromotionId'),
        outputPath: 'offeringTransaction.offeringPromotionId',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringPromotionId', props);
    return resource.getResponseField('offeringTransaction.offeringPromotionId') as unknown as string;
  }

  public get createdOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.createdOn'),
        outputPath: 'offeringTransaction.createdOn',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.createdOn', props);
    return resource.getResponseField('offeringTransaction.createdOn') as unknown as string;
  }

  public get cost(): DeviceFarmRenewOfferingOfferingTransactionCost {
    return new DeviceFarmRenewOfferingOfferingTransactionCost(this, 'Cost', this.__resources, this.input);
  }

}

export class DeviceFarmRenewOfferingOfferingTransactionOfferingStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmRenewOfferingRequest) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.type'),
        outputPath: 'offeringTransaction.offeringStatus.type',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.type', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.type') as unknown as string;
  }

  public get offering(): DeviceFarmRenewOfferingOfferingTransactionOfferingStatusOffering {
    return new DeviceFarmRenewOfferingOfferingTransactionOfferingStatusOffering(this, 'Offering', this.__resources, this.input);
  }

  public get quantity(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.quantity'),
        outputPath: 'offeringTransaction.offeringStatus.quantity',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.quantity', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.quantity') as unknown as number;
  }

  public get effectiveOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.effectiveOn'),
        outputPath: 'offeringTransaction.offeringStatus.effectiveOn',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.effectiveOn', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.effectiveOn') as unknown as string;
  }

}

export class DeviceFarmRenewOfferingOfferingTransactionOfferingStatusOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmRenewOfferingRequest) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.offering.id'),
        outputPath: 'offeringTransaction.offeringStatus.offering.id',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.offering.id', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.id') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.offering.description'),
        outputPath: 'offeringTransaction.offeringStatus.offering.description',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.offering.description', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.offering.type'),
        outputPath: 'offeringTransaction.offeringStatus.offering.type',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.offering.type', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.type') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.offering.platform'),
        outputPath: 'offeringTransaction.offeringStatus.offering.platform',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.offering.platform', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.platform') as unknown as string;
  }

  public get recurringCharges(): shapes.DeviceFarmRecurringCharge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.offeringStatus.offering.recurringCharges'),
        outputPath: 'offeringTransaction.offeringStatus.offering.recurringCharges',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.offeringStatus.offering.recurringCharges', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.recurringCharges') as unknown as shapes.DeviceFarmRecurringCharge[];
  }

}

export class DeviceFarmRenewOfferingOfferingTransactionCost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmRenewOfferingRequest) {
    super(scope, id);
  }

  public get amount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.cost.amount'),
        outputPath: 'offeringTransaction.cost.amount',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.cost.amount', props);
    return resource.getResponseField('offeringTransaction.cost.amount') as unknown as number;
  }

  public get currencyCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'renewOffering',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.RenewOffering.offeringTransaction.cost.currencyCode'),
        outputPath: 'offeringTransaction.cost.currencyCode',
        parameters: {
          offeringId: this.input.offeringId,
          quantity: this.input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RenewOffering.offeringTransaction.cost.currencyCode', props);
    return resource.getResponseField('offeringTransaction.cost.currencyCode') as unknown as string;
  }

}

export class DeviceFarmScheduleRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get run(): DeviceFarmScheduleRunRun {
    return new DeviceFarmScheduleRunRun(this, 'Run', this.__resources, this.input);
  }

}

export class DeviceFarmScheduleRunRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.arn'),
        outputPath: 'run.arn',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.arn', props);
    return resource.getResponseField('run.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.name'),
        outputPath: 'run.name',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.name', props);
    return resource.getResponseField('run.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.type'),
        outputPath: 'run.type',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.type', props);
    return resource.getResponseField('run.type') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.platform'),
        outputPath: 'run.platform',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.platform', props);
    return resource.getResponseField('run.platform') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.created'),
        outputPath: 'run.created',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.created', props);
    return resource.getResponseField('run.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.status'),
        outputPath: 'run.status',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.status', props);
    return resource.getResponseField('run.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.result'),
        outputPath: 'run.result',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.result', props);
    return resource.getResponseField('run.result') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.started'),
        outputPath: 'run.started',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.started', props);
    return resource.getResponseField('run.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.stopped'),
        outputPath: 'run.stopped',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.stopped', props);
    return resource.getResponseField('run.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmScheduleRunRunCounters {
    return new DeviceFarmScheduleRunRunCounters(this, 'Counters', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.message'),
        outputPath: 'run.message',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.message', props);
    return resource.getResponseField('run.message') as unknown as string;
  }

  public get totalJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.totalJobs'),
        outputPath: 'run.totalJobs',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.totalJobs', props);
    return resource.getResponseField('run.totalJobs') as unknown as number;
  }

  public get completedJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.completedJobs'),
        outputPath: 'run.completedJobs',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.completedJobs', props);
    return resource.getResponseField('run.completedJobs') as unknown as number;
  }

  public get billingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.billingMethod'),
        outputPath: 'run.billingMethod',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.billingMethod', props);
    return resource.getResponseField('run.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmScheduleRunRunDeviceMinutes {
    return new DeviceFarmScheduleRunRunDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get networkProfile(): DeviceFarmScheduleRunRunNetworkProfile {
    return new DeviceFarmScheduleRunRunNetworkProfile(this, 'NetworkProfile', this.__resources, this.input);
  }

  public get parsingResultUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.parsingResultUrl'),
        outputPath: 'run.parsingResultUrl',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.parsingResultUrl', props);
    return resource.getResponseField('run.parsingResultUrl') as unknown as string;
  }

  public get resultCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.resultCode'),
        outputPath: 'run.resultCode',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.resultCode', props);
    return resource.getResponseField('run.resultCode') as unknown as string;
  }

  public get seed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.seed'),
        outputPath: 'run.seed',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.seed', props);
    return resource.getResponseField('run.seed') as unknown as number;
  }

  public get appUpload(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.appUpload'),
        outputPath: 'run.appUpload',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.appUpload', props);
    return resource.getResponseField('run.appUpload') as unknown as string;
  }

  public get eventCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.eventCount'),
        outputPath: 'run.eventCount',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.eventCount', props);
    return resource.getResponseField('run.eventCount') as unknown as number;
  }

  public get jobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.jobTimeoutMinutes'),
        outputPath: 'run.jobTimeoutMinutes',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.jobTimeoutMinutes', props);
    return resource.getResponseField('run.jobTimeoutMinutes') as unknown as number;
  }

  public get devicePoolArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.devicePoolArn'),
        outputPath: 'run.devicePoolArn',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.devicePoolArn', props);
    return resource.getResponseField('run.devicePoolArn') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.locale'),
        outputPath: 'run.locale',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.locale', props);
    return resource.getResponseField('run.locale') as unknown as string;
  }

  public get radios(): DeviceFarmScheduleRunRunRadios {
    return new DeviceFarmScheduleRunRunRadios(this, 'Radios', this.__resources, this.input);
  }

  public get location(): DeviceFarmScheduleRunRunLocation {
    return new DeviceFarmScheduleRunRunLocation(this, 'Location', this.__resources, this.input);
  }

  public get customerArtifactPaths(): DeviceFarmScheduleRunRunCustomerArtifactPaths {
    return new DeviceFarmScheduleRunRunCustomerArtifactPaths(this, 'CustomerArtifactPaths', this.__resources, this.input);
  }

  public get webUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.webUrl'),
        outputPath: 'run.webUrl',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.webUrl', props);
    return resource.getResponseField('run.webUrl') as unknown as string;
  }

  public get skipAppResign(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.skipAppResign'),
        outputPath: 'run.skipAppResign',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.skipAppResign', props);
    return resource.getResponseField('run.skipAppResign') as unknown as boolean;
  }

  public get testSpecArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.testSpecArn'),
        outputPath: 'run.testSpecArn',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.testSpecArn', props);
    return resource.getResponseField('run.testSpecArn') as unknown as string;
  }

  public get deviceSelectionResult(): DeviceFarmScheduleRunRunDeviceSelectionResult {
    return new DeviceFarmScheduleRunRunDeviceSelectionResult(this, 'DeviceSelectionResult', this.__resources, this.input);
  }

}

export class DeviceFarmScheduleRunRunCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.counters.total'),
        outputPath: 'run.counters.total',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.counters.total', props);
    return resource.getResponseField('run.counters.total') as unknown as number;
  }

  public get passed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.counters.passed'),
        outputPath: 'run.counters.passed',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.counters.passed', props);
    return resource.getResponseField('run.counters.passed') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.counters.failed'),
        outputPath: 'run.counters.failed',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.counters.failed', props);
    return resource.getResponseField('run.counters.failed') as unknown as number;
  }

  public get warned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.counters.warned'),
        outputPath: 'run.counters.warned',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.counters.warned', props);
    return resource.getResponseField('run.counters.warned') as unknown as number;
  }

  public get errored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.counters.errored'),
        outputPath: 'run.counters.errored',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.counters.errored', props);
    return resource.getResponseField('run.counters.errored') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.counters.stopped'),
        outputPath: 'run.counters.stopped',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.counters.stopped', props);
    return resource.getResponseField('run.counters.stopped') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.counters.skipped'),
        outputPath: 'run.counters.skipped',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.counters.skipped', props);
    return resource.getResponseField('run.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmScheduleRunRunDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.deviceMinutes.total'),
        outputPath: 'run.deviceMinutes.total',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.deviceMinutes.total', props);
    return resource.getResponseField('run.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.deviceMinutes.metered'),
        outputPath: 'run.deviceMinutes.metered',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.deviceMinutes.metered', props);
    return resource.getResponseField('run.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.deviceMinutes.unmetered'),
        outputPath: 'run.deviceMinutes.unmetered',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.deviceMinutes.unmetered', props);
    return resource.getResponseField('run.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmScheduleRunRunNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.arn'),
        outputPath: 'run.networkProfile.arn',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.arn', props);
    return resource.getResponseField('run.networkProfile.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.name'),
        outputPath: 'run.networkProfile.name',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.name', props);
    return resource.getResponseField('run.networkProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.description'),
        outputPath: 'run.networkProfile.description',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.description', props);
    return resource.getResponseField('run.networkProfile.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.type'),
        outputPath: 'run.networkProfile.type',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.type', props);
    return resource.getResponseField('run.networkProfile.type') as unknown as string;
  }

  public get uplinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.uplinkBandwidthBits'),
        outputPath: 'run.networkProfile.uplinkBandwidthBits',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.uplinkBandwidthBits', props);
    return resource.getResponseField('run.networkProfile.uplinkBandwidthBits') as unknown as number;
  }

  public get downlinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.downlinkBandwidthBits'),
        outputPath: 'run.networkProfile.downlinkBandwidthBits',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.downlinkBandwidthBits', props);
    return resource.getResponseField('run.networkProfile.downlinkBandwidthBits') as unknown as number;
  }

  public get uplinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.uplinkDelayMs'),
        outputPath: 'run.networkProfile.uplinkDelayMs',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.uplinkDelayMs', props);
    return resource.getResponseField('run.networkProfile.uplinkDelayMs') as unknown as number;
  }

  public get downlinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.downlinkDelayMs'),
        outputPath: 'run.networkProfile.downlinkDelayMs',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.downlinkDelayMs', props);
    return resource.getResponseField('run.networkProfile.downlinkDelayMs') as unknown as number;
  }

  public get uplinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.uplinkJitterMs'),
        outputPath: 'run.networkProfile.uplinkJitterMs',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.uplinkJitterMs', props);
    return resource.getResponseField('run.networkProfile.uplinkJitterMs') as unknown as number;
  }

  public get downlinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.downlinkJitterMs'),
        outputPath: 'run.networkProfile.downlinkJitterMs',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.downlinkJitterMs', props);
    return resource.getResponseField('run.networkProfile.downlinkJitterMs') as unknown as number;
  }

  public get uplinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.uplinkLossPercent'),
        outputPath: 'run.networkProfile.uplinkLossPercent',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.uplinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.uplinkLossPercent') as unknown as number;
  }

  public get downlinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.networkProfile.downlinkLossPercent'),
        outputPath: 'run.networkProfile.downlinkLossPercent',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmScheduleRunRunRadios extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get wifi(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.radios.wifi'),
        outputPath: 'run.radios.wifi',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.radios.wifi', props);
    return resource.getResponseField('run.radios.wifi') as unknown as boolean;
  }

  public get bluetooth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.radios.bluetooth'),
        outputPath: 'run.radios.bluetooth',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.radios.bluetooth', props);
    return resource.getResponseField('run.radios.bluetooth') as unknown as boolean;
  }

  public get nfc(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.radios.nfc'),
        outputPath: 'run.radios.nfc',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.radios.nfc', props);
    return resource.getResponseField('run.radios.nfc') as unknown as boolean;
  }

  public get gps(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.radios.gps'),
        outputPath: 'run.radios.gps',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.radios.gps', props);
    return resource.getResponseField('run.radios.gps') as unknown as boolean;
  }

}

export class DeviceFarmScheduleRunRunLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get latitude(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.location.latitude'),
        outputPath: 'run.location.latitude',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.location.latitude', props);
    return resource.getResponseField('run.location.latitude') as unknown as number;
  }

  public get longitude(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.location.longitude'),
        outputPath: 'run.location.longitude',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.location.longitude', props);
    return resource.getResponseField('run.location.longitude') as unknown as number;
  }

}

export class DeviceFarmScheduleRunRunCustomerArtifactPaths extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get iosPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.customerArtifactPaths.iosPaths'),
        outputPath: 'run.customerArtifactPaths.iosPaths',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.customerArtifactPaths.iosPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.iosPaths') as unknown as string[];
  }

  public get androidPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.customerArtifactPaths.androidPaths'),
        outputPath: 'run.customerArtifactPaths.androidPaths',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.customerArtifactPaths.androidPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.androidPaths') as unknown as string[];
  }

  public get deviceHostPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.customerArtifactPaths.deviceHostPaths'),
        outputPath: 'run.customerArtifactPaths.deviceHostPaths',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.customerArtifactPaths.deviceHostPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.deviceHostPaths') as unknown as string[];
  }

}

export class DeviceFarmScheduleRunRunDeviceSelectionResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmScheduleRunRequest) {
    super(scope, id);
  }

  public get filters(): shapes.DeviceFarmDeviceFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.deviceSelectionResult.filters'),
        outputPath: 'run.deviceSelectionResult.filters',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.deviceSelectionResult.filters', props);
    return resource.getResponseField('run.deviceSelectionResult.filters') as unknown as shapes.DeviceFarmDeviceFilter[];
  }

  public get matchedDevicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.deviceSelectionResult.matchedDevicesCount'),
        outputPath: 'run.deviceSelectionResult.matchedDevicesCount',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.deviceSelectionResult.matchedDevicesCount', props);
    return resource.getResponseField('run.deviceSelectionResult.matchedDevicesCount') as unknown as number;
  }

  public get maxDevices(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'scheduleRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.ScheduleRun.run.deviceSelectionResult.maxDevices'),
        outputPath: 'run.deviceSelectionResult.maxDevices',
        parameters: {
          projectArn: this.input.projectArn,
          appArn: this.input.appArn,
          devicePoolArn: this.input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.input.deviceSelectionConfiguration?.filters,
            maxDevices: this.input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.input.name,
          test: {
            type: this.input.test.type,
            testPackageArn: this.input.test.testPackageArn,
            testSpecArn: this.input.test.testSpecArn,
            filter: this.input.test.filter,
            parameters: this.input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.input.configuration?.extraDataPackageArn,
            networkProfileArn: this.input.configuration?.networkProfileArn,
            locale: this.input.configuration?.locale,
            location: {
              latitude: this.input.configuration?.location?.latitude,
              longitude: this.input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.input.configuration?.radios?.wifi,
              bluetooth: this.input.configuration?.radios?.bluetooth,
              nfc: this.input.configuration?.radios?.nfc,
              gps: this.input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.input.configuration?.auxiliaryApps,
            billingMethod: this.input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.input.executionConfiguration?.videoCapture,
            skipAppResign: this.input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ScheduleRun.run.deviceSelectionResult.maxDevices', props);
    return resource.getResponseField('run.deviceSelectionResult.maxDevices') as unknown as number;
  }

}

export class DeviceFarmStopJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopJobRequest) {
    super(scope, id);
  }

  public get job(): DeviceFarmStopJobJob {
    return new DeviceFarmStopJobJob(this, 'Job', this.__resources, this.input);
  }

}

export class DeviceFarmStopJobJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.arn'),
        outputPath: 'job.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.arn', props);
    return resource.getResponseField('job.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.name'),
        outputPath: 'job.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.name', props);
    return resource.getResponseField('job.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.type'),
        outputPath: 'job.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.type', props);
    return resource.getResponseField('job.type') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.created'),
        outputPath: 'job.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.created', props);
    return resource.getResponseField('job.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.status'),
        outputPath: 'job.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.status', props);
    return resource.getResponseField('job.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.result'),
        outputPath: 'job.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.result', props);
    return resource.getResponseField('job.result') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.started'),
        outputPath: 'job.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.started', props);
    return resource.getResponseField('job.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.stopped'),
        outputPath: 'job.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.stopped', props);
    return resource.getResponseField('job.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmStopJobJobCounters {
    return new DeviceFarmStopJobJobCounters(this, 'Counters', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.message'),
        outputPath: 'job.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.message', props);
    return resource.getResponseField('job.message') as unknown as string;
  }

  public get device(): DeviceFarmStopJobJobDevice {
    return new DeviceFarmStopJobJobDevice(this, 'Device', this.__resources, this.input);
  }

  public get instanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.instanceArn'),
        outputPath: 'job.instanceArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.instanceArn', props);
    return resource.getResponseField('job.instanceArn') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmStopJobJobDeviceMinutes {
    return new DeviceFarmStopJobJobDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get videoEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.videoEndpoint'),
        outputPath: 'job.videoEndpoint',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.videoEndpoint', props);
    return resource.getResponseField('job.videoEndpoint') as unknown as string;
  }

  public get videoCapture(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.videoCapture'),
        outputPath: 'job.videoCapture',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.videoCapture', props);
    return resource.getResponseField('job.videoCapture') as unknown as boolean;
  }

}

export class DeviceFarmStopJobJobCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopJobRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.counters.total'),
        outputPath: 'job.counters.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.counters.total', props);
    return resource.getResponseField('job.counters.total') as unknown as number;
  }

  public get passed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.counters.passed'),
        outputPath: 'job.counters.passed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.counters.passed', props);
    return resource.getResponseField('job.counters.passed') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.counters.failed'),
        outputPath: 'job.counters.failed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.counters.failed', props);
    return resource.getResponseField('job.counters.failed') as unknown as number;
  }

  public get warned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.counters.warned'),
        outputPath: 'job.counters.warned',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.counters.warned', props);
    return resource.getResponseField('job.counters.warned') as unknown as number;
  }

  public get errored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.counters.errored'),
        outputPath: 'job.counters.errored',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.counters.errored', props);
    return resource.getResponseField('job.counters.errored') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.counters.stopped'),
        outputPath: 'job.counters.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.counters.stopped', props);
    return resource.getResponseField('job.counters.stopped') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.counters.skipped'),
        outputPath: 'job.counters.skipped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.counters.skipped', props);
    return resource.getResponseField('job.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmStopJobJobDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.arn'),
        outputPath: 'job.device.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.arn', props);
    return resource.getResponseField('job.device.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.name'),
        outputPath: 'job.device.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.name', props);
    return resource.getResponseField('job.device.name') as unknown as string;
  }

  public get manufacturer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.manufacturer'),
        outputPath: 'job.device.manufacturer',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.manufacturer', props);
    return resource.getResponseField('job.device.manufacturer') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.model'),
        outputPath: 'job.device.model',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.model', props);
    return resource.getResponseField('job.device.model') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.modelId'),
        outputPath: 'job.device.modelId',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.modelId', props);
    return resource.getResponseField('job.device.modelId') as unknown as string;
  }

  public get formFactor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.formFactor'),
        outputPath: 'job.device.formFactor',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.formFactor', props);
    return resource.getResponseField('job.device.formFactor') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.platform'),
        outputPath: 'job.device.platform',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.platform', props);
    return resource.getResponseField('job.device.platform') as unknown as string;
  }

  public get os(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.os'),
        outputPath: 'job.device.os',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.os', props);
    return resource.getResponseField('job.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmStopJobJobDeviceCpu {
    return new DeviceFarmStopJobJobDeviceCpu(this, 'Cpu', this.__resources, this.input);
  }

  public get resolution(): DeviceFarmStopJobJobDeviceResolution {
    return new DeviceFarmStopJobJobDeviceResolution(this, 'Resolution', this.__resources, this.input);
  }

  public get heapSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.heapSize'),
        outputPath: 'job.device.heapSize',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.heapSize', props);
    return resource.getResponseField('job.device.heapSize') as unknown as number;
  }

  public get memory(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.memory'),
        outputPath: 'job.device.memory',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.memory', props);
    return resource.getResponseField('job.device.memory') as unknown as number;
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.image'),
        outputPath: 'job.device.image',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.image', props);
    return resource.getResponseField('job.device.image') as unknown as string;
  }

  public get carrier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.carrier'),
        outputPath: 'job.device.carrier',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.carrier', props);
    return resource.getResponseField('job.device.carrier') as unknown as string;
  }

  public get radio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.radio'),
        outputPath: 'job.device.radio',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.radio', props);
    return resource.getResponseField('job.device.radio') as unknown as string;
  }

  public get remoteAccessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.remoteAccessEnabled'),
        outputPath: 'job.device.remoteAccessEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.remoteAccessEnabled', props);
    return resource.getResponseField('job.device.remoteAccessEnabled') as unknown as boolean;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.remoteDebugEnabled'),
        outputPath: 'job.device.remoteDebugEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.remoteDebugEnabled', props);
    return resource.getResponseField('job.device.remoteDebugEnabled') as unknown as boolean;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.fleetType'),
        outputPath: 'job.device.fleetType',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.fleetType', props);
    return resource.getResponseField('job.device.fleetType') as unknown as string;
  }

  public get fleetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.fleetName'),
        outputPath: 'job.device.fleetName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.fleetName', props);
    return resource.getResponseField('job.device.fleetName') as unknown as string;
  }

  public get instances(): shapes.DeviceFarmDeviceInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.instances'),
        outputPath: 'job.device.instances',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.instances', props);
    return resource.getResponseField('job.device.instances') as unknown as shapes.DeviceFarmDeviceInstance[];
  }

  public get availability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.availability'),
        outputPath: 'job.device.availability',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.availability', props);
    return resource.getResponseField('job.device.availability') as unknown as string;
  }

}

export class DeviceFarmStopJobJobDeviceCpu extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopJobRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.cpu.frequency'),
        outputPath: 'job.device.cpu.frequency',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.cpu.frequency', props);
    return resource.getResponseField('job.device.cpu.frequency') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.cpu.architecture'),
        outputPath: 'job.device.cpu.architecture',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.cpu.architecture', props);
    return resource.getResponseField('job.device.cpu.architecture') as unknown as string;
  }

  public get clock(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.cpu.clock'),
        outputPath: 'job.device.cpu.clock',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.cpu.clock', props);
    return resource.getResponseField('job.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmStopJobJobDeviceResolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopJobRequest) {
    super(scope, id);
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.resolution.width'),
        outputPath: 'job.device.resolution.width',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.resolution.width', props);
    return resource.getResponseField('job.device.resolution.width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.device.resolution.height'),
        outputPath: 'job.device.resolution.height',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.device.resolution.height', props);
    return resource.getResponseField('job.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmStopJobJobDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopJobRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.deviceMinutes.total'),
        outputPath: 'job.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.deviceMinutes.total', props);
    return resource.getResponseField('job.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.deviceMinutes.metered'),
        outputPath: 'job.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.deviceMinutes.metered', props);
    return resource.getResponseField('job.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopJob',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopJob.job.deviceMinutes.unmetered'),
        outputPath: 'job.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopJob.job.deviceMinutes.unmetered', props);
    return resource.getResponseField('job.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmStopRemoteAccessSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get remoteAccessSession(): DeviceFarmStopRemoteAccessSessionRemoteAccessSession {
    return new DeviceFarmStopRemoteAccessSessionRemoteAccessSession(this, 'RemoteAccessSession', this.__resources, this.input);
  }

}

export class DeviceFarmStopRemoteAccessSessionRemoteAccessSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.arn'),
        outputPath: 'remoteAccessSession.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.arn', props);
    return resource.getResponseField('remoteAccessSession.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.name'),
        outputPath: 'remoteAccessSession.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.name', props);
    return resource.getResponseField('remoteAccessSession.name') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.created'),
        outputPath: 'remoteAccessSession.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.created', props);
    return resource.getResponseField('remoteAccessSession.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.status'),
        outputPath: 'remoteAccessSession.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.status', props);
    return resource.getResponseField('remoteAccessSession.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.result'),
        outputPath: 'remoteAccessSession.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.result', props);
    return resource.getResponseField('remoteAccessSession.result') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.message'),
        outputPath: 'remoteAccessSession.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.message', props);
    return resource.getResponseField('remoteAccessSession.message') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.started'),
        outputPath: 'remoteAccessSession.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.started', props);
    return resource.getResponseField('remoteAccessSession.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.stopped'),
        outputPath: 'remoteAccessSession.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.stopped', props);
    return resource.getResponseField('remoteAccessSession.stopped') as unknown as string;
  }

  public get device(): DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDevice {
    return new DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDevice(this, 'Device', this.__resources, this.input);
  }

  public get instanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.instanceArn'),
        outputPath: 'remoteAccessSession.instanceArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.instanceArn', props);
    return resource.getResponseField('remoteAccessSession.instanceArn') as unknown as string;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.remoteDebugEnabled'),
        outputPath: 'remoteAccessSession.remoteDebugEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.remoteDebugEnabled', props);
    return resource.getResponseField('remoteAccessSession.remoteDebugEnabled') as unknown as boolean;
  }

  public get remoteRecordEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.remoteRecordEnabled'),
        outputPath: 'remoteAccessSession.remoteRecordEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.remoteRecordEnabled', props);
    return resource.getResponseField('remoteAccessSession.remoteRecordEnabled') as unknown as boolean;
  }

  public get remoteRecordAppArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.remoteRecordAppArn'),
        outputPath: 'remoteAccessSession.remoteRecordAppArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.remoteRecordAppArn', props);
    return resource.getResponseField('remoteAccessSession.remoteRecordAppArn') as unknown as string;
  }

  public get hostAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.hostAddress'),
        outputPath: 'remoteAccessSession.hostAddress',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.hostAddress', props);
    return resource.getResponseField('remoteAccessSession.hostAddress') as unknown as string;
  }

  public get clientId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.clientId'),
        outputPath: 'remoteAccessSession.clientId',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.clientId', props);
    return resource.getResponseField('remoteAccessSession.clientId') as unknown as string;
  }

  public get billingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.billingMethod'),
        outputPath: 'remoteAccessSession.billingMethod',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.billingMethod', props);
    return resource.getResponseField('remoteAccessSession.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes {
    return new DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.endpoint'),
        outputPath: 'remoteAccessSession.endpoint',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.endpoint', props);
    return resource.getResponseField('remoteAccessSession.endpoint') as unknown as string;
  }

  public get deviceUdid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.deviceUdid'),
        outputPath: 'remoteAccessSession.deviceUdid',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.deviceUdid', props);
    return resource.getResponseField('remoteAccessSession.deviceUdid') as unknown as string;
  }

  public get interactionMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.interactionMode'),
        outputPath: 'remoteAccessSession.interactionMode',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.interactionMode', props);
    return resource.getResponseField('remoteAccessSession.interactionMode') as unknown as string;
  }

  public get skipAppResign(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.skipAppResign'),
        outputPath: 'remoteAccessSession.skipAppResign',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.skipAppResign', props);
    return resource.getResponseField('remoteAccessSession.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDevice extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.arn'),
        outputPath: 'remoteAccessSession.device.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.arn', props);
    return resource.getResponseField('remoteAccessSession.device.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.name'),
        outputPath: 'remoteAccessSession.device.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.name', props);
    return resource.getResponseField('remoteAccessSession.device.name') as unknown as string;
  }

  public get manufacturer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.manufacturer'),
        outputPath: 'remoteAccessSession.device.manufacturer',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.manufacturer', props);
    return resource.getResponseField('remoteAccessSession.device.manufacturer') as unknown as string;
  }

  public get model(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.model'),
        outputPath: 'remoteAccessSession.device.model',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.model', props);
    return resource.getResponseField('remoteAccessSession.device.model') as unknown as string;
  }

  public get modelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.modelId'),
        outputPath: 'remoteAccessSession.device.modelId',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.modelId', props);
    return resource.getResponseField('remoteAccessSession.device.modelId') as unknown as string;
  }

  public get formFactor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.formFactor'),
        outputPath: 'remoteAccessSession.device.formFactor',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.formFactor', props);
    return resource.getResponseField('remoteAccessSession.device.formFactor') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.platform'),
        outputPath: 'remoteAccessSession.device.platform',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.platform', props);
    return resource.getResponseField('remoteAccessSession.device.platform') as unknown as string;
  }

  public get os(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.os'),
        outputPath: 'remoteAccessSession.device.os',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.os', props);
    return resource.getResponseField('remoteAccessSession.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceCpu {
    return new DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceCpu(this, 'Cpu', this.__resources, this.input);
  }

  public get resolution(): DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceResolution {
    return new DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceResolution(this, 'Resolution', this.__resources, this.input);
  }

  public get heapSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.heapSize'),
        outputPath: 'remoteAccessSession.device.heapSize',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.heapSize', props);
    return resource.getResponseField('remoteAccessSession.device.heapSize') as unknown as number;
  }

  public get memory(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.memory'),
        outputPath: 'remoteAccessSession.device.memory',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.memory', props);
    return resource.getResponseField('remoteAccessSession.device.memory') as unknown as number;
  }

  public get image(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.image'),
        outputPath: 'remoteAccessSession.device.image',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.image', props);
    return resource.getResponseField('remoteAccessSession.device.image') as unknown as string;
  }

  public get carrier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.carrier'),
        outputPath: 'remoteAccessSession.device.carrier',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.carrier', props);
    return resource.getResponseField('remoteAccessSession.device.carrier') as unknown as string;
  }

  public get radio(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.radio'),
        outputPath: 'remoteAccessSession.device.radio',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.radio', props);
    return resource.getResponseField('remoteAccessSession.device.radio') as unknown as string;
  }

  public get remoteAccessEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled'),
        outputPath: 'remoteAccessSession.device.remoteAccessEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled', props);
    return resource.getResponseField('remoteAccessSession.device.remoteAccessEnabled') as unknown as boolean;
  }

  public get remoteDebugEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled'),
        outputPath: 'remoteAccessSession.device.remoteDebugEnabled',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled', props);
    return resource.getResponseField('remoteAccessSession.device.remoteDebugEnabled') as unknown as boolean;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.fleetType'),
        outputPath: 'remoteAccessSession.device.fleetType',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.fleetType', props);
    return resource.getResponseField('remoteAccessSession.device.fleetType') as unknown as string;
  }

  public get fleetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.fleetName'),
        outputPath: 'remoteAccessSession.device.fleetName',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.fleetName', props);
    return resource.getResponseField('remoteAccessSession.device.fleetName') as unknown as string;
  }

  public get instances(): shapes.DeviceFarmDeviceInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.instances'),
        outputPath: 'remoteAccessSession.device.instances',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.instances', props);
    return resource.getResponseField('remoteAccessSession.device.instances') as unknown as shapes.DeviceFarmDeviceInstance[];
  }

  public get availability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.availability'),
        outputPath: 'remoteAccessSession.device.availability',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.availability', props);
    return resource.getResponseField('remoteAccessSession.device.availability') as unknown as string;
  }

}

export class DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceCpu extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get frequency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.cpu.frequency'),
        outputPath: 'remoteAccessSession.device.cpu.frequency',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.cpu.frequency', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.frequency') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.cpu.architecture'),
        outputPath: 'remoteAccessSession.device.cpu.architecture',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.cpu.architecture', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.architecture') as unknown as string;
  }

  public get clock(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.cpu.clock'),
        outputPath: 'remoteAccessSession.device.cpu.clock',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.cpu.clock', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceResolution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get width(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.resolution.width'),
        outputPath: 'remoteAccessSession.device.resolution.width',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.resolution.width', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.width') as unknown as number;
  }

  public get height(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.device.resolution.height'),
        outputPath: 'remoteAccessSession.device.resolution.height',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.device.resolution.height', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.deviceMinutes.total'),
        outputPath: 'remoteAccessSession.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.deviceMinutes.total', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.deviceMinutes.metered'),
        outputPath: 'remoteAccessSession.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.deviceMinutes.metered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRemoteAccessSession',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered'),
        outputPath: 'remoteAccessSession.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmStopRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get run(): DeviceFarmStopRunRun {
    return new DeviceFarmStopRunRun(this, 'Run', this.__resources, this.input);
  }

}

export class DeviceFarmStopRunRun extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.arn'),
        outputPath: 'run.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.arn', props);
    return resource.getResponseField('run.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.name'),
        outputPath: 'run.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.name', props);
    return resource.getResponseField('run.name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.type'),
        outputPath: 'run.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.type', props);
    return resource.getResponseField('run.type') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.platform'),
        outputPath: 'run.platform',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.platform', props);
    return resource.getResponseField('run.platform') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.created'),
        outputPath: 'run.created',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.created', props);
    return resource.getResponseField('run.created') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.status'),
        outputPath: 'run.status',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.status', props);
    return resource.getResponseField('run.status') as unknown as string;
  }

  public get result(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.result'),
        outputPath: 'run.result',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.result', props);
    return resource.getResponseField('run.result') as unknown as string;
  }

  public get started(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.started'),
        outputPath: 'run.started',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.started', props);
    return resource.getResponseField('run.started') as unknown as string;
  }

  public get stopped(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.stopped'),
        outputPath: 'run.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.stopped', props);
    return resource.getResponseField('run.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmStopRunRunCounters {
    return new DeviceFarmStopRunRunCounters(this, 'Counters', this.__resources, this.input);
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.message'),
        outputPath: 'run.message',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.message', props);
    return resource.getResponseField('run.message') as unknown as string;
  }

  public get totalJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.totalJobs'),
        outputPath: 'run.totalJobs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.totalJobs', props);
    return resource.getResponseField('run.totalJobs') as unknown as number;
  }

  public get completedJobs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.completedJobs'),
        outputPath: 'run.completedJobs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.completedJobs', props);
    return resource.getResponseField('run.completedJobs') as unknown as number;
  }

  public get billingMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.billingMethod'),
        outputPath: 'run.billingMethod',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.billingMethod', props);
    return resource.getResponseField('run.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmStopRunRunDeviceMinutes {
    return new DeviceFarmStopRunRunDeviceMinutes(this, 'DeviceMinutes', this.__resources, this.input);
  }

  public get networkProfile(): DeviceFarmStopRunRunNetworkProfile {
    return new DeviceFarmStopRunRunNetworkProfile(this, 'NetworkProfile', this.__resources, this.input);
  }

  public get parsingResultUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.parsingResultUrl'),
        outputPath: 'run.parsingResultUrl',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.parsingResultUrl', props);
    return resource.getResponseField('run.parsingResultUrl') as unknown as string;
  }

  public get resultCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.resultCode'),
        outputPath: 'run.resultCode',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.resultCode', props);
    return resource.getResponseField('run.resultCode') as unknown as string;
  }

  public get seed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.seed'),
        outputPath: 'run.seed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.seed', props);
    return resource.getResponseField('run.seed') as unknown as number;
  }

  public get appUpload(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.appUpload'),
        outputPath: 'run.appUpload',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.appUpload', props);
    return resource.getResponseField('run.appUpload') as unknown as string;
  }

  public get eventCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.eventCount'),
        outputPath: 'run.eventCount',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.eventCount', props);
    return resource.getResponseField('run.eventCount') as unknown as number;
  }

  public get jobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.jobTimeoutMinutes'),
        outputPath: 'run.jobTimeoutMinutes',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.jobTimeoutMinutes', props);
    return resource.getResponseField('run.jobTimeoutMinutes') as unknown as number;
  }

  public get devicePoolArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.devicePoolArn'),
        outputPath: 'run.devicePoolArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.devicePoolArn', props);
    return resource.getResponseField('run.devicePoolArn') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.locale'),
        outputPath: 'run.locale',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.locale', props);
    return resource.getResponseField('run.locale') as unknown as string;
  }

  public get radios(): DeviceFarmStopRunRunRadios {
    return new DeviceFarmStopRunRunRadios(this, 'Radios', this.__resources, this.input);
  }

  public get location(): DeviceFarmStopRunRunLocation {
    return new DeviceFarmStopRunRunLocation(this, 'Location', this.__resources, this.input);
  }

  public get customerArtifactPaths(): DeviceFarmStopRunRunCustomerArtifactPaths {
    return new DeviceFarmStopRunRunCustomerArtifactPaths(this, 'CustomerArtifactPaths', this.__resources, this.input);
  }

  public get webUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.webUrl'),
        outputPath: 'run.webUrl',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.webUrl', props);
    return resource.getResponseField('run.webUrl') as unknown as string;
  }

  public get skipAppResign(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.skipAppResign'),
        outputPath: 'run.skipAppResign',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.skipAppResign', props);
    return resource.getResponseField('run.skipAppResign') as unknown as boolean;
  }

  public get testSpecArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.testSpecArn'),
        outputPath: 'run.testSpecArn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.testSpecArn', props);
    return resource.getResponseField('run.testSpecArn') as unknown as string;
  }

  public get deviceSelectionResult(): DeviceFarmStopRunRunDeviceSelectionResult {
    return new DeviceFarmStopRunRunDeviceSelectionResult(this, 'DeviceSelectionResult', this.__resources, this.input);
  }

}

export class DeviceFarmStopRunRunCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.counters.total'),
        outputPath: 'run.counters.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.counters.total', props);
    return resource.getResponseField('run.counters.total') as unknown as number;
  }

  public get passed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.counters.passed'),
        outputPath: 'run.counters.passed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.counters.passed', props);
    return resource.getResponseField('run.counters.passed') as unknown as number;
  }

  public get failed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.counters.failed'),
        outputPath: 'run.counters.failed',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.counters.failed', props);
    return resource.getResponseField('run.counters.failed') as unknown as number;
  }

  public get warned(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.counters.warned'),
        outputPath: 'run.counters.warned',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.counters.warned', props);
    return resource.getResponseField('run.counters.warned') as unknown as number;
  }

  public get errored(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.counters.errored'),
        outputPath: 'run.counters.errored',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.counters.errored', props);
    return resource.getResponseField('run.counters.errored') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.counters.stopped'),
        outputPath: 'run.counters.stopped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.counters.stopped', props);
    return resource.getResponseField('run.counters.stopped') as unknown as number;
  }

  public get skipped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.counters.skipped'),
        outputPath: 'run.counters.skipped',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.counters.skipped', props);
    return resource.getResponseField('run.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmStopRunRunDeviceMinutes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get total(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.deviceMinutes.total'),
        outputPath: 'run.deviceMinutes.total',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.deviceMinutes.total', props);
    return resource.getResponseField('run.deviceMinutes.total') as unknown as number;
  }

  public get metered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.deviceMinutes.metered'),
        outputPath: 'run.deviceMinutes.metered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.deviceMinutes.metered', props);
    return resource.getResponseField('run.deviceMinutes.metered') as unknown as number;
  }

  public get unmetered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.deviceMinutes.unmetered'),
        outputPath: 'run.deviceMinutes.unmetered',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.deviceMinutes.unmetered', props);
    return resource.getResponseField('run.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmStopRunRunNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.arn'),
        outputPath: 'run.networkProfile.arn',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.arn', props);
    return resource.getResponseField('run.networkProfile.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.name'),
        outputPath: 'run.networkProfile.name',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.name', props);
    return resource.getResponseField('run.networkProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.description'),
        outputPath: 'run.networkProfile.description',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.description', props);
    return resource.getResponseField('run.networkProfile.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.type'),
        outputPath: 'run.networkProfile.type',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.type', props);
    return resource.getResponseField('run.networkProfile.type') as unknown as string;
  }

  public get uplinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.uplinkBandwidthBits'),
        outputPath: 'run.networkProfile.uplinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.uplinkBandwidthBits', props);
    return resource.getResponseField('run.networkProfile.uplinkBandwidthBits') as unknown as number;
  }

  public get downlinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.downlinkBandwidthBits'),
        outputPath: 'run.networkProfile.downlinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.downlinkBandwidthBits', props);
    return resource.getResponseField('run.networkProfile.downlinkBandwidthBits') as unknown as number;
  }

  public get uplinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.uplinkDelayMs'),
        outputPath: 'run.networkProfile.uplinkDelayMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.uplinkDelayMs', props);
    return resource.getResponseField('run.networkProfile.uplinkDelayMs') as unknown as number;
  }

  public get downlinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.downlinkDelayMs'),
        outputPath: 'run.networkProfile.downlinkDelayMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.downlinkDelayMs', props);
    return resource.getResponseField('run.networkProfile.downlinkDelayMs') as unknown as number;
  }

  public get uplinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.uplinkJitterMs'),
        outputPath: 'run.networkProfile.uplinkJitterMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.uplinkJitterMs', props);
    return resource.getResponseField('run.networkProfile.uplinkJitterMs') as unknown as number;
  }

  public get downlinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.downlinkJitterMs'),
        outputPath: 'run.networkProfile.downlinkJitterMs',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.downlinkJitterMs', props);
    return resource.getResponseField('run.networkProfile.downlinkJitterMs') as unknown as number;
  }

  public get uplinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.uplinkLossPercent'),
        outputPath: 'run.networkProfile.uplinkLossPercent',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.uplinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.uplinkLossPercent') as unknown as number;
  }

  public get downlinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.networkProfile.downlinkLossPercent'),
        outputPath: 'run.networkProfile.downlinkLossPercent',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmStopRunRunRadios extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get wifi(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.radios.wifi'),
        outputPath: 'run.radios.wifi',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.radios.wifi', props);
    return resource.getResponseField('run.radios.wifi') as unknown as boolean;
  }

  public get bluetooth(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.radios.bluetooth'),
        outputPath: 'run.radios.bluetooth',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.radios.bluetooth', props);
    return resource.getResponseField('run.radios.bluetooth') as unknown as boolean;
  }

  public get nfc(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.radios.nfc'),
        outputPath: 'run.radios.nfc',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.radios.nfc', props);
    return resource.getResponseField('run.radios.nfc') as unknown as boolean;
  }

  public get gps(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.radios.gps'),
        outputPath: 'run.radios.gps',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.radios.gps', props);
    return resource.getResponseField('run.radios.gps') as unknown as boolean;
  }

}

export class DeviceFarmStopRunRunLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get latitude(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.location.latitude'),
        outputPath: 'run.location.latitude',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.location.latitude', props);
    return resource.getResponseField('run.location.latitude') as unknown as number;
  }

  public get longitude(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.location.longitude'),
        outputPath: 'run.location.longitude',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.location.longitude', props);
    return resource.getResponseField('run.location.longitude') as unknown as number;
  }

}

export class DeviceFarmStopRunRunCustomerArtifactPaths extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get iosPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.customerArtifactPaths.iosPaths'),
        outputPath: 'run.customerArtifactPaths.iosPaths',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.customerArtifactPaths.iosPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.iosPaths') as unknown as string[];
  }

  public get androidPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.customerArtifactPaths.androidPaths'),
        outputPath: 'run.customerArtifactPaths.androidPaths',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.customerArtifactPaths.androidPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.androidPaths') as unknown as string[];
  }

  public get deviceHostPaths(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.customerArtifactPaths.deviceHostPaths'),
        outputPath: 'run.customerArtifactPaths.deviceHostPaths',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.customerArtifactPaths.deviceHostPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.deviceHostPaths') as unknown as string[];
  }

}

export class DeviceFarmStopRunRunDeviceSelectionResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmStopRunRequest) {
    super(scope, id);
  }

  public get filters(): shapes.DeviceFarmDeviceFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.deviceSelectionResult.filters'),
        outputPath: 'run.deviceSelectionResult.filters',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.deviceSelectionResult.filters', props);
    return resource.getResponseField('run.deviceSelectionResult.filters') as unknown as shapes.DeviceFarmDeviceFilter[];
  }

  public get matchedDevicesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.deviceSelectionResult.matchedDevicesCount'),
        outputPath: 'run.deviceSelectionResult.matchedDevicesCount',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.deviceSelectionResult.matchedDevicesCount', props);
    return resource.getResponseField('run.deviceSelectionResult.matchedDevicesCount') as unknown as number;
  }

  public get maxDevices(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopRun',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.StopRun.run.deviceSelectionResult.maxDevices'),
        outputPath: 'run.deviceSelectionResult.maxDevices',
        parameters: {
          arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopRun.run.deviceSelectionResult.maxDevices', props);
    return resource.getResponseField('run.deviceSelectionResult.maxDevices') as unknown as number;
  }

}

export class DeviceFarmUpdateDeviceInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateDeviceInstanceRequest) {
    super(scope, id);
  }

  public get deviceInstance(): DeviceFarmUpdateDeviceInstanceDeviceInstance {
    return new DeviceFarmUpdateDeviceInstanceDeviceInstance(this, 'DeviceInstance', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateDeviceInstanceDeviceInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateDeviceInstanceRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.arn'),
        outputPath: 'deviceInstance.arn',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.arn', props);
    return resource.getResponseField('deviceInstance.arn') as unknown as string;
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.deviceArn'),
        outputPath: 'deviceInstance.deviceArn',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.deviceArn', props);
    return resource.getResponseField('deviceInstance.deviceArn') as unknown as string;
  }

  public get labels(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.labels'),
        outputPath: 'deviceInstance.labels',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.labels', props);
    return resource.getResponseField('deviceInstance.labels') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.status'),
        outputPath: 'deviceInstance.status',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.status', props);
    return resource.getResponseField('deviceInstance.status') as unknown as string;
  }

  public get udid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.udid'),
        outputPath: 'deviceInstance.udid',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.udid', props);
    return resource.getResponseField('deviceInstance.udid') as unknown as string;
  }

  public get instanceProfile(): DeviceFarmUpdateDeviceInstanceDeviceInstanceInstanceProfile {
    return new DeviceFarmUpdateDeviceInstanceDeviceInstanceInstanceProfile(this, 'InstanceProfile', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateDeviceInstanceDeviceInstanceInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateDeviceInstanceRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.instanceProfile.arn'),
        outputPath: 'deviceInstance.instanceProfile.arn',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.instanceProfile.arn', props);
    return resource.getResponseField('deviceInstance.instanceProfile.arn') as unknown as string;
  }

  public get packageCleanup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.instanceProfile.packageCleanup'),
        outputPath: 'deviceInstance.instanceProfile.packageCleanup',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.instanceProfile.packageCleanup', props);
    return resource.getResponseField('deviceInstance.instanceProfile.packageCleanup') as unknown as boolean;
  }

  public get excludeAppPackagesFromCleanup(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.instanceProfile.excludeAppPackagesFromCleanup'),
        outputPath: 'deviceInstance.instanceProfile.excludeAppPackagesFromCleanup',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.instanceProfile.excludeAppPackagesFromCleanup', props);
    return resource.getResponseField('deviceInstance.instanceProfile.excludeAppPackagesFromCleanup') as unknown as string[];
  }

  public get rebootAfterUse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.instanceProfile.rebootAfterUse'),
        outputPath: 'deviceInstance.instanceProfile.rebootAfterUse',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.instanceProfile.rebootAfterUse', props);
    return resource.getResponseField('deviceInstance.instanceProfile.rebootAfterUse') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.instanceProfile.name'),
        outputPath: 'deviceInstance.instanceProfile.name',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.instanceProfile.name', props);
    return resource.getResponseField('deviceInstance.instanceProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDeviceInstance',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDeviceInstance.deviceInstance.instanceProfile.description'),
        outputPath: 'deviceInstance.instanceProfile.description',
        parameters: {
          arn: this.input.arn,
          profileArn: this.input.profileArn,
          labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDeviceInstance.deviceInstance.instanceProfile.description', props);
    return resource.getResponseField('deviceInstance.instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmUpdateDevicePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateDevicePoolRequest) {
    super(scope, id);
  }

  public get devicePool(): DeviceFarmUpdateDevicePoolDevicePool {
    return new DeviceFarmUpdateDevicePoolDevicePool(this, 'DevicePool', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateDevicePoolDevicePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateDevicePoolRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDevicePool.devicePool.arn'),
        outputPath: 'devicePool.arn',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
          clearMaxDevices: this.input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevicePool.devicePool.arn', props);
    return resource.getResponseField('devicePool.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDevicePool.devicePool.name'),
        outputPath: 'devicePool.name',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
          clearMaxDevices: this.input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevicePool.devicePool.name', props);
    return resource.getResponseField('devicePool.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDevicePool.devicePool.description'),
        outputPath: 'devicePool.description',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
          clearMaxDevices: this.input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevicePool.devicePool.description', props);
    return resource.getResponseField('devicePool.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDevicePool.devicePool.type'),
        outputPath: 'devicePool.type',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
          clearMaxDevices: this.input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevicePool.devicePool.type', props);
    return resource.getResponseField('devicePool.type') as unknown as string;
  }

  public get rules(): shapes.DeviceFarmRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDevicePool.devicePool.rules'),
        outputPath: 'devicePool.rules',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
          clearMaxDevices: this.input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevicePool.devicePool.rules', props);
    return resource.getResponseField('devicePool.rules') as unknown as shapes.DeviceFarmRule[];
  }

  public get maxDevices(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevicePool',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateDevicePool.devicePool.maxDevices'),
        outputPath: 'devicePool.maxDevices',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          rules: this.input.rules,
          maxDevices: this.input.maxDevices,
          clearMaxDevices: this.input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDevicePool.devicePool.maxDevices', props);
    return resource.getResponseField('devicePool.maxDevices') as unknown as number;
  }

}

export class DeviceFarmUpdateInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateInstanceProfileRequest) {
    super(scope, id);
  }

  public get instanceProfile(): DeviceFarmUpdateInstanceProfileInstanceProfile {
    return new DeviceFarmUpdateInstanceProfileInstanceProfile(this, 'InstanceProfile', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateInstanceProfileInstanceProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateInstanceProfileRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateInstanceProfile.instanceProfile.arn'),
        outputPath: 'instanceProfile.arn',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInstanceProfile.instanceProfile.arn', props);
    return resource.getResponseField('instanceProfile.arn') as unknown as string;
  }

  public get packageCleanup(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateInstanceProfile.instanceProfile.packageCleanup'),
        outputPath: 'instanceProfile.packageCleanup',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInstanceProfile.instanceProfile.packageCleanup', props);
    return resource.getResponseField('instanceProfile.packageCleanup') as unknown as boolean;
  }

  public get excludeAppPackagesFromCleanup(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup'),
        outputPath: 'instanceProfile.excludeAppPackagesFromCleanup',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup', props);
    return resource.getResponseField('instanceProfile.excludeAppPackagesFromCleanup') as unknown as string[];
  }

  public get rebootAfterUse(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateInstanceProfile.instanceProfile.rebootAfterUse'),
        outputPath: 'instanceProfile.rebootAfterUse',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInstanceProfile.instanceProfile.rebootAfterUse', props);
    return resource.getResponseField('instanceProfile.rebootAfterUse') as unknown as boolean;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateInstanceProfile.instanceProfile.name'),
        outputPath: 'instanceProfile.name',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInstanceProfile.instanceProfile.name', props);
    return resource.getResponseField('instanceProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstanceProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateInstanceProfile.instanceProfile.description'),
        outputPath: 'instanceProfile.description',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          packageCleanup: this.input.packageCleanup,
          excludeAppPackagesFromCleanup: this.input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateInstanceProfile.instanceProfile.description', props);
    return resource.getResponseField('instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmUpdateNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateNetworkProfileRequest) {
    super(scope, id);
  }

  public get networkProfile(): DeviceFarmUpdateNetworkProfileNetworkProfile {
    return new DeviceFarmUpdateNetworkProfileNetworkProfile(this, 'NetworkProfile', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateNetworkProfileNetworkProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateNetworkProfileRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.arn'),
        outputPath: 'networkProfile.arn',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.arn', props);
    return resource.getResponseField('networkProfile.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.name'),
        outputPath: 'networkProfile.name',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.name', props);
    return resource.getResponseField('networkProfile.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.description'),
        outputPath: 'networkProfile.description',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.description', props);
    return resource.getResponseField('networkProfile.description') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.type'),
        outputPath: 'networkProfile.type',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.type', props);
    return resource.getResponseField('networkProfile.type') as unknown as string;
  }

  public get uplinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.uplinkBandwidthBits'),
        outputPath: 'networkProfile.uplinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.uplinkBandwidthBits', props);
    return resource.getResponseField('networkProfile.uplinkBandwidthBits') as unknown as number;
  }

  public get downlinkBandwidthBits(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.downlinkBandwidthBits'),
        outputPath: 'networkProfile.downlinkBandwidthBits',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.downlinkBandwidthBits', props);
    return resource.getResponseField('networkProfile.downlinkBandwidthBits') as unknown as number;
  }

  public get uplinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.uplinkDelayMs'),
        outputPath: 'networkProfile.uplinkDelayMs',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.uplinkDelayMs', props);
    return resource.getResponseField('networkProfile.uplinkDelayMs') as unknown as number;
  }

  public get downlinkDelayMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.downlinkDelayMs'),
        outputPath: 'networkProfile.downlinkDelayMs',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.downlinkDelayMs', props);
    return resource.getResponseField('networkProfile.downlinkDelayMs') as unknown as number;
  }

  public get uplinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.uplinkJitterMs'),
        outputPath: 'networkProfile.uplinkJitterMs',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.uplinkJitterMs', props);
    return resource.getResponseField('networkProfile.uplinkJitterMs') as unknown as number;
  }

  public get downlinkJitterMs(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.downlinkJitterMs'),
        outputPath: 'networkProfile.downlinkJitterMs',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.downlinkJitterMs', props);
    return resource.getResponseField('networkProfile.downlinkJitterMs') as unknown as number;
  }

  public get uplinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.uplinkLossPercent'),
        outputPath: 'networkProfile.uplinkLossPercent',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.uplinkLossPercent', props);
    return resource.getResponseField('networkProfile.uplinkLossPercent') as unknown as number;
  }

  public get downlinkLossPercent(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateNetworkProfile.networkProfile.downlinkLossPercent'),
        outputPath: 'networkProfile.downlinkLossPercent',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          description: this.input.description,
          type: this.input.type,
          uplinkBandwidthBits: this.input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.input.downlinkBandwidthBits,
          uplinkDelayMs: this.input.uplinkDelayMs,
          downlinkDelayMs: this.input.downlinkDelayMs,
          uplinkJitterMs: this.input.uplinkJitterMs,
          downlinkJitterMs: this.input.downlinkJitterMs,
          uplinkLossPercent: this.input.uplinkLossPercent,
          downlinkLossPercent: this.input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNetworkProfile.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmUpdateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateProjectRequest) {
    super(scope, id);
  }

  public get project(): DeviceFarmUpdateProjectProject {
    return new DeviceFarmUpdateProjectProject(this, 'Project', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateProjectProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateProjectRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateProject.project.arn'),
        outputPath: 'project.arn',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.project.arn', props);
    return resource.getResponseField('project.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateProject.project.name'),
        outputPath: 'project.name',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.project.name', props);
    return resource.getResponseField('project.name') as unknown as string;
  }

  public get defaultJobTimeoutMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateProject.project.defaultJobTimeoutMinutes'),
        outputPath: 'project.defaultJobTimeoutMinutes',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.project.defaultJobTimeoutMinutes', props);
    return resource.getResponseField('project.defaultJobTimeoutMinutes') as unknown as number;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateProject.project.created'),
        outputPath: 'project.created',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          defaultJobTimeoutMinutes: this.input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateProject.project.created', props);
    return resource.getResponseField('project.created') as unknown as string;
  }

}

export class DeviceFarmUpdateTestGridProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateTestGridProjectRequest) {
    super(scope, id);
  }

  public get testGridProject(): DeviceFarmUpdateTestGridProjectTestGridProject {
    return new DeviceFarmUpdateTestGridProjectTestGridProject(this, 'TestGridProject', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateTestGridProjectTestGridProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateTestGridProjectRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateTestGridProject.testGridProject.arn'),
        outputPath: 'testGridProject.arn',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTestGridProject.testGridProject.arn', props);
    return resource.getResponseField('testGridProject.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateTestGridProject.testGridProject.name'),
        outputPath: 'testGridProject.name',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTestGridProject.testGridProject.name', props);
    return resource.getResponseField('testGridProject.name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateTestGridProject.testGridProject.description'),
        outputPath: 'testGridProject.description',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTestGridProject.testGridProject.description', props);
    return resource.getResponseField('testGridProject.description') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateTestGridProject.testGridProject.created'),
        outputPath: 'testGridProject.created',
        parameters: {
          projectArn: this.input.projectArn,
          name: this.input.name,
          description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTestGridProject.testGridProject.created', props);
    return resource.getResponseField('testGridProject.created') as unknown as string;
  }

}

export class DeviceFarmUpdateUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateUploadRequest) {
    super(scope, id);
  }

  public get upload(): DeviceFarmUpdateUploadUpload {
    return new DeviceFarmUpdateUploadUpload(this, 'Upload', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateUploadUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateUploadRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.arn'),
        outputPath: 'upload.arn',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.arn', props);
    return resource.getResponseField('upload.arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.name'),
        outputPath: 'upload.name',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.name', props);
    return resource.getResponseField('upload.name') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.created'),
        outputPath: 'upload.created',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.created', props);
    return resource.getResponseField('upload.created') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.type'),
        outputPath: 'upload.type',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.type', props);
    return resource.getResponseField('upload.type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.status'),
        outputPath: 'upload.status',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.status', props);
    return resource.getResponseField('upload.status') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.url'),
        outputPath: 'upload.url',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.url', props);
    return resource.getResponseField('upload.url') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.metadata'),
        outputPath: 'upload.metadata',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.metadata', props);
    return resource.getResponseField('upload.metadata') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.contentType'),
        outputPath: 'upload.contentType',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.contentType', props);
    return resource.getResponseField('upload.contentType') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.message'),
        outputPath: 'upload.message',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.message', props);
    return resource.getResponseField('upload.message') as unknown as string;
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUpload',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateUpload.upload.category'),
        outputPath: 'upload.category',
        parameters: {
          arn: this.input.arn,
          name: this.input.name,
          contentType: this.input.contentType,
          editContent: this.input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUpload.upload.category', props);
    return resource.getResponseField('upload.category') as unknown as string;
  }

}

export class DeviceFarmUpdateVpceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateVpceConfigurationRequest) {
    super(scope, id);
  }

  public get vpceConfiguration(): DeviceFarmUpdateVpceConfigurationVpceConfiguration {
    return new DeviceFarmUpdateVpceConfigurationVpceConfiguration(this, 'VpceConfiguration', this.__resources, this.input);
  }

}

export class DeviceFarmUpdateVpceConfigurationVpceConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DeviceFarmUpdateVpceConfigurationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateVPCEConfiguration.vpceConfiguration.arn'),
        outputPath: 'vpceConfiguration.arn',
        parameters: {
          arn: this.input.arn,
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVPCEConfiguration.vpceConfiguration.arn', props);
    return resource.getResponseField('vpceConfiguration.arn') as unknown as string;
  }

  public get vpceConfigurationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateVPCEConfiguration.vpceConfiguration.vpceConfigurationName'),
        outputPath: 'vpceConfiguration.vpceConfigurationName',
        parameters: {
          arn: this.input.arn,
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVPCEConfiguration.vpceConfiguration.vpceConfigurationName', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationName') as unknown as string;
  }

  public get vpceServiceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateVPCEConfiguration.vpceConfiguration.vpceServiceName'),
        outputPath: 'vpceConfiguration.vpceServiceName',
        parameters: {
          arn: this.input.arn,
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVPCEConfiguration.vpceConfiguration.vpceServiceName', props);
    return resource.getResponseField('vpceConfiguration.vpceServiceName') as unknown as string;
  }

  public get serviceDnsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateVPCEConfiguration.vpceConfiguration.serviceDnsName'),
        outputPath: 'vpceConfiguration.serviceDnsName',
        parameters: {
          arn: this.input.arn,
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVPCEConfiguration.vpceConfiguration.serviceDnsName', props);
    return resource.getResponseField('vpceConfiguration.serviceDnsName') as unknown as string;
  }

  public get vpceConfigurationDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVpceConfiguration',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription'),
        outputPath: 'vpceConfiguration.vpceConfigurationDescription',
        parameters: {
          arn: this.input.arn,
          vpceConfigurationName: this.input.vpceConfigurationName,
          vpceServiceName: this.input.vpceServiceName,
          serviceDnsName: this.input.serviceDnsName,
          vpceConfigurationDescription: this.input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationDescription') as unknown as string;
  }

}

