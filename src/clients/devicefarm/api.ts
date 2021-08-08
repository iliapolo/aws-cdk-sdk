import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DeviceFarmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createDevicePool(input: shapes.DeviceFarmCreateDevicePoolRequest): DeviceFarmResponsesCreateDevicePool {
    return new DeviceFarmResponsesCreateDevicePool(this, this.__resources, input);
  }

  public createInstanceProfile(input: shapes.DeviceFarmCreateInstanceProfileRequest): DeviceFarmResponsesCreateInstanceProfile {
    return new DeviceFarmResponsesCreateInstanceProfile(this, this.__resources, input);
  }

  public createNetworkProfile(input: shapes.DeviceFarmCreateNetworkProfileRequest): DeviceFarmResponsesCreateNetworkProfile {
    return new DeviceFarmResponsesCreateNetworkProfile(this, this.__resources, input);
  }

  public createProject(input: shapes.DeviceFarmCreateProjectRequest): DeviceFarmResponsesCreateProject {
    return new DeviceFarmResponsesCreateProject(this, this.__resources, input);
  }

  public createRemoteAccessSession(input: shapes.DeviceFarmCreateRemoteAccessSessionRequest): DeviceFarmResponsesCreateRemoteAccessSession {
    return new DeviceFarmResponsesCreateRemoteAccessSession(this, this.__resources, input);
  }

  public createTestGridProject(input: shapes.DeviceFarmCreateTestGridProjectRequest): DeviceFarmResponsesCreateTestGridProject {
    return new DeviceFarmResponsesCreateTestGridProject(this, this.__resources, input);
  }

  public createTestGridUrl(input: shapes.DeviceFarmCreateTestGridUrlRequest): DeviceFarmResponsesCreateTestGridUrl {
    return new DeviceFarmResponsesCreateTestGridUrl(this, this.__resources, input);
  }

  public createUpload(input: shapes.DeviceFarmCreateUploadRequest): DeviceFarmResponsesCreateUpload {
    return new DeviceFarmResponsesCreateUpload(this, this.__resources, input);
  }

  public createVpceConfiguration(input: shapes.DeviceFarmCreateVpceConfigurationRequest): DeviceFarmResponsesCreateVpceConfiguration {
    return new DeviceFarmResponsesCreateVpceConfiguration(this, this.__resources, input);
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

  public fetchAccountSettings(): DeviceFarmResponsesFetchAccountSettings {
    return new DeviceFarmResponsesFetchAccountSettings(this, this.__resources);
  }

  public fetchDevice(input: shapes.DeviceFarmGetDeviceRequest): DeviceFarmResponsesFetchDevice {
    return new DeviceFarmResponsesFetchDevice(this, this.__resources, input);
  }

  public fetchDeviceInstance(input: shapes.DeviceFarmGetDeviceInstanceRequest): DeviceFarmResponsesFetchDeviceInstance {
    return new DeviceFarmResponsesFetchDeviceInstance(this, this.__resources, input);
  }

  public fetchDevicePool(input: shapes.DeviceFarmGetDevicePoolRequest): DeviceFarmResponsesFetchDevicePool {
    return new DeviceFarmResponsesFetchDevicePool(this, this.__resources, input);
  }

  public fetchDevicePoolCompatibility(input: shapes.DeviceFarmGetDevicePoolCompatibilityRequest): DeviceFarmResponsesFetchDevicePoolCompatibility {
    return new DeviceFarmResponsesFetchDevicePoolCompatibility(this, this.__resources, input);
  }

  public fetchInstanceProfile(input: shapes.DeviceFarmGetInstanceProfileRequest): DeviceFarmResponsesFetchInstanceProfile {
    return new DeviceFarmResponsesFetchInstanceProfile(this, this.__resources, input);
  }

  public fetchJob(input: shapes.DeviceFarmGetJobRequest): DeviceFarmResponsesFetchJob {
    return new DeviceFarmResponsesFetchJob(this, this.__resources, input);
  }

  public fetchNetworkProfile(input: shapes.DeviceFarmGetNetworkProfileRequest): DeviceFarmResponsesFetchNetworkProfile {
    return new DeviceFarmResponsesFetchNetworkProfile(this, this.__resources, input);
  }

  public fetchOfferingStatus(input: shapes.DeviceFarmGetOfferingStatusRequest): DeviceFarmResponsesFetchOfferingStatus {
    return new DeviceFarmResponsesFetchOfferingStatus(this, this.__resources, input);
  }

  public fetchProject(input: shapes.DeviceFarmGetProjectRequest): DeviceFarmResponsesFetchProject {
    return new DeviceFarmResponsesFetchProject(this, this.__resources, input);
  }

  public fetchRemoteAccessSession(input: shapes.DeviceFarmGetRemoteAccessSessionRequest): DeviceFarmResponsesFetchRemoteAccessSession {
    return new DeviceFarmResponsesFetchRemoteAccessSession(this, this.__resources, input);
  }

  public fetchRun(input: shapes.DeviceFarmGetRunRequest): DeviceFarmResponsesFetchRun {
    return new DeviceFarmResponsesFetchRun(this, this.__resources, input);
  }

  public fetchSuite(input: shapes.DeviceFarmGetSuiteRequest): DeviceFarmResponsesFetchSuite {
    return new DeviceFarmResponsesFetchSuite(this, this.__resources, input);
  }

  public fetchTest(input: shapes.DeviceFarmGetTestRequest): DeviceFarmResponsesFetchTest {
    return new DeviceFarmResponsesFetchTest(this, this.__resources, input);
  }

  public fetchTestGridProject(input: shapes.DeviceFarmGetTestGridProjectRequest): DeviceFarmResponsesFetchTestGridProject {
    return new DeviceFarmResponsesFetchTestGridProject(this, this.__resources, input);
  }

  public fetchTestGridSession(input: shapes.DeviceFarmGetTestGridSessionRequest): DeviceFarmResponsesFetchTestGridSession {
    return new DeviceFarmResponsesFetchTestGridSession(this, this.__resources, input);
  }

  public fetchUpload(input: shapes.DeviceFarmGetUploadRequest): DeviceFarmResponsesFetchUpload {
    return new DeviceFarmResponsesFetchUpload(this, this.__resources, input);
  }

  public fetchVpceConfiguration(input: shapes.DeviceFarmGetVpceConfigurationRequest): DeviceFarmResponsesFetchVpceConfiguration {
    return new DeviceFarmResponsesFetchVpceConfiguration(this, this.__resources, input);
  }

  public installToRemoteAccessSession(input: shapes.DeviceFarmInstallToRemoteAccessSessionRequest): DeviceFarmResponsesInstallToRemoteAccessSession {
    return new DeviceFarmResponsesInstallToRemoteAccessSession(this, this.__resources, input);
  }

  public listArtifacts(input: shapes.DeviceFarmListArtifactsRequest): DeviceFarmResponsesListArtifacts {
    return new DeviceFarmResponsesListArtifacts(this, this.__resources, input);
  }

  public listDeviceInstances(input: shapes.DeviceFarmListDeviceInstancesRequest): DeviceFarmResponsesListDeviceInstances {
    return new DeviceFarmResponsesListDeviceInstances(this, this.__resources, input);
  }

  public listDevicePools(input: shapes.DeviceFarmListDevicePoolsRequest): DeviceFarmResponsesListDevicePools {
    return new DeviceFarmResponsesListDevicePools(this, this.__resources, input);
  }

  public listDevices(input: shapes.DeviceFarmListDevicesRequest): DeviceFarmResponsesListDevices {
    return new DeviceFarmResponsesListDevices(this, this.__resources, input);
  }

  public listInstanceProfiles(input: shapes.DeviceFarmListInstanceProfilesRequest): DeviceFarmResponsesListInstanceProfiles {
    return new DeviceFarmResponsesListInstanceProfiles(this, this.__resources, input);
  }

  public listJobs(input: shapes.DeviceFarmListJobsRequest): DeviceFarmResponsesListJobs {
    return new DeviceFarmResponsesListJobs(this, this.__resources, input);
  }

  public listNetworkProfiles(input: shapes.DeviceFarmListNetworkProfilesRequest): DeviceFarmResponsesListNetworkProfiles {
    return new DeviceFarmResponsesListNetworkProfiles(this, this.__resources, input);
  }

  public listOfferingPromotions(input: shapes.DeviceFarmListOfferingPromotionsRequest): DeviceFarmResponsesListOfferingPromotions {
    return new DeviceFarmResponsesListOfferingPromotions(this, this.__resources, input);
  }

  public listOfferingTransactions(input: shapes.DeviceFarmListOfferingTransactionsRequest): DeviceFarmResponsesListOfferingTransactions {
    return new DeviceFarmResponsesListOfferingTransactions(this, this.__resources, input);
  }

  public listOfferings(input: shapes.DeviceFarmListOfferingsRequest): DeviceFarmResponsesListOfferings {
    return new DeviceFarmResponsesListOfferings(this, this.__resources, input);
  }

  public listProjects(input: shapes.DeviceFarmListProjectsRequest): DeviceFarmResponsesListProjects {
    return new DeviceFarmResponsesListProjects(this, this.__resources, input);
  }

  public listRemoteAccessSessions(input: shapes.DeviceFarmListRemoteAccessSessionsRequest): DeviceFarmResponsesListRemoteAccessSessions {
    return new DeviceFarmResponsesListRemoteAccessSessions(this, this.__resources, input);
  }

  public listRuns(input: shapes.DeviceFarmListRunsRequest): DeviceFarmResponsesListRuns {
    return new DeviceFarmResponsesListRuns(this, this.__resources, input);
  }

  public listSamples(input: shapes.DeviceFarmListSamplesRequest): DeviceFarmResponsesListSamples {
    return new DeviceFarmResponsesListSamples(this, this.__resources, input);
  }

  public listSuites(input: shapes.DeviceFarmListSuitesRequest): DeviceFarmResponsesListSuites {
    return new DeviceFarmResponsesListSuites(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.DeviceFarmListTagsForResourceRequest): DeviceFarmResponsesListTagsForResource {
    return new DeviceFarmResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTestGridProjects(input: shapes.DeviceFarmListTestGridProjectsRequest): DeviceFarmResponsesListTestGridProjects {
    return new DeviceFarmResponsesListTestGridProjects(this, this.__resources, input);
  }

  public listTestGridSessionActions(input: shapes.DeviceFarmListTestGridSessionActionsRequest): DeviceFarmResponsesListTestGridSessionActions {
    return new DeviceFarmResponsesListTestGridSessionActions(this, this.__resources, input);
  }

  public listTestGridSessionArtifacts(input: shapes.DeviceFarmListTestGridSessionArtifactsRequest): DeviceFarmResponsesListTestGridSessionArtifacts {
    return new DeviceFarmResponsesListTestGridSessionArtifacts(this, this.__resources, input);
  }

  public listTestGridSessions(input: shapes.DeviceFarmListTestGridSessionsRequest): DeviceFarmResponsesListTestGridSessions {
    return new DeviceFarmResponsesListTestGridSessions(this, this.__resources, input);
  }

  public listTests(input: shapes.DeviceFarmListTestsRequest): DeviceFarmResponsesListTests {
    return new DeviceFarmResponsesListTests(this, this.__resources, input);
  }

  public listUniqueProblems(input: shapes.DeviceFarmListUniqueProblemsRequest): DeviceFarmResponsesListUniqueProblems {
    return new DeviceFarmResponsesListUniqueProblems(this, this.__resources, input);
  }

  public listUploads(input: shapes.DeviceFarmListUploadsRequest): DeviceFarmResponsesListUploads {
    return new DeviceFarmResponsesListUploads(this, this.__resources, input);
  }

  public listVpceConfigurations(input: shapes.DeviceFarmListVpceConfigurationsRequest): DeviceFarmResponsesListVpceConfigurations {
    return new DeviceFarmResponsesListVpceConfigurations(this, this.__resources, input);
  }

  public purchaseOffering(input: shapes.DeviceFarmPurchaseOfferingRequest): DeviceFarmResponsesPurchaseOffering {
    return new DeviceFarmResponsesPurchaseOffering(this, this.__resources, input);
  }

  public renewOffering(input: shapes.DeviceFarmRenewOfferingRequest): DeviceFarmResponsesRenewOffering {
    return new DeviceFarmResponsesRenewOffering(this, this.__resources, input);
  }

  public scheduleRun(input: shapes.DeviceFarmScheduleRunRequest): DeviceFarmResponsesScheduleRun {
    return new DeviceFarmResponsesScheduleRun(this, this.__resources, input);
  }

  public stopJob(input: shapes.DeviceFarmStopJobRequest): DeviceFarmResponsesStopJob {
    return new DeviceFarmResponsesStopJob(this, this.__resources, input);
  }

  public stopRemoteAccessSession(input: shapes.DeviceFarmStopRemoteAccessSessionRequest): DeviceFarmResponsesStopRemoteAccessSession {
    return new DeviceFarmResponsesStopRemoteAccessSession(this, this.__resources, input);
  }

  public stopRun(input: shapes.DeviceFarmStopRunRequest): DeviceFarmResponsesStopRun {
    return new DeviceFarmResponsesStopRun(this, this.__resources, input);
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

  public updateDeviceInstance(input: shapes.DeviceFarmUpdateDeviceInstanceRequest): DeviceFarmResponsesUpdateDeviceInstance {
    return new DeviceFarmResponsesUpdateDeviceInstance(this, this.__resources, input);
  }

  public updateDevicePool(input: shapes.DeviceFarmUpdateDevicePoolRequest): DeviceFarmResponsesUpdateDevicePool {
    return new DeviceFarmResponsesUpdateDevicePool(this, this.__resources, input);
  }

  public updateInstanceProfile(input: shapes.DeviceFarmUpdateInstanceProfileRequest): DeviceFarmResponsesUpdateInstanceProfile {
    return new DeviceFarmResponsesUpdateInstanceProfile(this, this.__resources, input);
  }

  public updateNetworkProfile(input: shapes.DeviceFarmUpdateNetworkProfileRequest): DeviceFarmResponsesUpdateNetworkProfile {
    return new DeviceFarmResponsesUpdateNetworkProfile(this, this.__resources, input);
  }

  public updateProject(input: shapes.DeviceFarmUpdateProjectRequest): DeviceFarmResponsesUpdateProject {
    return new DeviceFarmResponsesUpdateProject(this, this.__resources, input);
  }

  public updateTestGridProject(input: shapes.DeviceFarmUpdateTestGridProjectRequest): DeviceFarmResponsesUpdateTestGridProject {
    return new DeviceFarmResponsesUpdateTestGridProject(this, this.__resources, input);
  }

  public updateUpload(input: shapes.DeviceFarmUpdateUploadRequest): DeviceFarmResponsesUpdateUpload {
    return new DeviceFarmResponsesUpdateUpload(this, this.__resources, input);
  }

  public updateVpceConfiguration(input: shapes.DeviceFarmUpdateVpceConfigurationRequest): DeviceFarmResponsesUpdateVpceConfiguration {
    return new DeviceFarmResponsesUpdateVpceConfiguration(this, this.__resources, input);
  }

}

export class DeviceFarmResponsesCreateDevicePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateDevicePoolRequest) {
  }

  public get devicePool(): DeviceFarmResponsesCreateDevicePoolDevicePool {
    return new DeviceFarmResponsesCreateDevicePoolDevicePool(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateDevicePoolDevicePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateDevicePoolRequest) {
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevicePool.devicePool.arn', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevicePool.devicePool.name', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevicePool.devicePool.description', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevicePool.devicePool.type', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevicePool.devicePool.rules', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDevicePool.devicePool.maxDevices', props);
    return resource.getResponseField('devicePool.maxDevices') as unknown as number;
  }

}

export class DeviceFarmResponsesCreateInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateInstanceProfileRequest) {
  }

  public get instanceProfile(): DeviceFarmResponsesCreateInstanceProfileInstanceProfile {
    return new DeviceFarmResponsesCreateInstanceProfileInstanceProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateInstanceProfileInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateInstanceProfileRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.instanceProfile.arn', props);
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
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.instanceProfile.packageCleanup', props);
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
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup', props);
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
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.instanceProfile.rebootAfterUse', props);
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
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.instanceProfile.name', props);
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
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstanceProfile.instanceProfile.description', props);
    return resource.getResponseField('instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmResponsesCreateNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateNetworkProfileRequest) {
  }

  public get networkProfile(): DeviceFarmResponsesCreateNetworkProfileNetworkProfile {
    return new DeviceFarmResponsesCreateNetworkProfileNetworkProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateNetworkProfileNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateNetworkProfileRequest) {
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.arn', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.name', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.description', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.type', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.uplinkBandwidthBits', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.downlinkBandwidthBits', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.uplinkDelayMs', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.downlinkDelayMs', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.uplinkJitterMs', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.downlinkJitterMs', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.uplinkLossPercent', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmResponsesCreateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateProjectRequest) {
  }

  public get project(): DeviceFarmResponsesCreateProjectProject {
    return new DeviceFarmResponsesCreateProjectProject(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateProjectProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateProjectRequest) {
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
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.project.arn', props);
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
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.project.name', props);
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
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.project.defaultJobTimeoutMinutes', props);
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
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.project.created', props);
    return resource.getResponseField('project.created') as unknown as string;
  }

}

export class DeviceFarmResponsesCreateRemoteAccessSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
  }

  public get remoteAccessSession(): DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession {
    return new DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.arn', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.name', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.created', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.status', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.result', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.message', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.started', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.stopped', props);
    return resource.getResponseField('remoteAccessSession.stopped') as unknown as string;
  }

  public get device(): DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice {
    return new DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.instanceArn', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.remoteDebugEnabled', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.remoteRecordEnabled', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.remoteRecordAppArn', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.hostAddress', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.clientId', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.billingMethod', props);
    return resource.getResponseField('remoteAccessSession.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes {
    return new DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.endpoint', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.deviceUdid', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.interactionMode', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.skipAppResign', props);
    return resource.getResponseField('remoteAccessSession.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.arn', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.name', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.manufacturer', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.model', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.modelId', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.formFactor', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.platform', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.os', props);
    return resource.getResponseField('remoteAccessSession.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu {
    return new DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu(this.__scope, this.__resources, this.__input);
  }

  public get resolution(): DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution {
    return new DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.heapSize', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.memory', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.image', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.carrier', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.radio', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.fleetType', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.fleetName', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.instances', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.availability', props);
    return resource.getResponseField('remoteAccessSession.device.availability') as unknown as string;
  }

}

export class DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceCpu {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.cpu.frequency', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.cpu.architecture', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.cpu.clock', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceResolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.resolution.width', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.device.resolution.height', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmResponsesCreateRemoteAccessSessionRemoteAccessSessionDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateRemoteAccessSessionRequest) {
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.total', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.metered', props);
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
          projectArn: this.__input.projectArn,
          deviceArn: this.__input.deviceArn,
          instanceArn: this.__input.instanceArn,
          sshPublicKey: this.__input.sshPublicKey,
          remoteDebugEnabled: this.__input.remoteDebugEnabled,
          remoteRecordEnabled: this.__input.remoteRecordEnabled,
          remoteRecordAppArn: this.__input.remoteRecordAppArn,
          name: this.__input.name,
          clientId: this.__input.clientId,
          configuration: {
            billingMethod: this.__input.configuration?.billingMethod,
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
          },
          interactionMode: this.__input.interactionMode,
          skipAppResign: this.__input.skipAppResign,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesCreateTestGridProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateTestGridProjectRequest) {
  }

  public get testGridProject(): DeviceFarmResponsesCreateTestGridProjectTestGridProject {
    return new DeviceFarmResponsesCreateTestGridProjectTestGridProject(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateTestGridProjectTestGridProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateTestGridProjectRequest) {
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
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridProject.testGridProject.arn', props);
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
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridProject.testGridProject.name', props);
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
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridProject.testGridProject.description', props);
    return resource.getResponseField('testGridProject.description') as unknown as string;
  }

  public get vpcConfig(): DeviceFarmResponsesCreateTestGridProjectTestGridProjectVpcConfig {
    return new DeviceFarmResponsesCreateTestGridProjectTestGridProjectVpcConfig(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridProject.testGridProject.created', props);
    return resource.getResponseField('testGridProject.created') as unknown as string;
  }

}

export class DeviceFarmResponsesCreateTestGridProjectTestGridProjectVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateTestGridProjectRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridProject.testGridProject.vpcConfig.securityGroupIds'),
        outputPath: 'testGridProject.vpcConfig.securityGroupIds',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridProject.testGridProject.vpcConfig.securityGroupIds', props);
    return resource.getResponseField('testGridProject.vpcConfig.securityGroupIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridProject.testGridProject.vpcConfig.subnetIds'),
        outputPath: 'testGridProject.vpcConfig.subnetIds',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridProject.testGridProject.vpcConfig.subnetIds', props);
    return resource.getResponseField('testGridProject.vpcConfig.subnetIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.CreateTestGridProject.testGridProject.vpcConfig.vpcId'),
        outputPath: 'testGridProject.vpcConfig.vpcId',
        parameters: {
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridProject.testGridProject.vpcConfig.vpcId', props);
    return resource.getResponseField('testGridProject.vpcConfig.vpcId') as unknown as string;
  }

}

export class DeviceFarmResponsesCreateTestGridUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateTestGridUrlRequest) {
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
          projectArn: this.__input.projectArn,
          expiresInSeconds: this.__input.expiresInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridUrl.url', props);
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
          projectArn: this.__input.projectArn,
          expiresInSeconds: this.__input.expiresInSeconds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTestGridUrl.expires', props);
    return resource.getResponseField('expires') as unknown as string;
  }

}

export class DeviceFarmResponsesCreateUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateUploadRequest) {
  }

  public get upload(): DeviceFarmResponsesCreateUploadUpload {
    return new DeviceFarmResponsesCreateUploadUpload(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateUploadUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateUploadRequest) {
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.arn', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.name', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.created', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.type', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.status', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.url', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.metadata', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.contentType', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.message', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          type: this.__input.type,
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUpload.upload.category', props);
    return resource.getResponseField('upload.category') as unknown as string;
  }

}

export class DeviceFarmResponsesCreateVpceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateVpceConfigurationRequest) {
  }

  public get vpceConfiguration(): DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration {
    return new DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesCreateVpceConfigurationVpceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmCreateVpceConfigurationRequest) {
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
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCEConfiguration.vpceConfiguration.arn', props);
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
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCEConfiguration.vpceConfiguration.vpceConfigurationName', props);
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
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCEConfiguration.vpceConfiguration.vpceServiceName', props);
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
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCEConfiguration.vpceConfiguration.serviceDnsName', props);
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
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationDescription') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get accountSettings(): DeviceFarmResponsesFetchAccountSettingsAccountSettings {
    return new DeviceFarmResponsesFetchAccountSettingsAccountSettings(this.__scope, this.__resources);
  }

}

export class DeviceFarmResponsesFetchAccountSettingsAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.awsAccountNumber', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.unmeteredDevices', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.unmeteredRemoteAccessDevices', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.maxJobTimeoutMinutes', props);
    return resource.getResponseField('accountSettings.maxJobTimeoutMinutes') as unknown as number;
  }

  public get trialMinutes(): DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes {
    return new DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes(this.__scope, this.__resources);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.maxSlots', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.defaultJobTimeoutMinutes', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.skipAppResign', props);
    return resource.getResponseField('accountSettings.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmResponsesFetchAccountSettingsAccountSettingsTrialMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.trialMinutes.total', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAccountSettings.accountSettings.trialMinutes.remaining', props);
    return resource.getResponseField('accountSettings.trialMinutes.remaining') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDeviceRequest) {
  }

  public get device(): DeviceFarmResponsesFetchDeviceDevice {
    return new DeviceFarmResponsesFetchDeviceDevice(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchDeviceDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDeviceRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.manufacturer', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.model', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.modelId', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.formFactor', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.platform', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.os', props);
    return resource.getResponseField('device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmResponsesFetchDeviceDeviceCpu {
    return new DeviceFarmResponsesFetchDeviceDeviceCpu(this.__scope, this.__resources, this.__input);
  }

  public get resolution(): DeviceFarmResponsesFetchDeviceDeviceResolution {
    return new DeviceFarmResponsesFetchDeviceDeviceResolution(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.heapSize', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.memory', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.image', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.carrier', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.radio', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.remoteAccessEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.remoteDebugEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.fleetType', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.fleetName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.instances', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.availability', props);
    return resource.getResponseField('device.availability') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchDeviceDeviceCpu {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDeviceRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.cpu.frequency', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.cpu.architecture', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.cpu.clock', props);
    return resource.getResponseField('device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchDeviceDeviceResolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDeviceRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.resolution.width', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.device.resolution.height', props);
    return resource.getResponseField('device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchDeviceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDeviceInstanceRequest) {
  }

  public get deviceInstance(): DeviceFarmResponsesFetchDeviceInstanceDeviceInstance {
    return new DeviceFarmResponsesFetchDeviceInstanceDeviceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchDeviceInstanceDeviceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDeviceInstanceRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.deviceArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.labels', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.udid', props);
    return resource.getResponseField('deviceInstance.udid') as unknown as string;
  }

  public get instanceProfile(): DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile {
    return new DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchDeviceInstanceDeviceInstanceInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDeviceInstanceRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.instanceProfile.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.instanceProfile.packageCleanup', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.instanceProfile.excludeAppPackagesFromCleanup', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.instanceProfile.rebootAfterUse', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.instanceProfile.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeviceInstance.deviceInstance.instanceProfile.description', props);
    return resource.getResponseField('deviceInstance.instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchDevicePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDevicePoolRequest) {
  }

  public get devicePool(): DeviceFarmResponsesFetchDevicePoolDevicePool {
    return new DeviceFarmResponsesFetchDevicePoolDevicePool(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchDevicePoolDevicePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDevicePoolRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePool.devicePool.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePool.devicePool.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePool.devicePool.description', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePool.devicePool.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePool.devicePool.rules', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePool.devicePool.maxDevices', props);
    return resource.getResponseField('devicePool.maxDevices') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchDevicePoolCompatibility {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetDevicePoolCompatibilityRequest) {
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
          devicePoolArn: this.__input.devicePoolArn,
          appArn: this.__input.appArn,
          testType: this.__input.testType,
          test: {
            type: this.__input.test?.type,
            testPackageArn: this.__input.test?.testPackageArn,
            testSpecArn: this.__input.test?.testSpecArn,
            filter: this.__input.test?.filter,
            parameters: this.__input.test?.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePoolCompatibility.compatibleDevices', props);
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
          devicePoolArn: this.__input.devicePoolArn,
          appArn: this.__input.appArn,
          testType: this.__input.testType,
          test: {
            type: this.__input.test?.type,
            testPackageArn: this.__input.test?.testPackageArn,
            testSpecArn: this.__input.test?.testSpecArn,
            filter: this.__input.test?.filter,
            parameters: this.__input.test?.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevicePoolCompatibility.incompatibleDevices', props);
    return resource.getResponseField('incompatibleDevices') as unknown as shapes.DeviceFarmDevicePoolCompatibilityResult[];
  }

}

export class DeviceFarmResponsesFetchInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetInstanceProfileRequest) {
  }

  public get instanceProfile(): DeviceFarmResponsesFetchInstanceProfileInstanceProfile {
    return new DeviceFarmResponsesFetchInstanceProfileInstanceProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchInstanceProfileInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetInstanceProfileRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.instanceProfile.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.instanceProfile.packageCleanup', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.instanceProfile.rebootAfterUse', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.instanceProfile.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInstanceProfile.instanceProfile.description', props);
    return resource.getResponseField('instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetJobRequest) {
  }

  public get job(): DeviceFarmResponsesFetchJobJob {
    return new DeviceFarmResponsesFetchJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.stopped', props);
    return resource.getResponseField('job.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmResponsesFetchJobJobCounters {
    return new DeviceFarmResponsesFetchJobJobCounters(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.message', props);
    return resource.getResponseField('job.message') as unknown as string;
  }

  public get device(): DeviceFarmResponsesFetchJobJobDevice {
    return new DeviceFarmResponsesFetchJobJobDevice(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.instanceArn', props);
    return resource.getResponseField('job.instanceArn') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesFetchJobJobDeviceMinutes {
    return new DeviceFarmResponsesFetchJobJobDeviceMinutes(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.videoEndpoint', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.videoCapture', props);
    return resource.getResponseField('job.videoCapture') as unknown as boolean;
  }

}

export class DeviceFarmResponsesFetchJobJobCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.counters.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.counters.passed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.counters.failed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.counters.warned', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.counters.errored', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.counters.stopped', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.counters.skipped', props);
    return resource.getResponseField('job.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchJobJobDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.manufacturer', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.model', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.modelId', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.formFactor', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.platform', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.os', props);
    return resource.getResponseField('job.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmResponsesFetchJobJobDeviceCpu {
    return new DeviceFarmResponsesFetchJobJobDeviceCpu(this.__scope, this.__resources, this.__input);
  }

  public get resolution(): DeviceFarmResponsesFetchJobJobDeviceResolution {
    return new DeviceFarmResponsesFetchJobJobDeviceResolution(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.heapSize', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.memory', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.image', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.carrier', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.radio', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.remoteAccessEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.remoteDebugEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.fleetType', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.fleetName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.instances', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.availability', props);
    return resource.getResponseField('job.device.availability') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchJobJobDeviceCpu {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.cpu.frequency', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.cpu.architecture', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.cpu.clock', props);
    return resource.getResponseField('job.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchJobJobDeviceResolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.resolution.width', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.device.resolution.height', props);
    return resource.getResponseField('job.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchJobJobDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJob.job.deviceMinutes.unmetered', props);
    return resource.getResponseField('job.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetNetworkProfileRequest) {
  }

  public get networkProfile(): DeviceFarmResponsesFetchNetworkProfileNetworkProfile {
    return new DeviceFarmResponsesFetchNetworkProfileNetworkProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchNetworkProfileNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetNetworkProfileRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.description', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.uplinkBandwidthBits', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.downlinkBandwidthBits', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.uplinkDelayMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.downlinkDelayMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.uplinkJitterMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.downlinkJitterMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.uplinkLossPercent', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchOfferingStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetOfferingStatusRequest) {
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOfferingStatus.current', props);
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOfferingStatus.nextPeriod', props);
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOfferingStatus.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetProjectRequest) {
  }

  public get project(): DeviceFarmResponsesFetchProjectProject {
    return new DeviceFarmResponsesFetchProjectProject(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchProjectProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetProjectRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProject.project.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProject.project.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProject.project.defaultJobTimeoutMinutes', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProject.project.created', props);
    return resource.getResponseField('project.created') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchRemoteAccessSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
  }

  public get remoteAccessSession(): DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession {
    return new DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.message', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.stopped', props);
    return resource.getResponseField('remoteAccessSession.stopped') as unknown as string;
  }

  public get device(): DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice {
    return new DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.instanceArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.remoteDebugEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.remoteRecordEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.remoteRecordAppArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.hostAddress', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.clientId', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.billingMethod', props);
    return resource.getResponseField('remoteAccessSession.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes {
    return new DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.endpoint', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.deviceUdid', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.interactionMode', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.skipAppResign', props);
    return resource.getResponseField('remoteAccessSession.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.manufacturer', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.model', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.modelId', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.formFactor', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.platform', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.os', props);
    return resource.getResponseField('remoteAccessSession.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu {
    return new DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu(this.__scope, this.__resources, this.__input);
  }

  public get resolution(): DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution {
    return new DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.heapSize', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.memory', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.image', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.carrier', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.radio', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.fleetType', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.fleetName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.instances', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.availability', props);
    return resource.getResponseField('remoteAccessSession.device.availability') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceCpu {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.cpu.frequency', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.cpu.architecture', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.cpu.clock', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceResolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.resolution.width', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.device.resolution.height', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchRemoteAccessSessionRemoteAccessSessionDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
  }

  public get run(): DeviceFarmResponsesFetchRunRun {
    return new DeviceFarmResponsesFetchRunRun(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchRunRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.platform', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.stopped', props);
    return resource.getResponseField('run.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmResponsesFetchRunRunCounters {
    return new DeviceFarmResponsesFetchRunRunCounters(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.message', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.totalJobs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.completedJobs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.billingMethod', props);
    return resource.getResponseField('run.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesFetchRunRunDeviceMinutes {
    return new DeviceFarmResponsesFetchRunRunDeviceMinutes(this.__scope, this.__resources, this.__input);
  }

  public get networkProfile(): DeviceFarmResponsesFetchRunRunNetworkProfile {
    return new DeviceFarmResponsesFetchRunRunNetworkProfile(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.parsingResultUrl', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.resultCode', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.seed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.appUpload', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.eventCount', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.jobTimeoutMinutes', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.devicePoolArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.locale', props);
    return resource.getResponseField('run.locale') as unknown as string;
  }

  public get radios(): DeviceFarmResponsesFetchRunRunRadios {
    return new DeviceFarmResponsesFetchRunRunRadios(this.__scope, this.__resources, this.__input);
  }

  public get location(): DeviceFarmResponsesFetchRunRunLocation {
    return new DeviceFarmResponsesFetchRunRunLocation(this.__scope, this.__resources, this.__input);
  }

  public get customerArtifactPaths(): DeviceFarmResponsesFetchRunRunCustomerArtifactPaths {
    return new DeviceFarmResponsesFetchRunRunCustomerArtifactPaths(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.webUrl', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.skipAppResign', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.testSpecArn', props);
    return resource.getResponseField('run.testSpecArn') as unknown as string;
  }

  public get deviceSelectionResult(): DeviceFarmResponsesFetchRunRunDeviceSelectionResult {
    return new DeviceFarmResponsesFetchRunRunDeviceSelectionResult(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchRunRunCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.counters.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.counters.passed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.counters.failed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.counters.warned', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.counters.errored', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.counters.stopped', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.counters.skipped', props);
    return resource.getResponseField('run.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchRunRunDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.deviceMinutes.unmetered', props);
    return resource.getResponseField('run.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchRunRunNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.description', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.uplinkBandwidthBits', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.downlinkBandwidthBits', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.uplinkDelayMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.downlinkDelayMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.uplinkJitterMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.downlinkJitterMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.uplinkLossPercent', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchRunRunRadios {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.radios.wifi', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.radios.bluetooth', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.radios.nfc', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.radios.gps', props);
    return resource.getResponseField('run.radios.gps') as unknown as boolean;
  }

}

export class DeviceFarmResponsesFetchRunRunLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.location.latitude', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.location.longitude', props);
    return resource.getResponseField('run.location.longitude') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchRunRunCustomerArtifactPaths {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.customerArtifactPaths.iosPaths', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.customerArtifactPaths.androidPaths', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.customerArtifactPaths.deviceHostPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.deviceHostPaths') as unknown as string[];
  }

}

export class DeviceFarmResponsesFetchRunRunDeviceSelectionResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.deviceSelectionResult.filters', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.deviceSelectionResult.matchedDevicesCount', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRun.run.deviceSelectionResult.maxDevices', props);
    return resource.getResponseField('run.deviceSelectionResult.maxDevices') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetSuiteRequest) {
  }

  public get suite(): DeviceFarmResponsesFetchSuiteSuite {
    return new DeviceFarmResponsesFetchSuiteSuite(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchSuiteSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetSuiteRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.stopped', props);
    return resource.getResponseField('suite.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmResponsesFetchSuiteSuiteCounters {
    return new DeviceFarmResponsesFetchSuiteSuiteCounters(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.message', props);
    return resource.getResponseField('suite.message') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes {
    return new DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchSuiteSuiteCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetSuiteRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.counters.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.counters.passed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.counters.failed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.counters.warned', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.counters.errored', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.counters.stopped', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.counters.skipped', props);
    return resource.getResponseField('suite.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchSuiteSuiteDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetSuiteRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSuite.suite.deviceMinutes.unmetered', props);
    return resource.getResponseField('suite.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestRequest) {
  }

  public get test(): DeviceFarmResponsesFetchTestTest {
    return new DeviceFarmResponsesFetchTestTest(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchTestTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.stopped', props);
    return resource.getResponseField('test.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmResponsesFetchTestTestCounters {
    return new DeviceFarmResponsesFetchTestTestCounters(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.message', props);
    return resource.getResponseField('test.message') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesFetchTestTestDeviceMinutes {
    return new DeviceFarmResponsesFetchTestTestDeviceMinutes(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchTestTestCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.counters.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.counters.passed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.counters.failed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.counters.warned', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.counters.errored', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.counters.stopped', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.counters.skipped', props);
    return resource.getResponseField('test.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchTestTestDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTest.test.deviceMinutes.unmetered', props);
    return resource.getResponseField('test.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesFetchTestGridProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestGridProjectRequest) {
  }

  public get testGridProject(): DeviceFarmResponsesFetchTestGridProjectTestGridProject {
    return new DeviceFarmResponsesFetchTestGridProjectTestGridProject(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchTestGridProjectTestGridProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestGridProjectRequest) {
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
          projectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridProject.testGridProject.arn', props);
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
          projectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridProject.testGridProject.name', props);
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
          projectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridProject.testGridProject.description', props);
    return resource.getResponseField('testGridProject.description') as unknown as string;
  }

  public get vpcConfig(): DeviceFarmResponsesFetchTestGridProjectTestGridProjectVpcConfig {
    return new DeviceFarmResponsesFetchTestGridProjectTestGridProjectVpcConfig(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridProject.testGridProject.created', props);
    return resource.getResponseField('testGridProject.created') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchTestGridProjectTestGridProjectVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestGridProjectRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridProject.testGridProject.vpcConfig.securityGroupIds'),
        outputPath: 'testGridProject.vpcConfig.securityGroupIds',
        parameters: {
          projectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridProject.testGridProject.vpcConfig.securityGroupIds', props);
    return resource.getResponseField('testGridProject.vpcConfig.securityGroupIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridProject.testGridProject.vpcConfig.subnetIds'),
        outputPath: 'testGridProject.vpcConfig.subnetIds',
        parameters: {
          projectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridProject.testGridProject.vpcConfig.subnetIds', props);
    return resource.getResponseField('testGridProject.vpcConfig.subnetIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.GetTestGridProject.testGridProject.vpcConfig.vpcId'),
        outputPath: 'testGridProject.vpcConfig.vpcId',
        parameters: {
          projectArn: this.__input.projectArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridProject.testGridProject.vpcConfig.vpcId', props);
    return resource.getResponseField('testGridProject.vpcConfig.vpcId') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchTestGridSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestGridSessionRequest) {
  }

  public get testGridSession(): DeviceFarmResponsesFetchTestGridSessionTestGridSession {
    return new DeviceFarmResponsesFetchTestGridSessionTestGridSession(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchTestGridSessionTestGridSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetTestGridSessionRequest) {
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
          projectArn: this.__input.projectArn,
          sessionId: this.__input.sessionId,
          sessionArn: this.__input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridSession.testGridSession.arn', props);
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
          projectArn: this.__input.projectArn,
          sessionId: this.__input.sessionId,
          sessionArn: this.__input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridSession.testGridSession.status', props);
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
          projectArn: this.__input.projectArn,
          sessionId: this.__input.sessionId,
          sessionArn: this.__input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridSession.testGridSession.created', props);
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
          projectArn: this.__input.projectArn,
          sessionId: this.__input.sessionId,
          sessionArn: this.__input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridSession.testGridSession.ended', props);
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
          projectArn: this.__input.projectArn,
          sessionId: this.__input.sessionId,
          sessionArn: this.__input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridSession.testGridSession.billingMinutes', props);
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
          projectArn: this.__input.projectArn,
          sessionId: this.__input.sessionId,
          sessionArn: this.__input.sessionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTestGridSession.testGridSession.seleniumProperties', props);
    return resource.getResponseField('testGridSession.seleniumProperties') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetUploadRequest) {
  }

  public get upload(): DeviceFarmResponsesFetchUploadUpload {
    return new DeviceFarmResponsesFetchUploadUpload(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchUploadUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetUploadRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.url', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.metadata', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.contentType', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.message', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetUpload.upload.category', props);
    return resource.getResponseField('upload.category') as unknown as string;
  }

}

export class DeviceFarmResponsesFetchVpceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetVpceConfigurationRequest) {
  }

  public get vpceConfiguration(): DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration {
    return new DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesFetchVpceConfigurationVpceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmGetVpceConfigurationRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVPCEConfiguration.vpceConfiguration.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVPCEConfiguration.vpceConfiguration.vpceConfigurationName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVPCEConfiguration.vpceConfiguration.vpceServiceName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVPCEConfiguration.vpceConfiguration.serviceDnsName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationDescription') as unknown as string;
  }

}

export class DeviceFarmResponsesInstallToRemoteAccessSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmInstallToRemoteAccessSessionRequest) {
  }

  public get appUpload(): DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload {
    return new DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesInstallToRemoteAccessSessionAppUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmInstallToRemoteAccessSessionRequest) {
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.arn', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.name', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.created', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.type', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.status', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.url', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.metadata', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.contentType', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.message', props);
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
          remoteAccessSessionArn: this.__input.remoteAccessSessionArn,
          appArn: this.__input.appArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InstallToRemoteAccessSession.appUpload.category', props);
    return resource.getResponseField('appUpload.category') as unknown as string;
  }

}

export class DeviceFarmResponsesListArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListArtifactsRequest) {
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArtifacts.artifacts', props);
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListArtifacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListDeviceInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListDeviceInstancesRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceInstances.deviceInstances', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceInstances.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListDevicePools {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListDevicePoolsRequest) {
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevicePools.devicePools', props);
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevicePools.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListDevicesRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevices.devices', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDevices.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListInstanceProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListInstanceProfilesRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfiles.instanceProfiles', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInstanceProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListJobsRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.jobs', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListNetworkProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListNetworkProfilesRequest) {
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNetworkProfiles.networkProfiles', props);
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNetworkProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListOfferingPromotions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListOfferingPromotionsRequest) {
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferingPromotions.offeringPromotions', props);
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferingPromotions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListOfferingTransactions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListOfferingTransactionsRequest) {
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferingTransactions.offeringTransactions', props);
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferingTransactions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListOfferings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListOfferingsRequest) {
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferings.offerings', props);
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
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListOfferings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListProjectsRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.projects', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListRemoteAccessSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListRemoteAccessSessionsRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRemoteAccessSessions.remoteAccessSessions', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRemoteAccessSessions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListRunsRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuns.runs', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRuns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListSamples {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListSamplesRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSamples.samples', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSamples.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListSuites {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListSuitesRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuites.suites', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSuites.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListTagsForResourceRequest) {
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
          ResourceARN: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DeviceFarmTag[];
  }

}

export class DeviceFarmResponsesListTestGridProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListTestGridProjectsRequest) {
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
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridProjects.testGridProjects', props);
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
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListTestGridSessionActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListTestGridSessionActionsRequest) {
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
          sessionArn: this.__input.sessionArn,
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridSessionActions.actions', props);
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
          sessionArn: this.__input.sessionArn,
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridSessionActions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListTestGridSessionArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListTestGridSessionArtifactsRequest) {
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
          sessionArn: this.__input.sessionArn,
          type: this.__input.type,
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridSessionArtifacts.artifacts', props);
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
          sessionArn: this.__input.sessionArn,
          type: this.__input.type,
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridSessionArtifacts.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListTestGridSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListTestGridSessionsRequest) {
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
          projectArn: this.__input.projectArn,
          status: this.__input.status,
          creationTimeAfter: this.__input.creationTimeAfter,
          creationTimeBefore: this.__input.creationTimeBefore,
          endTimeAfter: this.__input.endTimeAfter,
          endTimeBefore: this.__input.endTimeBefore,
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridSessions.testGridSessions', props);
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
          projectArn: this.__input.projectArn,
          status: this.__input.status,
          creationTimeAfter: this.__input.creationTimeAfter,
          creationTimeBefore: this.__input.creationTimeBefore,
          endTimeAfter: this.__input.endTimeAfter,
          endTimeBefore: this.__input.endTimeBefore,
          maxResult: this.__input.maxResult,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTestGridSessions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListTests {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListTestsRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTests.tests', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTests.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListUniqueProblems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListUniqueProblemsRequest) {
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUniqueProblems.uniqueProblems', props);
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
          arn: this.__input.arn,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUniqueProblems.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListUploads {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListUploadsRequest) {
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUploads.uploads', props);
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
          arn: this.__input.arn,
          type: this.__input.type,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUploads.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesListVpceConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmListVpceConfigurationsRequest) {
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVPCEConfigurations.vpceConfigurations', props);
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
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVPCEConfigurations.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class DeviceFarmResponsesPurchaseOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmPurchaseOfferingRequest) {
  }

  public get offeringTransaction(): DeviceFarmResponsesPurchaseOfferingOfferingTransaction {
    return new DeviceFarmResponsesPurchaseOfferingOfferingTransaction(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesPurchaseOfferingOfferingTransaction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmPurchaseOfferingRequest) {
  }

  public get offeringStatus(): DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus {
    return new DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus(this.__scope, this.__resources, this.__input);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.transactionId', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringPromotionId', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.createdOn', props);
    return resource.getResponseField('offeringTransaction.createdOn') as unknown as string;
  }

  public get cost(): DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost {
    return new DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmPurchaseOfferingRequest) {
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.type', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.type') as unknown as string;
  }

  public get offering(): DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering {
    return new DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering(this.__scope, this.__resources, this.__input);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.quantity', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.effectiveOn', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.effectiveOn') as unknown as string;
  }

}

export class DeviceFarmResponsesPurchaseOfferingOfferingTransactionOfferingStatusOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmPurchaseOfferingRequest) {
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.id', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.description', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.type', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.platform', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.offeringStatus.offering.recurringCharges', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.recurringCharges') as unknown as shapes.DeviceFarmRecurringCharge[];
  }

}

export class DeviceFarmResponsesPurchaseOfferingOfferingTransactionCost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmPurchaseOfferingRequest) {
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.cost.amount', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
          offeringPromotionId: this.__input.offeringPromotionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseOffering.offeringTransaction.cost.currencyCode', props);
    return resource.getResponseField('offeringTransaction.cost.currencyCode') as unknown as string;
  }

}

export class DeviceFarmResponsesRenewOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmRenewOfferingRequest) {
  }

  public get offeringTransaction(): DeviceFarmResponsesRenewOfferingOfferingTransaction {
    return new DeviceFarmResponsesRenewOfferingOfferingTransaction(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesRenewOfferingOfferingTransaction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmRenewOfferingRequest) {
  }

  public get offeringStatus(): DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus {
    return new DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus(this.__scope, this.__resources, this.__input);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.transactionId', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringPromotionId', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.createdOn', props);
    return resource.getResponseField('offeringTransaction.createdOn') as unknown as string;
  }

  public get cost(): DeviceFarmResponsesRenewOfferingOfferingTransactionCost {
    return new DeviceFarmResponsesRenewOfferingOfferingTransactionCost(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmRenewOfferingRequest) {
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.type', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.type') as unknown as string;
  }

  public get offering(): DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering {
    return new DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering(this.__scope, this.__resources, this.__input);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.quantity', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.effectiveOn', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.effectiveOn') as unknown as string;
  }

}

export class DeviceFarmResponsesRenewOfferingOfferingTransactionOfferingStatusOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmRenewOfferingRequest) {
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.offering.id', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.offering.description', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.offering.type', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.offering.platform', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.offeringStatus.offering.recurringCharges', props);
    return resource.getResponseField('offeringTransaction.offeringStatus.offering.recurringCharges') as unknown as shapes.DeviceFarmRecurringCharge[];
  }

}

export class DeviceFarmResponsesRenewOfferingOfferingTransactionCost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmRenewOfferingRequest) {
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.cost.amount', props);
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
          offeringId: this.__input.offeringId,
          quantity: this.__input.quantity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RenewOffering.offeringTransaction.cost.currencyCode', props);
    return resource.getResponseField('offeringTransaction.cost.currencyCode') as unknown as string;
  }

}

export class DeviceFarmResponsesScheduleRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
  }

  public get run(): DeviceFarmResponsesScheduleRunRun {
    return new DeviceFarmResponsesScheduleRunRun(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesScheduleRunRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.arn', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.name', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.type', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.platform', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.created', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.status', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.result', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.started', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.stopped', props);
    return resource.getResponseField('run.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmResponsesScheduleRunRunCounters {
    return new DeviceFarmResponsesScheduleRunRunCounters(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.message', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.totalJobs', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.completedJobs', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.billingMethod', props);
    return resource.getResponseField('run.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesScheduleRunRunDeviceMinutes {
    return new DeviceFarmResponsesScheduleRunRunDeviceMinutes(this.__scope, this.__resources, this.__input);
  }

  public get networkProfile(): DeviceFarmResponsesScheduleRunRunNetworkProfile {
    return new DeviceFarmResponsesScheduleRunRunNetworkProfile(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.parsingResultUrl', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.resultCode', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.seed', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.appUpload', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.eventCount', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.jobTimeoutMinutes', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.devicePoolArn', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.locale', props);
    return resource.getResponseField('run.locale') as unknown as string;
  }

  public get radios(): DeviceFarmResponsesScheduleRunRunRadios {
    return new DeviceFarmResponsesScheduleRunRunRadios(this.__scope, this.__resources, this.__input);
  }

  public get location(): DeviceFarmResponsesScheduleRunRunLocation {
    return new DeviceFarmResponsesScheduleRunRunLocation(this.__scope, this.__resources, this.__input);
  }

  public get customerArtifactPaths(): DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths {
    return new DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.webUrl', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.skipAppResign', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.testSpecArn', props);
    return resource.getResponseField('run.testSpecArn') as unknown as string;
  }

  public get deviceSelectionResult(): DeviceFarmResponsesScheduleRunRunDeviceSelectionResult {
    return new DeviceFarmResponsesScheduleRunRunDeviceSelectionResult(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesScheduleRunRunCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.counters.total', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.counters.passed', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.counters.failed', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.counters.warned', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.counters.errored', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.counters.stopped', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.counters.skipped', props);
    return resource.getResponseField('run.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmResponsesScheduleRunRunDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.deviceMinutes.total', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.deviceMinutes.metered', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.deviceMinutes.unmetered', props);
    return resource.getResponseField('run.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesScheduleRunRunNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.arn', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.name', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.description', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.type', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.uplinkBandwidthBits', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.downlinkBandwidthBits', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.uplinkDelayMs', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.downlinkDelayMs', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.uplinkJitterMs', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.downlinkJitterMs', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.uplinkLossPercent', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmResponsesScheduleRunRunRadios {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.radios.wifi', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.radios.bluetooth', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.radios.nfc', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.radios.gps', props);
    return resource.getResponseField('run.radios.gps') as unknown as boolean;
  }

}

export class DeviceFarmResponsesScheduleRunRunLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.location.latitude', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.location.longitude', props);
    return resource.getResponseField('run.location.longitude') as unknown as number;
  }

}

export class DeviceFarmResponsesScheduleRunRunCustomerArtifactPaths {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.customerArtifactPaths.iosPaths', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.customerArtifactPaths.androidPaths', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.customerArtifactPaths.deviceHostPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.deviceHostPaths') as unknown as string[];
  }

}

export class DeviceFarmResponsesScheduleRunRunDeviceSelectionResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmScheduleRunRequest) {
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.deviceSelectionResult.filters', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.deviceSelectionResult.matchedDevicesCount', props);
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
          projectArn: this.__input.projectArn,
          appArn: this.__input.appArn,
          devicePoolArn: this.__input.devicePoolArn,
          deviceSelectionConfiguration: {
            filters: this.__input.deviceSelectionConfiguration?.filters,
            maxDevices: this.__input.deviceSelectionConfiguration?.maxDevices,
          },
          name: this.__input.name,
          test: {
            type: this.__input.test.type,
            testPackageArn: this.__input.test.testPackageArn,
            testSpecArn: this.__input.test.testSpecArn,
            filter: this.__input.test.filter,
            parameters: this.__input.test.parameters,
          },
          configuration: {
            extraDataPackageArn: this.__input.configuration?.extraDataPackageArn,
            networkProfileArn: this.__input.configuration?.networkProfileArn,
            locale: this.__input.configuration?.locale,
            location: {
              latitude: this.__input.configuration?.location?.latitude,
              longitude: this.__input.configuration?.location?.longitude,
            },
            vpceConfigurationArns: this.__input.configuration?.vpceConfigurationArns,
            customerArtifactPaths: {
              iosPaths: this.__input.configuration?.customerArtifactPaths?.iosPaths,
              androidPaths: this.__input.configuration?.customerArtifactPaths?.androidPaths,
              deviceHostPaths: this.__input.configuration?.customerArtifactPaths?.deviceHostPaths,
            },
            radios: {
              wifi: this.__input.configuration?.radios?.wifi,
              bluetooth: this.__input.configuration?.radios?.bluetooth,
              nfc: this.__input.configuration?.radios?.nfc,
              gps: this.__input.configuration?.radios?.gps,
            },
            auxiliaryApps: this.__input.configuration?.auxiliaryApps,
            billingMethod: this.__input.configuration?.billingMethod,
          },
          executionConfiguration: {
            jobTimeoutMinutes: this.__input.executionConfiguration?.jobTimeoutMinutes,
            accountsCleanup: this.__input.executionConfiguration?.accountsCleanup,
            appPackagesCleanup: this.__input.executionConfiguration?.appPackagesCleanup,
            videoCapture: this.__input.executionConfiguration?.videoCapture,
            skipAppResign: this.__input.executionConfiguration?.skipAppResign,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ScheduleRun.run.deviceSelectionResult.maxDevices', props);
    return resource.getResponseField('run.deviceSelectionResult.maxDevices') as unknown as number;
  }

}

export class DeviceFarmResponsesStopJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopJobRequest) {
  }

  public get job(): DeviceFarmResponsesStopJobJob {
    return new DeviceFarmResponsesStopJobJob(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesStopJobJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.stopped', props);
    return resource.getResponseField('job.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmResponsesStopJobJobCounters {
    return new DeviceFarmResponsesStopJobJobCounters(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.message', props);
    return resource.getResponseField('job.message') as unknown as string;
  }

  public get device(): DeviceFarmResponsesStopJobJobDevice {
    return new DeviceFarmResponsesStopJobJobDevice(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.instanceArn', props);
    return resource.getResponseField('job.instanceArn') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesStopJobJobDeviceMinutes {
    return new DeviceFarmResponsesStopJobJobDeviceMinutes(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.videoEndpoint', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.videoCapture', props);
    return resource.getResponseField('job.videoCapture') as unknown as boolean;
  }

}

export class DeviceFarmResponsesStopJobJobCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.counters.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.counters.passed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.counters.failed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.counters.warned', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.counters.errored', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.counters.stopped', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.counters.skipped', props);
    return resource.getResponseField('job.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmResponsesStopJobJobDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.manufacturer', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.model', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.modelId', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.formFactor', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.platform', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.os', props);
    return resource.getResponseField('job.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmResponsesStopJobJobDeviceCpu {
    return new DeviceFarmResponsesStopJobJobDeviceCpu(this.__scope, this.__resources, this.__input);
  }

  public get resolution(): DeviceFarmResponsesStopJobJobDeviceResolution {
    return new DeviceFarmResponsesStopJobJobDeviceResolution(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.heapSize', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.memory', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.image', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.carrier', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.radio', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.remoteAccessEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.remoteDebugEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.fleetType', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.fleetName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.instances', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.availability', props);
    return resource.getResponseField('job.device.availability') as unknown as string;
  }

}

export class DeviceFarmResponsesStopJobJobDeviceCpu {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.cpu.frequency', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.cpu.architecture', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.cpu.clock', props);
    return resource.getResponseField('job.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmResponsesStopJobJobDeviceResolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.resolution.width', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.device.resolution.height', props);
    return resource.getResponseField('job.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmResponsesStopJobJobDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopJobRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopJob.job.deviceMinutes.unmetered', props);
    return resource.getResponseField('job.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRemoteAccessSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
  }

  public get remoteAccessSession(): DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession {
    return new DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.message', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.stopped', props);
    return resource.getResponseField('remoteAccessSession.stopped') as unknown as string;
  }

  public get device(): DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice {
    return new DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.instanceArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.remoteDebugEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.remoteRecordEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.remoteRecordAppArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.hostAddress', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.clientId', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.billingMethod', props);
    return resource.getResponseField('remoteAccessSession.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes {
    return new DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.endpoint', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.deviceUdid', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.interactionMode', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.skipAppResign', props);
    return resource.getResponseField('remoteAccessSession.skipAppResign') as unknown as boolean;
  }

}

export class DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.manufacturer', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.model', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.modelId', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.formFactor', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.platform', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.os', props);
    return resource.getResponseField('remoteAccessSession.device.os') as unknown as string;
  }

  public get cpu(): DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu {
    return new DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu(this.__scope, this.__resources, this.__input);
  }

  public get resolution(): DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution {
    return new DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.heapSize', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.memory', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.image', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.carrier', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.radio', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.remoteAccessEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.remoteDebugEnabled', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.fleetType', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.fleetName', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.instances', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.availability', props);
    return resource.getResponseField('remoteAccessSession.device.availability') as unknown as string;
  }

}

export class DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceCpu {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.cpu.frequency', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.cpu.architecture', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.cpu.clock', props);
    return resource.getResponseField('remoteAccessSession.device.cpu.clock') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceResolution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.resolution.width', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.device.resolution.height', props);
    return resource.getResponseField('remoteAccessSession.device.resolution.height') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRemoteAccessSessionRemoteAccessSessionDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRemoteAccessSessionRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRemoteAccessSession.remoteAccessSession.deviceMinutes.unmetered', props);
    return resource.getResponseField('remoteAccessSession.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
  }

  public get run(): DeviceFarmResponsesStopRunRun {
    return new DeviceFarmResponsesStopRunRun(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesStopRunRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.platform', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.created', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.status', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.result', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.started', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.stopped', props);
    return resource.getResponseField('run.stopped') as unknown as string;
  }

  public get counters(): DeviceFarmResponsesStopRunRunCounters {
    return new DeviceFarmResponsesStopRunRunCounters(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.message', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.totalJobs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.completedJobs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.billingMethod', props);
    return resource.getResponseField('run.billingMethod') as unknown as string;
  }

  public get deviceMinutes(): DeviceFarmResponsesStopRunRunDeviceMinutes {
    return new DeviceFarmResponsesStopRunRunDeviceMinutes(this.__scope, this.__resources, this.__input);
  }

  public get networkProfile(): DeviceFarmResponsesStopRunRunNetworkProfile {
    return new DeviceFarmResponsesStopRunRunNetworkProfile(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.parsingResultUrl', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.resultCode', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.seed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.appUpload', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.eventCount', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.jobTimeoutMinutes', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.devicePoolArn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.locale', props);
    return resource.getResponseField('run.locale') as unknown as string;
  }

  public get radios(): DeviceFarmResponsesStopRunRunRadios {
    return new DeviceFarmResponsesStopRunRunRadios(this.__scope, this.__resources, this.__input);
  }

  public get location(): DeviceFarmResponsesStopRunRunLocation {
    return new DeviceFarmResponsesStopRunRunLocation(this.__scope, this.__resources, this.__input);
  }

  public get customerArtifactPaths(): DeviceFarmResponsesStopRunRunCustomerArtifactPaths {
    return new DeviceFarmResponsesStopRunRunCustomerArtifactPaths(this.__scope, this.__resources, this.__input);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.webUrl', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.skipAppResign', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.testSpecArn', props);
    return resource.getResponseField('run.testSpecArn') as unknown as string;
  }

  public get deviceSelectionResult(): DeviceFarmResponsesStopRunRunDeviceSelectionResult {
    return new DeviceFarmResponsesStopRunRunDeviceSelectionResult(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesStopRunRunCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.counters.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.counters.passed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.counters.failed', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.counters.warned', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.counters.errored', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.counters.stopped', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.counters.skipped', props);
    return resource.getResponseField('run.counters.skipped') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRunRunDeviceMinutes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.deviceMinutes.total', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.deviceMinutes.metered', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.deviceMinutes.unmetered', props);
    return resource.getResponseField('run.deviceMinutes.unmetered') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRunRunNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.arn', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.name', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.description', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.type', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.uplinkBandwidthBits', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.downlinkBandwidthBits', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.uplinkDelayMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.downlinkDelayMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.uplinkJitterMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.downlinkJitterMs', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.uplinkLossPercent', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('run.networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRunRunRadios {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.radios.wifi', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.radios.bluetooth', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.radios.nfc', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.radios.gps', props);
    return resource.getResponseField('run.radios.gps') as unknown as boolean;
  }

}

export class DeviceFarmResponsesStopRunRunLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.location.latitude', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.location.longitude', props);
    return resource.getResponseField('run.location.longitude') as unknown as number;
  }

}

export class DeviceFarmResponsesStopRunRunCustomerArtifactPaths {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.customerArtifactPaths.iosPaths', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.customerArtifactPaths.androidPaths', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.customerArtifactPaths.deviceHostPaths', props);
    return resource.getResponseField('run.customerArtifactPaths.deviceHostPaths') as unknown as string[];
  }

}

export class DeviceFarmResponsesStopRunRunDeviceSelectionResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmStopRunRequest) {
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.deviceSelectionResult.filters', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.deviceSelectionResult.matchedDevicesCount', props);
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
          arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopRun.run.deviceSelectionResult.maxDevices', props);
    return resource.getResponseField('run.deviceSelectionResult.maxDevices') as unknown as number;
  }

}

export class DeviceFarmResponsesUpdateDeviceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateDeviceInstanceRequest) {
  }

  public get deviceInstance(): DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance {
    return new DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateDeviceInstanceDeviceInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateDeviceInstanceRequest) {
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.arn', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.deviceArn', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.labels', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.status', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.udid', props);
    return resource.getResponseField('deviceInstance.udid') as unknown as string;
  }

  public get instanceProfile(): DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile {
    return new DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateDeviceInstanceDeviceInstanceInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateDeviceInstanceRequest) {
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.instanceProfile.arn', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.instanceProfile.packageCleanup', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.instanceProfile.excludeAppPackagesFromCleanup', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.instanceProfile.rebootAfterUse', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.instanceProfile.name', props);
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
          arn: this.__input.arn,
          profileArn: this.__input.profileArn,
          labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDeviceInstance.deviceInstance.instanceProfile.description', props);
    return resource.getResponseField('deviceInstance.instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmResponsesUpdateDevicePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateDevicePoolRequest) {
  }

  public get devicePool(): DeviceFarmResponsesUpdateDevicePoolDevicePool {
    return new DeviceFarmResponsesUpdateDevicePoolDevicePool(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateDevicePoolDevicePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateDevicePoolRequest) {
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
          clearMaxDevices: this.__input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevicePool.devicePool.arn', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
          clearMaxDevices: this.__input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevicePool.devicePool.name', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
          clearMaxDevices: this.__input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevicePool.devicePool.description', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
          clearMaxDevices: this.__input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevicePool.devicePool.type', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
          clearMaxDevices: this.__input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevicePool.devicePool.rules', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          rules: this.__input.rules,
          maxDevices: this.__input.maxDevices,
          clearMaxDevices: this.__input.clearMaxDevices,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDevicePool.devicePool.maxDevices', props);
    return resource.getResponseField('devicePool.maxDevices') as unknown as number;
  }

}

export class DeviceFarmResponsesUpdateInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateInstanceProfileRequest) {
  }

  public get instanceProfile(): DeviceFarmResponsesUpdateInstanceProfileInstanceProfile {
    return new DeviceFarmResponsesUpdateInstanceProfileInstanceProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateInstanceProfileInstanceProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateInstanceProfileRequest) {
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInstanceProfile.instanceProfile.arn', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInstanceProfile.instanceProfile.packageCleanup', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInstanceProfile.instanceProfile.excludeAppPackagesFromCleanup', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInstanceProfile.instanceProfile.rebootAfterUse', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInstanceProfile.instanceProfile.name', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          packageCleanup: this.__input.packageCleanup,
          excludeAppPackagesFromCleanup: this.__input.excludeAppPackagesFromCleanup,
          rebootAfterUse: this.__input.rebootAfterUse,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateInstanceProfile.instanceProfile.description', props);
    return resource.getResponseField('instanceProfile.description') as unknown as string;
  }

}

export class DeviceFarmResponsesUpdateNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateNetworkProfileRequest) {
  }

  public get networkProfile(): DeviceFarmResponsesUpdateNetworkProfileNetworkProfile {
    return new DeviceFarmResponsesUpdateNetworkProfileNetworkProfile(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateNetworkProfileNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateNetworkProfileRequest) {
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.arn', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.name', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.description', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.type', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.uplinkBandwidthBits', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.downlinkBandwidthBits', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.uplinkDelayMs', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.downlinkDelayMs', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.uplinkJitterMs', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.downlinkJitterMs', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.uplinkLossPercent', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          description: this.__input.description,
          type: this.__input.type,
          uplinkBandwidthBits: this.__input.uplinkBandwidthBits,
          downlinkBandwidthBits: this.__input.downlinkBandwidthBits,
          uplinkDelayMs: this.__input.uplinkDelayMs,
          downlinkDelayMs: this.__input.downlinkDelayMs,
          uplinkJitterMs: this.__input.uplinkJitterMs,
          downlinkJitterMs: this.__input.downlinkJitterMs,
          uplinkLossPercent: this.__input.uplinkLossPercent,
          downlinkLossPercent: this.__input.downlinkLossPercent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNetworkProfile.networkProfile.downlinkLossPercent', props);
    return resource.getResponseField('networkProfile.downlinkLossPercent') as unknown as number;
  }

}

export class DeviceFarmResponsesUpdateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateProjectRequest) {
  }

  public get project(): DeviceFarmResponsesUpdateProjectProject {
    return new DeviceFarmResponsesUpdateProjectProject(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateProjectProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateProjectRequest) {
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
          arn: this.__input.arn,
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.project.arn', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.project.name', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.project.defaultJobTimeoutMinutes', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          defaultJobTimeoutMinutes: this.__input.defaultJobTimeoutMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateProject.project.created', props);
    return resource.getResponseField('project.created') as unknown as string;
  }

}

export class DeviceFarmResponsesUpdateTestGridProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateTestGridProjectRequest) {
  }

  public get testGridProject(): DeviceFarmResponsesUpdateTestGridProjectTestGridProject {
    return new DeviceFarmResponsesUpdateTestGridProjectTestGridProject(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateTestGridProjectTestGridProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateTestGridProjectRequest) {
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTestGridProject.testGridProject.arn', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTestGridProject.testGridProject.name', props);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTestGridProject.testGridProject.description', props);
    return resource.getResponseField('testGridProject.description') as unknown as string;
  }

  public get vpcConfig(): DeviceFarmResponsesUpdateTestGridProjectTestGridProjectVpcConfig {
    return new DeviceFarmResponsesUpdateTestGridProjectTestGridProjectVpcConfig(this.__scope, this.__resources, this.__input);
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
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTestGridProject.testGridProject.created', props);
    return resource.getResponseField('testGridProject.created') as unknown as string;
  }

}

export class DeviceFarmResponsesUpdateTestGridProjectTestGridProjectVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateTestGridProjectRequest) {
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateTestGridProject.testGridProject.vpcConfig.securityGroupIds'),
        outputPath: 'testGridProject.vpcConfig.securityGroupIds',
        parameters: {
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTestGridProject.testGridProject.vpcConfig.securityGroupIds', props);
    return resource.getResponseField('testGridProject.vpcConfig.securityGroupIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateTestGridProject.testGridProject.vpcConfig.subnetIds'),
        outputPath: 'testGridProject.vpcConfig.subnetIds',
        parameters: {
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTestGridProject.testGridProject.vpcConfig.subnetIds', props);
    return resource.getResponseField('testGridProject.vpcConfig.subnetIds') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTestGridProject',
        service: 'DeviceFarm',
        physicalResourceId: cr.PhysicalResourceId.of('DeviceFarm.UpdateTestGridProject.testGridProject.vpcConfig.vpcId'),
        outputPath: 'testGridProject.vpcConfig.vpcId',
        parameters: {
          projectArn: this.__input.projectArn,
          name: this.__input.name,
          description: this.__input.description,
          vpcConfig: {
            securityGroupIds: this.__input.vpcConfig?.securityGroupIds,
            subnetIds: this.__input.vpcConfig?.subnetIds,
            vpcId: this.__input.vpcConfig?.vpcId,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTestGridProject.testGridProject.vpcConfig.vpcId', props);
    return resource.getResponseField('testGridProject.vpcConfig.vpcId') as unknown as string;
  }

}

export class DeviceFarmResponsesUpdateUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateUploadRequest) {
  }

  public get upload(): DeviceFarmResponsesUpdateUploadUpload {
    return new DeviceFarmResponsesUpdateUploadUpload(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateUploadUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateUploadRequest) {
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.arn', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.name', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.created', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.type', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.status', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.url', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.metadata', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.contentType', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.message', props);
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
          arn: this.__input.arn,
          name: this.__input.name,
          contentType: this.__input.contentType,
          editContent: this.__input.editContent,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUpload.upload.category', props);
    return resource.getResponseField('upload.category') as unknown as string;
  }

}

export class DeviceFarmResponsesUpdateVpceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateVpceConfigurationRequest) {
  }

  public get vpceConfiguration(): DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration {
    return new DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class DeviceFarmResponsesUpdateVpceConfigurationVpceConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DeviceFarmUpdateVpceConfigurationRequest) {
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
          arn: this.__input.arn,
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVPCEConfiguration.vpceConfiguration.arn', props);
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
          arn: this.__input.arn,
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVPCEConfiguration.vpceConfiguration.vpceConfigurationName', props);
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
          arn: this.__input.arn,
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVPCEConfiguration.vpceConfiguration.vpceServiceName', props);
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
          arn: this.__input.arn,
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVPCEConfiguration.vpceConfiguration.serviceDnsName', props);
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
          arn: this.__input.arn,
          vpceConfigurationName: this.__input.vpceConfigurationName,
          vpceServiceName: this.__input.vpceServiceName,
          serviceDnsName: this.__input.serviceDnsName,
          vpceConfigurationDescription: this.__input.vpceConfigurationDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVPCEConfiguration.vpceConfiguration.vpceConfigurationDescription', props);
    return resource.getResponseField('vpceConfiguration.vpceConfigurationDescription') as unknown as string;
  }

}

