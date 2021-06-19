import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AlexaForBusinessClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public approveSkill(input: shapes.AlexaForBusinessApproveSkillRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'approveSkill',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ApproveSkill'),
        parameters: {
          SkillId: input.skillId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ApproveSkill', props);
  }

  public associateContactWithAddressBook(input: shapes.AlexaForBusinessAssociateContactWithAddressBookRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateContactWithAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.AssociateContactWithAddressBook'),
        parameters: {
          ContactArn: input.contactArn,
          AddressBookArn: input.addressBookArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateContactWithAddressBook', props);
  }

  public associateDeviceWithNetworkProfile(input: shapes.AlexaForBusinessAssociateDeviceWithNetworkProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDeviceWithNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.AssociateDeviceWithNetworkProfile'),
        parameters: {
          DeviceArn: input.deviceArn,
          NetworkProfileArn: input.networkProfileArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDeviceWithNetworkProfile', props);
  }

  public associateDeviceWithRoom(input: shapes.AlexaForBusinessAssociateDeviceWithRoomRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateDeviceWithRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.AssociateDeviceWithRoom'),
        parameters: {
          DeviceArn: input.deviceArn,
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateDeviceWithRoom', props);
  }

  public associateSkillGroupWithRoom(input: shapes.AlexaForBusinessAssociateSkillGroupWithRoomRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSkillGroupWithRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.AssociateSkillGroupWithRoom'),
        parameters: {
          SkillGroupArn: input.skillGroupArn,
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateSkillGroupWithRoom', props);
  }

  public associateSkillWithSkillGroup(input: shapes.AlexaForBusinessAssociateSkillWithSkillGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSkillWithSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.AssociateSkillWithSkillGroup'),
        parameters: {
          SkillGroupArn: input.skillGroupArn,
          SkillId: input.skillId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateSkillWithSkillGroup', props);
  }

  public associateSkillWithUsers(input: shapes.AlexaForBusinessAssociateSkillWithUsersRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateSkillWithUsers',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.AssociateSkillWithUsers'),
        parameters: {
          SkillId: input.skillId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateSkillWithUsers', props);
  }

  public createAddressBook(input: shapes.AlexaForBusinessCreateAddressBookRequest): AlexaForBusinessResponsesCreateAddressBook {
    return new AlexaForBusinessResponsesCreateAddressBook(this, this.__resources, input);
  }

  public createBusinessReportSchedule(input: shapes.AlexaForBusinessCreateBusinessReportScheduleRequest): AlexaForBusinessResponsesCreateBusinessReportSchedule {
    return new AlexaForBusinessResponsesCreateBusinessReportSchedule(this, this.__resources, input);
  }

  public createConferenceProvider(input: shapes.AlexaForBusinessCreateConferenceProviderRequest): AlexaForBusinessResponsesCreateConferenceProvider {
    return new AlexaForBusinessResponsesCreateConferenceProvider(this, this.__resources, input);
  }

  public createContact(input: shapes.AlexaForBusinessCreateContactRequest): AlexaForBusinessResponsesCreateContact {
    return new AlexaForBusinessResponsesCreateContact(this, this.__resources, input);
  }

  public createGatewayGroup(input: shapes.AlexaForBusinessCreateGatewayGroupRequest): AlexaForBusinessResponsesCreateGatewayGroup {
    return new AlexaForBusinessResponsesCreateGatewayGroup(this, this.__resources, input);
  }

  public createNetworkProfile(input: shapes.AlexaForBusinessCreateNetworkProfileRequest): AlexaForBusinessResponsesCreateNetworkProfile {
    return new AlexaForBusinessResponsesCreateNetworkProfile(this, this.__resources, input);
  }

  public createProfile(input: shapes.AlexaForBusinessCreateProfileRequest): AlexaForBusinessResponsesCreateProfile {
    return new AlexaForBusinessResponsesCreateProfile(this, this.__resources, input);
  }

  public createRoom(input: shapes.AlexaForBusinessCreateRoomRequest): AlexaForBusinessResponsesCreateRoom {
    return new AlexaForBusinessResponsesCreateRoom(this, this.__resources, input);
  }

  public createSkillGroup(input: shapes.AlexaForBusinessCreateSkillGroupRequest): AlexaForBusinessResponsesCreateSkillGroup {
    return new AlexaForBusinessResponsesCreateSkillGroup(this, this.__resources, input);
  }

  public createUser(input: shapes.AlexaForBusinessCreateUserRequest): AlexaForBusinessResponsesCreateUser {
    return new AlexaForBusinessResponsesCreateUser(this, this.__resources, input);
  }

  public deleteAddressBook(input: shapes.AlexaForBusinessDeleteAddressBookRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteAddressBook'),
        parameters: {
          AddressBookArn: input.addressBookArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAddressBook', props);
  }

  public deleteBusinessReportSchedule(input: shapes.AlexaForBusinessDeleteBusinessReportScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBusinessReportSchedule',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteBusinessReportSchedule'),
        parameters: {
          ScheduleArn: input.scheduleArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBusinessReportSchedule', props);
  }

  public deleteConferenceProvider(input: shapes.AlexaForBusinessDeleteConferenceProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteConferenceProvider'),
        parameters: {
          ConferenceProviderArn: input.conferenceProviderArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConferenceProvider', props);
  }

  public deleteContact(input: shapes.AlexaForBusinessDeleteContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteContact'),
        parameters: {
          ContactArn: input.contactArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteContact', props);
  }

  public deleteDevice(input: shapes.AlexaForBusinessDeleteDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteDevice'),
        parameters: {
          DeviceArn: input.deviceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDevice', props);
  }

  public deleteDeviceUsageData(input: shapes.AlexaForBusinessDeleteDeviceUsageDataRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDeviceUsageData',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteDeviceUsageData'),
        parameters: {
          DeviceArn: input.deviceArn,
          DeviceUsageType: input.deviceUsageType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDeviceUsageData', props);
  }

  public deleteGatewayGroup(input: shapes.AlexaForBusinessDeleteGatewayGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGatewayGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteGatewayGroup'),
        parameters: {
          GatewayGroupArn: input.gatewayGroupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteGatewayGroup', props);
  }

  public deleteNetworkProfile(input: shapes.AlexaForBusinessDeleteNetworkProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteNetworkProfile'),
        parameters: {
          NetworkProfileArn: input.networkProfileArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteNetworkProfile', props);
  }

  public deleteProfile(input: shapes.AlexaForBusinessDeleteProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteProfile'),
        parameters: {
          ProfileArn: input.profileArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteProfile', props);
  }

  public deleteRoom(input: shapes.AlexaForBusinessDeleteRoomRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteRoom'),
        parameters: {
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRoom', props);
  }

  public deleteRoomSkillParameter(input: shapes.AlexaForBusinessDeleteRoomSkillParameterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRoomSkillParameter',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteRoomSkillParameter'),
        parameters: {
          RoomArn: input.roomArn,
          SkillId: input.skillId,
          ParameterKey: input.parameterKey,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRoomSkillParameter', props);
  }

  public deleteSkillAuthorization(input: shapes.AlexaForBusinessDeleteSkillAuthorizationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSkillAuthorization',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteSkillAuthorization'),
        parameters: {
          SkillId: input.skillId,
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSkillAuthorization', props);
  }

  public deleteSkillGroup(input: shapes.AlexaForBusinessDeleteSkillGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteSkillGroup'),
        parameters: {
          SkillGroupArn: input.skillGroupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSkillGroup', props);
  }

  public deleteUser(input: shapes.AlexaForBusinessDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DeleteUser'),
        parameters: {
          UserArn: input.userArn,
          EnrollmentId: input.enrollmentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public disassociateContactFromAddressBook(input: shapes.AlexaForBusinessDisassociateContactFromAddressBookRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateContactFromAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DisassociateContactFromAddressBook'),
        parameters: {
          ContactArn: input.contactArn,
          AddressBookArn: input.addressBookArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateContactFromAddressBook', props);
  }

  public disassociateDeviceFromRoom(input: shapes.AlexaForBusinessDisassociateDeviceFromRoomRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateDeviceFromRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DisassociateDeviceFromRoom'),
        parameters: {
          DeviceArn: input.deviceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateDeviceFromRoom', props);
  }

  public disassociateSkillFromSkillGroup(input: shapes.AlexaForBusinessDisassociateSkillFromSkillGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSkillFromSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DisassociateSkillFromSkillGroup'),
        parameters: {
          SkillGroupArn: input.skillGroupArn,
          SkillId: input.skillId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateSkillFromSkillGroup', props);
  }

  public disassociateSkillFromUsers(input: shapes.AlexaForBusinessDisassociateSkillFromUsersRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSkillFromUsers',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DisassociateSkillFromUsers'),
        parameters: {
          SkillId: input.skillId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateSkillFromUsers', props);
  }

  public disassociateSkillGroupFromRoom(input: shapes.AlexaForBusinessDisassociateSkillGroupFromRoomRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateSkillGroupFromRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.DisassociateSkillGroupFromRoom'),
        parameters: {
          SkillGroupArn: input.skillGroupArn,
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateSkillGroupFromRoom', props);
  }

  public forgetSmartHomeAppliances(input: shapes.AlexaForBusinessForgetSmartHomeAppliancesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'forgetSmartHomeAppliances',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ForgetSmartHomeAppliances'),
        parameters: {
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ForgetSmartHomeAppliances', props);
  }

  public fetchAddressBook(input: shapes.AlexaForBusinessGetAddressBookRequest): AlexaForBusinessResponsesFetchAddressBook {
    return new AlexaForBusinessResponsesFetchAddressBook(this, this.__resources, input);
  }

  public fetchConferencePreference(): AlexaForBusinessResponsesFetchConferencePreference {
    return new AlexaForBusinessResponsesFetchConferencePreference(this, this.__resources);
  }

  public fetchConferenceProvider(input: shapes.AlexaForBusinessGetConferenceProviderRequest): AlexaForBusinessResponsesFetchConferenceProvider {
    return new AlexaForBusinessResponsesFetchConferenceProvider(this, this.__resources, input);
  }

  public fetchContact(input: shapes.AlexaForBusinessGetContactRequest): AlexaForBusinessResponsesFetchContact {
    return new AlexaForBusinessResponsesFetchContact(this, this.__resources, input);
  }

  public fetchDevice(input: shapes.AlexaForBusinessGetDeviceRequest): AlexaForBusinessResponsesFetchDevice {
    return new AlexaForBusinessResponsesFetchDevice(this, this.__resources, input);
  }

  public fetchGateway(input: shapes.AlexaForBusinessGetGatewayRequest): AlexaForBusinessResponsesFetchGateway {
    return new AlexaForBusinessResponsesFetchGateway(this, this.__resources, input);
  }

  public fetchGatewayGroup(input: shapes.AlexaForBusinessGetGatewayGroupRequest): AlexaForBusinessResponsesFetchGatewayGroup {
    return new AlexaForBusinessResponsesFetchGatewayGroup(this, this.__resources, input);
  }

  public fetchInvitationConfiguration(): AlexaForBusinessResponsesFetchInvitationConfiguration {
    return new AlexaForBusinessResponsesFetchInvitationConfiguration(this, this.__resources);
  }

  public fetchNetworkProfile(input: shapes.AlexaForBusinessGetNetworkProfileRequest): AlexaForBusinessResponsesFetchNetworkProfile {
    return new AlexaForBusinessResponsesFetchNetworkProfile(this, this.__resources, input);
  }

  public fetchProfile(input: shapes.AlexaForBusinessGetProfileRequest): AlexaForBusinessResponsesFetchProfile {
    return new AlexaForBusinessResponsesFetchProfile(this, this.__resources, input);
  }

  public fetchRoom(input: shapes.AlexaForBusinessGetRoomRequest): AlexaForBusinessResponsesFetchRoom {
    return new AlexaForBusinessResponsesFetchRoom(this, this.__resources, input);
  }

  public fetchRoomSkillParameter(input: shapes.AlexaForBusinessGetRoomSkillParameterRequest): AlexaForBusinessResponsesFetchRoomSkillParameter {
    return new AlexaForBusinessResponsesFetchRoomSkillParameter(this, this.__resources, input);
  }

  public fetchSkillGroup(input: shapes.AlexaForBusinessGetSkillGroupRequest): AlexaForBusinessResponsesFetchSkillGroup {
    return new AlexaForBusinessResponsesFetchSkillGroup(this, this.__resources, input);
  }

  public listBusinessReportSchedules(input: shapes.AlexaForBusinessListBusinessReportSchedulesRequest): AlexaForBusinessResponsesListBusinessReportSchedules {
    return new AlexaForBusinessResponsesListBusinessReportSchedules(this, this.__resources, input);
  }

  public listConferenceProviders(input: shapes.AlexaForBusinessListConferenceProvidersRequest): AlexaForBusinessResponsesListConferenceProviders {
    return new AlexaForBusinessResponsesListConferenceProviders(this, this.__resources, input);
  }

  public listDeviceEvents(input: shapes.AlexaForBusinessListDeviceEventsRequest): AlexaForBusinessResponsesListDeviceEvents {
    return new AlexaForBusinessResponsesListDeviceEvents(this, this.__resources, input);
  }

  public listGatewayGroups(input: shapes.AlexaForBusinessListGatewayGroupsRequest): AlexaForBusinessResponsesListGatewayGroups {
    return new AlexaForBusinessResponsesListGatewayGroups(this, this.__resources, input);
  }

  public listGateways(input: shapes.AlexaForBusinessListGatewaysRequest): AlexaForBusinessResponsesListGateways {
    return new AlexaForBusinessResponsesListGateways(this, this.__resources, input);
  }

  public listSkills(input: shapes.AlexaForBusinessListSkillsRequest): AlexaForBusinessResponsesListSkills {
    return new AlexaForBusinessResponsesListSkills(this, this.__resources, input);
  }

  public listSkillsStoreCategories(input: shapes.AlexaForBusinessListSkillsStoreCategoriesRequest): AlexaForBusinessResponsesListSkillsStoreCategories {
    return new AlexaForBusinessResponsesListSkillsStoreCategories(this, this.__resources, input);
  }

  public listSkillsStoreSkillsByCategory(input: shapes.AlexaForBusinessListSkillsStoreSkillsByCategoryRequest): AlexaForBusinessResponsesListSkillsStoreSkillsByCategory {
    return new AlexaForBusinessResponsesListSkillsStoreSkillsByCategory(this, this.__resources, input);
  }

  public listSmartHomeAppliances(input: shapes.AlexaForBusinessListSmartHomeAppliancesRequest): AlexaForBusinessResponsesListSmartHomeAppliances {
    return new AlexaForBusinessResponsesListSmartHomeAppliances(this, this.__resources, input);
  }

  public listTags(input: shapes.AlexaForBusinessListTagsRequest): AlexaForBusinessResponsesListTags {
    return new AlexaForBusinessResponsesListTags(this, this.__resources, input);
  }

  public putConferencePreference(input: shapes.AlexaForBusinessPutConferencePreferenceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putConferencePreference',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.PutConferencePreference'),
        parameters: {
          ConferencePreference: {
            DefaultConferenceProviderArn: input.conferencePreference.defaultConferenceProviderArn,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutConferencePreference', props);
  }

  public putInvitationConfiguration(input: shapes.AlexaForBusinessPutInvitationConfigurationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInvitationConfiguration',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.PutInvitationConfiguration'),
        parameters: {
          OrganizationName: input.organizationName,
          ContactEmail: input.contactEmail,
          PrivateSkillIds: input.privateSkillIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutInvitationConfiguration', props);
  }

  public putRoomSkillParameter(input: shapes.AlexaForBusinessPutRoomSkillParameterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRoomSkillParameter',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.PutRoomSkillParameter'),
        parameters: {
          RoomArn: input.roomArn,
          SkillId: input.skillId,
          RoomSkillParameter: {
            ParameterKey: input.roomSkillParameter.parameterKey,
            ParameterValue: input.roomSkillParameter.parameterValue,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutRoomSkillParameter', props);
  }

  public putSkillAuthorization(input: shapes.AlexaForBusinessPutSkillAuthorizationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSkillAuthorization',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.PutSkillAuthorization'),
        parameters: {
          AuthorizationResult: input.authorizationResult,
          SkillId: input.skillId,
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutSkillAuthorization', props);
  }

  public registerAvsDevice(input: shapes.AlexaForBusinessRegisterAvsDeviceRequest): AlexaForBusinessResponsesRegisterAvsDevice {
    return new AlexaForBusinessResponsesRegisterAvsDevice(this, this.__resources, input);
  }

  public rejectSkill(input: shapes.AlexaForBusinessRejectSkillRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rejectSkill',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.RejectSkill'),
        parameters: {
          SkillId: input.skillId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RejectSkill', props);
  }

  public resolveRoom(input: shapes.AlexaForBusinessResolveRoomRequest): AlexaForBusinessResponsesResolveRoom {
    return new AlexaForBusinessResponsesResolveRoom(this, this.__resources, input);
  }

  public revokeInvitation(input: shapes.AlexaForBusinessRevokeInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeInvitation',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.RevokeInvitation'),
        parameters: {
          UserArn: input.userArn,
          EnrollmentId: input.enrollmentId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokeInvitation', props);
  }

  public searchAddressBooks(input: shapes.AlexaForBusinessSearchAddressBooksRequest): AlexaForBusinessResponsesSearchAddressBooks {
    return new AlexaForBusinessResponsesSearchAddressBooks(this, this.__resources, input);
  }

  public searchContacts(input: shapes.AlexaForBusinessSearchContactsRequest): AlexaForBusinessResponsesSearchContacts {
    return new AlexaForBusinessResponsesSearchContacts(this, this.__resources, input);
  }

  public searchDevices(input: shapes.AlexaForBusinessSearchDevicesRequest): AlexaForBusinessResponsesSearchDevices {
    return new AlexaForBusinessResponsesSearchDevices(this, this.__resources, input);
  }

  public searchNetworkProfiles(input: shapes.AlexaForBusinessSearchNetworkProfilesRequest): AlexaForBusinessResponsesSearchNetworkProfiles {
    return new AlexaForBusinessResponsesSearchNetworkProfiles(this, this.__resources, input);
  }

  public searchProfiles(input: shapes.AlexaForBusinessSearchProfilesRequest): AlexaForBusinessResponsesSearchProfiles {
    return new AlexaForBusinessResponsesSearchProfiles(this, this.__resources, input);
  }

  public searchRooms(input: shapes.AlexaForBusinessSearchRoomsRequest): AlexaForBusinessResponsesSearchRooms {
    return new AlexaForBusinessResponsesSearchRooms(this, this.__resources, input);
  }

  public searchSkillGroups(input: shapes.AlexaForBusinessSearchSkillGroupsRequest): AlexaForBusinessResponsesSearchSkillGroups {
    return new AlexaForBusinessResponsesSearchSkillGroups(this, this.__resources, input);
  }

  public searchUsers(input: shapes.AlexaForBusinessSearchUsersRequest): AlexaForBusinessResponsesSearchUsers {
    return new AlexaForBusinessResponsesSearchUsers(this, this.__resources, input);
  }

  public sendAnnouncement(input: shapes.AlexaForBusinessSendAnnouncementRequest): AlexaForBusinessResponsesSendAnnouncement {
    return new AlexaForBusinessResponsesSendAnnouncement(this, this.__resources, input);
  }

  public sendInvitation(input: shapes.AlexaForBusinessSendInvitationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendInvitation',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SendInvitation'),
        parameters: {
          UserArn: input.userArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SendInvitation', props);
  }

  public startDeviceSync(input: shapes.AlexaForBusinessStartDeviceSyncRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDeviceSync',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.StartDeviceSync'),
        parameters: {
          RoomArn: input.roomArn,
          DeviceArn: input.deviceArn,
          Features: input.features,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartDeviceSync', props);
  }

  public startSmartHomeApplianceDiscovery(input: shapes.AlexaForBusinessStartSmartHomeApplianceDiscoveryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSmartHomeApplianceDiscovery',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.StartSmartHomeApplianceDiscovery'),
        parameters: {
          RoomArn: input.roomArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartSmartHomeApplianceDiscovery', props);
  }

  public tagResource(input: shapes.AlexaForBusinessTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.TagResource'),
        parameters: {
          Arn: input.arn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AlexaForBusinessUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UntagResource'),
        parameters: {
          Arn: input.arn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAddressBook(input: shapes.AlexaForBusinessUpdateAddressBookRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateAddressBook'),
        parameters: {
          AddressBookArn: input.addressBookArn,
          Name: input.name,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAddressBook', props);
  }

  public updateBusinessReportSchedule(input: shapes.AlexaForBusinessUpdateBusinessReportScheduleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBusinessReportSchedule',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateBusinessReportSchedule'),
        parameters: {
          ScheduleArn: input.scheduleArn,
          S3BucketName: input.s3BucketName,
          S3KeyPrefix: input.s3KeyPrefix,
          Format: input.format,
          ScheduleName: input.scheduleName,
          Recurrence: {
            StartDate: input.recurrence?.startDate,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateBusinessReportSchedule', props);
  }

  public updateConferenceProvider(input: shapes.AlexaForBusinessUpdateConferenceProviderRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateConferenceProvider'),
        parameters: {
          ConferenceProviderArn: input.conferenceProviderArn,
          ConferenceProviderType: input.conferenceProviderType,
          IPDialIn: {
            Endpoint: input.ipDialIn?.endpoint,
            CommsProtocol: input.ipDialIn?.commsProtocol,
          },
          PSTNDialIn: {
            CountryCode: input.pstnDialIn?.countryCode,
            PhoneNumber: input.pstnDialIn?.phoneNumber,
            OneClickIdDelay: input.pstnDialIn?.oneClickIdDelay,
            OneClickPinDelay: input.pstnDialIn?.oneClickPinDelay,
          },
          MeetingSetting: {
            RequirePin: input.meetingSetting.requirePin,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateConferenceProvider', props);
  }

  public updateContact(input: shapes.AlexaForBusinessUpdateContactRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateContact'),
        parameters: {
          ContactArn: input.contactArn,
          DisplayName: input.displayName,
          FirstName: input.firstName,
          LastName: input.lastName,
          PhoneNumber: input.phoneNumber,
          PhoneNumbers: input.phoneNumbers,
          SipAddresses: input.sipAddresses,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateContact', props);
  }

  public updateDevice(input: shapes.AlexaForBusinessUpdateDeviceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateDevice'),
        parameters: {
          DeviceArn: input.deviceArn,
          DeviceName: input.deviceName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDevice', props);
  }

  public updateGateway(input: shapes.AlexaForBusinessUpdateGatewayRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGateway',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateGateway'),
        parameters: {
          GatewayArn: input.gatewayArn,
          Name: input.name,
          Description: input.description,
          SoftwareVersion: input.softwareVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateGateway', props);
  }

  public updateGatewayGroup(input: shapes.AlexaForBusinessUpdateGatewayGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateGatewayGroup'),
        parameters: {
          GatewayGroupArn: input.gatewayGroupArn,
          Name: input.name,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateGatewayGroup', props);
  }

  public updateNetworkProfile(input: shapes.AlexaForBusinessUpdateNetworkProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateNetworkProfile'),
        parameters: {
          NetworkProfileArn: input.networkProfileArn,
          NetworkProfileName: input.networkProfileName,
          Description: input.description,
          CurrentPassword: input.currentPassword,
          NextPassword: input.nextPassword,
          CertificateAuthorityArn: input.certificateAuthorityArn,
          TrustAnchors: input.trustAnchors,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateNetworkProfile', props);
  }

  public updateProfile(input: shapes.AlexaForBusinessUpdateProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateProfile'),
        parameters: {
          ProfileArn: input.profileArn,
          ProfileName: input.profileName,
          IsDefault: input.isDefault,
          Timezone: input.timezone,
          Address: input.address,
          DistanceUnit: input.distanceUnit,
          TemperatureUnit: input.temperatureUnit,
          WakeWord: input.wakeWord,
          Locale: input.locale,
          SetupModeDisabled: input.setupModeDisabled,
          MaxVolumeLimit: input.maxVolumeLimit,
          PSTNEnabled: input.pstnEnabled,
          MeetingRoomConfiguration: {
            RoomUtilizationMetricsEnabled: input.meetingRoomConfiguration?.roomUtilizationMetricsEnabled,
            EndOfMeetingReminder: {
              ReminderAtMinutes: input.meetingRoomConfiguration?.endOfMeetingReminder?.reminderAtMinutes,
              ReminderType: input.meetingRoomConfiguration?.endOfMeetingReminder?.reminderType,
              Enabled: input.meetingRoomConfiguration?.endOfMeetingReminder?.enabled,
            },
            InstantBooking: {
              DurationInMinutes: input.meetingRoomConfiguration?.instantBooking?.durationInMinutes,
              Enabled: input.meetingRoomConfiguration?.instantBooking?.enabled,
            },
            RequireCheckIn: {
              ReleaseAfterMinutes: input.meetingRoomConfiguration?.requireCheckIn?.releaseAfterMinutes,
              Enabled: input.meetingRoomConfiguration?.requireCheckIn?.enabled,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateProfile', props);
  }

  public updateRoom(input: shapes.AlexaForBusinessUpdateRoomRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateRoom'),
        parameters: {
          RoomArn: input.roomArn,
          RoomName: input.roomName,
          Description: input.description,
          ProviderCalendarId: input.providerCalendarId,
          ProfileArn: input.profileArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRoom', props);
  }

  public updateSkillGroup(input: shapes.AlexaForBusinessUpdateSkillGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.UpdateSkillGroup'),
        parameters: {
          SkillGroupArn: input.skillGroupArn,
          SkillGroupName: input.skillGroupName,
          Description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateSkillGroup', props);
  }

}

export class AlexaForBusinessResponsesCreateAddressBook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateAddressBookRequest) {
  }

  public get addressBookArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateAddressBook.AddressBookArn'),
        outputPath: 'AddressBookArn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAddressBook.AddressBookArn', props);
    return resource.getResponseField('AddressBookArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateBusinessReportSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateBusinessReportScheduleRequest) {
  }

  public get scheduleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBusinessReportSchedule',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateBusinessReportSchedule.ScheduleArn'),
        outputPath: 'ScheduleArn',
        parameters: {
          ScheduleName: this.__input.scheduleName,
          S3BucketName: this.__input.s3BucketName,
          S3KeyPrefix: this.__input.s3KeyPrefix,
          Format: this.__input.format,
          ContentRange: {
            Interval: this.__input.contentRange.interval,
          },
          Recurrence: {
            StartDate: this.__input.recurrence?.startDate,
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBusinessReportSchedule.ScheduleArn', props);
    return resource.getResponseField('ScheduleArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateConferenceProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateConferenceProviderRequest) {
  }

  public get conferenceProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateConferenceProvider.ConferenceProviderArn'),
        outputPath: 'ConferenceProviderArn',
        parameters: {
          ConferenceProviderName: this.__input.conferenceProviderName,
          ConferenceProviderType: this.__input.conferenceProviderType,
          IPDialIn: {
            Endpoint: this.__input.ipDialIn?.endpoint,
            CommsProtocol: this.__input.ipDialIn?.commsProtocol,
          },
          PSTNDialIn: {
            CountryCode: this.__input.pstnDialIn?.countryCode,
            PhoneNumber: this.__input.pstnDialIn?.phoneNumber,
            OneClickIdDelay: this.__input.pstnDialIn?.oneClickIdDelay,
            OneClickPinDelay: this.__input.pstnDialIn?.oneClickPinDelay,
          },
          MeetingSetting: {
            RequirePin: this.__input.meetingSetting.requirePin,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConferenceProvider.ConferenceProviderArn', props);
    return resource.getResponseField('ConferenceProviderArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateContactRequest) {
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateContact.ContactArn'),
        outputPath: 'ContactArn',
        parameters: {
          DisplayName: this.__input.displayName,
          FirstName: this.__input.firstName,
          LastName: this.__input.lastName,
          PhoneNumber: this.__input.phoneNumber,
          PhoneNumbers: this.__input.phoneNumbers,
          SipAddresses: this.__input.sipAddresses,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateContact.ContactArn', props);
    return resource.getResponseField('ContactArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateGatewayGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateGatewayGroupRequest) {
  }

  public get gatewayGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGatewayGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateGatewayGroup.GatewayGroupArn'),
        outputPath: 'GatewayGroupArn',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGatewayGroup.GatewayGroupArn', props);
    return resource.getResponseField('GatewayGroupArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateNetworkProfileRequest) {
  }

  public get networkProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateNetworkProfile.NetworkProfileArn'),
        outputPath: 'NetworkProfileArn',
        parameters: {
          NetworkProfileName: this.__input.networkProfileName,
          Description: this.__input.description,
          Ssid: this.__input.ssid,
          SecurityType: this.__input.securityType,
          EapMethod: this.__input.eapMethod,
          CurrentPassword: this.__input.currentPassword,
          NextPassword: this.__input.nextPassword,
          CertificateAuthorityArn: this.__input.certificateAuthorityArn,
          TrustAnchors: this.__input.trustAnchors,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNetworkProfile.NetworkProfileArn', props);
    return resource.getResponseField('NetworkProfileArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateProfileRequest) {
  }

  public get profileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateProfile.ProfileArn'),
        outputPath: 'ProfileArn',
        parameters: {
          ProfileName: this.__input.profileName,
          Timezone: this.__input.timezone,
          Address: this.__input.address,
          DistanceUnit: this.__input.distanceUnit,
          TemperatureUnit: this.__input.temperatureUnit,
          WakeWord: this.__input.wakeWord,
          Locale: this.__input.locale,
          ClientRequestToken: this.__input.clientRequestToken,
          SetupModeDisabled: this.__input.setupModeDisabled,
          MaxVolumeLimit: this.__input.maxVolumeLimit,
          PSTNEnabled: this.__input.pstnEnabled,
          MeetingRoomConfiguration: {
            RoomUtilizationMetricsEnabled: this.__input.meetingRoomConfiguration?.roomUtilizationMetricsEnabled,
            EndOfMeetingReminder: {
              ReminderAtMinutes: this.__input.meetingRoomConfiguration?.endOfMeetingReminder?.reminderAtMinutes,
              ReminderType: this.__input.meetingRoomConfiguration?.endOfMeetingReminder?.reminderType,
              Enabled: this.__input.meetingRoomConfiguration?.endOfMeetingReminder?.enabled,
            },
            InstantBooking: {
              DurationInMinutes: this.__input.meetingRoomConfiguration?.instantBooking?.durationInMinutes,
              Enabled: this.__input.meetingRoomConfiguration?.instantBooking?.enabled,
            },
            RequireCheckIn: {
              ReleaseAfterMinutes: this.__input.meetingRoomConfiguration?.requireCheckIn?.releaseAfterMinutes,
              Enabled: this.__input.meetingRoomConfiguration?.requireCheckIn?.enabled,
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProfile.ProfileArn', props);
    return resource.getResponseField('ProfileArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateRoomRequest) {
  }

  public get roomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateRoom.RoomArn'),
        outputPath: 'RoomArn',
        parameters: {
          RoomName: this.__input.roomName,
          Description: this.__input.description,
          ProfileArn: this.__input.profileArn,
          ProviderCalendarId: this.__input.providerCalendarId,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRoom.RoomArn', props);
    return resource.getResponseField('RoomArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateSkillGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateSkillGroupRequest) {
  }

  public get skillGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateSkillGroup.SkillGroupArn'),
        outputPath: 'SkillGroupArn',
        parameters: {
          SkillGroupName: this.__input.skillGroupName,
          Description: this.__input.description,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSkillGroup.SkillGroupArn', props);
    return resource.getResponseField('SkillGroupArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessCreateUserRequest) {
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.CreateUser.UserArn'),
        outputPath: 'UserArn',
        parameters: {
          UserId: this.__input.userId,
          FirstName: this.__input.firstName,
          LastName: this.__input.lastName,
          Email: this.__input.email,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserArn', props);
    return resource.getResponseField('UserArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchAddressBook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetAddressBookRequest) {
  }

  public get addressBook(): AlexaForBusinessResponsesFetchAddressBookAddressBook {
    return new AlexaForBusinessResponsesFetchAddressBookAddressBook(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchAddressBookAddressBook {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetAddressBookRequest) {
  }

  public get addressBookArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetAddressBook.AddressBook.AddressBookArn'),
        outputPath: 'AddressBook.AddressBookArn',
        parameters: {
          AddressBookArn: this.__input.addressBookArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAddressBook.AddressBook.AddressBookArn', props);
    return resource.getResponseField('AddressBook.AddressBookArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetAddressBook.AddressBook.Name'),
        outputPath: 'AddressBook.Name',
        parameters: {
          AddressBookArn: this.__input.addressBookArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAddressBook.AddressBook.Name', props);
    return resource.getResponseField('AddressBook.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAddressBook',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetAddressBook.AddressBook.Description'),
        outputPath: 'AddressBook.Description',
        parameters: {
          AddressBookArn: this.__input.addressBookArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAddressBook.AddressBook.Description', props);
    return resource.getResponseField('AddressBook.Description') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchConferencePreference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get preference(): AlexaForBusinessResponsesFetchConferencePreferencePreference {
    return new AlexaForBusinessResponsesFetchConferencePreferencePreference(this.__scope, this.__resources);
  }

}

export class AlexaForBusinessResponsesFetchConferencePreferencePreference {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get defaultConferenceProviderArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferencePreference',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferencePreference.Preference.DefaultConferenceProviderArn'),
        outputPath: 'Preference.DefaultConferenceProviderArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferencePreference.Preference.DefaultConferenceProviderArn', props);
    return resource.getResponseField('Preference.DefaultConferenceProviderArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchConferenceProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetConferenceProviderRequest) {
  }

  public get conferenceProvider(): AlexaForBusinessResponsesFetchConferenceProviderConferenceProvider {
    return new AlexaForBusinessResponsesFetchConferenceProviderConferenceProvider(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchConferenceProviderConferenceProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetConferenceProviderRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.Arn'),
        outputPath: 'ConferenceProvider.Arn',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.Arn', props);
    return resource.getResponseField('ConferenceProvider.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.Name'),
        outputPath: 'ConferenceProvider.Name',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.Name', props);
    return resource.getResponseField('ConferenceProvider.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.Type'),
        outputPath: 'ConferenceProvider.Type',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.Type', props);
    return resource.getResponseField('ConferenceProvider.Type') as unknown as string;
  }

  public get ipDialIn(): AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderIpDialIn {
    return new AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderIpDialIn(this.__scope, this.__resources, this.__input);
  }

  public get pstnDialIn(): AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderPstnDialIn {
    return new AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderPstnDialIn(this.__scope, this.__resources, this.__input);
  }

  public get meetingSetting(): AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderMeetingSetting {
    return new AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderMeetingSetting(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderIpDialIn {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetConferenceProviderRequest) {
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.IPDialIn.Endpoint'),
        outputPath: 'ConferenceProvider.IPDialIn.Endpoint',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.IPDialIn.Endpoint', props);
    return resource.getResponseField('ConferenceProvider.IPDialIn.Endpoint') as unknown as string;
  }

  public get commsProtocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.IPDialIn.CommsProtocol'),
        outputPath: 'ConferenceProvider.IPDialIn.CommsProtocol',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.IPDialIn.CommsProtocol', props);
    return resource.getResponseField('ConferenceProvider.IPDialIn.CommsProtocol') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderPstnDialIn {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetConferenceProviderRequest) {
  }

  public get countryCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.PSTNDialIn.CountryCode'),
        outputPath: 'ConferenceProvider.PSTNDialIn.CountryCode',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.PSTNDialIn.CountryCode', props);
    return resource.getResponseField('ConferenceProvider.PSTNDialIn.CountryCode') as unknown as string;
  }

  public get phoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.PSTNDialIn.PhoneNumber'),
        outputPath: 'ConferenceProvider.PSTNDialIn.PhoneNumber',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.PSTNDialIn.PhoneNumber', props);
    return resource.getResponseField('ConferenceProvider.PSTNDialIn.PhoneNumber') as unknown as string;
  }

  public get oneClickIdDelay(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.PSTNDialIn.OneClickIdDelay'),
        outputPath: 'ConferenceProvider.PSTNDialIn.OneClickIdDelay',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.PSTNDialIn.OneClickIdDelay', props);
    return resource.getResponseField('ConferenceProvider.PSTNDialIn.OneClickIdDelay') as unknown as string;
  }

  public get oneClickPinDelay(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.PSTNDialIn.OneClickPinDelay'),
        outputPath: 'ConferenceProvider.PSTNDialIn.OneClickPinDelay',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.PSTNDialIn.OneClickPinDelay', props);
    return resource.getResponseField('ConferenceProvider.PSTNDialIn.OneClickPinDelay') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchConferenceProviderConferenceProviderMeetingSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetConferenceProviderRequest) {
  }

  public get requirePin(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConferenceProvider',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetConferenceProvider.ConferenceProvider.MeetingSetting.RequirePin'),
        outputPath: 'ConferenceProvider.MeetingSetting.RequirePin',
        parameters: {
          ConferenceProviderArn: this.__input.conferenceProviderArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConferenceProvider.ConferenceProvider.MeetingSetting.RequirePin', props);
    return resource.getResponseField('ConferenceProvider.MeetingSetting.RequirePin') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetContactRequest) {
  }

  public get contact(): AlexaForBusinessResponsesFetchContactContact {
    return new AlexaForBusinessResponsesFetchContactContact(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchContactContact {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetContactRequest) {
  }

  public get contactArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetContact.Contact.ContactArn'),
        outputPath: 'Contact.ContactArn',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Contact.ContactArn', props);
    return resource.getResponseField('Contact.ContactArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetContact.Contact.DisplayName'),
        outputPath: 'Contact.DisplayName',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Contact.DisplayName', props);
    return resource.getResponseField('Contact.DisplayName') as unknown as string;
  }

  public get firstName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetContact.Contact.FirstName'),
        outputPath: 'Contact.FirstName',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Contact.FirstName', props);
    return resource.getResponseField('Contact.FirstName') as unknown as string;
  }

  public get lastName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetContact.Contact.LastName'),
        outputPath: 'Contact.LastName',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Contact.LastName', props);
    return resource.getResponseField('Contact.LastName') as unknown as string;
  }

  public get phoneNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetContact.Contact.PhoneNumber'),
        outputPath: 'Contact.PhoneNumber',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Contact.PhoneNumber', props);
    return resource.getResponseField('Contact.PhoneNumber') as unknown as string;
  }

  public get phoneNumbers(): shapes.AlexaForBusinessPhoneNumber[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetContact.Contact.PhoneNumbers'),
        outputPath: 'Contact.PhoneNumbers',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Contact.PhoneNumbers', props);
    return resource.getResponseField('Contact.PhoneNumbers') as unknown as shapes.AlexaForBusinessPhoneNumber[];
  }

  public get sipAddresses(): shapes.AlexaForBusinessSipAddress[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getContact',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetContact.Contact.SipAddresses'),
        outputPath: 'Contact.SipAddresses',
        parameters: {
          ContactArn: this.__input.contactArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetContact.Contact.SipAddresses', props);
    return resource.getResponseField('Contact.SipAddresses') as unknown as shapes.AlexaForBusinessSipAddress[];
  }

}

export class AlexaForBusinessResponsesFetchDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetDeviceRequest) {
  }

  public get device(): AlexaForBusinessResponsesFetchDeviceDevice {
    return new AlexaForBusinessResponsesFetchDeviceDevice(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchDeviceDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetDeviceRequest) {
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceArn'),
        outputPath: 'Device.DeviceArn',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceArn', props);
    return resource.getResponseField('Device.DeviceArn') as unknown as string;
  }

  public get deviceSerialNumber(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceSerialNumber'),
        outputPath: 'Device.DeviceSerialNumber',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceSerialNumber', props);
    return resource.getResponseField('Device.DeviceSerialNumber') as unknown as string;
  }

  public get deviceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceType'),
        outputPath: 'Device.DeviceType',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceType', props);
    return resource.getResponseField('Device.DeviceType') as unknown as string;
  }

  public get deviceName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceName'),
        outputPath: 'Device.DeviceName',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceName', props);
    return resource.getResponseField('Device.DeviceName') as unknown as string;
  }

  public get softwareVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.SoftwareVersion'),
        outputPath: 'Device.SoftwareVersion',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.SoftwareVersion', props);
    return resource.getResponseField('Device.SoftwareVersion') as unknown as string;
  }

  public get macAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.MacAddress'),
        outputPath: 'Device.MacAddress',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.MacAddress', props);
    return resource.getResponseField('Device.MacAddress') as unknown as string;
  }

  public get roomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.RoomArn'),
        outputPath: 'Device.RoomArn',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.RoomArn', props);
    return resource.getResponseField('Device.RoomArn') as unknown as string;
  }

  public get deviceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceStatus'),
        outputPath: 'Device.DeviceStatus',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceStatus', props);
    return resource.getResponseField('Device.DeviceStatus') as unknown as string;
  }

  public get deviceStatusInfo(): AlexaForBusinessResponsesFetchDeviceDeviceDeviceStatusInfo {
    return new AlexaForBusinessResponsesFetchDeviceDeviceDeviceStatusInfo(this.__scope, this.__resources, this.__input);
  }

  public get networkProfileInfo(): AlexaForBusinessResponsesFetchDeviceDeviceNetworkProfileInfo {
    return new AlexaForBusinessResponsesFetchDeviceDeviceNetworkProfileInfo(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchDeviceDeviceDeviceStatusInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetDeviceRequest) {
  }

  public get deviceStatusDetails(): shapes.AlexaForBusinessDeviceStatusDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceStatusInfo.DeviceStatusDetails'),
        outputPath: 'Device.DeviceStatusInfo.DeviceStatusDetails',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceStatusInfo.DeviceStatusDetails', props);
    return resource.getResponseField('Device.DeviceStatusInfo.DeviceStatusDetails') as unknown as shapes.AlexaForBusinessDeviceStatusDetail[];
  }

  public get connectionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceStatusInfo.ConnectionStatus'),
        outputPath: 'Device.DeviceStatusInfo.ConnectionStatus',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceStatusInfo.ConnectionStatus', props);
    return resource.getResponseField('Device.DeviceStatusInfo.ConnectionStatus') as unknown as string;
  }

  public get connectionStatusUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.DeviceStatusInfo.ConnectionStatusUpdatedTime'),
        outputPath: 'Device.DeviceStatusInfo.ConnectionStatusUpdatedTime',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.DeviceStatusInfo.ConnectionStatusUpdatedTime', props);
    return resource.getResponseField('Device.DeviceStatusInfo.ConnectionStatusUpdatedTime') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchDeviceDeviceNetworkProfileInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetDeviceRequest) {
  }

  public get networkProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.NetworkProfileInfo.NetworkProfileArn'),
        outputPath: 'Device.NetworkProfileInfo.NetworkProfileArn',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.NetworkProfileInfo.NetworkProfileArn', props);
    return resource.getResponseField('Device.NetworkProfileInfo.NetworkProfileArn') as unknown as string;
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.NetworkProfileInfo.CertificateArn'),
        outputPath: 'Device.NetworkProfileInfo.CertificateArn',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.NetworkProfileInfo.CertificateArn', props);
    return resource.getResponseField('Device.NetworkProfileInfo.CertificateArn') as unknown as string;
  }

  public get certificateExpirationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetDevice.Device.NetworkProfileInfo.CertificateExpirationTime'),
        outputPath: 'Device.NetworkProfileInfo.CertificateExpirationTime',
        parameters: {
          DeviceArn: this.__input.deviceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDevice.Device.NetworkProfileInfo.CertificateExpirationTime', props);
    return resource.getResponseField('Device.NetworkProfileInfo.CertificateExpirationTime') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetGatewayRequest) {
  }

  public get gateway(): AlexaForBusinessResponsesFetchGatewayGateway {
    return new AlexaForBusinessResponsesFetchGatewayGateway(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchGatewayGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetGatewayRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGateway',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGateway.Gateway.Arn'),
        outputPath: 'Gateway.Arn',
        parameters: {
          GatewayArn: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGateway.Gateway.Arn', props);
    return resource.getResponseField('Gateway.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGateway',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGateway.Gateway.Name'),
        outputPath: 'Gateway.Name',
        parameters: {
          GatewayArn: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGateway.Gateway.Name', props);
    return resource.getResponseField('Gateway.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGateway',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGateway.Gateway.Description'),
        outputPath: 'Gateway.Description',
        parameters: {
          GatewayArn: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGateway.Gateway.Description', props);
    return resource.getResponseField('Gateway.Description') as unknown as string;
  }

  public get gatewayGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGateway',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGateway.Gateway.GatewayGroupArn'),
        outputPath: 'Gateway.GatewayGroupArn',
        parameters: {
          GatewayArn: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGateway.Gateway.GatewayGroupArn', props);
    return resource.getResponseField('Gateway.GatewayGroupArn') as unknown as string;
  }

  public get softwareVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGateway',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGateway.Gateway.SoftwareVersion'),
        outputPath: 'Gateway.SoftwareVersion',
        parameters: {
          GatewayArn: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGateway.Gateway.SoftwareVersion', props);
    return resource.getResponseField('Gateway.SoftwareVersion') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchGatewayGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetGatewayGroupRequest) {
  }

  public get gatewayGroup(): AlexaForBusinessResponsesFetchGatewayGroupGatewayGroup {
    return new AlexaForBusinessResponsesFetchGatewayGroupGatewayGroup(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchGatewayGroupGatewayGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetGatewayGroupRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGatewayGroup.GatewayGroup.Arn'),
        outputPath: 'GatewayGroup.Arn',
        parameters: {
          GatewayGroupArn: this.__input.gatewayGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayGroup.GatewayGroup.Arn', props);
    return resource.getResponseField('GatewayGroup.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGatewayGroup.GatewayGroup.Name'),
        outputPath: 'GatewayGroup.Name',
        parameters: {
          GatewayGroupArn: this.__input.gatewayGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayGroup.GatewayGroup.Name', props);
    return resource.getResponseField('GatewayGroup.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGatewayGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetGatewayGroup.GatewayGroup.Description'),
        outputPath: 'GatewayGroup.Description',
        parameters: {
          GatewayGroupArn: this.__input.gatewayGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGatewayGroup.GatewayGroup.Description', props);
    return resource.getResponseField('GatewayGroup.Description') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchInvitationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get organizationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInvitationConfiguration',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetInvitationConfiguration.OrganizationName'),
        outputPath: 'OrganizationName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInvitationConfiguration.OrganizationName', props);
    return resource.getResponseField('OrganizationName') as unknown as string;
  }

  public get contactEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInvitationConfiguration',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetInvitationConfiguration.ContactEmail'),
        outputPath: 'ContactEmail',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInvitationConfiguration.ContactEmail', props);
    return resource.getResponseField('ContactEmail') as unknown as string;
  }

  public get privateSkillIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInvitationConfiguration',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetInvitationConfiguration.PrivateSkillIds'),
        outputPath: 'PrivateSkillIds',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInvitationConfiguration.PrivateSkillIds', props);
    return resource.getResponseField('PrivateSkillIds') as unknown as string[];
  }

}

export class AlexaForBusinessResponsesFetchNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetNetworkProfileRequest) {
  }

  public get networkProfile(): AlexaForBusinessResponsesFetchNetworkProfileNetworkProfile {
    return new AlexaForBusinessResponsesFetchNetworkProfileNetworkProfile(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchNetworkProfileNetworkProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetNetworkProfileRequest) {
  }

  public get networkProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.NetworkProfileArn'),
        outputPath: 'NetworkProfile.NetworkProfileArn',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.NetworkProfileArn', props);
    return resource.getResponseField('NetworkProfile.NetworkProfileArn') as unknown as string;
  }

  public get networkProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.NetworkProfileName'),
        outputPath: 'NetworkProfile.NetworkProfileName',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.NetworkProfileName', props);
    return resource.getResponseField('NetworkProfile.NetworkProfileName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.Description'),
        outputPath: 'NetworkProfile.Description',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.Description', props);
    return resource.getResponseField('NetworkProfile.Description') as unknown as string;
  }

  public get ssid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.Ssid'),
        outputPath: 'NetworkProfile.Ssid',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.Ssid', props);
    return resource.getResponseField('NetworkProfile.Ssid') as unknown as string;
  }

  public get securityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.SecurityType'),
        outputPath: 'NetworkProfile.SecurityType',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.SecurityType', props);
    return resource.getResponseField('NetworkProfile.SecurityType') as unknown as string;
  }

  public get eapMethod(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.EapMethod'),
        outputPath: 'NetworkProfile.EapMethod',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.EapMethod', props);
    return resource.getResponseField('NetworkProfile.EapMethod') as unknown as string;
  }

  public get currentPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.CurrentPassword'),
        outputPath: 'NetworkProfile.CurrentPassword',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.CurrentPassword', props);
    return resource.getResponseField('NetworkProfile.CurrentPassword') as unknown as string;
  }

  public get nextPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.NextPassword'),
        outputPath: 'NetworkProfile.NextPassword',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.NextPassword', props);
    return resource.getResponseField('NetworkProfile.NextPassword') as unknown as string;
  }

  public get certificateAuthorityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.CertificateAuthorityArn'),
        outputPath: 'NetworkProfile.CertificateAuthorityArn',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.CertificateAuthorityArn', props);
    return resource.getResponseField('NetworkProfile.CertificateAuthorityArn') as unknown as string;
  }

  public get trustAnchors(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getNetworkProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetNetworkProfile.NetworkProfile.TrustAnchors'),
        outputPath: 'NetworkProfile.TrustAnchors',
        parameters: {
          NetworkProfileArn: this.__input.networkProfileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetNetworkProfile.NetworkProfile.TrustAnchors', props);
    return resource.getResponseField('NetworkProfile.TrustAnchors') as unknown as string[];
  }

}

export class AlexaForBusinessResponsesFetchProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetProfileRequest) {
  }

  public get profile(): AlexaForBusinessResponsesFetchProfileProfile {
    return new AlexaForBusinessResponsesFetchProfileProfile(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchProfileProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetProfileRequest) {
  }

  public get profileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.ProfileArn'),
        outputPath: 'Profile.ProfileArn',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.ProfileArn', props);
    return resource.getResponseField('Profile.ProfileArn') as unknown as string;
  }

  public get profileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.ProfileName'),
        outputPath: 'Profile.ProfileName',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.ProfileName', props);
    return resource.getResponseField('Profile.ProfileName') as unknown as string;
  }

  public get isDefault(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.IsDefault'),
        outputPath: 'Profile.IsDefault',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.IsDefault', props);
    return resource.getResponseField('Profile.IsDefault') as unknown as boolean;
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.Address'),
        outputPath: 'Profile.Address',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.Address', props);
    return resource.getResponseField('Profile.Address') as unknown as string;
  }

  public get timezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.Timezone'),
        outputPath: 'Profile.Timezone',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.Timezone', props);
    return resource.getResponseField('Profile.Timezone') as unknown as string;
  }

  public get distanceUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.DistanceUnit'),
        outputPath: 'Profile.DistanceUnit',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.DistanceUnit', props);
    return resource.getResponseField('Profile.DistanceUnit') as unknown as string;
  }

  public get temperatureUnit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.TemperatureUnit'),
        outputPath: 'Profile.TemperatureUnit',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.TemperatureUnit', props);
    return resource.getResponseField('Profile.TemperatureUnit') as unknown as string;
  }

  public get wakeWord(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.WakeWord'),
        outputPath: 'Profile.WakeWord',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.WakeWord', props);
    return resource.getResponseField('Profile.WakeWord') as unknown as string;
  }

  public get locale(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.Locale'),
        outputPath: 'Profile.Locale',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.Locale', props);
    return resource.getResponseField('Profile.Locale') as unknown as string;
  }

  public get setupModeDisabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.SetupModeDisabled'),
        outputPath: 'Profile.SetupModeDisabled',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.SetupModeDisabled', props);
    return resource.getResponseField('Profile.SetupModeDisabled') as unknown as boolean;
  }

  public get maxVolumeLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MaxVolumeLimit'),
        outputPath: 'Profile.MaxVolumeLimit',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MaxVolumeLimit', props);
    return resource.getResponseField('Profile.MaxVolumeLimit') as unknown as number;
  }

  public get pstnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.PSTNEnabled'),
        outputPath: 'Profile.PSTNEnabled',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.PSTNEnabled', props);
    return resource.getResponseField('Profile.PSTNEnabled') as unknown as boolean;
  }

  public get addressBookArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.AddressBookArn'),
        outputPath: 'Profile.AddressBookArn',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.AddressBookArn', props);
    return resource.getResponseField('Profile.AddressBookArn') as unknown as string;
  }

  public get meetingRoomConfiguration(): AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfiguration {
    return new AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetProfileRequest) {
  }

  public get roomUtilizationMetricsEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.RoomUtilizationMetricsEnabled'),
        outputPath: 'Profile.MeetingRoomConfiguration.RoomUtilizationMetricsEnabled',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.RoomUtilizationMetricsEnabled', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.RoomUtilizationMetricsEnabled') as unknown as boolean;
  }

  public get endOfMeetingReminder(): AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationEndOfMeetingReminder {
    return new AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationEndOfMeetingReminder(this.__scope, this.__resources, this.__input);
  }

  public get instantBooking(): AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationInstantBooking {
    return new AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationInstantBooking(this.__scope, this.__resources, this.__input);
  }

  public get requireCheckIn(): AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationRequireCheckIn {
    return new AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationRequireCheckIn(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationEndOfMeetingReminder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetProfileRequest) {
  }

  public get reminderAtMinutes(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderAtMinutes'),
        outputPath: 'Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderAtMinutes',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderAtMinutes', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderAtMinutes') as unknown as number[];
  }

  public get reminderType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderType'),
        outputPath: 'Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderType',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderType', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.EndOfMeetingReminder.ReminderType') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.EndOfMeetingReminder.Enabled'),
        outputPath: 'Profile.MeetingRoomConfiguration.EndOfMeetingReminder.Enabled',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.EndOfMeetingReminder.Enabled', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.EndOfMeetingReminder.Enabled') as unknown as boolean;
  }

}

export class AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationInstantBooking {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetProfileRequest) {
  }

  public get durationInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.InstantBooking.DurationInMinutes'),
        outputPath: 'Profile.MeetingRoomConfiguration.InstantBooking.DurationInMinutes',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.InstantBooking.DurationInMinutes', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.InstantBooking.DurationInMinutes') as unknown as number;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.InstantBooking.Enabled'),
        outputPath: 'Profile.MeetingRoomConfiguration.InstantBooking.Enabled',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.InstantBooking.Enabled', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.InstantBooking.Enabled') as unknown as boolean;
  }

}

export class AlexaForBusinessResponsesFetchProfileProfileMeetingRoomConfigurationRequireCheckIn {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetProfileRequest) {
  }

  public get releaseAfterMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.RequireCheckIn.ReleaseAfterMinutes'),
        outputPath: 'Profile.MeetingRoomConfiguration.RequireCheckIn.ReleaseAfterMinutes',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.RequireCheckIn.ReleaseAfterMinutes', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.RequireCheckIn.ReleaseAfterMinutes') as unknown as number;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProfile',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetProfile.Profile.MeetingRoomConfiguration.RequireCheckIn.Enabled'),
        outputPath: 'Profile.MeetingRoomConfiguration.RequireCheckIn.Enabled',
        parameters: {
          ProfileArn: this.__input.profileArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProfile.Profile.MeetingRoomConfiguration.RequireCheckIn.Enabled', props);
    return resource.getResponseField('Profile.MeetingRoomConfiguration.RequireCheckIn.Enabled') as unknown as boolean;
  }

}

export class AlexaForBusinessResponsesFetchRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetRoomRequest) {
  }

  public get room(): AlexaForBusinessResponsesFetchRoomRoom {
    return new AlexaForBusinessResponsesFetchRoomRoom(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchRoomRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetRoomRequest) {
  }

  public get roomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetRoom.Room.RoomArn'),
        outputPath: 'Room.RoomArn',
        parameters: {
          RoomArn: this.__input.roomArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.RoomArn', props);
    return resource.getResponseField('Room.RoomArn') as unknown as string;
  }

  public get roomName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetRoom.Room.RoomName'),
        outputPath: 'Room.RoomName',
        parameters: {
          RoomArn: this.__input.roomArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.RoomName', props);
    return resource.getResponseField('Room.RoomName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetRoom.Room.Description'),
        outputPath: 'Room.Description',
        parameters: {
          RoomArn: this.__input.roomArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.Description', props);
    return resource.getResponseField('Room.Description') as unknown as string;
  }

  public get providerCalendarId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetRoom.Room.ProviderCalendarId'),
        outputPath: 'Room.ProviderCalendarId',
        parameters: {
          RoomArn: this.__input.roomArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.ProviderCalendarId', props);
    return resource.getResponseField('Room.ProviderCalendarId') as unknown as string;
  }

  public get profileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetRoom.Room.ProfileArn'),
        outputPath: 'Room.ProfileArn',
        parameters: {
          RoomArn: this.__input.roomArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoom.Room.ProfileArn', props);
    return resource.getResponseField('Room.ProfileArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchRoomSkillParameter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetRoomSkillParameterRequest) {
  }

  public get roomSkillParameter(): AlexaForBusinessResponsesFetchRoomSkillParameterRoomSkillParameter {
    return new AlexaForBusinessResponsesFetchRoomSkillParameterRoomSkillParameter(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchRoomSkillParameterRoomSkillParameter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetRoomSkillParameterRequest) {
  }

  public get parameterKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoomSkillParameter',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetRoomSkillParameter.RoomSkillParameter.ParameterKey'),
        outputPath: 'RoomSkillParameter.ParameterKey',
        parameters: {
          RoomArn: this.__input.roomArn,
          SkillId: this.__input.skillId,
          ParameterKey: this.__input.parameterKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoomSkillParameter.RoomSkillParameter.ParameterKey', props);
    return resource.getResponseField('RoomSkillParameter.ParameterKey') as unknown as string;
  }

  public get parameterValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRoomSkillParameter',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetRoomSkillParameter.RoomSkillParameter.ParameterValue'),
        outputPath: 'RoomSkillParameter.ParameterValue',
        parameters: {
          RoomArn: this.__input.roomArn,
          SkillId: this.__input.skillId,
          ParameterKey: this.__input.parameterKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRoomSkillParameter.RoomSkillParameter.ParameterValue', props);
    return resource.getResponseField('RoomSkillParameter.ParameterValue') as unknown as string;
  }

}

export class AlexaForBusinessResponsesFetchSkillGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetSkillGroupRequest) {
  }

  public get skillGroup(): AlexaForBusinessResponsesFetchSkillGroupSkillGroup {
    return new AlexaForBusinessResponsesFetchSkillGroupSkillGroup(this.__scope, this.__resources, this.__input);
  }

}

export class AlexaForBusinessResponsesFetchSkillGroupSkillGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessGetSkillGroupRequest) {
  }

  public get skillGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetSkillGroup.SkillGroup.SkillGroupArn'),
        outputPath: 'SkillGroup.SkillGroupArn',
        parameters: {
          SkillGroupArn: this.__input.skillGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSkillGroup.SkillGroup.SkillGroupArn', props);
    return resource.getResponseField('SkillGroup.SkillGroupArn') as unknown as string;
  }

  public get skillGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetSkillGroup.SkillGroup.SkillGroupName'),
        outputPath: 'SkillGroup.SkillGroupName',
        parameters: {
          SkillGroupArn: this.__input.skillGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSkillGroup.SkillGroup.SkillGroupName', props);
    return resource.getResponseField('SkillGroup.SkillGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSkillGroup',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.GetSkillGroup.SkillGroup.Description'),
        outputPath: 'SkillGroup.Description',
        parameters: {
          SkillGroupArn: this.__input.skillGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSkillGroup.SkillGroup.Description', props);
    return resource.getResponseField('SkillGroup.Description') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListBusinessReportSchedules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListBusinessReportSchedulesRequest) {
  }

  public get businessReportSchedules(): shapes.AlexaForBusinessBusinessReportSchedule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBusinessReportSchedules',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListBusinessReportSchedules.BusinessReportSchedules'),
        outputPath: 'BusinessReportSchedules',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBusinessReportSchedules.BusinessReportSchedules', props);
    return resource.getResponseField('BusinessReportSchedules') as unknown as shapes.AlexaForBusinessBusinessReportSchedule[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBusinessReportSchedules',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListBusinessReportSchedules.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBusinessReportSchedules.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListConferenceProviders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListConferenceProvidersRequest) {
  }

  public get conferenceProviders(): shapes.AlexaForBusinessConferenceProvider[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConferenceProviders',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListConferenceProviders.ConferenceProviders'),
        outputPath: 'ConferenceProviders',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConferenceProviders.ConferenceProviders', props);
    return resource.getResponseField('ConferenceProviders') as unknown as shapes.AlexaForBusinessConferenceProvider[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConferenceProviders',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListConferenceProviders.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConferenceProviders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListDeviceEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListDeviceEventsRequest) {
  }

  public get deviceEvents(): shapes.AlexaForBusinessDeviceEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceEvents',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListDeviceEvents.DeviceEvents'),
        outputPath: 'DeviceEvents',
        parameters: {
          DeviceArn: this.__input.deviceArn,
          EventType: this.__input.eventType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceEvents.DeviceEvents', props);
    return resource.getResponseField('DeviceEvents') as unknown as shapes.AlexaForBusinessDeviceEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeviceEvents',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListDeviceEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DeviceArn: this.__input.deviceArn,
          EventType: this.__input.eventType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeviceEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListGatewayGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListGatewayGroupsRequest) {
  }

  public get gatewayGroups(): shapes.AlexaForBusinessGatewayGroupSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGatewayGroups',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListGatewayGroups.GatewayGroups'),
        outputPath: 'GatewayGroups',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGatewayGroups.GatewayGroups', props);
    return resource.getResponseField('GatewayGroups') as unknown as shapes.AlexaForBusinessGatewayGroupSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGatewayGroups',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListGatewayGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGatewayGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListGateways {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListGatewaysRequest) {
  }

  public get gateways(): shapes.AlexaForBusinessGatewaySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGateways',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListGateways.Gateways'),
        outputPath: 'Gateways',
        parameters: {
          GatewayGroupArn: this.__input.gatewayGroupArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGateways.Gateways', props);
    return resource.getResponseField('Gateways') as unknown as shapes.AlexaForBusinessGatewaySummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGateways',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListGateways.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GatewayGroupArn: this.__input.gatewayGroupArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGateways.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListSkills {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListSkillsRequest) {
  }

  public get skillSummaries(): shapes.AlexaForBusinessSkillSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSkills',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSkills.SkillSummaries'),
        outputPath: 'SkillSummaries',
        parameters: {
          SkillGroupArn: this.__input.skillGroupArn,
          EnablementType: this.__input.enablementType,
          SkillType: this.__input.skillType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSkills.SkillSummaries', props);
    return resource.getResponseField('SkillSummaries') as unknown as shapes.AlexaForBusinessSkillSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSkills',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSkills.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SkillGroupArn: this.__input.skillGroupArn,
          EnablementType: this.__input.enablementType,
          SkillType: this.__input.skillType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSkills.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListSkillsStoreCategories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListSkillsStoreCategoriesRequest) {
  }

  public get categoryList(): shapes.AlexaForBusinessCategory[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSkillsStoreCategories',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSkillsStoreCategories.CategoryList'),
        outputPath: 'CategoryList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSkillsStoreCategories.CategoryList', props);
    return resource.getResponseField('CategoryList') as unknown as shapes.AlexaForBusinessCategory[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSkillsStoreCategories',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSkillsStoreCategories.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSkillsStoreCategories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListSkillsStoreSkillsByCategory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListSkillsStoreSkillsByCategoryRequest) {
  }

  public get skillsStoreSkills(): shapes.AlexaForBusinessSkillsStoreSkill[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSkillsStoreSkillsByCategory',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSkillsStoreSkillsByCategory.SkillsStoreSkills'),
        outputPath: 'SkillsStoreSkills',
        parameters: {
          CategoryId: this.__input.categoryId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSkillsStoreSkillsByCategory.SkillsStoreSkills', props);
    return resource.getResponseField('SkillsStoreSkills') as unknown as shapes.AlexaForBusinessSkillsStoreSkill[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSkillsStoreSkillsByCategory',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSkillsStoreSkillsByCategory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CategoryId: this.__input.categoryId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSkillsStoreSkillsByCategory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListSmartHomeAppliances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListSmartHomeAppliancesRequest) {
  }

  public get smartHomeAppliances(): shapes.AlexaForBusinessSmartHomeAppliance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSmartHomeAppliances',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSmartHomeAppliances.SmartHomeAppliances'),
        outputPath: 'SmartHomeAppliances',
        parameters: {
          RoomArn: this.__input.roomArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSmartHomeAppliances.SmartHomeAppliances', props);
    return resource.getResponseField('SmartHomeAppliances') as unknown as shapes.AlexaForBusinessSmartHomeAppliance[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSmartHomeAppliances',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListSmartHomeAppliances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          RoomArn: this.__input.roomArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSmartHomeAppliances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessListTagsRequest) {
  }

  public get tags(): shapes.AlexaForBusinessTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          Arn: this.__input.arn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.AlexaForBusinessTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Arn: this.__input.arn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AlexaForBusinessResponsesRegisterAvsDevice {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessRegisterAvsDeviceRequest) {
  }

  public get deviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerAvsDevice',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.RegisterAVSDevice.DeviceArn'),
        outputPath: 'DeviceArn',
        parameters: {
          ClientId: this.__input.clientId,
          UserCode: this.__input.userCode,
          ProductId: this.__input.productId,
          DeviceSerialNumber: this.__input.deviceSerialNumber,
          AmazonId: this.__input.amazonId,
          RoomArn: this.__input.roomArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterAVSDevice.DeviceArn', props);
    return resource.getResponseField('DeviceArn') as unknown as string;
  }

}

export class AlexaForBusinessResponsesResolveRoom {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessResolveRoomRequest) {
  }

  public get roomArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ResolveRoom.RoomArn'),
        outputPath: 'RoomArn',
        parameters: {
          UserId: this.__input.userId,
          SkillId: this.__input.skillId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveRoom.RoomArn', props);
    return resource.getResponseField('RoomArn') as unknown as string;
  }

  public get roomName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ResolveRoom.RoomName'),
        outputPath: 'RoomName',
        parameters: {
          UserId: this.__input.userId,
          SkillId: this.__input.skillId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveRoom.RoomName', props);
    return resource.getResponseField('RoomName') as unknown as string;
  }

  public get roomSkillParameters(): shapes.AlexaForBusinessRoomSkillParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resolveRoom',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.ResolveRoom.RoomSkillParameters'),
        outputPath: 'RoomSkillParameters',
        parameters: {
          UserId: this.__input.userId,
          SkillId: this.__input.skillId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResolveRoom.RoomSkillParameters', props);
    return resource.getResponseField('RoomSkillParameters') as unknown as shapes.AlexaForBusinessRoomSkillParameter[];
  }

}

export class AlexaForBusinessResponsesSearchAddressBooks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchAddressBooksRequest) {
  }

  public get addressBooks(): shapes.AlexaForBusinessAddressBookData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAddressBooks',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchAddressBooks.AddressBooks'),
        outputPath: 'AddressBooks',
        parameters: {
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAddressBooks.AddressBooks', props);
    return resource.getResponseField('AddressBooks') as unknown as shapes.AlexaForBusinessAddressBookData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAddressBooks',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchAddressBooks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAddressBooks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAddressBooks',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchAddressBooks.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAddressBooks.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSearchContacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchContactsRequest) {
  }

  public get contacts(): shapes.AlexaForBusinessContactData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchContacts',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchContacts.Contacts'),
        outputPath: 'Contacts',
        parameters: {
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchContacts.Contacts', props);
    return resource.getResponseField('Contacts') as unknown as shapes.AlexaForBusinessContactData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchContacts',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchContacts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchContacts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchContacts',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchContacts.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchContacts.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSearchDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchDevicesRequest) {
  }

  public get devices(): shapes.AlexaForBusinessDeviceData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDevices',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchDevices.Devices'),
        outputPath: 'Devices',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDevices.Devices', props);
    return resource.getResponseField('Devices') as unknown as shapes.AlexaForBusinessDeviceData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDevices',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchDevices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDevices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDevices',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchDevices.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDevices.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSearchNetworkProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchNetworkProfilesRequest) {
  }

  public get networkProfiles(): shapes.AlexaForBusinessNetworkProfileData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchNetworkProfiles',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchNetworkProfiles.NetworkProfiles'),
        outputPath: 'NetworkProfiles',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchNetworkProfiles.NetworkProfiles', props);
    return resource.getResponseField('NetworkProfiles') as unknown as shapes.AlexaForBusinessNetworkProfileData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchNetworkProfiles',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchNetworkProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchNetworkProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchNetworkProfiles',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchNetworkProfiles.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchNetworkProfiles.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSearchProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchProfilesRequest) {
  }

  public get profiles(): shapes.AlexaForBusinessProfileData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProfiles',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchProfiles.Profiles'),
        outputPath: 'Profiles',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProfiles.Profiles', props);
    return resource.getResponseField('Profiles') as unknown as shapes.AlexaForBusinessProfileData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProfiles',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchProfiles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProfiles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchProfiles',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchProfiles.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchProfiles.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSearchRooms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchRoomsRequest) {
  }

  public get rooms(): shapes.AlexaForBusinessRoomData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchRooms',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchRooms.Rooms'),
        outputPath: 'Rooms',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchRooms.Rooms', props);
    return resource.getResponseField('Rooms') as unknown as shapes.AlexaForBusinessRoomData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchRooms',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchRooms.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchRooms.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchRooms',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchRooms.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchRooms.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSearchSkillGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchSkillGroupsRequest) {
  }

  public get skillGroups(): shapes.AlexaForBusinessSkillGroupData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSkillGroups',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchSkillGroups.SkillGroups'),
        outputPath: 'SkillGroups',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSkillGroups.SkillGroups', props);
    return resource.getResponseField('SkillGroups') as unknown as shapes.AlexaForBusinessSkillGroupData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSkillGroups',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchSkillGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSkillGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchSkillGroups',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchSkillGroups.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchSkillGroups.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSearchUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSearchUsersRequest) {
  }

  public get users(): shapes.AlexaForBusinessUserData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchUsers',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchUsers.Users'),
        outputPath: 'Users',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.AlexaForBusinessUserData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchUsers',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchUsers',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SearchUsers.TotalCount'),
        outputPath: 'TotalCount',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          SortCriteria: this.__input.sortCriteria,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchUsers.TotalCount', props);
    return resource.getResponseField('TotalCount') as unknown as number;
  }

}

export class AlexaForBusinessResponsesSendAnnouncement {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AlexaForBusinessSendAnnouncementRequest) {
  }

  public get announcementArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendAnnouncement',
        service: 'AlexaForBusiness',
        physicalResourceId: cr.PhysicalResourceId.of('AlexaForBusiness.SendAnnouncement.AnnouncementArn'),
        outputPath: 'AnnouncementArn',
        parameters: {
          RoomFilters: this.__input.roomFilters,
          Content: {
            TextList: this.__input.content.textList,
            SsmlList: this.__input.content.ssmlList,
            AudioList: this.__input.content.audioList,
          },
          TimeToLiveInSeconds: this.__input.timeToLiveInSeconds,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendAnnouncement.AnnouncementArn', props);
    return resource.getResponseField('AnnouncementArn') as unknown as string;
  }

}

