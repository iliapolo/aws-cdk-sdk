/**
 * @schema CreateAppRequest
 */
export interface CreateAppRequest {
  /**
   * @schema CreateAppRequest#CreateApplicationRequest
   */
  readonly createApplicationRequest: CreateApplicationRequest;

}

/**
 * @schema CreateAppResponse
 */
export interface CreateAppResponse {
  /**
   * @schema CreateAppResponse#ApplicationResponse
   */
  readonly applicationResponse: ApplicationResponse;

}

/**
 * @schema CreateCampaignRequest
 */
export interface CreateCampaignRequest {
  /**
   * @schema CreateCampaignRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateCampaignRequest#WriteCampaignRequest
   */
  readonly writeCampaignRequest: WriteCampaignRequest;

}

/**
 * @schema CreateCampaignResponse
 */
export interface CreateCampaignResponse {
  /**
   * @schema CreateCampaignResponse#CampaignResponse
   */
  readonly campaignResponse: CampaignResponse;

}

/**
 * @schema CreateEmailTemplateRequest
 */
export interface CreateEmailTemplateRequest {
  /**
   * @schema CreateEmailTemplateRequest#EmailTemplateRequest
   */
  readonly emailTemplateRequest: EmailTemplateRequest;

  /**
   * @schema CreateEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema CreateEmailTemplateResponse
 */
export interface CreateEmailTemplateResponse {
  /**
   * @schema CreateEmailTemplateResponse#CreateTemplateMessageBody
   */
  readonly createTemplateMessageBody: CreateTemplateMessageBody;

}

/**
 * @schema CreateExportJobRequest
 */
export interface CreateExportJobRequest {
  /**
   * @schema CreateExportJobRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateExportJobRequest#ExportJobRequest
   */
  readonly exportJobRequest: ExportJobRequest;

}

/**
 * @schema CreateExportJobResponse
 */
export interface CreateExportJobResponse {
  /**
   * @schema CreateExportJobResponse#ExportJobResponse
   */
  readonly exportJobResponse: ExportJobResponse;

}

/**
 * @schema CreateImportJobRequest
 */
export interface CreateImportJobRequest {
  /**
   * @schema CreateImportJobRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateImportJobRequest#ImportJobRequest
   */
  readonly importJobRequest: ImportJobRequest;

}

/**
 * @schema CreateImportJobResponse
 */
export interface CreateImportJobResponse {
  /**
   * @schema CreateImportJobResponse#ImportJobResponse
   */
  readonly importJobResponse: ImportJobResponse;

}

/**
 * @schema CreateJourneyRequest
 */
export interface CreateJourneyRequest {
  /**
   * @schema CreateJourneyRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateJourneyRequest#WriteJourneyRequest
   */
  readonly writeJourneyRequest: WriteJourneyRequest;

}

/**
 * @schema CreateJourneyResponse
 */
export interface CreateJourneyResponse {
  /**
   * @schema CreateJourneyResponse#JourneyResponse
   */
  readonly journeyResponse: JourneyResponse;

}

/**
 * @schema CreatePushTemplateRequest
 */
export interface CreatePushTemplateRequest {
  /**
   * @schema CreatePushTemplateRequest#PushNotificationTemplateRequest
   */
  readonly pushNotificationTemplateRequest: PushNotificationTemplateRequest;

  /**
   * @schema CreatePushTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema CreatePushTemplateResponse
 */
export interface CreatePushTemplateResponse {
  /**
   * @schema CreatePushTemplateResponse#CreateTemplateMessageBody
   */
  readonly createTemplateMessageBody: CreateTemplateMessageBody;

}

/**
 * @schema CreateRecommenderConfigurationRequest
 */
export interface CreateRecommenderConfigurationRequest {
  /**
   * @schema CreateRecommenderConfigurationRequest#CreateRecommenderConfiguration
   */
  readonly createRecommenderConfiguration: CreateRecommenderConfiguration;

}

/**
 * @schema CreateRecommenderConfigurationResponse
 */
export interface CreateRecommenderConfigurationResponse {
  /**
   * @schema CreateRecommenderConfigurationResponse#RecommenderConfigurationResponse
   */
  readonly recommenderConfigurationResponse: RecommenderConfigurationResponse;

}

/**
 * @schema CreateSegmentRequest
 */
export interface CreateSegmentRequest {
  /**
   * @schema CreateSegmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CreateSegmentRequest#WriteSegmentRequest
   */
  readonly writeSegmentRequest: WriteSegmentRequest;

}

/**
 * @schema CreateSegmentResponse
 */
export interface CreateSegmentResponse {
  /**
   * @schema CreateSegmentResponse#SegmentResponse
   */
  readonly segmentResponse: SegmentResponse;

}

/**
 * @schema CreateSmsTemplateRequest
 */
export interface CreateSmsTemplateRequest {
  /**
   * @schema CreateSmsTemplateRequest#SMSTemplateRequest
   */
  readonly smsTemplateRequest: SmsTemplateRequest;

  /**
   * @schema CreateSmsTemplateRequest#TemplateName
   */
  readonly templateName: string;

}

/**
 * @schema CreateSmsTemplateResponse
 */
export interface CreateSmsTemplateResponse {
  /**
   * @schema CreateSmsTemplateResponse#CreateTemplateMessageBody
   */
  readonly createTemplateMessageBody: CreateTemplateMessageBody;

}

/**
 * @schema CreateVoiceTemplateRequest
 */
export interface CreateVoiceTemplateRequest {
  /**
   * @schema CreateVoiceTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema CreateVoiceTemplateRequest#VoiceTemplateRequest
   */
  readonly voiceTemplateRequest: VoiceTemplateRequest;

}

/**
 * @schema CreateVoiceTemplateResponse
 */
export interface CreateVoiceTemplateResponse {
  /**
   * @schema CreateVoiceTemplateResponse#CreateTemplateMessageBody
   */
  readonly createTemplateMessageBody: CreateTemplateMessageBody;

}

/**
 * @schema DeleteAdmChannelRequest
 */
export interface DeleteAdmChannelRequest {
  /**
   * @schema DeleteAdmChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteAdmChannelResponse
 */
export interface DeleteAdmChannelResponse {
  /**
   * @schema DeleteAdmChannelResponse#ADMChannelResponse
   */
  readonly admChannelResponse: AdmChannelResponse;

}

/**
 * @schema DeleteApnsChannelRequest
 */
export interface DeleteApnsChannelRequest {
  /**
   * @schema DeleteApnsChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteApnsChannelResponse
 */
export interface DeleteApnsChannelResponse {
  /**
   * @schema DeleteApnsChannelResponse#APNSChannelResponse
   */
  readonly apnsChannelResponse: ApnsChannelResponse;

}

/**
 * @schema DeleteApnsSandboxChannelRequest
 */
export interface DeleteApnsSandboxChannelRequest {
  /**
   * @schema DeleteApnsSandboxChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteApnsSandboxChannelResponse
 */
export interface DeleteApnsSandboxChannelResponse {
  /**
   * @schema DeleteApnsSandboxChannelResponse#APNSSandboxChannelResponse
   */
  readonly apnsSandboxChannelResponse: ApnsSandboxChannelResponse;

}

/**
 * @schema DeleteApnsVoipChannelRequest
 */
export interface DeleteApnsVoipChannelRequest {
  /**
   * @schema DeleteApnsVoipChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteApnsVoipChannelResponse
 */
export interface DeleteApnsVoipChannelResponse {
  /**
   * @schema DeleteApnsVoipChannelResponse#APNSVoipChannelResponse
   */
  readonly apnsVoipChannelResponse: ApnsVoipChannelResponse;

}

/**
 * @schema DeleteApnsVoipSandboxChannelRequest
 */
export interface DeleteApnsVoipSandboxChannelRequest {
  /**
   * @schema DeleteApnsVoipSandboxChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteApnsVoipSandboxChannelResponse
 */
export interface DeleteApnsVoipSandboxChannelResponse {
  /**
   * @schema DeleteApnsVoipSandboxChannelResponse#APNSVoipSandboxChannelResponse
   */
  readonly apnsVoipSandboxChannelResponse: ApnsVoipSandboxChannelResponse;

}

/**
 * @schema DeleteAppRequest
 */
export interface DeleteAppRequest {
  /**
   * @schema DeleteAppRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteAppResponse
 */
export interface DeleteAppResponse {
  /**
   * @schema DeleteAppResponse#ApplicationResponse
   */
  readonly applicationResponse: ApplicationResponse;

}

/**
 * @schema DeleteBaiduChannelRequest
 */
export interface DeleteBaiduChannelRequest {
  /**
   * @schema DeleteBaiduChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteBaiduChannelResponse
 */
export interface DeleteBaiduChannelResponse {
  /**
   * @schema DeleteBaiduChannelResponse#BaiduChannelResponse
   */
  readonly baiduChannelResponse: BaiduChannelResponse;

}

/**
 * @schema DeleteCampaignRequest
 */
export interface DeleteCampaignRequest {
  /**
   * @schema DeleteCampaignRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteCampaignRequest#CampaignId
   */
  readonly campaignId: string;

}

/**
 * @schema DeleteCampaignResponse
 */
export interface DeleteCampaignResponse {
  /**
   * @schema DeleteCampaignResponse#CampaignResponse
   */
  readonly campaignResponse: CampaignResponse;

}

/**
 * @schema DeleteEmailChannelRequest
 */
export interface DeleteEmailChannelRequest {
  /**
   * @schema DeleteEmailChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteEmailChannelResponse
 */
export interface DeleteEmailChannelResponse {
  /**
   * @schema DeleteEmailChannelResponse#EmailChannelResponse
   */
  readonly emailChannelResponse: EmailChannelResponse;

}

/**
 * @schema DeleteEmailTemplateRequest
 */
export interface DeleteEmailTemplateRequest {
  /**
   * @schema DeleteEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema DeleteEmailTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema DeleteEmailTemplateResponse
 */
export interface DeleteEmailTemplateResponse {
  /**
   * @schema DeleteEmailTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema DeleteEndpointRequest
 */
export interface DeleteEndpointRequest {
  /**
   * @schema DeleteEndpointRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteEndpointRequest#EndpointId
   */
  readonly endpointId: string;

}

/**
 * @schema DeleteEndpointResponse
 */
export interface DeleteEndpointResponse {
  /**
   * @schema DeleteEndpointResponse#EndpointResponse
   */
  readonly endpointResponse: EndpointResponse;

}

/**
 * @schema DeleteEventStreamRequest
 */
export interface DeleteEventStreamRequest {
  /**
   * @schema DeleteEventStreamRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteEventStreamResponse
 */
export interface DeleteEventStreamResponse {
  /**
   * @schema DeleteEventStreamResponse#EventStream
   */
  readonly eventStream: EventStream;

}

/**
 * @schema DeleteGcmChannelRequest
 */
export interface DeleteGcmChannelRequest {
  /**
   * @schema DeleteGcmChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteGcmChannelResponse
 */
export interface DeleteGcmChannelResponse {
  /**
   * @schema DeleteGcmChannelResponse#GCMChannelResponse
   */
  readonly gcmChannelResponse: GcmChannelResponse;

}

/**
 * @schema DeleteJourneyRequest
 */
export interface DeleteJourneyRequest {
  /**
   * @schema DeleteJourneyRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteJourneyRequest#JourneyId
   */
  readonly journeyId: string;

}

/**
 * @schema DeleteJourneyResponse
 */
export interface DeleteJourneyResponse {
  /**
   * @schema DeleteJourneyResponse#JourneyResponse
   */
  readonly journeyResponse: JourneyResponse;

}

/**
 * @schema DeletePushTemplateRequest
 */
export interface DeletePushTemplateRequest {
  /**
   * @schema DeletePushTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema DeletePushTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema DeletePushTemplateResponse
 */
export interface DeletePushTemplateResponse {
  /**
   * @schema DeletePushTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema DeleteRecommenderConfigurationRequest
 */
export interface DeleteRecommenderConfigurationRequest {
  /**
   * @schema DeleteRecommenderConfigurationRequest#RecommenderId
   */
  readonly recommenderId: string;

}

/**
 * @schema DeleteRecommenderConfigurationResponse
 */
export interface DeleteRecommenderConfigurationResponse {
  /**
   * @schema DeleteRecommenderConfigurationResponse#RecommenderConfigurationResponse
   */
  readonly recommenderConfigurationResponse: RecommenderConfigurationResponse;

}

/**
 * @schema DeleteSegmentRequest
 */
export interface DeleteSegmentRequest {
  /**
   * @schema DeleteSegmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteSegmentRequest#SegmentId
   */
  readonly segmentId: string;

}

/**
 * @schema DeleteSegmentResponse
 */
export interface DeleteSegmentResponse {
  /**
   * @schema DeleteSegmentResponse#SegmentResponse
   */
  readonly segmentResponse: SegmentResponse;

}

/**
 * @schema DeleteSmsChannelRequest
 */
export interface DeleteSmsChannelRequest {
  /**
   * @schema DeleteSmsChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteSmsChannelResponse
 */
export interface DeleteSmsChannelResponse {
  /**
   * @schema DeleteSmsChannelResponse#SMSChannelResponse
   */
  readonly smsChannelResponse: SmsChannelResponse;

}

/**
 * @schema DeleteSmsTemplateRequest
 */
export interface DeleteSmsTemplateRequest {
  /**
   * @schema DeleteSmsTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema DeleteSmsTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema DeleteSmsTemplateResponse
 */
export interface DeleteSmsTemplateResponse {
  /**
   * @schema DeleteSmsTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema DeleteUserEndpointsRequest
 */
export interface DeleteUserEndpointsRequest {
  /**
   * @schema DeleteUserEndpointsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema DeleteUserEndpointsRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema DeleteUserEndpointsResponse
 */
export interface DeleteUserEndpointsResponse {
  /**
   * @schema DeleteUserEndpointsResponse#EndpointsResponse
   */
  readonly endpointsResponse: EndpointsResponse;

}

/**
 * @schema DeleteVoiceChannelRequest
 */
export interface DeleteVoiceChannelRequest {
  /**
   * @schema DeleteVoiceChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema DeleteVoiceChannelResponse
 */
export interface DeleteVoiceChannelResponse {
  /**
   * @schema DeleteVoiceChannelResponse#VoiceChannelResponse
   */
  readonly voiceChannelResponse: VoiceChannelResponse;

}

/**
 * @schema DeleteVoiceTemplateRequest
 */
export interface DeleteVoiceTemplateRequest {
  /**
   * @schema DeleteVoiceTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema DeleteVoiceTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema DeleteVoiceTemplateResponse
 */
export interface DeleteVoiceTemplateResponse {
  /**
   * @schema DeleteVoiceTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema GetAdmChannelRequest
 */
export interface GetAdmChannelRequest {
  /**
   * @schema GetAdmChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetAdmChannelResponse
 */
export interface GetAdmChannelResponse {
  /**
   * @schema GetAdmChannelResponse#ADMChannelResponse
   */
  readonly admChannelResponse: AdmChannelResponse;

}

/**
 * @schema GetApnsChannelRequest
 */
export interface GetApnsChannelRequest {
  /**
   * @schema GetApnsChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetApnsChannelResponse
 */
export interface GetApnsChannelResponse {
  /**
   * @schema GetApnsChannelResponse#APNSChannelResponse
   */
  readonly apnsChannelResponse: ApnsChannelResponse;

}

/**
 * @schema GetApnsSandboxChannelRequest
 */
export interface GetApnsSandboxChannelRequest {
  /**
   * @schema GetApnsSandboxChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetApnsSandboxChannelResponse
 */
export interface GetApnsSandboxChannelResponse {
  /**
   * @schema GetApnsSandboxChannelResponse#APNSSandboxChannelResponse
   */
  readonly apnsSandboxChannelResponse: ApnsSandboxChannelResponse;

}

/**
 * @schema GetApnsVoipChannelRequest
 */
export interface GetApnsVoipChannelRequest {
  /**
   * @schema GetApnsVoipChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetApnsVoipChannelResponse
 */
export interface GetApnsVoipChannelResponse {
  /**
   * @schema GetApnsVoipChannelResponse#APNSVoipChannelResponse
   */
  readonly apnsVoipChannelResponse: ApnsVoipChannelResponse;

}

/**
 * @schema GetApnsVoipSandboxChannelRequest
 */
export interface GetApnsVoipSandboxChannelRequest {
  /**
   * @schema GetApnsVoipSandboxChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetApnsVoipSandboxChannelResponse
 */
export interface GetApnsVoipSandboxChannelResponse {
  /**
   * @schema GetApnsVoipSandboxChannelResponse#APNSVoipSandboxChannelResponse
   */
  readonly apnsVoipSandboxChannelResponse: ApnsVoipSandboxChannelResponse;

}

/**
 * @schema GetAppRequest
 */
export interface GetAppRequest {
  /**
   * @schema GetAppRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetAppResponse
 */
export interface GetAppResponse {
  /**
   * @schema GetAppResponse#ApplicationResponse
   */
  readonly applicationResponse: ApplicationResponse;

}

/**
 * @schema GetApplicationDateRangeKpiRequest
 */
export interface GetApplicationDateRangeKpiRequest {
  /**
   * @schema GetApplicationDateRangeKpiRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetApplicationDateRangeKpiRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GetApplicationDateRangeKpiRequest#KpiName
   */
  readonly kpiName: string;

  /**
   * @schema GetApplicationDateRangeKpiRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetApplicationDateRangeKpiRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetApplicationDateRangeKpiRequest#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema GetApplicationDateRangeKpiResponse
 */
export interface GetApplicationDateRangeKpiResponse {
  /**
   * @schema GetApplicationDateRangeKpiResponse#ApplicationDateRangeKpiResponse
   */
  readonly applicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse;

}

/**
 * @schema GetApplicationSettingsRequest
 */
export interface GetApplicationSettingsRequest {
  /**
   * @schema GetApplicationSettingsRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetApplicationSettingsResponse
 */
export interface GetApplicationSettingsResponse {
  /**
   * @schema GetApplicationSettingsResponse#ApplicationSettingsResource
   */
  readonly applicationSettingsResource: ApplicationSettingsResource;

}

/**
 * @schema GetAppsRequest
 */
export interface GetAppsRequest {
  /**
   * @schema GetAppsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetAppsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetAppsResponse
 */
export interface GetAppsResponse {
  /**
   * @schema GetAppsResponse#ApplicationsResponse
   */
  readonly applicationsResponse: ApplicationsResponse;

}

/**
 * @schema GetBaiduChannelRequest
 */
export interface GetBaiduChannelRequest {
  /**
   * @schema GetBaiduChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetBaiduChannelResponse
 */
export interface GetBaiduChannelResponse {
  /**
   * @schema GetBaiduChannelResponse#BaiduChannelResponse
   */
  readonly baiduChannelResponse: BaiduChannelResponse;

}

/**
 * @schema GetCampaignRequest
 */
export interface GetCampaignRequest {
  /**
   * @schema GetCampaignRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetCampaignRequest#CampaignId
   */
  readonly campaignId: string;

}

/**
 * @schema GetCampaignResponse
 */
export interface GetCampaignResponse {
  /**
   * @schema GetCampaignResponse#CampaignResponse
   */
  readonly campaignResponse: CampaignResponse;

}

/**
 * @schema GetCampaignActivitiesRequest
 */
export interface GetCampaignActivitiesRequest {
  /**
   * @schema GetCampaignActivitiesRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetCampaignActivitiesRequest#CampaignId
   */
  readonly campaignId: string;

  /**
   * @schema GetCampaignActivitiesRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetCampaignActivitiesRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetCampaignActivitiesResponse
 */
export interface GetCampaignActivitiesResponse {
  /**
   * @schema GetCampaignActivitiesResponse#ActivitiesResponse
   */
  readonly activitiesResponse: ActivitiesResponse;

}

/**
 * @schema GetCampaignDateRangeKpiRequest
 */
export interface GetCampaignDateRangeKpiRequest {
  /**
   * @schema GetCampaignDateRangeKpiRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetCampaignDateRangeKpiRequest#CampaignId
   */
  readonly campaignId: string;

  /**
   * @schema GetCampaignDateRangeKpiRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GetCampaignDateRangeKpiRequest#KpiName
   */
  readonly kpiName: string;

  /**
   * @schema GetCampaignDateRangeKpiRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCampaignDateRangeKpiRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetCampaignDateRangeKpiRequest#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema GetCampaignDateRangeKpiResponse
 */
export interface GetCampaignDateRangeKpiResponse {
  /**
   * @schema GetCampaignDateRangeKpiResponse#CampaignDateRangeKpiResponse
   */
  readonly campaignDateRangeKpiResponse: CampaignDateRangeKpiResponse;

}

/**
 * @schema GetCampaignVersionRequest
 */
export interface GetCampaignVersionRequest {
  /**
   * @schema GetCampaignVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetCampaignVersionRequest#CampaignId
   */
  readonly campaignId: string;

  /**
   * @schema GetCampaignVersionRequest#Version
   */
  readonly version: string;

}

/**
 * @schema GetCampaignVersionResponse
 */
export interface GetCampaignVersionResponse {
  /**
   * @schema GetCampaignVersionResponse#CampaignResponse
   */
  readonly campaignResponse: CampaignResponse;

}

/**
 * @schema GetCampaignVersionsRequest
 */
export interface GetCampaignVersionsRequest {
  /**
   * @schema GetCampaignVersionsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetCampaignVersionsRequest#CampaignId
   */
  readonly campaignId: string;

  /**
   * @schema GetCampaignVersionsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetCampaignVersionsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetCampaignVersionsResponse
 */
export interface GetCampaignVersionsResponse {
  /**
   * @schema GetCampaignVersionsResponse#CampaignsResponse
   */
  readonly campaignsResponse: CampaignsResponse;

}

/**
 * @schema GetCampaignsRequest
 */
export interface GetCampaignsRequest {
  /**
   * @schema GetCampaignsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetCampaignsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetCampaignsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetCampaignsResponse
 */
export interface GetCampaignsResponse {
  /**
   * @schema GetCampaignsResponse#CampaignsResponse
   */
  readonly campaignsResponse: CampaignsResponse;

}

/**
 * @schema GetChannelsRequest
 */
export interface GetChannelsRequest {
  /**
   * @schema GetChannelsRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetChannelsResponse
 */
export interface GetChannelsResponse {
  /**
   * @schema GetChannelsResponse#ChannelsResponse
   */
  readonly channelsResponse: ChannelsResponse;

}

/**
 * @schema GetEmailChannelRequest
 */
export interface GetEmailChannelRequest {
  /**
   * @schema GetEmailChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetEmailChannelResponse
 */
export interface GetEmailChannelResponse {
  /**
   * @schema GetEmailChannelResponse#EmailChannelResponse
   */
  readonly emailChannelResponse: EmailChannelResponse;

}

/**
 * @schema GetEmailTemplateRequest
 */
export interface GetEmailTemplateRequest {
  /**
   * @schema GetEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema GetEmailTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema GetEmailTemplateResponse
 */
export interface GetEmailTemplateResponse {
  /**
   * @schema GetEmailTemplateResponse#EmailTemplateResponse
   */
  readonly emailTemplateResponse: EmailTemplateResponse;

}

/**
 * @schema GetEndpointRequest
 */
export interface GetEndpointRequest {
  /**
   * @schema GetEndpointRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetEndpointRequest#EndpointId
   */
  readonly endpointId: string;

}

/**
 * @schema GetEndpointResponse
 */
export interface GetEndpointResponse {
  /**
   * @schema GetEndpointResponse#EndpointResponse
   */
  readonly endpointResponse: EndpointResponse;

}

/**
 * @schema GetEventStreamRequest
 */
export interface GetEventStreamRequest {
  /**
   * @schema GetEventStreamRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetEventStreamResponse
 */
export interface GetEventStreamResponse {
  /**
   * @schema GetEventStreamResponse#EventStream
   */
  readonly eventStream: EventStream;

}

/**
 * @schema GetExportJobRequest
 */
export interface GetExportJobRequest {
  /**
   * @schema GetExportJobRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetExportJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetExportJobResponse
 */
export interface GetExportJobResponse {
  /**
   * @schema GetExportJobResponse#ExportJobResponse
   */
  readonly exportJobResponse: ExportJobResponse;

}

/**
 * @schema GetExportJobsRequest
 */
export interface GetExportJobsRequest {
  /**
   * @schema GetExportJobsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetExportJobsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetExportJobsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetExportJobsResponse
 */
export interface GetExportJobsResponse {
  /**
   * @schema GetExportJobsResponse#ExportJobsResponse
   */
  readonly exportJobsResponse: ExportJobsResponse;

}

/**
 * @schema GetGcmChannelRequest
 */
export interface GetGcmChannelRequest {
  /**
   * @schema GetGcmChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetGcmChannelResponse
 */
export interface GetGcmChannelResponse {
  /**
   * @schema GetGcmChannelResponse#GCMChannelResponse
   */
  readonly gcmChannelResponse: GcmChannelResponse;

}

/**
 * @schema GetImportJobRequest
 */
export interface GetImportJobRequest {
  /**
   * @schema GetImportJobRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetImportJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetImportJobResponse
 */
export interface GetImportJobResponse {
  /**
   * @schema GetImportJobResponse#ImportJobResponse
   */
  readonly importJobResponse: ImportJobResponse;

}

/**
 * @schema GetImportJobsRequest
 */
export interface GetImportJobsRequest {
  /**
   * @schema GetImportJobsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetImportJobsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetImportJobsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetImportJobsResponse
 */
export interface GetImportJobsResponse {
  /**
   * @schema GetImportJobsResponse#ImportJobsResponse
   */
  readonly importJobsResponse: ImportJobsResponse;

}

/**
 * @schema GetJourneyRequest
 */
export interface GetJourneyRequest {
  /**
   * @schema GetJourneyRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetJourneyRequest#JourneyId
   */
  readonly journeyId: string;

}

/**
 * @schema GetJourneyResponse
 */
export interface GetJourneyResponse {
  /**
   * @schema GetJourneyResponse#JourneyResponse
   */
  readonly journeyResponse: JourneyResponse;

}

/**
 * @schema GetJourneyDateRangeKpiRequest
 */
export interface GetJourneyDateRangeKpiRequest {
  /**
   * @schema GetJourneyDateRangeKpiRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetJourneyDateRangeKpiRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GetJourneyDateRangeKpiRequest#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema GetJourneyDateRangeKpiRequest#KpiName
   */
  readonly kpiName: string;

  /**
   * @schema GetJourneyDateRangeKpiRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetJourneyDateRangeKpiRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetJourneyDateRangeKpiRequest#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema GetJourneyDateRangeKpiResponse
 */
export interface GetJourneyDateRangeKpiResponse {
  /**
   * @schema GetJourneyDateRangeKpiResponse#JourneyDateRangeKpiResponse
   */
  readonly journeyDateRangeKpiResponse: JourneyDateRangeKpiResponse;

}

/**
 * @schema GetJourneyExecutionActivityMetricsRequest
 */
export interface GetJourneyExecutionActivityMetricsRequest {
  /**
   * @schema GetJourneyExecutionActivityMetricsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetJourneyExecutionActivityMetricsRequest#JourneyActivityId
   */
  readonly journeyActivityId: string;

  /**
   * @schema GetJourneyExecutionActivityMetricsRequest#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema GetJourneyExecutionActivityMetricsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetJourneyExecutionActivityMetricsRequest#PageSize
   */
  readonly pageSize?: string;

}

/**
 * @schema GetJourneyExecutionActivityMetricsResponse
 */
export interface GetJourneyExecutionActivityMetricsResponse {
  /**
   * @schema GetJourneyExecutionActivityMetricsResponse#JourneyExecutionActivityMetricsResponse
   */
  readonly journeyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse;

}

/**
 * @schema GetJourneyExecutionMetricsRequest
 */
export interface GetJourneyExecutionMetricsRequest {
  /**
   * @schema GetJourneyExecutionMetricsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetJourneyExecutionMetricsRequest#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema GetJourneyExecutionMetricsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetJourneyExecutionMetricsRequest#PageSize
   */
  readonly pageSize?: string;

}

/**
 * @schema GetJourneyExecutionMetricsResponse
 */
export interface GetJourneyExecutionMetricsResponse {
  /**
   * @schema GetJourneyExecutionMetricsResponse#JourneyExecutionMetricsResponse
   */
  readonly journeyExecutionMetricsResponse: JourneyExecutionMetricsResponse;

}

/**
 * @schema GetPushTemplateRequest
 */
export interface GetPushTemplateRequest {
  /**
   * @schema GetPushTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema GetPushTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema GetPushTemplateResponse
 */
export interface GetPushTemplateResponse {
  /**
   * @schema GetPushTemplateResponse#PushNotificationTemplateResponse
   */
  readonly pushNotificationTemplateResponse: PushNotificationTemplateResponse;

}

/**
 * @schema GetRecommenderConfigurationRequest
 */
export interface GetRecommenderConfigurationRequest {
  /**
   * @schema GetRecommenderConfigurationRequest#RecommenderId
   */
  readonly recommenderId: string;

}

/**
 * @schema GetRecommenderConfigurationResponse
 */
export interface GetRecommenderConfigurationResponse {
  /**
   * @schema GetRecommenderConfigurationResponse#RecommenderConfigurationResponse
   */
  readonly recommenderConfigurationResponse: RecommenderConfigurationResponse;

}

/**
 * @schema GetRecommenderConfigurationsRequest
 */
export interface GetRecommenderConfigurationsRequest {
  /**
   * @schema GetRecommenderConfigurationsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetRecommenderConfigurationsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetRecommenderConfigurationsResponse
 */
export interface GetRecommenderConfigurationsResponse {
  /**
   * @schema GetRecommenderConfigurationsResponse#ListRecommenderConfigurationsResponse
   */
  readonly listRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse;

}

/**
 * @schema GetSegmentRequest
 */
export interface GetSegmentRequest {
  /**
   * @schema GetSegmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetSegmentRequest#SegmentId
   */
  readonly segmentId: string;

}

/**
 * @schema GetSegmentResponse
 */
export interface GetSegmentResponse {
  /**
   * @schema GetSegmentResponse#SegmentResponse
   */
  readonly segmentResponse: SegmentResponse;

}

/**
 * @schema GetSegmentExportJobsRequest
 */
export interface GetSegmentExportJobsRequest {
  /**
   * @schema GetSegmentExportJobsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetSegmentExportJobsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetSegmentExportJobsRequest#SegmentId
   */
  readonly segmentId: string;

  /**
   * @schema GetSegmentExportJobsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetSegmentExportJobsResponse
 */
export interface GetSegmentExportJobsResponse {
  /**
   * @schema GetSegmentExportJobsResponse#ExportJobsResponse
   */
  readonly exportJobsResponse: ExportJobsResponse;

}

/**
 * @schema GetSegmentImportJobsRequest
 */
export interface GetSegmentImportJobsRequest {
  /**
   * @schema GetSegmentImportJobsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetSegmentImportJobsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetSegmentImportJobsRequest#SegmentId
   */
  readonly segmentId: string;

  /**
   * @schema GetSegmentImportJobsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetSegmentImportJobsResponse
 */
export interface GetSegmentImportJobsResponse {
  /**
   * @schema GetSegmentImportJobsResponse#ImportJobsResponse
   */
  readonly importJobsResponse: ImportJobsResponse;

}

/**
 * @schema GetSegmentVersionRequest
 */
export interface GetSegmentVersionRequest {
  /**
   * @schema GetSegmentVersionRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetSegmentVersionRequest#SegmentId
   */
  readonly segmentId: string;

  /**
   * @schema GetSegmentVersionRequest#Version
   */
  readonly version: string;

}

/**
 * @schema GetSegmentVersionResponse
 */
export interface GetSegmentVersionResponse {
  /**
   * @schema GetSegmentVersionResponse#SegmentResponse
   */
  readonly segmentResponse: SegmentResponse;

}

/**
 * @schema GetSegmentVersionsRequest
 */
export interface GetSegmentVersionsRequest {
  /**
   * @schema GetSegmentVersionsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetSegmentVersionsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetSegmentVersionsRequest#SegmentId
   */
  readonly segmentId: string;

  /**
   * @schema GetSegmentVersionsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetSegmentVersionsResponse
 */
export interface GetSegmentVersionsResponse {
  /**
   * @schema GetSegmentVersionsResponse#SegmentsResponse
   */
  readonly segmentsResponse: SegmentsResponse;

}

/**
 * @schema GetSegmentsRequest
 */
export interface GetSegmentsRequest {
  /**
   * @schema GetSegmentsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetSegmentsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema GetSegmentsRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema GetSegmentsResponse
 */
export interface GetSegmentsResponse {
  /**
   * @schema GetSegmentsResponse#SegmentsResponse
   */
  readonly segmentsResponse: SegmentsResponse;

}

/**
 * @schema GetSmsChannelRequest
 */
export interface GetSmsChannelRequest {
  /**
   * @schema GetSmsChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetSmsChannelResponse
 */
export interface GetSmsChannelResponse {
  /**
   * @schema GetSmsChannelResponse#SMSChannelResponse
   */
  readonly smsChannelResponse: SmsChannelResponse;

}

/**
 * @schema GetSmsTemplateRequest
 */
export interface GetSmsTemplateRequest {
  /**
   * @schema GetSmsTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema GetSmsTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema GetSmsTemplateResponse
 */
export interface GetSmsTemplateResponse {
  /**
   * @schema GetSmsTemplateResponse#SMSTemplateResponse
   */
  readonly smsTemplateResponse: SmsTemplateResponse;

}

/**
 * @schema GetUserEndpointsRequest
 */
export interface GetUserEndpointsRequest {
  /**
   * @schema GetUserEndpointsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema GetUserEndpointsRequest#UserId
   */
  readonly userId: string;

}

/**
 * @schema GetUserEndpointsResponse
 */
export interface GetUserEndpointsResponse {
  /**
   * @schema GetUserEndpointsResponse#EndpointsResponse
   */
  readonly endpointsResponse: EndpointsResponse;

}

/**
 * @schema GetVoiceChannelRequest
 */
export interface GetVoiceChannelRequest {
  /**
   * @schema GetVoiceChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema GetVoiceChannelResponse
 */
export interface GetVoiceChannelResponse {
  /**
   * @schema GetVoiceChannelResponse#VoiceChannelResponse
   */
  readonly voiceChannelResponse: VoiceChannelResponse;

}

/**
 * @schema GetVoiceTemplateRequest
 */
export interface GetVoiceTemplateRequest {
  /**
   * @schema GetVoiceTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema GetVoiceTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema GetVoiceTemplateResponse
 */
export interface GetVoiceTemplateResponse {
  /**
   * @schema GetVoiceTemplateResponse#VoiceTemplateResponse
   */
  readonly voiceTemplateResponse: VoiceTemplateResponse;

}

/**
 * @schema ListJourneysRequest
 */
export interface ListJourneysRequest {
  /**
   * @schema ListJourneysRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ListJourneysRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema ListJourneysRequest#Token
   */
  readonly token?: string;

}

/**
 * @schema ListJourneysResponse
 */
export interface ListJourneysResponse {
  /**
   * @schema ListJourneysResponse#JourneysResponse
   */
  readonly journeysResponse: JourneysResponse;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#TagsModel
   */
  readonly tagsModel: TagsModel;

}

/**
 * @schema ListTemplateVersionsRequest
 */
export interface ListTemplateVersionsRequest {
  /**
   * @schema ListTemplateVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTemplateVersionsRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema ListTemplateVersionsRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema ListTemplateVersionsRequest#TemplateType
   */
  readonly templateType: string;

}

/**
 * @schema ListTemplateVersionsResponse
 */
export interface ListTemplateVersionsResponse {
  /**
   * @schema ListTemplateVersionsResponse#TemplateVersionsResponse
   */
  readonly templateVersionsResponse: TemplateVersionsResponse;

}

/**
 * @schema ListTemplatesRequest
 */
export interface ListTemplatesRequest {
  /**
   * @schema ListTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTemplatesRequest#PageSize
   */
  readonly pageSize?: string;

  /**
   * @schema ListTemplatesRequest#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListTemplatesRequest#TemplateType
   */
  readonly templateType?: string;

}

/**
 * @schema ListTemplatesResponse
 */
export interface ListTemplatesResponse {
  /**
   * @schema ListTemplatesResponse#TemplatesResponse
   */
  readonly templatesResponse: TemplatesResponse;

}

/**
 * @schema PhoneNumberValidateRequest
 */
export interface PhoneNumberValidateRequest {
  /**
   * @schema PhoneNumberValidateRequest#NumberValidateRequest
   */
  readonly numberValidateRequest: NumberValidateRequest;

}

/**
 * @schema PhoneNumberValidateResponse
 */
export interface PhoneNumberValidateResponse {
  /**
   * @schema PhoneNumberValidateResponse#NumberValidateResponse
   */
  readonly numberValidateResponse: NumberValidateResponse;

}

/**
 * @schema PutEventStreamRequest
 */
export interface PutEventStreamRequest {
  /**
   * @schema PutEventStreamRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema PutEventStreamRequest#WriteEventStream
   */
  readonly writeEventStream: WriteEventStream;

}

/**
 * @schema PutEventStreamResponse
 */
export interface PutEventStreamResponse {
  /**
   * @schema PutEventStreamResponse#EventStream
   */
  readonly eventStream: EventStream;

}

/**
 * @schema PutEventsRequest
 */
export interface PutEventsRequest {
  /**
   * @schema PutEventsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema PutEventsRequest#EventsRequest
   */
  readonly eventsRequest: EventsRequest;

}

/**
 * @schema PutEventsResponse
 */
export interface PutEventsResponse {
  /**
   * @schema PutEventsResponse#EventsResponse
   */
  readonly eventsResponse: EventsResponse;

}

/**
 * @schema RemoveAttributesRequest
 */
export interface RemoveAttributesRequest {
  /**
   * @schema RemoveAttributesRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema RemoveAttributesRequest#AttributeType
   */
  readonly attributeType: string;

  /**
   * @schema RemoveAttributesRequest#UpdateAttributesRequest
   */
  readonly updateAttributesRequest: UpdateAttributesRequest;

}

/**
 * @schema RemoveAttributesResponse
 */
export interface RemoveAttributesResponse {
  /**
   * @schema RemoveAttributesResponse#AttributesResource
   */
  readonly attributesResource: AttributesResource;

}

/**
 * @schema SendMessagesRequest
 */
export interface SendMessagesRequest {
  /**
   * @schema SendMessagesRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema SendMessagesRequest#MessageRequest
   */
  readonly messageRequest: MessageRequest;

}

/**
 * @schema SendMessagesResponse
 */
export interface SendMessagesResponse {
  /**
   * @schema SendMessagesResponse#MessageResponse
   */
  readonly messageResponse: MessageResponse;

}

/**
 * @schema SendUsersMessagesRequest
 */
export interface SendUsersMessagesRequest {
  /**
   * @schema SendUsersMessagesRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema SendUsersMessagesRequest#SendUsersMessageRequest
   */
  readonly sendUsersMessageRequest: SendUsersMessageRequest;

}

/**
 * @schema SendUsersMessagesResponse
 */
export interface SendUsersMessagesResponse {
  /**
   * @schema SendUsersMessagesResponse#SendUsersMessageResponse
   */
  readonly sendUsersMessageResponse: SendUsersMessageResponse;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#TagsModel
   */
  readonly tagsModel: TagsModel;

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateAdmChannelRequest
 */
export interface UpdateAdmChannelRequest {
  /**
   * @schema UpdateAdmChannelRequest#ADMChannelRequest
   */
  readonly admChannelRequest: AdmChannelRequest;

  /**
   * @schema UpdateAdmChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema UpdateAdmChannelResponse
 */
export interface UpdateAdmChannelResponse {
  /**
   * @schema UpdateAdmChannelResponse#ADMChannelResponse
   */
  readonly admChannelResponse: AdmChannelResponse;

}

/**
 * @schema UpdateApnsChannelRequest
 */
export interface UpdateApnsChannelRequest {
  /**
   * @schema UpdateApnsChannelRequest#APNSChannelRequest
   */
  readonly apnsChannelRequest: ApnsChannelRequest;

  /**
   * @schema UpdateApnsChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema UpdateApnsChannelResponse
 */
export interface UpdateApnsChannelResponse {
  /**
   * @schema UpdateApnsChannelResponse#APNSChannelResponse
   */
  readonly apnsChannelResponse: ApnsChannelResponse;

}

/**
 * @schema UpdateApnsSandboxChannelRequest
 */
export interface UpdateApnsSandboxChannelRequest {
  /**
   * @schema UpdateApnsSandboxChannelRequest#APNSSandboxChannelRequest
   */
  readonly apnsSandboxChannelRequest: ApnsSandboxChannelRequest;

  /**
   * @schema UpdateApnsSandboxChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema UpdateApnsSandboxChannelResponse
 */
export interface UpdateApnsSandboxChannelResponse {
  /**
   * @schema UpdateApnsSandboxChannelResponse#APNSSandboxChannelResponse
   */
  readonly apnsSandboxChannelResponse: ApnsSandboxChannelResponse;

}

/**
 * @schema UpdateApnsVoipChannelRequest
 */
export interface UpdateApnsVoipChannelRequest {
  /**
   * @schema UpdateApnsVoipChannelRequest#APNSVoipChannelRequest
   */
  readonly apnsVoipChannelRequest: ApnsVoipChannelRequest;

  /**
   * @schema UpdateApnsVoipChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema UpdateApnsVoipChannelResponse
 */
export interface UpdateApnsVoipChannelResponse {
  /**
   * @schema UpdateApnsVoipChannelResponse#APNSVoipChannelResponse
   */
  readonly apnsVoipChannelResponse: ApnsVoipChannelResponse;

}

/**
 * @schema UpdateApnsVoipSandboxChannelRequest
 */
export interface UpdateApnsVoipSandboxChannelRequest {
  /**
   * @schema UpdateApnsVoipSandboxChannelRequest#APNSVoipSandboxChannelRequest
   */
  readonly apnsVoipSandboxChannelRequest: ApnsVoipSandboxChannelRequest;

  /**
   * @schema UpdateApnsVoipSandboxChannelRequest#ApplicationId
   */
  readonly applicationId: string;

}

/**
 * @schema UpdateApnsVoipSandboxChannelResponse
 */
export interface UpdateApnsVoipSandboxChannelResponse {
  /**
   * @schema UpdateApnsVoipSandboxChannelResponse#APNSVoipSandboxChannelResponse
   */
  readonly apnsVoipSandboxChannelResponse: ApnsVoipSandboxChannelResponse;

}

/**
 * @schema UpdateApplicationSettingsRequest
 */
export interface UpdateApplicationSettingsRequest {
  /**
   * @schema UpdateApplicationSettingsRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateApplicationSettingsRequest#WriteApplicationSettingsRequest
   */
  readonly writeApplicationSettingsRequest: WriteApplicationSettingsRequest;

}

/**
 * @schema UpdateApplicationSettingsResponse
 */
export interface UpdateApplicationSettingsResponse {
  /**
   * @schema UpdateApplicationSettingsResponse#ApplicationSettingsResource
   */
  readonly applicationSettingsResource: ApplicationSettingsResource;

}

/**
 * @schema UpdateBaiduChannelRequest
 */
export interface UpdateBaiduChannelRequest {
  /**
   * @schema UpdateBaiduChannelRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateBaiduChannelRequest#BaiduChannelRequest
   */
  readonly baiduChannelRequest: BaiduChannelRequest;

}

/**
 * @schema UpdateBaiduChannelResponse
 */
export interface UpdateBaiduChannelResponse {
  /**
   * @schema UpdateBaiduChannelResponse#BaiduChannelResponse
   */
  readonly baiduChannelResponse: BaiduChannelResponse;

}

/**
 * @schema UpdateCampaignRequest
 */
export interface UpdateCampaignRequest {
  /**
   * @schema UpdateCampaignRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateCampaignRequest#CampaignId
   */
  readonly campaignId: string;

  /**
   * @schema UpdateCampaignRequest#WriteCampaignRequest
   */
  readonly writeCampaignRequest: WriteCampaignRequest;

}

/**
 * @schema UpdateCampaignResponse
 */
export interface UpdateCampaignResponse {
  /**
   * @schema UpdateCampaignResponse#CampaignResponse
   */
  readonly campaignResponse: CampaignResponse;

}

/**
 * @schema UpdateEmailChannelRequest
 */
export interface UpdateEmailChannelRequest {
  /**
   * @schema UpdateEmailChannelRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateEmailChannelRequest#EmailChannelRequest
   */
  readonly emailChannelRequest: EmailChannelRequest;

}

/**
 * @schema UpdateEmailChannelResponse
 */
export interface UpdateEmailChannelResponse {
  /**
   * @schema UpdateEmailChannelResponse#EmailChannelResponse
   */
  readonly emailChannelResponse: EmailChannelResponse;

}

/**
 * @schema UpdateEmailTemplateRequest
 */
export interface UpdateEmailTemplateRequest {
  /**
   * @schema UpdateEmailTemplateRequest#CreateNewVersion
   */
  readonly createNewVersion?: boolean;

  /**
   * @schema UpdateEmailTemplateRequest#EmailTemplateRequest
   */
  readonly emailTemplateRequest: EmailTemplateRequest;

  /**
   * @schema UpdateEmailTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateEmailTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema UpdateEmailTemplateResponse
 */
export interface UpdateEmailTemplateResponse {
  /**
   * @schema UpdateEmailTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema UpdateEndpointRequest
 */
export interface UpdateEndpointRequest {
  /**
   * @schema UpdateEndpointRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateEndpointRequest#EndpointId
   */
  readonly endpointId: string;

  /**
   * @schema UpdateEndpointRequest#EndpointRequest
   */
  readonly endpointRequest: EndpointRequest;

}

/**
 * @schema UpdateEndpointResponse
 */
export interface UpdateEndpointResponse {
  /**
   * @schema UpdateEndpointResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema UpdateEndpointsBatchRequest
 */
export interface UpdateEndpointsBatchRequest {
  /**
   * @schema UpdateEndpointsBatchRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateEndpointsBatchRequest#EndpointBatchRequest
   */
  readonly endpointBatchRequest: EndpointBatchRequest;

}

/**
 * @schema UpdateEndpointsBatchResponse
 */
export interface UpdateEndpointsBatchResponse {
  /**
   * @schema UpdateEndpointsBatchResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema UpdateGcmChannelRequest
 */
export interface UpdateGcmChannelRequest {
  /**
   * @schema UpdateGcmChannelRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateGcmChannelRequest#GCMChannelRequest
   */
  readonly gcmChannelRequest: GcmChannelRequest;

}

/**
 * @schema UpdateGcmChannelResponse
 */
export interface UpdateGcmChannelResponse {
  /**
   * @schema UpdateGcmChannelResponse#GCMChannelResponse
   */
  readonly gcmChannelResponse: GcmChannelResponse;

}

/**
 * @schema UpdateJourneyRequest
 */
export interface UpdateJourneyRequest {
  /**
   * @schema UpdateJourneyRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateJourneyRequest#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema UpdateJourneyRequest#WriteJourneyRequest
   */
  readonly writeJourneyRequest: WriteJourneyRequest;

}

/**
 * @schema UpdateJourneyResponse
 */
export interface UpdateJourneyResponse {
  /**
   * @schema UpdateJourneyResponse#JourneyResponse
   */
  readonly journeyResponse: JourneyResponse;

}

/**
 * @schema UpdateJourneyStateRequest
 */
export interface UpdateJourneyStateRequest {
  /**
   * @schema UpdateJourneyStateRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateJourneyStateRequest#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema UpdateJourneyStateRequest#JourneyStateRequest
   */
  readonly journeyStateRequest: JourneyStateRequest;

}

/**
 * @schema UpdateJourneyStateResponse
 */
export interface UpdateJourneyStateResponse {
  /**
   * @schema UpdateJourneyStateResponse#JourneyResponse
   */
  readonly journeyResponse: JourneyResponse;

}

/**
 * @schema UpdatePushTemplateRequest
 */
export interface UpdatePushTemplateRequest {
  /**
   * @schema UpdatePushTemplateRequest#CreateNewVersion
   */
  readonly createNewVersion?: boolean;

  /**
   * @schema UpdatePushTemplateRequest#PushNotificationTemplateRequest
   */
  readonly pushNotificationTemplateRequest: PushNotificationTemplateRequest;

  /**
   * @schema UpdatePushTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdatePushTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema UpdatePushTemplateResponse
 */
export interface UpdatePushTemplateResponse {
  /**
   * @schema UpdatePushTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema UpdateRecommenderConfigurationRequest
 */
export interface UpdateRecommenderConfigurationRequest {
  /**
   * @schema UpdateRecommenderConfigurationRequest#RecommenderId
   */
  readonly recommenderId: string;

  /**
   * @schema UpdateRecommenderConfigurationRequest#UpdateRecommenderConfiguration
   */
  readonly updateRecommenderConfiguration: UpdateRecommenderConfiguration;

}

/**
 * @schema UpdateRecommenderConfigurationResponse
 */
export interface UpdateRecommenderConfigurationResponse {
  /**
   * @schema UpdateRecommenderConfigurationResponse#RecommenderConfigurationResponse
   */
  readonly recommenderConfigurationResponse: RecommenderConfigurationResponse;

}

/**
 * @schema UpdateSegmentRequest
 */
export interface UpdateSegmentRequest {
  /**
   * @schema UpdateSegmentRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateSegmentRequest#SegmentId
   */
  readonly segmentId: string;

  /**
   * @schema UpdateSegmentRequest#WriteSegmentRequest
   */
  readonly writeSegmentRequest: WriteSegmentRequest;

}

/**
 * @schema UpdateSegmentResponse
 */
export interface UpdateSegmentResponse {
  /**
   * @schema UpdateSegmentResponse#SegmentResponse
   */
  readonly segmentResponse: SegmentResponse;

}

/**
 * @schema UpdateSmsChannelRequest
 */
export interface UpdateSmsChannelRequest {
  /**
   * @schema UpdateSmsChannelRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateSmsChannelRequest#SMSChannelRequest
   */
  readonly smsChannelRequest: SmsChannelRequest;

}

/**
 * @schema UpdateSmsChannelResponse
 */
export interface UpdateSmsChannelResponse {
  /**
   * @schema UpdateSmsChannelResponse#SMSChannelResponse
   */
  readonly smsChannelResponse: SmsChannelResponse;

}

/**
 * @schema UpdateSmsTemplateRequest
 */
export interface UpdateSmsTemplateRequest {
  /**
   * @schema UpdateSmsTemplateRequest#CreateNewVersion
   */
  readonly createNewVersion?: boolean;

  /**
   * @schema UpdateSmsTemplateRequest#SMSTemplateRequest
   */
  readonly smsTemplateRequest: SmsTemplateRequest;

  /**
   * @schema UpdateSmsTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateSmsTemplateRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema UpdateSmsTemplateResponse
 */
export interface UpdateSmsTemplateResponse {
  /**
   * @schema UpdateSmsTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema UpdateTemplateActiveVersionRequest
 */
export interface UpdateTemplateActiveVersionRequest {
  /**
   * @schema UpdateTemplateActiveVersionRequest#TemplateActiveVersionRequest
   */
  readonly templateActiveVersionRequest: TemplateActiveVersionRequest;

  /**
   * @schema UpdateTemplateActiveVersionRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateTemplateActiveVersionRequest#TemplateType
   */
  readonly templateType: string;

}

/**
 * @schema UpdateTemplateActiveVersionResponse
 */
export interface UpdateTemplateActiveVersionResponse {
  /**
   * @schema UpdateTemplateActiveVersionResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema UpdateVoiceChannelRequest
 */
export interface UpdateVoiceChannelRequest {
  /**
   * @schema UpdateVoiceChannelRequest#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema UpdateVoiceChannelRequest#VoiceChannelRequest
   */
  readonly voiceChannelRequest: VoiceChannelRequest;

}

/**
 * @schema UpdateVoiceChannelResponse
 */
export interface UpdateVoiceChannelResponse {
  /**
   * @schema UpdateVoiceChannelResponse#VoiceChannelResponse
   */
  readonly voiceChannelResponse: VoiceChannelResponse;

}

/**
 * @schema UpdateVoiceTemplateRequest
 */
export interface UpdateVoiceTemplateRequest {
  /**
   * @schema UpdateVoiceTemplateRequest#CreateNewVersion
   */
  readonly createNewVersion?: boolean;

  /**
   * @schema UpdateVoiceTemplateRequest#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema UpdateVoiceTemplateRequest#Version
   */
  readonly version?: string;

  /**
   * @schema UpdateVoiceTemplateRequest#VoiceTemplateRequest
   */
  readonly voiceTemplateRequest: VoiceTemplateRequest;

}

/**
 * @schema UpdateVoiceTemplateResponse
 */
export interface UpdateVoiceTemplateResponse {
  /**
   * @schema UpdateVoiceTemplateResponse#MessageBody
   */
  readonly messageBody: MessageBody;

}

/**
 * @schema CreateApplicationRequest
 */
export interface CreateApplicationRequest {
  /**
   * @schema CreateApplicationRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateApplicationRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ApplicationResponse
 */
export interface ApplicationResponse {
  /**
   * @schema ApplicationResponse#Arn
   */
  readonly arn: string;

  /**
   * @schema ApplicationResponse#Id
   */
  readonly id: string;

  /**
   * @schema ApplicationResponse#Name
   */
  readonly name: string;

  /**
   * @schema ApplicationResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema WriteCampaignRequest
 */
export interface WriteCampaignRequest {
  /**
   * @schema WriteCampaignRequest#AdditionalTreatments
   */
  readonly additionalTreatments?: WriteTreatmentResource[];

  /**
   * @schema WriteCampaignRequest#CustomDeliveryConfiguration
   */
  readonly customDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @schema WriteCampaignRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WriteCampaignRequest#HoldoutPercent
   */
  readonly holdoutPercent?: number;

  /**
   * @schema WriteCampaignRequest#Hook
   */
  readonly hook?: CampaignHook;

  /**
   * @schema WriteCampaignRequest#IsPaused
   */
  readonly isPaused?: boolean;

  /**
   * @schema WriteCampaignRequest#Limits
   */
  readonly limits?: CampaignLimits;

  /**
   * @schema WriteCampaignRequest#MessageConfiguration
   */
  readonly messageConfiguration?: MessageConfiguration;

  /**
   * @schema WriteCampaignRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WriteCampaignRequest#Schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema WriteCampaignRequest#SegmentId
   */
  readonly segmentId?: string;

  /**
   * @schema WriteCampaignRequest#SegmentVersion
   */
  readonly segmentVersion?: number;

  /**
   * @schema WriteCampaignRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema WriteCampaignRequest#TemplateConfiguration
   */
  readonly templateConfiguration?: TemplateConfiguration;

  /**
   * @schema WriteCampaignRequest#TreatmentDescription
   */
  readonly treatmentDescription?: string;

  /**
   * @schema WriteCampaignRequest#TreatmentName
   */
  readonly treatmentName?: string;

}

/**
 * @schema CampaignResponse
 */
export interface CampaignResponse {
  /**
   * @schema CampaignResponse#AdditionalTreatments
   */
  readonly additionalTreatments?: TreatmentResource[];

  /**
   * @schema CampaignResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CampaignResponse#Arn
   */
  readonly arn: string;

  /**
   * @schema CampaignResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema CampaignResponse#CustomDeliveryConfiguration
   */
  readonly customDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @schema CampaignResponse#DefaultState
   */
  readonly defaultState?: CampaignState;

  /**
   * @schema CampaignResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CampaignResponse#HoldoutPercent
   */
  readonly holdoutPercent?: number;

  /**
   * @schema CampaignResponse#Hook
   */
  readonly hook?: CampaignHook;

  /**
   * @schema CampaignResponse#Id
   */
  readonly id: string;

  /**
   * @schema CampaignResponse#IsPaused
   */
  readonly isPaused?: boolean;

  /**
   * @schema CampaignResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema CampaignResponse#Limits
   */
  readonly limits?: CampaignLimits;

  /**
   * @schema CampaignResponse#MessageConfiguration
   */
  readonly messageConfiguration?: MessageConfiguration;

  /**
   * @schema CampaignResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CampaignResponse#Schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema CampaignResponse#SegmentId
   */
  readonly segmentId: string;

  /**
   * @schema CampaignResponse#SegmentVersion
   */
  readonly segmentVersion: number;

  /**
   * @schema CampaignResponse#State
   */
  readonly state?: CampaignState;

  /**
   * @schema CampaignResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CampaignResponse#TemplateConfiguration
   */
  readonly templateConfiguration?: TemplateConfiguration;

  /**
   * @schema CampaignResponse#TreatmentDescription
   */
  readonly treatmentDescription?: string;

  /**
   * @schema CampaignResponse#TreatmentName
   */
  readonly treatmentName?: string;

  /**
   * @schema CampaignResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema EmailTemplateRequest
 */
export interface EmailTemplateRequest {
  /**
   * @schema EmailTemplateRequest#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema EmailTemplateRequest#HtmlPart
   */
  readonly htmlPart?: string;

  /**
   * @schema EmailTemplateRequest#RecommenderId
   */
  readonly recommenderId?: string;

  /**
   * @schema EmailTemplateRequest#Subject
   */
  readonly subject?: string;

  /**
   * @schema EmailTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EmailTemplateRequest#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema EmailTemplateRequest#TextPart
   */
  readonly textPart?: string;

}

/**
 * @schema CreateTemplateMessageBody
 */
export interface CreateTemplateMessageBody {
  /**
   * @schema CreateTemplateMessageBody#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateTemplateMessageBody#Message
   */
  readonly message?: string;

  /**
   * @schema CreateTemplateMessageBody#RequestID
   */
  readonly requestId?: string;

}

/**
 * @schema ExportJobRequest
 */
export interface ExportJobRequest {
  /**
   * @schema ExportJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema ExportJobRequest#S3UrlPrefix
   */
  readonly s3UrlPrefix: string;

  /**
   * @schema ExportJobRequest#SegmentId
   */
  readonly segmentId?: string;

  /**
   * @schema ExportJobRequest#SegmentVersion
   */
  readonly segmentVersion?: number;

}

/**
 * @schema ExportJobResponse
 */
export interface ExportJobResponse {
  /**
   * @schema ExportJobResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ExportJobResponse#CompletedPieces
   */
  readonly completedPieces?: number;

  /**
   * @schema ExportJobResponse#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema ExportJobResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema ExportJobResponse#Definition
   */
  readonly definition: ExportJobResource;

  /**
   * @schema ExportJobResponse#FailedPieces
   */
  readonly failedPieces?: number;

  /**
   * @schema ExportJobResponse#Failures
   */
  readonly failures?: string[];

  /**
   * @schema ExportJobResponse#Id
   */
  readonly id: string;

  /**
   * @schema ExportJobResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema ExportJobResponse#TotalFailures
   */
  readonly totalFailures?: number;

  /**
   * @schema ExportJobResponse#TotalPieces
   */
  readonly totalPieces?: number;

  /**
   * @schema ExportJobResponse#TotalProcessed
   */
  readonly totalProcessed?: number;

  /**
   * @schema ExportJobResponse#Type
   */
  readonly type: string;

}

/**
 * @schema ImportJobRequest
 */
export interface ImportJobRequest {
  /**
   * @schema ImportJobRequest#DefineSegment
   */
  readonly defineSegment?: boolean;

  /**
   * @schema ImportJobRequest#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema ImportJobRequest#Format
   */
  readonly format: string;

  /**
   * @schema ImportJobRequest#RegisterEndpoints
   */
  readonly registerEndpoints?: boolean;

  /**
   * @schema ImportJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema ImportJobRequest#S3Url
   */
  readonly s3Url: string;

  /**
   * @schema ImportJobRequest#SegmentId
   */
  readonly segmentId?: string;

  /**
   * @schema ImportJobRequest#SegmentName
   */
  readonly segmentName?: string;

}

/**
 * @schema ImportJobResponse
 */
export interface ImportJobResponse {
  /**
   * @schema ImportJobResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ImportJobResponse#CompletedPieces
   */
  readonly completedPieces?: number;

  /**
   * @schema ImportJobResponse#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema ImportJobResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema ImportJobResponse#Definition
   */
  readonly definition: ImportJobResource;

  /**
   * @schema ImportJobResponse#FailedPieces
   */
  readonly failedPieces?: number;

  /**
   * @schema ImportJobResponse#Failures
   */
  readonly failures?: string[];

  /**
   * @schema ImportJobResponse#Id
   */
  readonly id: string;

  /**
   * @schema ImportJobResponse#JobStatus
   */
  readonly jobStatus: string;

  /**
   * @schema ImportJobResponse#TotalFailures
   */
  readonly totalFailures?: number;

  /**
   * @schema ImportJobResponse#TotalPieces
   */
  readonly totalPieces?: number;

  /**
   * @schema ImportJobResponse#TotalProcessed
   */
  readonly totalProcessed?: number;

  /**
   * @schema ImportJobResponse#Type
   */
  readonly type: string;

}

/**
 * @schema WriteJourneyRequest
 */
export interface WriteJourneyRequest {
  /**
   * @schema WriteJourneyRequest#Activities
   */
  readonly activities?: { [key: string]: Activity };

  /**
   * @schema WriteJourneyRequest#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema WriteJourneyRequest#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema WriteJourneyRequest#Limits
   */
  readonly limits?: JourneyLimits;

  /**
   * @schema WriteJourneyRequest#LocalTime
   */
  readonly localTime?: boolean;

  /**
   * @schema WriteJourneyRequest#Name
   */
  readonly name: string;

  /**
   * @schema WriteJourneyRequest#QuietTime
   */
  readonly quietTime?: QuietTime;

  /**
   * @schema WriteJourneyRequest#RefreshFrequency
   */
  readonly refreshFrequency?: string;

  /**
   * @schema WriteJourneyRequest#Schedule
   */
  readonly schedule?: JourneySchedule;

  /**
   * @schema WriteJourneyRequest#StartActivity
   */
  readonly startActivity?: string;

  /**
   * @schema WriteJourneyRequest#StartCondition
   */
  readonly startCondition?: StartCondition;

  /**
   * @schema WriteJourneyRequest#State
   */
  readonly state?: string;

}

/**
 * @schema JourneyResponse
 */
export interface JourneyResponse {
  /**
   * @schema JourneyResponse#Activities
   */
  readonly activities?: { [key: string]: Activity };

  /**
   * @schema JourneyResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema JourneyResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema JourneyResponse#Id
   */
  readonly id: string;

  /**
   * @schema JourneyResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema JourneyResponse#Limits
   */
  readonly limits?: JourneyLimits;

  /**
   * @schema JourneyResponse#LocalTime
   */
  readonly localTime?: boolean;

  /**
   * @schema JourneyResponse#Name
   */
  readonly name: string;

  /**
   * @schema JourneyResponse#QuietTime
   */
  readonly quietTime?: QuietTime;

  /**
   * @schema JourneyResponse#RefreshFrequency
   */
  readonly refreshFrequency?: string;

  /**
   * @schema JourneyResponse#Schedule
   */
  readonly schedule?: JourneySchedule;

  /**
   * @schema JourneyResponse#StartActivity
   */
  readonly startActivity?: string;

  /**
   * @schema JourneyResponse#StartCondition
   */
  readonly startCondition?: StartCondition;

  /**
   * @schema JourneyResponse#State
   */
  readonly state?: string;

  /**
   * @schema JourneyResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PushNotificationTemplateRequest
 */
export interface PushNotificationTemplateRequest {
  /**
   * @schema PushNotificationTemplateRequest#ADM
   */
  readonly adm?: AndroidPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateRequest#APNS
   */
  readonly apns?: ApnsPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateRequest#Baidu
   */
  readonly baidu?: AndroidPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateRequest#Default
   */
  readonly default?: DefaultPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateRequest#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema PushNotificationTemplateRequest#GCM
   */
  readonly gcm?: AndroidPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateRequest#RecommenderId
   */
  readonly recommenderId?: string;

  /**
   * @schema PushNotificationTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema PushNotificationTemplateRequest#TemplateDescription
   */
  readonly templateDescription?: string;

}

/**
 * @schema CreateRecommenderConfiguration
 */
export interface CreateRecommenderConfiguration {
  /**
   * @schema CreateRecommenderConfiguration#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema CreateRecommenderConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRecommenderConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema CreateRecommenderConfiguration#RecommendationProviderIdType
   */
  readonly recommendationProviderIdType?: string;

  /**
   * @schema CreateRecommenderConfiguration#RecommendationProviderRoleArn
   */
  readonly recommendationProviderRoleArn: string;

  /**
   * @schema CreateRecommenderConfiguration#RecommendationProviderUri
   */
  readonly recommendationProviderUri: string;

  /**
   * @schema CreateRecommenderConfiguration#RecommendationTransformerUri
   */
  readonly recommendationTransformerUri?: string;

  /**
   * @schema CreateRecommenderConfiguration#RecommendationsDisplayName
   */
  readonly recommendationsDisplayName?: string;

  /**
   * @schema CreateRecommenderConfiguration#RecommendationsPerMessage
   */
  readonly recommendationsPerMessage?: number;

}

/**
 * @schema RecommenderConfigurationResponse
 */
export interface RecommenderConfigurationResponse {
  /**
   * @schema RecommenderConfigurationResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema RecommenderConfigurationResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema RecommenderConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema RecommenderConfigurationResponse#Id
   */
  readonly id: string;

  /**
   * @schema RecommenderConfigurationResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema RecommenderConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema RecommenderConfigurationResponse#RecommendationProviderIdType
   */
  readonly recommendationProviderIdType?: string;

  /**
   * @schema RecommenderConfigurationResponse#RecommendationProviderRoleArn
   */
  readonly recommendationProviderRoleArn: string;

  /**
   * @schema RecommenderConfigurationResponse#RecommendationProviderUri
   */
  readonly recommendationProviderUri: string;

  /**
   * @schema RecommenderConfigurationResponse#RecommendationTransformerUri
   */
  readonly recommendationTransformerUri?: string;

  /**
   * @schema RecommenderConfigurationResponse#RecommendationsDisplayName
   */
  readonly recommendationsDisplayName?: string;

  /**
   * @schema RecommenderConfigurationResponse#RecommendationsPerMessage
   */
  readonly recommendationsPerMessage?: number;

}

/**
 * @schema WriteSegmentRequest
 */
export interface WriteSegmentRequest {
  /**
   * @schema WriteSegmentRequest#Dimensions
   */
  readonly dimensions?: SegmentDimensions;

  /**
   * @schema WriteSegmentRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WriteSegmentRequest#SegmentGroups
   */
  readonly segmentGroups?: SegmentGroupList;

  /**
   * @schema WriteSegmentRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SegmentResponse
 */
export interface SegmentResponse {
  /**
   * @schema SegmentResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema SegmentResponse#Arn
   */
  readonly arn: string;

  /**
   * @schema SegmentResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema SegmentResponse#Dimensions
   */
  readonly dimensions?: SegmentDimensions;

  /**
   * @schema SegmentResponse#Id
   */
  readonly id: string;

  /**
   * @schema SegmentResponse#ImportDefinition
   */
  readonly importDefinition?: SegmentImportResource;

  /**
   * @schema SegmentResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema SegmentResponse#Name
   */
  readonly name?: string;

  /**
   * @schema SegmentResponse#SegmentGroups
   */
  readonly segmentGroups?: SegmentGroupList;

  /**
   * @schema SegmentResponse#SegmentType
   */
  readonly segmentType: string;

  /**
   * @schema SegmentResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SegmentResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema SmsTemplateRequest
 */
export interface SmsTemplateRequest {
  /**
   * @schema SmsTemplateRequest#Body
   */
  readonly body?: string;

  /**
   * @schema SmsTemplateRequest#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema SmsTemplateRequest#RecommenderId
   */
  readonly recommenderId?: string;

  /**
   * @schema SmsTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SmsTemplateRequest#TemplateDescription
   */
  readonly templateDescription?: string;

}

/**
 * @schema VoiceTemplateRequest
 */
export interface VoiceTemplateRequest {
  /**
   * @schema VoiceTemplateRequest#Body
   */
  readonly body?: string;

  /**
   * @schema VoiceTemplateRequest#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema VoiceTemplateRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema VoiceTemplateRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema VoiceTemplateRequest#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema VoiceTemplateRequest#VoiceId
   */
  readonly voiceId?: string;

}

/**
 * @schema AdmChannelResponse
 */
export interface AdmChannelResponse {
  /**
   * @schema AdmChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema AdmChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema AdmChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AdmChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema AdmChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema AdmChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema AdmChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema AdmChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema AdmChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema AdmChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema ApnsChannelResponse
 */
export interface ApnsChannelResponse {
  /**
   * @schema ApnsChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ApnsChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ApnsChannelResponse#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema ApnsChannelResponse#HasTokenKey
   */
  readonly hasTokenKey?: boolean;

  /**
   * @schema ApnsChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ApnsChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema ApnsChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema ApnsChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ApnsChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema ApnsChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema ApnsSandboxChannelResponse
 */
export interface ApnsSandboxChannelResponse {
  /**
   * @schema ApnsSandboxChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ApnsSandboxChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ApnsSandboxChannelResponse#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsSandboxChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsSandboxChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema ApnsSandboxChannelResponse#HasTokenKey
   */
  readonly hasTokenKey?: boolean;

  /**
   * @schema ApnsSandboxChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ApnsSandboxChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema ApnsSandboxChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema ApnsSandboxChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ApnsSandboxChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema ApnsSandboxChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema ApnsVoipChannelResponse
 */
export interface ApnsVoipChannelResponse {
  /**
   * @schema ApnsVoipChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ApnsVoipChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ApnsVoipChannelResponse#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsVoipChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsVoipChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema ApnsVoipChannelResponse#HasTokenKey
   */
  readonly hasTokenKey?: boolean;

  /**
   * @schema ApnsVoipChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ApnsVoipChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema ApnsVoipChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema ApnsVoipChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ApnsVoipChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema ApnsVoipChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema ApnsVoipSandboxChannelResponse
 */
export interface ApnsVoipSandboxChannelResponse {
  /**
   * @schema ApnsVoipSandboxChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ApnsVoipSandboxChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ApnsVoipSandboxChannelResponse#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsVoipSandboxChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsVoipSandboxChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema ApnsVoipSandboxChannelResponse#HasTokenKey
   */
  readonly hasTokenKey?: boolean;

  /**
   * @schema ApnsVoipSandboxChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ApnsVoipSandboxChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema ApnsVoipSandboxChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema ApnsVoipSandboxChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ApnsVoipSandboxChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema ApnsVoipSandboxChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema BaiduChannelResponse
 */
export interface BaiduChannelResponse {
  /**
   * @schema BaiduChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema BaiduChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BaiduChannelResponse#Credential
   */
  readonly credential: string;

  /**
   * @schema BaiduChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema BaiduChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema BaiduChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema BaiduChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema BaiduChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema BaiduChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema BaiduChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema BaiduChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema EmailChannelResponse
 */
export interface EmailChannelResponse {
  /**
   * @schema EmailChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema EmailChannelResponse#ConfigurationSet
   */
  readonly configurationSet?: string;

  /**
   * @schema EmailChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema EmailChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EmailChannelResponse#FromAddress
   */
  readonly fromAddress?: string;

  /**
   * @schema EmailChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema EmailChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema EmailChannelResponse#Identity
   */
  readonly identity?: string;

  /**
   * @schema EmailChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema EmailChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema EmailChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema EmailChannelResponse#MessagesPerSecond
   */
  readonly messagesPerSecond?: number;

  /**
   * @schema EmailChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema EmailChannelResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EmailChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema MessageBody
 */
export interface MessageBody {
  /**
   * @schema MessageBody#Message
   */
  readonly message?: string;

  /**
   * @schema MessageBody#RequestID
   */
  readonly requestId?: string;

}

/**
 * @schema EndpointResponse
 */
export interface EndpointResponse {
  /**
   * @schema EndpointResponse#Address
   */
  readonly address?: string;

  /**
   * @schema EndpointResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema EndpointResponse#Attributes
   */
  readonly attributes?: { [key: string]: string[] };

  /**
   * @schema EndpointResponse#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema EndpointResponse#CohortId
   */
  readonly cohortId?: string;

  /**
   * @schema EndpointResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema EndpointResponse#Demographic
   */
  readonly demographic?: EndpointDemographic;

  /**
   * @schema EndpointResponse#EffectiveDate
   */
  readonly effectiveDate?: string;

  /**
   * @schema EndpointResponse#EndpointStatus
   */
  readonly endpointStatus?: string;

  /**
   * @schema EndpointResponse#Id
   */
  readonly id?: string;

  /**
   * @schema EndpointResponse#Location
   */
  readonly location?: EndpointLocation;

  /**
   * @schema EndpointResponse#Metrics
   */
  readonly metrics?: { [key: string]: number };

  /**
   * @schema EndpointResponse#OptOut
   */
  readonly optOut?: string;

  /**
   * @schema EndpointResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema EndpointResponse#User
   */
  readonly user?: EndpointUser;

}

/**
 * @schema EventStream
 */
export interface EventStream {
  /**
   * @schema EventStream#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema EventStream#DestinationStreamArn
   */
  readonly destinationStreamArn: string;

  /**
   * @schema EventStream#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema EventStream#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema EventStream#LastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema EventStream#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema GcmChannelResponse
 */
export interface GcmChannelResponse {
  /**
   * @schema GcmChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema GcmChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GcmChannelResponse#Credential
   */
  readonly credential: string;

  /**
   * @schema GcmChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GcmChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema GcmChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema GcmChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema GcmChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema GcmChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema GcmChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema GcmChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema SmsChannelResponse
 */
export interface SmsChannelResponse {
  /**
   * @schema SmsChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema SmsChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SmsChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SmsChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema SmsChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema SmsChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema SmsChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema SmsChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema SmsChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema SmsChannelResponse#PromotionalMessagesPerSecond
   */
  readonly promotionalMessagesPerSecond?: number;

  /**
   * @schema SmsChannelResponse#SenderId
   */
  readonly senderId?: string;

  /**
   * @schema SmsChannelResponse#ShortCode
   */
  readonly shortCode?: string;

  /**
   * @schema SmsChannelResponse#TransactionalMessagesPerSecond
   */
  readonly transactionalMessagesPerSecond?: number;

  /**
   * @schema SmsChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema EndpointsResponse
 */
export interface EndpointsResponse {
  /**
   * @schema EndpointsResponse#Item
   */
  readonly item: EndpointResponse[];

}

/**
 * @schema VoiceChannelResponse
 */
export interface VoiceChannelResponse {
  /**
   * @schema VoiceChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema VoiceChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema VoiceChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema VoiceChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema VoiceChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema VoiceChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema VoiceChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema VoiceChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema VoiceChannelResponse#Platform
   */
  readonly platform: string;

  /**
   * @schema VoiceChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema ApplicationDateRangeKpiResponse
 */
export interface ApplicationDateRangeKpiResponse {
  /**
   * @schema ApplicationDateRangeKpiResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ApplicationDateRangeKpiResponse#EndTime
   */
  readonly endTime: string;

  /**
   * @schema ApplicationDateRangeKpiResponse#KpiName
   */
  readonly kpiName: string;

  /**
   * @schema ApplicationDateRangeKpiResponse#KpiResult
   */
  readonly kpiResult: BaseKpiResult;

  /**
   * @schema ApplicationDateRangeKpiResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ApplicationDateRangeKpiResponse#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema ApplicationSettingsResource
 */
export interface ApplicationSettingsResource {
  /**
   * @schema ApplicationSettingsResource#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ApplicationSettingsResource#CampaignHook
   */
  readonly campaignHook?: CampaignHook;

  /**
   * @schema ApplicationSettingsResource#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ApplicationSettingsResource#Limits
   */
  readonly limits?: CampaignLimits;

  /**
   * @schema ApplicationSettingsResource#QuietTime
   */
  readonly quietTime?: QuietTime;

}

/**
 * @schema ApplicationsResponse
 */
export interface ApplicationsResponse {
  /**
   * @schema ApplicationsResponse#Item
   */
  readonly item?: ApplicationResponse[];

  /**
   * @schema ApplicationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ActivitiesResponse
 */
export interface ActivitiesResponse {
  /**
   * @schema ActivitiesResponse#Item
   */
  readonly item: ActivityResponse[];

  /**
   * @schema ActivitiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CampaignDateRangeKpiResponse
 */
export interface CampaignDateRangeKpiResponse {
  /**
   * @schema CampaignDateRangeKpiResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema CampaignDateRangeKpiResponse#CampaignId
   */
  readonly campaignId: string;

  /**
   * @schema CampaignDateRangeKpiResponse#EndTime
   */
  readonly endTime: string;

  /**
   * @schema CampaignDateRangeKpiResponse#KpiName
   */
  readonly kpiName: string;

  /**
   * @schema CampaignDateRangeKpiResponse#KpiResult
   */
  readonly kpiResult: BaseKpiResult;

  /**
   * @schema CampaignDateRangeKpiResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CampaignDateRangeKpiResponse#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema CampaignsResponse
 */
export interface CampaignsResponse {
  /**
   * @schema CampaignsResponse#Item
   */
  readonly item: CampaignResponse[];

  /**
   * @schema CampaignsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ChannelsResponse
 */
export interface ChannelsResponse {
  /**
   * @schema ChannelsResponse#Channels
   */
  readonly channels: { [key: string]: ChannelResponse };

}

/**
 * @schema EmailTemplateResponse
 */
export interface EmailTemplateResponse {
  /**
   * @schema EmailTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema EmailTemplateResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema EmailTemplateResponse#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema EmailTemplateResponse#HtmlPart
   */
  readonly htmlPart?: string;

  /**
   * @schema EmailTemplateResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema EmailTemplateResponse#RecommenderId
   */
  readonly recommenderId?: string;

  /**
   * @schema EmailTemplateResponse#Subject
   */
  readonly subject?: string;

  /**
   * @schema EmailTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EmailTemplateResponse#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema EmailTemplateResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema EmailTemplateResponse#TemplateType
   */
  readonly templateType: string;

  /**
   * @schema EmailTemplateResponse#TextPart
   */
  readonly textPart?: string;

  /**
   * @schema EmailTemplateResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema ExportJobsResponse
 */
export interface ExportJobsResponse {
  /**
   * @schema ExportJobsResponse#Item
   */
  readonly item: ExportJobResponse[];

  /**
   * @schema ExportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ImportJobsResponse
 */
export interface ImportJobsResponse {
  /**
   * @schema ImportJobsResponse#Item
   */
  readonly item: ImportJobResponse[];

  /**
   * @schema ImportJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema JourneyDateRangeKpiResponse
 */
export interface JourneyDateRangeKpiResponse {
  /**
   * @schema JourneyDateRangeKpiResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema JourneyDateRangeKpiResponse#EndTime
   */
  readonly endTime: string;

  /**
   * @schema JourneyDateRangeKpiResponse#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema JourneyDateRangeKpiResponse#KpiName
   */
  readonly kpiName: string;

  /**
   * @schema JourneyDateRangeKpiResponse#KpiResult
   */
  readonly kpiResult: BaseKpiResult;

  /**
   * @schema JourneyDateRangeKpiResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema JourneyDateRangeKpiResponse#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema JourneyExecutionActivityMetricsResponse
 */
export interface JourneyExecutionActivityMetricsResponse {
  /**
   * @schema JourneyExecutionActivityMetricsResponse#ActivityType
   */
  readonly activityType: string;

  /**
   * @schema JourneyExecutionActivityMetricsResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema JourneyExecutionActivityMetricsResponse#JourneyActivityId
   */
  readonly journeyActivityId: string;

  /**
   * @schema JourneyExecutionActivityMetricsResponse#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema JourneyExecutionActivityMetricsResponse#LastEvaluatedTime
   */
  readonly lastEvaluatedTime: string;

  /**
   * @schema JourneyExecutionActivityMetricsResponse#Metrics
   */
  readonly metrics: { [key: string]: string };

}

/**
 * @schema JourneyExecutionMetricsResponse
 */
export interface JourneyExecutionMetricsResponse {
  /**
   * @schema JourneyExecutionMetricsResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema JourneyExecutionMetricsResponse#JourneyId
   */
  readonly journeyId: string;

  /**
   * @schema JourneyExecutionMetricsResponse#LastEvaluatedTime
   */
  readonly lastEvaluatedTime: string;

  /**
   * @schema JourneyExecutionMetricsResponse#Metrics
   */
  readonly metrics: { [key: string]: string };

}

/**
 * @schema PushNotificationTemplateResponse
 */
export interface PushNotificationTemplateResponse {
  /**
   * @schema PushNotificationTemplateResponse#ADM
   */
  readonly adm?: AndroidPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateResponse#APNS
   */
  readonly apns?: ApnsPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema PushNotificationTemplateResponse#Baidu
   */
  readonly baidu?: AndroidPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema PushNotificationTemplateResponse#Default
   */
  readonly default?: DefaultPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateResponse#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema PushNotificationTemplateResponse#GCM
   */
  readonly gcm?: AndroidPushNotificationTemplate;

  /**
   * @schema PushNotificationTemplateResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema PushNotificationTemplateResponse#RecommenderId
   */
  readonly recommenderId?: string;

  /**
   * @schema PushNotificationTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema PushNotificationTemplateResponse#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema PushNotificationTemplateResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema PushNotificationTemplateResponse#TemplateType
   */
  readonly templateType: string;

  /**
   * @schema PushNotificationTemplateResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema ListRecommenderConfigurationsResponse
 */
export interface ListRecommenderConfigurationsResponse {
  /**
   * @schema ListRecommenderConfigurationsResponse#Item
   */
  readonly item: RecommenderConfigurationResponse[];

  /**
   * @schema ListRecommenderConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SegmentsResponse
 */
export interface SegmentsResponse {
  /**
   * @schema SegmentsResponse#Item
   */
  readonly item: SegmentResponse[];

  /**
   * @schema SegmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SmsTemplateResponse
 */
export interface SmsTemplateResponse {
  /**
   * @schema SmsTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema SmsTemplateResponse#Body
   */
  readonly body?: string;

  /**
   * @schema SmsTemplateResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema SmsTemplateResponse#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema SmsTemplateResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema SmsTemplateResponse#RecommenderId
   */
  readonly recommenderId?: string;

  /**
   * @schema SmsTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SmsTemplateResponse#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema SmsTemplateResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema SmsTemplateResponse#TemplateType
   */
  readonly templateType: string;

  /**
   * @schema SmsTemplateResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema VoiceTemplateResponse
 */
export interface VoiceTemplateResponse {
  /**
   * @schema VoiceTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema VoiceTemplateResponse#Body
   */
  readonly body?: string;

  /**
   * @schema VoiceTemplateResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema VoiceTemplateResponse#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema VoiceTemplateResponse#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema VoiceTemplateResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema VoiceTemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema VoiceTemplateResponse#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema VoiceTemplateResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema VoiceTemplateResponse#TemplateType
   */
  readonly templateType: string;

  /**
   * @schema VoiceTemplateResponse#Version
   */
  readonly version?: string;

  /**
   * @schema VoiceTemplateResponse#VoiceId
   */
  readonly voiceId?: string;

}

/**
 * @schema JourneysResponse
 */
export interface JourneysResponse {
  /**
   * @schema JourneysResponse#Item
   */
  readonly item: JourneyResponse[];

  /**
   * @schema JourneysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TagsModel
 */
export interface TagsModel {
  /**
   * @schema TagsModel#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TemplateVersionsResponse
 */
export interface TemplateVersionsResponse {
  /**
   * @schema TemplateVersionsResponse#Item
   */
  readonly item: TemplateVersionResponse[];

  /**
   * @schema TemplateVersionsResponse#Message
   */
  readonly message?: string;

  /**
   * @schema TemplateVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TemplateVersionsResponse#RequestID
   */
  readonly requestId?: string;

}

/**
 * @schema TemplatesResponse
 */
export interface TemplatesResponse {
  /**
   * @schema TemplatesResponse#Item
   */
  readonly item: TemplateResponse[];

  /**
   * @schema TemplatesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema NumberValidateRequest
 */
export interface NumberValidateRequest {
  /**
   * @schema NumberValidateRequest#IsoCountryCode
   */
  readonly isoCountryCode?: string;

  /**
   * @schema NumberValidateRequest#PhoneNumber
   */
  readonly phoneNumber?: string;

}

/**
 * @schema NumberValidateResponse
 */
export interface NumberValidateResponse {
  /**
   * @schema NumberValidateResponse#Carrier
   */
  readonly carrier?: string;

  /**
   * @schema NumberValidateResponse#City
   */
  readonly city?: string;

  /**
   * @schema NumberValidateResponse#CleansedPhoneNumberE164
   */
  readonly cleansedPhoneNumberE164?: string;

  /**
   * @schema NumberValidateResponse#CleansedPhoneNumberNational
   */
  readonly cleansedPhoneNumberNational?: string;

  /**
   * @schema NumberValidateResponse#Country
   */
  readonly country?: string;

  /**
   * @schema NumberValidateResponse#CountryCodeIso2
   */
  readonly countryCodeIso2?: string;

  /**
   * @schema NumberValidateResponse#CountryCodeNumeric
   */
  readonly countryCodeNumeric?: string;

  /**
   * @schema NumberValidateResponse#County
   */
  readonly county?: string;

  /**
   * @schema NumberValidateResponse#OriginalCountryCodeIso2
   */
  readonly originalCountryCodeIso2?: string;

  /**
   * @schema NumberValidateResponse#OriginalPhoneNumber
   */
  readonly originalPhoneNumber?: string;

  /**
   * @schema NumberValidateResponse#PhoneType
   */
  readonly phoneType?: string;

  /**
   * @schema NumberValidateResponse#PhoneTypeCode
   */
  readonly phoneTypeCode?: number;

  /**
   * @schema NumberValidateResponse#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema NumberValidateResponse#ZipCode
   */
  readonly zipCode?: string;

}

/**
 * @schema WriteEventStream
 */
export interface WriteEventStream {
  /**
   * @schema WriteEventStream#DestinationStreamArn
   */
  readonly destinationStreamArn: string;

  /**
   * @schema WriteEventStream#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema EventsRequest
 */
export interface EventsRequest {
  /**
   * @schema EventsRequest#BatchItem
   */
  readonly batchItem: { [key: string]: EventsBatch };

}

/**
 * @schema EventsResponse
 */
export interface EventsResponse {
  /**
   * @schema EventsResponse#Results
   */
  readonly results?: { [key: string]: ItemResponse };

}

/**
 * @schema UpdateAttributesRequest
 */
export interface UpdateAttributesRequest {
  /**
   * @schema UpdateAttributesRequest#Blacklist
   */
  readonly blacklist?: string[];

}

/**
 * @schema AttributesResource
 */
export interface AttributesResource {
  /**
   * @schema AttributesResource#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema AttributesResource#AttributeType
   */
  readonly attributeType: string;

  /**
   * @schema AttributesResource#Attributes
   */
  readonly attributes?: string[];

}

/**
 * @schema MessageRequest
 */
export interface MessageRequest {
  /**
   * @schema MessageRequest#Addresses
   */
  readonly addresses?: { [key: string]: AddressConfiguration };

  /**
   * @schema MessageRequest#Context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema MessageRequest#Endpoints
   */
  readonly endpoints?: { [key: string]: EndpointSendConfiguration };

  /**
   * @schema MessageRequest#MessageConfiguration
   */
  readonly messageConfiguration: DirectMessageConfiguration;

  /**
   * @schema MessageRequest#TemplateConfiguration
   */
  readonly templateConfiguration?: TemplateConfiguration;

  /**
   * @schema MessageRequest#TraceId
   */
  readonly traceId?: string;

}

/**
 * @schema MessageResponse
 */
export interface MessageResponse {
  /**
   * @schema MessageResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema MessageResponse#EndpointResult
   */
  readonly endpointResult?: { [key: string]: EndpointMessageResult };

  /**
   * @schema MessageResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema MessageResponse#Result
   */
  readonly result?: { [key: string]: MessageResult };

}

/**
 * @schema SendUsersMessageRequest
 */
export interface SendUsersMessageRequest {
  /**
   * @schema SendUsersMessageRequest#Context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema SendUsersMessageRequest#MessageConfiguration
   */
  readonly messageConfiguration: DirectMessageConfiguration;

  /**
   * @schema SendUsersMessageRequest#TemplateConfiguration
   */
  readonly templateConfiguration?: TemplateConfiguration;

  /**
   * @schema SendUsersMessageRequest#TraceId
   */
  readonly traceId?: string;

  /**
   * @schema SendUsersMessageRequest#Users
   */
  readonly users: { [key: string]: EndpointSendConfiguration };

}

/**
 * @schema SendUsersMessageResponse
 */
export interface SendUsersMessageResponse {
  /**
   * @schema SendUsersMessageResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema SendUsersMessageResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema SendUsersMessageResponse#Result
   */
  readonly result?: { [key: string]: { [key: string]: EndpointMessageResult } };

}

/**
 * @schema AdmChannelRequest
 */
export interface AdmChannelRequest {
  /**
   * @schema AdmChannelRequest#ClientId
   */
  readonly clientId: string;

  /**
   * @schema AdmChannelRequest#ClientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AdmChannelRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema ApnsChannelRequest
 */
export interface ApnsChannelRequest {
  /**
   * @schema ApnsChannelRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema ApnsChannelRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema ApnsChannelRequest#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsChannelRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsChannelRequest#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema ApnsChannelRequest#TeamId
   */
  readonly teamId?: string;

  /**
   * @schema ApnsChannelRequest#TokenKey
   */
  readonly tokenKey?: string;

  /**
   * @schema ApnsChannelRequest#TokenKeyId
   */
  readonly tokenKeyId?: string;

}

/**
 * @schema ApnsSandboxChannelRequest
 */
export interface ApnsSandboxChannelRequest {
  /**
   * @schema ApnsSandboxChannelRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema ApnsSandboxChannelRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema ApnsSandboxChannelRequest#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsSandboxChannelRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsSandboxChannelRequest#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema ApnsSandboxChannelRequest#TeamId
   */
  readonly teamId?: string;

  /**
   * @schema ApnsSandboxChannelRequest#TokenKey
   */
  readonly tokenKey?: string;

  /**
   * @schema ApnsSandboxChannelRequest#TokenKeyId
   */
  readonly tokenKeyId?: string;

}

/**
 * @schema ApnsVoipChannelRequest
 */
export interface ApnsVoipChannelRequest {
  /**
   * @schema ApnsVoipChannelRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema ApnsVoipChannelRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema ApnsVoipChannelRequest#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsVoipChannelRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsVoipChannelRequest#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema ApnsVoipChannelRequest#TeamId
   */
  readonly teamId?: string;

  /**
   * @schema ApnsVoipChannelRequest#TokenKey
   */
  readonly tokenKey?: string;

  /**
   * @schema ApnsVoipChannelRequest#TokenKeyId
   */
  readonly tokenKeyId?: string;

}

/**
 * @schema ApnsVoipSandboxChannelRequest
 */
export interface ApnsVoipSandboxChannelRequest {
  /**
   * @schema ApnsVoipSandboxChannelRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema ApnsVoipSandboxChannelRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema ApnsVoipSandboxChannelRequest#DefaultAuthenticationMethod
   */
  readonly defaultAuthenticationMethod?: string;

  /**
   * @schema ApnsVoipSandboxChannelRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ApnsVoipSandboxChannelRequest#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema ApnsVoipSandboxChannelRequest#TeamId
   */
  readonly teamId?: string;

  /**
   * @schema ApnsVoipSandboxChannelRequest#TokenKey
   */
  readonly tokenKey?: string;

  /**
   * @schema ApnsVoipSandboxChannelRequest#TokenKeyId
   */
  readonly tokenKeyId?: string;

}

/**
 * @schema WriteApplicationSettingsRequest
 */
export interface WriteApplicationSettingsRequest {
  /**
   * @schema WriteApplicationSettingsRequest#CampaignHook
   */
  readonly campaignHook?: CampaignHook;

  /**
   * @schema WriteApplicationSettingsRequest#CloudWatchMetricsEnabled
   */
  readonly cloudWatchMetricsEnabled?: boolean;

  /**
   * @schema WriteApplicationSettingsRequest#EventTaggingEnabled
   */
  readonly eventTaggingEnabled?: boolean;

  /**
   * @schema WriteApplicationSettingsRequest#Limits
   */
  readonly limits?: CampaignLimits;

  /**
   * @schema WriteApplicationSettingsRequest#QuietTime
   */
  readonly quietTime?: QuietTime;

}

/**
 * @schema BaiduChannelRequest
 */
export interface BaiduChannelRequest {
  /**
   * @schema BaiduChannelRequest#ApiKey
   */
  readonly apiKey: string;

  /**
   * @schema BaiduChannelRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema BaiduChannelRequest#SecretKey
   */
  readonly secretKey: string;

}

/**
 * @schema EmailChannelRequest
 */
export interface EmailChannelRequest {
  /**
   * @schema EmailChannelRequest#ConfigurationSet
   */
  readonly configurationSet?: string;

  /**
   * @schema EmailChannelRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema EmailChannelRequest#FromAddress
   */
  readonly fromAddress: string;

  /**
   * @schema EmailChannelRequest#Identity
   */
  readonly identity: string;

  /**
   * @schema EmailChannelRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema EndpointRequest
 */
export interface EndpointRequest {
  /**
   * @schema EndpointRequest#Address
   */
  readonly address?: string;

  /**
   * @schema EndpointRequest#Attributes
   */
  readonly attributes?: { [key: string]: string[] };

  /**
   * @schema EndpointRequest#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema EndpointRequest#Demographic
   */
  readonly demographic?: EndpointDemographic;

  /**
   * @schema EndpointRequest#EffectiveDate
   */
  readonly effectiveDate?: string;

  /**
   * @schema EndpointRequest#EndpointStatus
   */
  readonly endpointStatus?: string;

  /**
   * @schema EndpointRequest#Location
   */
  readonly location?: EndpointLocation;

  /**
   * @schema EndpointRequest#Metrics
   */
  readonly metrics?: { [key: string]: number };

  /**
   * @schema EndpointRequest#OptOut
   */
  readonly optOut?: string;

  /**
   * @schema EndpointRequest#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema EndpointRequest#User
   */
  readonly user?: EndpointUser;

}

/**
 * @schema EndpointBatchRequest
 */
export interface EndpointBatchRequest {
  /**
   * @schema EndpointBatchRequest#Item
   */
  readonly item: EndpointBatchItem[];

}

/**
 * @schema GcmChannelRequest
 */
export interface GcmChannelRequest {
  /**
   * @schema GcmChannelRequest#ApiKey
   */
  readonly apiKey: string;

  /**
   * @schema GcmChannelRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema JourneyStateRequest
 */
export interface JourneyStateRequest {
  /**
   * @schema JourneyStateRequest#State
   */
  readonly state?: string;

}

/**
 * @schema UpdateRecommenderConfiguration
 */
export interface UpdateRecommenderConfiguration {
  /**
   * @schema UpdateRecommenderConfiguration#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema UpdateRecommenderConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRecommenderConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateRecommenderConfiguration#RecommendationProviderIdType
   */
  readonly recommendationProviderIdType?: string;

  /**
   * @schema UpdateRecommenderConfiguration#RecommendationProviderRoleArn
   */
  readonly recommendationProviderRoleArn: string;

  /**
   * @schema UpdateRecommenderConfiguration#RecommendationProviderUri
   */
  readonly recommendationProviderUri: string;

  /**
   * @schema UpdateRecommenderConfiguration#RecommendationTransformerUri
   */
  readonly recommendationTransformerUri?: string;

  /**
   * @schema UpdateRecommenderConfiguration#RecommendationsDisplayName
   */
  readonly recommendationsDisplayName?: string;

  /**
   * @schema UpdateRecommenderConfiguration#RecommendationsPerMessage
   */
  readonly recommendationsPerMessage?: number;

}

/**
 * @schema SmsChannelRequest
 */
export interface SmsChannelRequest {
  /**
   * @schema SmsChannelRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema SmsChannelRequest#SenderId
   */
  readonly senderId?: string;

  /**
   * @schema SmsChannelRequest#ShortCode
   */
  readonly shortCode?: string;

}

/**
 * @schema TemplateActiveVersionRequest
 */
export interface TemplateActiveVersionRequest {
  /**
   * @schema TemplateActiveVersionRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema VoiceChannelRequest
 */
export interface VoiceChannelRequest {
  /**
   * @schema VoiceChannelRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema WriteTreatmentResource
 */
export interface WriteTreatmentResource {
  /**
   * @schema WriteTreatmentResource#CustomDeliveryConfiguration
   */
  readonly customDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @schema WriteTreatmentResource#MessageConfiguration
   */
  readonly messageConfiguration?: MessageConfiguration;

  /**
   * @schema WriteTreatmentResource#Schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema WriteTreatmentResource#SizePercent
   */
  readonly sizePercent: number;

  /**
   * @schema WriteTreatmentResource#TemplateConfiguration
   */
  readonly templateConfiguration?: TemplateConfiguration;

  /**
   * @schema WriteTreatmentResource#TreatmentDescription
   */
  readonly treatmentDescription?: string;

  /**
   * @schema WriteTreatmentResource#TreatmentName
   */
  readonly treatmentName?: string;

}

/**
 * @schema CustomDeliveryConfiguration
 */
export interface CustomDeliveryConfiguration {
  /**
   * @schema CustomDeliveryConfiguration#DeliveryUri
   */
  readonly deliveryUri: string;

  /**
   * @schema CustomDeliveryConfiguration#EndpointTypes
   */
  readonly endpointTypes?: string[];

}

/**
 * @schema CampaignHook
 */
export interface CampaignHook {
  /**
   * @schema CampaignHook#LambdaFunctionName
   */
  readonly lambdaFunctionName?: string;

  /**
   * @schema CampaignHook#Mode
   */
  readonly mode?: string;

  /**
   * @schema CampaignHook#WebUrl
   */
  readonly webUrl?: string;

}

/**
 * @schema CampaignLimits
 */
export interface CampaignLimits {
  /**
   * @schema CampaignLimits#Daily
   */
  readonly daily?: number;

  /**
   * @schema CampaignLimits#MaximumDuration
   */
  readonly maximumDuration?: number;

  /**
   * @schema CampaignLimits#MessagesPerSecond
   */
  readonly messagesPerSecond?: number;

  /**
   * @schema CampaignLimits#Total
   */
  readonly total?: number;

}

/**
 * @schema MessageConfiguration
 */
export interface MessageConfiguration {
  /**
   * @schema MessageConfiguration#ADMMessage
   */
  readonly admMessage?: Message;

  /**
   * @schema MessageConfiguration#APNSMessage
   */
  readonly apnsMessage?: Message;

  /**
   * @schema MessageConfiguration#BaiduMessage
   */
  readonly baiduMessage?: Message;

  /**
   * @schema MessageConfiguration#CustomMessage
   */
  readonly customMessage?: CampaignCustomMessage;

  /**
   * @schema MessageConfiguration#DefaultMessage
   */
  readonly defaultMessage?: Message;

  /**
   * @schema MessageConfiguration#EmailMessage
   */
  readonly emailMessage?: CampaignEmailMessage;

  /**
   * @schema MessageConfiguration#GCMMessage
   */
  readonly gcmMessage?: Message;

  /**
   * @schema MessageConfiguration#SMSMessage
   */
  readonly smsMessage?: CampaignSmsMessage;

}

/**
 * @schema Schedule
 */
export interface Schedule {
  /**
   * @schema Schedule#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Schedule#EventFilter
   */
  readonly eventFilter?: CampaignEventFilter;

  /**
   * @schema Schedule#Frequency
   */
  readonly frequency?: string;

  /**
   * @schema Schedule#IsLocalTime
   */
  readonly isLocalTime?: boolean;

  /**
   * @schema Schedule#QuietTime
   */
  readonly quietTime?: QuietTime;

  /**
   * @schema Schedule#StartTime
   */
  readonly startTime: string;

  /**
   * @schema Schedule#Timezone
   */
  readonly timezone?: string;

}

/**
 * @schema TemplateConfiguration
 */
export interface TemplateConfiguration {
  /**
   * @schema TemplateConfiguration#EmailTemplate
   */
  readonly emailTemplate?: Template;

  /**
   * @schema TemplateConfiguration#PushTemplate
   */
  readonly pushTemplate?: Template;

  /**
   * @schema TemplateConfiguration#SMSTemplate
   */
  readonly smsTemplate?: Template;

  /**
   * @schema TemplateConfiguration#VoiceTemplate
   */
  readonly voiceTemplate?: Template;

}

/**
 * @schema TreatmentResource
 */
export interface TreatmentResource {
  /**
   * @schema TreatmentResource#CustomDeliveryConfiguration
   */
  readonly customDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @schema TreatmentResource#Id
   */
  readonly id: string;

  /**
   * @schema TreatmentResource#MessageConfiguration
   */
  readonly messageConfiguration?: MessageConfiguration;

  /**
   * @schema TreatmentResource#Schedule
   */
  readonly schedule?: Schedule;

  /**
   * @schema TreatmentResource#SizePercent
   */
  readonly sizePercent: number;

  /**
   * @schema TreatmentResource#State
   */
  readonly state?: CampaignState;

  /**
   * @schema TreatmentResource#TemplateConfiguration
   */
  readonly templateConfiguration?: TemplateConfiguration;

  /**
   * @schema TreatmentResource#TreatmentDescription
   */
  readonly treatmentDescription?: string;

  /**
   * @schema TreatmentResource#TreatmentName
   */
  readonly treatmentName?: string;

}

/**
 * @schema CampaignState
 */
export interface CampaignState {
  /**
   * @schema CampaignState#CampaignStatus
   */
  readonly campaignStatus?: string;

}

/**
 * @schema ExportJobResource
 */
export interface ExportJobResource {
  /**
   * @schema ExportJobResource#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema ExportJobResource#S3UrlPrefix
   */
  readonly s3UrlPrefix: string;

  /**
   * @schema ExportJobResource#SegmentId
   */
  readonly segmentId?: string;

  /**
   * @schema ExportJobResource#SegmentVersion
   */
  readonly segmentVersion?: number;

}

/**
 * @schema ImportJobResource
 */
export interface ImportJobResource {
  /**
   * @schema ImportJobResource#DefineSegment
   */
  readonly defineSegment?: boolean;

  /**
   * @schema ImportJobResource#ExternalId
   */
  readonly externalId?: string;

  /**
   * @schema ImportJobResource#Format
   */
  readonly format: string;

  /**
   * @schema ImportJobResource#RegisterEndpoints
   */
  readonly registerEndpoints?: boolean;

  /**
   * @schema ImportJobResource#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema ImportJobResource#S3Url
   */
  readonly s3Url: string;

  /**
   * @schema ImportJobResource#SegmentId
   */
  readonly segmentId?: string;

  /**
   * @schema ImportJobResource#SegmentName
   */
  readonly segmentName?: string;

}

/**
 * @schema Activity
 */
export interface Activity {
  /**
   * @schema Activity#CUSTOM
   */
  readonly custom?: CustomMessageActivity;

  /**
   * @schema Activity#ConditionalSplit
   */
  readonly conditionalSplit?: ConditionalSplitActivity;

  /**
   * @schema Activity#Description
   */
  readonly description?: string;

  /**
   * @schema Activity#EMAIL
   */
  readonly email?: EmailMessageActivity;

  /**
   * @schema Activity#Holdout
   */
  readonly holdout?: HoldoutActivity;

  /**
   * @schema Activity#MultiCondition
   */
  readonly multiCondition?: MultiConditionalSplitActivity;

  /**
   * @schema Activity#PUSH
   */
  readonly push?: PushMessageActivity;

  /**
   * @schema Activity#RandomSplit
   */
  readonly randomSplit?: RandomSplitActivity;

  /**
   * @schema Activity#SMS
   */
  readonly sms?: SmsMessageActivity;

  /**
   * @schema Activity#Wait
   */
  readonly wait?: WaitActivity;

}

/**
 * @schema JourneyLimits
 */
export interface JourneyLimits {
  /**
   * @schema JourneyLimits#DailyCap
   */
  readonly dailyCap?: number;

  /**
   * @schema JourneyLimits#EndpointReentryCap
   */
  readonly endpointReentryCap?: number;

  /**
   * @schema JourneyLimits#MessagesPerSecond
   */
  readonly messagesPerSecond?: number;

}

/**
 * @schema QuietTime
 */
export interface QuietTime {
  /**
   * @schema QuietTime#End
   */
  readonly end?: string;

  /**
   * @schema QuietTime#Start
   */
  readonly start?: string;

}

/**
 * @schema JourneySchedule
 */
export interface JourneySchedule {
  /**
   * @schema JourneySchedule#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema JourneySchedule#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema JourneySchedule#Timezone
   */
  readonly timezone?: string;

}

/**
 * @schema StartCondition
 */
export interface StartCondition {
  /**
   * @schema StartCondition#Description
   */
  readonly description?: string;

  /**
   * @schema StartCondition#EventStartCondition
   */
  readonly eventStartCondition?: EventStartCondition;

  /**
   * @schema StartCondition#SegmentStartCondition
   */
  readonly segmentStartCondition?: SegmentCondition;

}

/**
 * @schema AndroidPushNotificationTemplate
 */
export interface AndroidPushNotificationTemplate {
  /**
   * @schema AndroidPushNotificationTemplate#Action
   */
  readonly action?: string;

  /**
   * @schema AndroidPushNotificationTemplate#Body
   */
  readonly body?: string;

  /**
   * @schema AndroidPushNotificationTemplate#ImageIconUrl
   */
  readonly imageIconUrl?: string;

  /**
   * @schema AndroidPushNotificationTemplate#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema AndroidPushNotificationTemplate#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema AndroidPushNotificationTemplate#SmallImageIconUrl
   */
  readonly smallImageIconUrl?: string;

  /**
   * @schema AndroidPushNotificationTemplate#Sound
   */
  readonly sound?: string;

  /**
   * @schema AndroidPushNotificationTemplate#Title
   */
  readonly title?: string;

  /**
   * @schema AndroidPushNotificationTemplate#Url
   */
  readonly url?: string;

}

/**
 * @schema ApnsPushNotificationTemplate
 */
export interface ApnsPushNotificationTemplate {
  /**
   * @schema ApnsPushNotificationTemplate#Action
   */
  readonly action?: string;

  /**
   * @schema ApnsPushNotificationTemplate#Body
   */
  readonly body?: string;

  /**
   * @schema ApnsPushNotificationTemplate#MediaUrl
   */
  readonly mediaUrl?: string;

  /**
   * @schema ApnsPushNotificationTemplate#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema ApnsPushNotificationTemplate#Sound
   */
  readonly sound?: string;

  /**
   * @schema ApnsPushNotificationTemplate#Title
   */
  readonly title?: string;

  /**
   * @schema ApnsPushNotificationTemplate#Url
   */
  readonly url?: string;

}

/**
 * @schema DefaultPushNotificationTemplate
 */
export interface DefaultPushNotificationTemplate {
  /**
   * @schema DefaultPushNotificationTemplate#Action
   */
  readonly action?: string;

  /**
   * @schema DefaultPushNotificationTemplate#Body
   */
  readonly body?: string;

  /**
   * @schema DefaultPushNotificationTemplate#Sound
   */
  readonly sound?: string;

  /**
   * @schema DefaultPushNotificationTemplate#Title
   */
  readonly title?: string;

  /**
   * @schema DefaultPushNotificationTemplate#Url
   */
  readonly url?: string;

}

/**
 * @schema SegmentDimensions
 */
export interface SegmentDimensions {
  /**
   * @schema SegmentDimensions#Attributes
   */
  readonly attributes?: { [key: string]: AttributeDimension };

  /**
   * @schema SegmentDimensions#Behavior
   */
  readonly behavior?: SegmentBehaviors;

  /**
   * @schema SegmentDimensions#Demographic
   */
  readonly demographic?: SegmentDemographics;

  /**
   * @schema SegmentDimensions#Location
   */
  readonly location?: SegmentLocation;

  /**
   * @schema SegmentDimensions#Metrics
   */
  readonly metrics?: { [key: string]: MetricDimension };

  /**
   * @schema SegmentDimensions#UserAttributes
   */
  readonly userAttributes?: { [key: string]: AttributeDimension };

}

/**
 * @schema SegmentGroupList
 */
export interface SegmentGroupList {
  /**
   * @schema SegmentGroupList#Groups
   */
  readonly groups?: SegmentGroup[];

  /**
   * @schema SegmentGroupList#Include
   */
  readonly include?: string;

}

/**
 * @schema SegmentImportResource
 */
export interface SegmentImportResource {
  /**
   * @schema SegmentImportResource#ChannelCounts
   */
  readonly channelCounts?: { [key: string]: number };

  /**
   * @schema SegmentImportResource#ExternalId
   */
  readonly externalId: string;

  /**
   * @schema SegmentImportResource#Format
   */
  readonly format: string;

  /**
   * @schema SegmentImportResource#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SegmentImportResource#S3Url
   */
  readonly s3Url: string;

  /**
   * @schema SegmentImportResource#Size
   */
  readonly size: number;

}

/**
 * @schema EndpointDemographic
 */
export interface EndpointDemographic {
  /**
   * @schema EndpointDemographic#AppVersion
   */
  readonly appVersion?: string;

  /**
   * @schema EndpointDemographic#Locale
   */
  readonly locale?: string;

  /**
   * @schema EndpointDemographic#Make
   */
  readonly make?: string;

  /**
   * @schema EndpointDemographic#Model
   */
  readonly model?: string;

  /**
   * @schema EndpointDemographic#ModelVersion
   */
  readonly modelVersion?: string;

  /**
   * @schema EndpointDemographic#Platform
   */
  readonly platform?: string;

  /**
   * @schema EndpointDemographic#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EndpointDemographic#Timezone
   */
  readonly timezone?: string;

}

/**
 * @schema EndpointLocation
 */
export interface EndpointLocation {
  /**
   * @schema EndpointLocation#City
   */
  readonly city?: string;

  /**
   * @schema EndpointLocation#Country
   */
  readonly country?: string;

  /**
   * @schema EndpointLocation#Latitude
   */
  readonly latitude?: number;

  /**
   * @schema EndpointLocation#Longitude
   */
  readonly longitude?: number;

  /**
   * @schema EndpointLocation#PostalCode
   */
  readonly postalCode?: string;

  /**
   * @schema EndpointLocation#Region
   */
  readonly region?: string;

}

/**
 * @schema EndpointUser
 */
export interface EndpointUser {
  /**
   * @schema EndpointUser#UserAttributes
   */
  readonly userAttributes?: { [key: string]: string[] };

  /**
   * @schema EndpointUser#UserId
   */
  readonly userId?: string;

}

/**
 * @schema BaseKpiResult
 */
export interface BaseKpiResult {
  /**
   * @schema BaseKpiResult#Rows
   */
  readonly rows: ResultRow[];

}

/**
 * @schema ActivityResponse
 */
export interface ActivityResponse {
  /**
   * @schema ActivityResponse#ApplicationId
   */
  readonly applicationId: string;

  /**
   * @schema ActivityResponse#CampaignId
   */
  readonly campaignId: string;

  /**
   * @schema ActivityResponse#End
   */
  readonly end?: string;

  /**
   * @schema ActivityResponse#Id
   */
  readonly id: string;

  /**
   * @schema ActivityResponse#Result
   */
  readonly result?: string;

  /**
   * @schema ActivityResponse#ScheduledStart
   */
  readonly scheduledStart?: string;

  /**
   * @schema ActivityResponse#Start
   */
  readonly start?: string;

  /**
   * @schema ActivityResponse#State
   */
  readonly state?: string;

  /**
   * @schema ActivityResponse#SuccessfulEndpointCount
   */
  readonly successfulEndpointCount?: number;

  /**
   * @schema ActivityResponse#TimezonesCompletedCount
   */
  readonly timezonesCompletedCount?: number;

  /**
   * @schema ActivityResponse#TimezonesTotalCount
   */
  readonly timezonesTotalCount?: number;

  /**
   * @schema ActivityResponse#TotalEndpointCount
   */
  readonly totalEndpointCount?: number;

  /**
   * @schema ActivityResponse#TreatmentId
   */
  readonly treatmentId?: string;

}

/**
 * @schema ChannelResponse
 */
export interface ChannelResponse {
  /**
   * @schema ChannelResponse#ApplicationId
   */
  readonly applicationId?: string;

  /**
   * @schema ChannelResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ChannelResponse#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ChannelResponse#HasCredential
   */
  readonly hasCredential?: boolean;

  /**
   * @schema ChannelResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ChannelResponse#IsArchived
   */
  readonly isArchived?: boolean;

  /**
   * @schema ChannelResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema ChannelResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ChannelResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema TemplateVersionResponse
 */
export interface TemplateVersionResponse {
  /**
   * @schema TemplateVersionResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema TemplateVersionResponse#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema TemplateVersionResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema TemplateVersionResponse#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema TemplateVersionResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema TemplateVersionResponse#TemplateType
   */
  readonly templateType: string;

  /**
   * @schema TemplateVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema TemplateResponse
 */
export interface TemplateResponse {
  /**
   * @schema TemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema TemplateResponse#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema TemplateResponse#DefaultSubstitutions
   */
  readonly defaultSubstitutions?: string;

  /**
   * @schema TemplateResponse#LastModifiedDate
   */
  readonly lastModifiedDate: string;

  /**
   * @schema TemplateResponse#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema TemplateResponse#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema TemplateResponse#TemplateName
   */
  readonly templateName: string;

  /**
   * @schema TemplateResponse#TemplateType
   */
  readonly templateType: string;

  /**
   * @schema TemplateResponse#Version
   */
  readonly version?: string;

}

/**
 * @schema EventsBatch
 */
export interface EventsBatch {
  /**
   * @schema EventsBatch#Endpoint
   */
  readonly endpoint: PublicEndpoint;

  /**
   * @schema EventsBatch#Events
   */
  readonly events: { [key: string]: Event };

}

/**
 * @schema ItemResponse
 */
export interface ItemResponse {
  /**
   * @schema ItemResponse#EndpointItemResponse
   */
  readonly endpointItemResponse?: EndpointItemResponse;

  /**
   * @schema ItemResponse#EventsItemResponse
   */
  readonly eventsItemResponse?: { [key: string]: EventItemResponse };

}

/**
 * @schema AddressConfiguration
 */
export interface AddressConfiguration {
  /**
   * @schema AddressConfiguration#BodyOverride
   */
  readonly bodyOverride?: string;

  /**
   * @schema AddressConfiguration#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema AddressConfiguration#Context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema AddressConfiguration#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema AddressConfiguration#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema AddressConfiguration#TitleOverride
   */
  readonly titleOverride?: string;

}

/**
 * @schema EndpointSendConfiguration
 */
export interface EndpointSendConfiguration {
  /**
   * @schema EndpointSendConfiguration#BodyOverride
   */
  readonly bodyOverride?: string;

  /**
   * @schema EndpointSendConfiguration#Context
   */
  readonly context?: { [key: string]: string };

  /**
   * @schema EndpointSendConfiguration#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema EndpointSendConfiguration#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema EndpointSendConfiguration#TitleOverride
   */
  readonly titleOverride?: string;

}

/**
 * @schema DirectMessageConfiguration
 */
export interface DirectMessageConfiguration {
  /**
   * @schema DirectMessageConfiguration#ADMMessage
   */
  readonly admMessage?: AdmMessage;

  /**
   * @schema DirectMessageConfiguration#APNSMessage
   */
  readonly apnsMessage?: ApnsMessage;

  /**
   * @schema DirectMessageConfiguration#BaiduMessage
   */
  readonly baiduMessage?: BaiduMessage;

  /**
   * @schema DirectMessageConfiguration#DefaultMessage
   */
  readonly defaultMessage?: DefaultMessage;

  /**
   * @schema DirectMessageConfiguration#DefaultPushNotificationMessage
   */
  readonly defaultPushNotificationMessage?: DefaultPushNotificationMessage;

  /**
   * @schema DirectMessageConfiguration#EmailMessage
   */
  readonly emailMessage?: EmailMessage;

  /**
   * @schema DirectMessageConfiguration#GCMMessage
   */
  readonly gcmMessage?: GcmMessage;

  /**
   * @schema DirectMessageConfiguration#SMSMessage
   */
  readonly smsMessage?: SmsMessage;

  /**
   * @schema DirectMessageConfiguration#VoiceMessage
   */
  readonly voiceMessage?: VoiceMessage;

}

/**
 * @schema EndpointMessageResult
 */
export interface EndpointMessageResult {
  /**
   * @schema EndpointMessageResult#Address
   */
  readonly address?: string;

  /**
   * @schema EndpointMessageResult#DeliveryStatus
   */
  readonly deliveryStatus: string;

  /**
   * @schema EndpointMessageResult#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema EndpointMessageResult#StatusCode
   */
  readonly statusCode: number;

  /**
   * @schema EndpointMessageResult#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema EndpointMessageResult#UpdatedToken
   */
  readonly updatedToken?: string;

}

/**
 * @schema MessageResult
 */
export interface MessageResult {
  /**
   * @schema MessageResult#DeliveryStatus
   */
  readonly deliveryStatus: string;

  /**
   * @schema MessageResult#MessageId
   */
  readonly messageId?: string;

  /**
   * @schema MessageResult#StatusCode
   */
  readonly statusCode: number;

  /**
   * @schema MessageResult#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema MessageResult#UpdatedToken
   */
  readonly updatedToken?: string;

}

/**
 * @schema EndpointBatchItem
 */
export interface EndpointBatchItem {
  /**
   * @schema EndpointBatchItem#Address
   */
  readonly address?: string;

  /**
   * @schema EndpointBatchItem#Attributes
   */
  readonly attributes?: { [key: string]: string[] };

  /**
   * @schema EndpointBatchItem#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema EndpointBatchItem#Demographic
   */
  readonly demographic?: EndpointDemographic;

  /**
   * @schema EndpointBatchItem#EffectiveDate
   */
  readonly effectiveDate?: string;

  /**
   * @schema EndpointBatchItem#EndpointStatus
   */
  readonly endpointStatus?: string;

  /**
   * @schema EndpointBatchItem#Id
   */
  readonly id?: string;

  /**
   * @schema EndpointBatchItem#Location
   */
  readonly location?: EndpointLocation;

  /**
   * @schema EndpointBatchItem#Metrics
   */
  readonly metrics?: { [key: string]: number };

  /**
   * @schema EndpointBatchItem#OptOut
   */
  readonly optOut?: string;

  /**
   * @schema EndpointBatchItem#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema EndpointBatchItem#User
   */
  readonly user?: EndpointUser;

}

/**
 * @schema Message
 */
export interface Message {
  /**
   * @schema Message#Action
   */
  readonly action?: string;

  /**
   * @schema Message#Body
   */
  readonly body?: string;

  /**
   * @schema Message#ImageIconUrl
   */
  readonly imageIconUrl?: string;

  /**
   * @schema Message#ImageSmallIconUrl
   */
  readonly imageSmallIconUrl?: string;

  /**
   * @schema Message#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema Message#JsonBody
   */
  readonly jsonBody?: string;

  /**
   * @schema Message#MediaUrl
   */
  readonly mediaUrl?: string;

  /**
   * @schema Message#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema Message#SilentPush
   */
  readonly silentPush?: boolean;

  /**
   * @schema Message#TimeToLive
   */
  readonly timeToLive?: number;

  /**
   * @schema Message#Title
   */
  readonly title?: string;

  /**
   * @schema Message#Url
   */
  readonly url?: string;

}

/**
 * @schema CampaignCustomMessage
 */
export interface CampaignCustomMessage {
  /**
   * @schema CampaignCustomMessage#Data
   */
  readonly data?: string;

}

/**
 * @schema CampaignEmailMessage
 */
export interface CampaignEmailMessage {
  /**
   * @schema CampaignEmailMessage#Body
   */
  readonly body?: string;

  /**
   * @schema CampaignEmailMessage#FromAddress
   */
  readonly fromAddress?: string;

  /**
   * @schema CampaignEmailMessage#HtmlBody
   */
  readonly htmlBody?: string;

  /**
   * @schema CampaignEmailMessage#Title
   */
  readonly title?: string;

}

/**
 * @schema CampaignSmsMessage
 */
export interface CampaignSmsMessage {
  /**
   * @schema CampaignSmsMessage#Body
   */
  readonly body?: string;

  /**
   * @schema CampaignSmsMessage#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema CampaignSmsMessage#SenderId
   */
  readonly senderId?: string;

}

/**
 * @schema CampaignEventFilter
 */
export interface CampaignEventFilter {
  /**
   * @schema CampaignEventFilter#Dimensions
   */
  readonly dimensions: EventDimensions;

  /**
   * @schema CampaignEventFilter#FilterType
   */
  readonly filterType: string;

}

/**
 * @schema Template
 */
export interface Template {
  /**
   * @schema Template#Name
   */
  readonly name?: string;

  /**
   * @schema Template#Version
   */
  readonly version?: string;

}

/**
 * @schema CustomMessageActivity
 */
export interface CustomMessageActivity {
  /**
   * @schema CustomMessageActivity#DeliveryUri
   */
  readonly deliveryUri?: string;

  /**
   * @schema CustomMessageActivity#EndpointTypes
   */
  readonly endpointTypes?: string[];

  /**
   * @schema CustomMessageActivity#MessageConfig
   */
  readonly messageConfig?: JourneyCustomMessage;

  /**
   * @schema CustomMessageActivity#NextActivity
   */
  readonly nextActivity?: string;

  /**
   * @schema CustomMessageActivity#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema CustomMessageActivity#TemplateVersion
   */
  readonly templateVersion?: string;

}

/**
 * @schema ConditionalSplitActivity
 */
export interface ConditionalSplitActivity {
  /**
   * @schema ConditionalSplitActivity#Condition
   */
  readonly condition?: Condition;

  /**
   * @schema ConditionalSplitActivity#EvaluationWaitTime
   */
  readonly evaluationWaitTime?: WaitTime;

  /**
   * @schema ConditionalSplitActivity#FalseActivity
   */
  readonly falseActivity?: string;

  /**
   * @schema ConditionalSplitActivity#TrueActivity
   */
  readonly trueActivity?: string;

}

/**
 * @schema EmailMessageActivity
 */
export interface EmailMessageActivity {
  /**
   * @schema EmailMessageActivity#MessageConfig
   */
  readonly messageConfig?: JourneyEmailMessage;

  /**
   * @schema EmailMessageActivity#NextActivity
   */
  readonly nextActivity?: string;

  /**
   * @schema EmailMessageActivity#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema EmailMessageActivity#TemplateVersion
   */
  readonly templateVersion?: string;

}

/**
 * @schema HoldoutActivity
 */
export interface HoldoutActivity {
  /**
   * @schema HoldoutActivity#NextActivity
   */
  readonly nextActivity?: string;

  /**
   * @schema HoldoutActivity#Percentage
   */
  readonly percentage: number;

}

/**
 * @schema MultiConditionalSplitActivity
 */
export interface MultiConditionalSplitActivity {
  /**
   * @schema MultiConditionalSplitActivity#Branches
   */
  readonly branches?: MultiConditionalBranch[];

  /**
   * @schema MultiConditionalSplitActivity#DefaultActivity
   */
  readonly defaultActivity?: string;

  /**
   * @schema MultiConditionalSplitActivity#EvaluationWaitTime
   */
  readonly evaluationWaitTime?: WaitTime;

}

/**
 * @schema PushMessageActivity
 */
export interface PushMessageActivity {
  /**
   * @schema PushMessageActivity#MessageConfig
   */
  readonly messageConfig?: JourneyPushMessage;

  /**
   * @schema PushMessageActivity#NextActivity
   */
  readonly nextActivity?: string;

  /**
   * @schema PushMessageActivity#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema PushMessageActivity#TemplateVersion
   */
  readonly templateVersion?: string;

}

/**
 * @schema RandomSplitActivity
 */
export interface RandomSplitActivity {
  /**
   * @schema RandomSplitActivity#Branches
   */
  readonly branches?: RandomSplitEntry[];

}

/**
 * @schema SmsMessageActivity
 */
export interface SmsMessageActivity {
  /**
   * @schema SmsMessageActivity#MessageConfig
   */
  readonly messageConfig?: JourneySmsMessage;

  /**
   * @schema SmsMessageActivity#NextActivity
   */
  readonly nextActivity?: string;

  /**
   * @schema SmsMessageActivity#TemplateName
   */
  readonly templateName?: string;

  /**
   * @schema SmsMessageActivity#TemplateVersion
   */
  readonly templateVersion?: string;

}

/**
 * @schema WaitActivity
 */
export interface WaitActivity {
  /**
   * @schema WaitActivity#NextActivity
   */
  readonly nextActivity?: string;

  /**
   * @schema WaitActivity#WaitTime
   */
  readonly waitTime?: WaitTime;

}

/**
 * @schema EventStartCondition
 */
export interface EventStartCondition {
  /**
   * @schema EventStartCondition#EventFilter
   */
  readonly eventFilter?: EventFilter;

  /**
   * @schema EventStartCondition#SegmentId
   */
  readonly segmentId?: string;

}

/**
 * @schema SegmentCondition
 */
export interface SegmentCondition {
  /**
   * @schema SegmentCondition#SegmentId
   */
  readonly segmentId: string;

}

/**
 * @schema AttributeDimension
 */
export interface AttributeDimension {
  /**
   * @schema AttributeDimension#AttributeType
   */
  readonly attributeType?: string;

  /**
   * @schema AttributeDimension#Values
   */
  readonly values: string[];

}

/**
 * @schema SegmentBehaviors
 */
export interface SegmentBehaviors {
  /**
   * @schema SegmentBehaviors#Recency
   */
  readonly recency?: RecencyDimension;

}

/**
 * @schema SegmentDemographics
 */
export interface SegmentDemographics {
  /**
   * @schema SegmentDemographics#AppVersion
   */
  readonly appVersion?: SetDimension;

  /**
   * @schema SegmentDemographics#Channel
   */
  readonly channel?: SetDimension;

  /**
   * @schema SegmentDemographics#DeviceType
   */
  readonly deviceType?: SetDimension;

  /**
   * @schema SegmentDemographics#Make
   */
  readonly make?: SetDimension;

  /**
   * @schema SegmentDemographics#Model
   */
  readonly model?: SetDimension;

  /**
   * @schema SegmentDemographics#Platform
   */
  readonly platform?: SetDimension;

}

/**
 * @schema SegmentLocation
 */
export interface SegmentLocation {
  /**
   * @schema SegmentLocation#Country
   */
  readonly country?: SetDimension;

  /**
   * @schema SegmentLocation#GPSPoint
   */
  readonly gpsPoint?: GpsPointDimension;

}

/**
 * @schema MetricDimension
 */
export interface MetricDimension {
  /**
   * @schema MetricDimension#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema MetricDimension#Value
   */
  readonly value: number;

}

/**
 * @schema SegmentGroup
 */
export interface SegmentGroup {
  /**
   * @schema SegmentGroup#Dimensions
   */
  readonly dimensions?: SegmentDimensions[];

  /**
   * @schema SegmentGroup#SourceSegments
   */
  readonly sourceSegments?: SegmentReference[];

  /**
   * @schema SegmentGroup#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema SegmentGroup#Type
   */
  readonly type?: string;

}

/**
 * @schema ResultRow
 */
export interface ResultRow {
  /**
   * @schema ResultRow#GroupedBys
   */
  readonly groupedBys: ResultRowValue[];

  /**
   * @schema ResultRow#Values
   */
  readonly values: ResultRowValue[];

}

/**
 * @schema PublicEndpoint
 */
export interface PublicEndpoint {
  /**
   * @schema PublicEndpoint#Address
   */
  readonly address?: string;

  /**
   * @schema PublicEndpoint#Attributes
   */
  readonly attributes?: { [key: string]: string[] };

  /**
   * @schema PublicEndpoint#ChannelType
   */
  readonly channelType?: string;

  /**
   * @schema PublicEndpoint#Demographic
   */
  readonly demographic?: EndpointDemographic;

  /**
   * @schema PublicEndpoint#EffectiveDate
   */
  readonly effectiveDate?: string;

  /**
   * @schema PublicEndpoint#EndpointStatus
   */
  readonly endpointStatus?: string;

  /**
   * @schema PublicEndpoint#Location
   */
  readonly location?: EndpointLocation;

  /**
   * @schema PublicEndpoint#Metrics
   */
  readonly metrics?: { [key: string]: number };

  /**
   * @schema PublicEndpoint#OptOut
   */
  readonly optOut?: string;

  /**
   * @schema PublicEndpoint#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema PublicEndpoint#User
   */
  readonly user?: EndpointUser;

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#AppPackageName
   */
  readonly appPackageName?: string;

  /**
   * @schema Event#AppTitle
   */
  readonly appTitle?: string;

  /**
   * @schema Event#AppVersionCode
   */
  readonly appVersionCode?: string;

  /**
   * @schema Event#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema Event#ClientSdkVersion
   */
  readonly clientSdkVersion?: string;

  /**
   * @schema Event#EventType
   */
  readonly eventType: string;

  /**
   * @schema Event#Metrics
   */
  readonly metrics?: { [key: string]: number };

  /**
   * @schema Event#SdkName
   */
  readonly sdkName?: string;

  /**
   * @schema Event#Session
   */
  readonly session?: Session;

  /**
   * @schema Event#Timestamp
   */
  readonly timestamp: string;

}

/**
 * @schema EndpointItemResponse
 */
export interface EndpointItemResponse {
  /**
   * @schema EndpointItemResponse#Message
   */
  readonly message?: string;

  /**
   * @schema EndpointItemResponse#StatusCode
   */
  readonly statusCode?: number;

}

/**
 * @schema EventItemResponse
 */
export interface EventItemResponse {
  /**
   * @schema EventItemResponse#Message
   */
  readonly message?: string;

  /**
   * @schema EventItemResponse#StatusCode
   */
  readonly statusCode?: number;

}

/**
 * @schema AdmMessage
 */
export interface AdmMessage {
  /**
   * @schema AdmMessage#Action
   */
  readonly action?: string;

  /**
   * @schema AdmMessage#Body
   */
  readonly body?: string;

  /**
   * @schema AdmMessage#ConsolidationKey
   */
  readonly consolidationKey?: string;

  /**
   * @schema AdmMessage#Data
   */
  readonly data?: { [key: string]: string };

  /**
   * @schema AdmMessage#ExpiresAfter
   */
  readonly expiresAfter?: string;

  /**
   * @schema AdmMessage#IconReference
   */
  readonly iconReference?: string;

  /**
   * @schema AdmMessage#ImageIconUrl
   */
  readonly imageIconUrl?: string;

  /**
   * @schema AdmMessage#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema AdmMessage#MD5
   */
  readonly md5?: string;

  /**
   * @schema AdmMessage#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema AdmMessage#SilentPush
   */
  readonly silentPush?: boolean;

  /**
   * @schema AdmMessage#SmallImageIconUrl
   */
  readonly smallImageIconUrl?: string;

  /**
   * @schema AdmMessage#Sound
   */
  readonly sound?: string;

  /**
   * @schema AdmMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema AdmMessage#Title
   */
  readonly title?: string;

  /**
   * @schema AdmMessage#Url
   */
  readonly url?: string;

}

/**
 * @schema ApnsMessage
 */
export interface ApnsMessage {
  /**
   * @schema ApnsMessage#APNSPushType
   */
  readonly apnsPushType?: string;

  /**
   * @schema ApnsMessage#Action
   */
  readonly action?: string;

  /**
   * @schema ApnsMessage#Badge
   */
  readonly badge?: number;

  /**
   * @schema ApnsMessage#Body
   */
  readonly body?: string;

  /**
   * @schema ApnsMessage#Category
   */
  readonly category?: string;

  /**
   * @schema ApnsMessage#CollapseId
   */
  readonly collapseId?: string;

  /**
   * @schema ApnsMessage#Data
   */
  readonly data?: { [key: string]: string };

  /**
   * @schema ApnsMessage#MediaUrl
   */
  readonly mediaUrl?: string;

  /**
   * @schema ApnsMessage#PreferredAuthenticationMethod
   */
  readonly preferredAuthenticationMethod?: string;

  /**
   * @schema ApnsMessage#Priority
   */
  readonly priority?: string;

  /**
   * @schema ApnsMessage#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema ApnsMessage#SilentPush
   */
  readonly silentPush?: boolean;

  /**
   * @schema ApnsMessage#Sound
   */
  readonly sound?: string;

  /**
   * @schema ApnsMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema ApnsMessage#ThreadId
   */
  readonly threadId?: string;

  /**
   * @schema ApnsMessage#TimeToLive
   */
  readonly timeToLive?: number;

  /**
   * @schema ApnsMessage#Title
   */
  readonly title?: string;

  /**
   * @schema ApnsMessage#Url
   */
  readonly url?: string;

}

/**
 * @schema BaiduMessage
 */
export interface BaiduMessage {
  /**
   * @schema BaiduMessage#Action
   */
  readonly action?: string;

  /**
   * @schema BaiduMessage#Body
   */
  readonly body?: string;

  /**
   * @schema BaiduMessage#Data
   */
  readonly data?: { [key: string]: string };

  /**
   * @schema BaiduMessage#IconReference
   */
  readonly iconReference?: string;

  /**
   * @schema BaiduMessage#ImageIconUrl
   */
  readonly imageIconUrl?: string;

  /**
   * @schema BaiduMessage#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema BaiduMessage#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema BaiduMessage#SilentPush
   */
  readonly silentPush?: boolean;

  /**
   * @schema BaiduMessage#SmallImageIconUrl
   */
  readonly smallImageIconUrl?: string;

  /**
   * @schema BaiduMessage#Sound
   */
  readonly sound?: string;

  /**
   * @schema BaiduMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema BaiduMessage#TimeToLive
   */
  readonly timeToLive?: number;

  /**
   * @schema BaiduMessage#Title
   */
  readonly title?: string;

  /**
   * @schema BaiduMessage#Url
   */
  readonly url?: string;

}

/**
 * @schema DefaultMessage
 */
export interface DefaultMessage {
  /**
   * @schema DefaultMessage#Body
   */
  readonly body?: string;

  /**
   * @schema DefaultMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

}

/**
 * @schema DefaultPushNotificationMessage
 */
export interface DefaultPushNotificationMessage {
  /**
   * @schema DefaultPushNotificationMessage#Action
   */
  readonly action?: string;

  /**
   * @schema DefaultPushNotificationMessage#Body
   */
  readonly body?: string;

  /**
   * @schema DefaultPushNotificationMessage#Data
   */
  readonly data?: { [key: string]: string };

  /**
   * @schema DefaultPushNotificationMessage#SilentPush
   */
  readonly silentPush?: boolean;

  /**
   * @schema DefaultPushNotificationMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema DefaultPushNotificationMessage#Title
   */
  readonly title?: string;

  /**
   * @schema DefaultPushNotificationMessage#Url
   */
  readonly url?: string;

}

/**
 * @schema EmailMessage
 */
export interface EmailMessage {
  /**
   * @schema EmailMessage#Body
   */
  readonly body?: string;

  /**
   * @schema EmailMessage#FeedbackForwardingAddress
   */
  readonly feedbackForwardingAddress?: string;

  /**
   * @schema EmailMessage#FromAddress
   */
  readonly fromAddress?: string;

  /**
   * @schema EmailMessage#RawEmail
   */
  readonly rawEmail?: RawEmail;

  /**
   * @schema EmailMessage#ReplyToAddresses
   */
  readonly replyToAddresses?: string[];

  /**
   * @schema EmailMessage#SimpleEmail
   */
  readonly simpleEmail?: SimpleEmail;

  /**
   * @schema EmailMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

}

/**
 * @schema GcmMessage
 */
export interface GcmMessage {
  /**
   * @schema GcmMessage#Action
   */
  readonly action?: string;

  /**
   * @schema GcmMessage#Body
   */
  readonly body?: string;

  /**
   * @schema GcmMessage#CollapseKey
   */
  readonly collapseKey?: string;

  /**
   * @schema GcmMessage#Data
   */
  readonly data?: { [key: string]: string };

  /**
   * @schema GcmMessage#IconReference
   */
  readonly iconReference?: string;

  /**
   * @schema GcmMessage#ImageIconUrl
   */
  readonly imageIconUrl?: string;

  /**
   * @schema GcmMessage#ImageUrl
   */
  readonly imageUrl?: string;

  /**
   * @schema GcmMessage#Priority
   */
  readonly priority?: string;

  /**
   * @schema GcmMessage#RawContent
   */
  readonly rawContent?: string;

  /**
   * @schema GcmMessage#RestrictedPackageName
   */
  readonly restrictedPackageName?: string;

  /**
   * @schema GcmMessage#SilentPush
   */
  readonly silentPush?: boolean;

  /**
   * @schema GcmMessage#SmallImageIconUrl
   */
  readonly smallImageIconUrl?: string;

  /**
   * @schema GcmMessage#Sound
   */
  readonly sound?: string;

  /**
   * @schema GcmMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema GcmMessage#TimeToLive
   */
  readonly timeToLive?: number;

  /**
   * @schema GcmMessage#Title
   */
  readonly title?: string;

  /**
   * @schema GcmMessage#Url
   */
  readonly url?: string;

}

/**
 * @schema SmsMessage
 */
export interface SmsMessage {
  /**
   * @schema SmsMessage#Body
   */
  readonly body?: string;

  /**
   * @schema SmsMessage#Keyword
   */
  readonly keyword?: string;

  /**
   * @schema SmsMessage#MediaUrl
   */
  readonly mediaUrl?: string;

  /**
   * @schema SmsMessage#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema SmsMessage#OriginationNumber
   */
  readonly originationNumber?: string;

  /**
   * @schema SmsMessage#SenderId
   */
  readonly senderId?: string;

  /**
   * @schema SmsMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

}

/**
 * @schema VoiceMessage
 */
export interface VoiceMessage {
  /**
   * @schema VoiceMessage#Body
   */
  readonly body?: string;

  /**
   * @schema VoiceMessage#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema VoiceMessage#OriginationNumber
   */
  readonly originationNumber?: string;

  /**
   * @schema VoiceMessage#Substitutions
   */
  readonly substitutions?: { [key: string]: string[] };

  /**
   * @schema VoiceMessage#VoiceId
   */
  readonly voiceId?: string;

}

/**
 * @schema EventDimensions
 */
export interface EventDimensions {
  /**
   * @schema EventDimensions#Attributes
   */
  readonly attributes?: { [key: string]: AttributeDimension };

  /**
   * @schema EventDimensions#EventType
   */
  readonly eventType?: SetDimension;

  /**
   * @schema EventDimensions#Metrics
   */
  readonly metrics?: { [key: string]: MetricDimension };

}

/**
 * @schema JourneyCustomMessage
 */
export interface JourneyCustomMessage {
  /**
   * @schema JourneyCustomMessage#Data
   */
  readonly data?: string;

}

/**
 * @schema Condition
 */
export interface Condition {
  /**
   * @schema Condition#Conditions
   */
  readonly conditions?: SimpleCondition[];

  /**
   * @schema Condition#Operator
   */
  readonly operator?: string;

}

/**
 * @schema WaitTime
 */
export interface WaitTime {
  /**
   * @schema WaitTime#WaitFor
   */
  readonly waitFor?: string;

  /**
   * @schema WaitTime#WaitUntil
   */
  readonly waitUntil?: string;

}

/**
 * @schema JourneyEmailMessage
 */
export interface JourneyEmailMessage {
  /**
   * @schema JourneyEmailMessage#FromAddress
   */
  readonly fromAddress?: string;

}

/**
 * @schema MultiConditionalBranch
 */
export interface MultiConditionalBranch {
  /**
   * @schema MultiConditionalBranch#Condition
   */
  readonly condition?: SimpleCondition;

  /**
   * @schema MultiConditionalBranch#NextActivity
   */
  readonly nextActivity?: string;

}

/**
 * @schema JourneyPushMessage
 */
export interface JourneyPushMessage {
  /**
   * @schema JourneyPushMessage#TimeToLive
   */
  readonly timeToLive?: string;

}

/**
 * @schema RandomSplitEntry
 */
export interface RandomSplitEntry {
  /**
   * @schema RandomSplitEntry#NextActivity
   */
  readonly nextActivity?: string;

  /**
   * @schema RandomSplitEntry#Percentage
   */
  readonly percentage?: number;

}

/**
 * @schema JourneySmsMessage
 */
export interface JourneySmsMessage {
  /**
   * @schema JourneySmsMessage#MessageType
   */
  readonly messageType?: string;

  /**
   * @schema JourneySmsMessage#SenderId
   */
  readonly senderId?: string;

}

/**
 * @schema EventFilter
 */
export interface EventFilter {
  /**
   * @schema EventFilter#Dimensions
   */
  readonly dimensions: EventDimensions;

  /**
   * @schema EventFilter#FilterType
   */
  readonly filterType: string;

}

/**
 * @schema RecencyDimension
 */
export interface RecencyDimension {
  /**
   * @schema RecencyDimension#Duration
   */
  readonly duration: string;

  /**
   * @schema RecencyDimension#RecencyType
   */
  readonly recencyType: string;

}

/**
 * @schema SetDimension
 */
export interface SetDimension {
  /**
   * @schema SetDimension#DimensionType
   */
  readonly dimensionType?: string;

  /**
   * @schema SetDimension#Values
   */
  readonly values: string[];

}

/**
 * @schema GpsPointDimension
 */
export interface GpsPointDimension {
  /**
   * @schema GpsPointDimension#Coordinates
   */
  readonly coordinates: GpsCoordinates;

  /**
   * @schema GpsPointDimension#RangeInKilometers
   */
  readonly rangeInKilometers?: number;

}

/**
 * @schema SegmentReference
 */
export interface SegmentReference {
  /**
   * @schema SegmentReference#Id
   */
  readonly id: string;

  /**
   * @schema SegmentReference#Version
   */
  readonly version?: number;

}

/**
 * @schema ResultRowValue
 */
export interface ResultRowValue {
  /**
   * @schema ResultRowValue#Key
   */
  readonly key: string;

  /**
   * @schema ResultRowValue#Type
   */
  readonly type: string;

  /**
   * @schema ResultRowValue#Value
   */
  readonly value: string;

}

/**
 * @schema Session
 */
export interface Session {
  /**
   * @schema Session#Duration
   */
  readonly duration?: number;

  /**
   * @schema Session#Id
   */
  readonly id: string;

  /**
   * @schema Session#StartTimestamp
   */
  readonly startTimestamp: string;

  /**
   * @schema Session#StopTimestamp
   */
  readonly stopTimestamp?: string;

}

/**
 * @schema RawEmail
 */
export interface RawEmail {
  /**
   * @schema RawEmail#Data
   */
  readonly data?: any;

}

/**
 * @schema SimpleEmail
 */
export interface SimpleEmail {
  /**
   * @schema SimpleEmail#HtmlPart
   */
  readonly htmlPart?: SimpleEmailPart;

  /**
   * @schema SimpleEmail#Subject
   */
  readonly subject?: SimpleEmailPart;

  /**
   * @schema SimpleEmail#TextPart
   */
  readonly textPart?: SimpleEmailPart;

}

/**
 * @schema SimpleCondition
 */
export interface SimpleCondition {
  /**
   * @schema SimpleCondition#EventCondition
   */
  readonly eventCondition?: EventCondition;

  /**
   * @schema SimpleCondition#SegmentCondition
   */
  readonly segmentCondition?: SegmentCondition;

  /**
   * @schema SimpleCondition#SegmentDimensions
   */
  readonly segmentDimensions?: SegmentDimensions;

}

/**
 * @schema GpsCoordinates
 */
export interface GpsCoordinates {
  /**
   * @schema GpsCoordinates#Latitude
   */
  readonly latitude: number;

  /**
   * @schema GpsCoordinates#Longitude
   */
  readonly longitude: number;

}

/**
 * @schema SimpleEmailPart
 */
export interface SimpleEmailPart {
  /**
   * @schema SimpleEmailPart#Charset
   */
  readonly charset?: string;

  /**
   * @schema SimpleEmailPart#Data
   */
  readonly data?: string;

}

/**
 * @schema EventCondition
 */
export interface EventCondition {
  /**
   * @schema EventCondition#Dimensions
   */
  readonly dimensions?: EventDimensions;

  /**
   * @schema EventCondition#MessageActivity
   */
  readonly messageActivity?: string;

}
