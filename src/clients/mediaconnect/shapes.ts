/**
 * @schema MediaConnectAddFlowMediaStreamsRequest
 */
export interface MediaConnectAddFlowMediaStreamsRequest {
  /**
   * @schema MediaConnectAddFlowMediaStreamsRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowMediaStreamsRequest#MediaStreams
   */
  readonly mediaStreams?: MediaConnectAddMediaStreamRequest[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowMediaStreamsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowMediaStreamsRequest(obj: MediaConnectAddFlowMediaStreamsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'MediaStreams': obj.mediaStreams?.map(y => toJson_MediaConnectAddMediaStreamRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddFlowMediaStreamsResponse
 */
export interface MediaConnectAddFlowMediaStreamsResponse {
  /**
   * @schema MediaConnectAddFlowMediaStreamsResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowMediaStreamsResponse#MediaStreams
   */
  readonly mediaStreams?: MediaConnectMediaStream[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowMediaStreamsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowMediaStreamsResponse(obj: MediaConnectAddFlowMediaStreamsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'MediaStreams': obj.mediaStreams?.map(y => toJson_MediaConnectMediaStream(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddFlowOutputsRequest
 */
export interface MediaConnectAddFlowOutputsRequest {
  /**
   * @schema MediaConnectAddFlowOutputsRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowOutputsRequest#Outputs
   */
  readonly outputs?: MediaConnectAddOutputRequest[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowOutputsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowOutputsRequest(obj: MediaConnectAddFlowOutputsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Outputs': obj.outputs?.map(y => toJson_MediaConnectAddOutputRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddFlowOutputsResponse
 */
export interface MediaConnectAddFlowOutputsResponse {
  /**
   * @schema MediaConnectAddFlowOutputsResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowOutputsResponse#Outputs
   */
  readonly outputs?: MediaConnectOutput[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowOutputsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowOutputsResponse(obj: MediaConnectAddFlowOutputsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Outputs': obj.outputs?.map(y => toJson_MediaConnectOutput(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddFlowSourcesRequest
 */
export interface MediaConnectAddFlowSourcesRequest {
  /**
   * @schema MediaConnectAddFlowSourcesRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowSourcesRequest#Sources
   */
  readonly sources?: MediaConnectSetSourceRequest[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowSourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowSourcesRequest(obj: MediaConnectAddFlowSourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Sources': obj.sources?.map(y => toJson_MediaConnectSetSourceRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddFlowSourcesResponse
 */
export interface MediaConnectAddFlowSourcesResponse {
  /**
   * @schema MediaConnectAddFlowSourcesResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowSourcesResponse#Sources
   */
  readonly sources?: MediaConnectSource[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowSourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowSourcesResponse(obj: MediaConnectAddFlowSourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Sources': obj.sources?.map(y => toJson_MediaConnectSource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddFlowVpcInterfacesRequest
 */
export interface MediaConnectAddFlowVpcInterfacesRequest {
  /**
   * @schema MediaConnectAddFlowVpcInterfacesRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowVpcInterfacesRequest#VpcInterfaces
   */
  readonly vpcInterfaces?: MediaConnectVpcInterfaceRequest[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowVpcInterfacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowVpcInterfacesRequest(obj: MediaConnectAddFlowVpcInterfacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'VpcInterfaces': obj.vpcInterfaces?.map(y => toJson_MediaConnectVpcInterfaceRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddFlowVpcInterfacesResponse
 */
export interface MediaConnectAddFlowVpcInterfacesResponse {
  /**
   * @schema MediaConnectAddFlowVpcInterfacesResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectAddFlowVpcInterfacesResponse#VpcInterfaces
   */
  readonly vpcInterfaces?: MediaConnectVpcInterface[];

}

/**
 * Converts an object of type 'MediaConnectAddFlowVpcInterfacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddFlowVpcInterfacesResponse(obj: MediaConnectAddFlowVpcInterfacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'VpcInterfaces': obj.vpcInterfaces?.map(y => toJson_MediaConnectVpcInterface(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectCreateFlowRequest
 */
export interface MediaConnectCreateFlowRequest {
  /**
   * @schema MediaConnectCreateFlowRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema MediaConnectCreateFlowRequest#Entitlements
   */
  readonly entitlements?: MediaConnectGrantEntitlementRequest[];

  /**
   * @schema MediaConnectCreateFlowRequest#MediaStreams
   */
  readonly mediaStreams?: MediaConnectAddMediaStreamRequest[];

  /**
   * @schema MediaConnectCreateFlowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectCreateFlowRequest#Outputs
   */
  readonly outputs?: MediaConnectAddOutputRequest[];

  /**
   * @schema MediaConnectCreateFlowRequest#Source
   */
  readonly source?: MediaConnectSetSourceRequest;

  /**
   * @schema MediaConnectCreateFlowRequest#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: MediaConnectFailoverConfig;

  /**
   * @schema MediaConnectCreateFlowRequest#Sources
   */
  readonly sources?: MediaConnectSetSourceRequest[];

  /**
   * @schema MediaConnectCreateFlowRequest#VpcInterfaces
   */
  readonly vpcInterfaces?: MediaConnectVpcInterfaceRequest[];

}

/**
 * Converts an object of type 'MediaConnectCreateFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectCreateFlowRequest(obj: MediaConnectCreateFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZone': obj.availabilityZone,
    'Entitlements': obj.entitlements?.map(y => toJson_MediaConnectGrantEntitlementRequest(y)),
    'MediaStreams': obj.mediaStreams?.map(y => toJson_MediaConnectAddMediaStreamRequest(y)),
    'Name': obj.name,
    'Outputs': obj.outputs?.map(y => toJson_MediaConnectAddOutputRequest(y)),
    'Source': toJson_MediaConnectSetSourceRequest(obj.source),
    'SourceFailoverConfig': toJson_MediaConnectFailoverConfig(obj.sourceFailoverConfig),
    'Sources': obj.sources?.map(y => toJson_MediaConnectSetSourceRequest(y)),
    'VpcInterfaces': obj.vpcInterfaces?.map(y => toJson_MediaConnectVpcInterfaceRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectCreateFlowResponse
 */
export interface MediaConnectCreateFlowResponse {
  /**
   * @schema MediaConnectCreateFlowResponse#Flow
   */
  readonly flow?: MediaConnectFlow;

}

/**
 * Converts an object of type 'MediaConnectCreateFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectCreateFlowResponse(obj: MediaConnectCreateFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Flow': toJson_MediaConnectFlow(obj.flow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDeleteFlowRequest
 */
export interface MediaConnectDeleteFlowRequest {
  /**
   * @schema MediaConnectDeleteFlowRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectDeleteFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDeleteFlowRequest(obj: MediaConnectDeleteFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDeleteFlowResponse
 */
export interface MediaConnectDeleteFlowResponse {
  /**
   * @schema MediaConnectDeleteFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectDeleteFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaConnectDeleteFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDeleteFlowResponse(obj: MediaConnectDeleteFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDescribeFlowRequest
 */
export interface MediaConnectDescribeFlowRequest {
  /**
   * @schema MediaConnectDescribeFlowRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectDescribeFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDescribeFlowRequest(obj: MediaConnectDescribeFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDescribeFlowResponse
 */
export interface MediaConnectDescribeFlowResponse {
  /**
   * @schema MediaConnectDescribeFlowResponse#Flow
   */
  readonly flow?: MediaConnectFlow;

  /**
   * @schema MediaConnectDescribeFlowResponse#Messages
   */
  readonly messages?: MediaConnectMessages;

}

/**
 * Converts an object of type 'MediaConnectDescribeFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDescribeFlowResponse(obj: MediaConnectDescribeFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Flow': toJson_MediaConnectFlow(obj.flow),
    'Messages': toJson_MediaConnectMessages(obj.messages),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDescribeOfferingRequest
 */
export interface MediaConnectDescribeOfferingRequest {
  /**
   * @schema MediaConnectDescribeOfferingRequest#OfferingArn
   */
  readonly offeringArn?: string;

}

/**
 * Converts an object of type 'MediaConnectDescribeOfferingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDescribeOfferingRequest(obj: MediaConnectDescribeOfferingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OfferingArn': obj.offeringArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDescribeOfferingResponse
 */
export interface MediaConnectDescribeOfferingResponse {
  /**
   * @schema MediaConnectDescribeOfferingResponse#Offering
   */
  readonly offering?: MediaConnectOffering;

}

/**
 * Converts an object of type 'MediaConnectDescribeOfferingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDescribeOfferingResponse(obj: MediaConnectDescribeOfferingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Offering': toJson_MediaConnectOffering(obj.offering),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDescribeReservationRequest
 */
export interface MediaConnectDescribeReservationRequest {
  /**
   * @schema MediaConnectDescribeReservationRequest#ReservationArn
   */
  readonly reservationArn?: string;

}

/**
 * Converts an object of type 'MediaConnectDescribeReservationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDescribeReservationRequest(obj: MediaConnectDescribeReservationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservationArn': obj.reservationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDescribeReservationResponse
 */
export interface MediaConnectDescribeReservationResponse {
  /**
   * @schema MediaConnectDescribeReservationResponse#Reservation
   */
  readonly reservation?: MediaConnectReservation;

}

/**
 * Converts an object of type 'MediaConnectDescribeReservationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDescribeReservationResponse(obj: MediaConnectDescribeReservationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reservation': toJson_MediaConnectReservation(obj.reservation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectGrantFlowEntitlementsRequest
 */
export interface MediaConnectGrantFlowEntitlementsRequest {
  /**
   * @schema MediaConnectGrantFlowEntitlementsRequest#Entitlements
   */
  readonly entitlements?: MediaConnectGrantEntitlementRequest[];

  /**
   * @schema MediaConnectGrantFlowEntitlementsRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectGrantFlowEntitlementsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectGrantFlowEntitlementsRequest(obj: MediaConnectGrantFlowEntitlementsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entitlements': obj.entitlements?.map(y => toJson_MediaConnectGrantEntitlementRequest(y)),
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectGrantFlowEntitlementsResponse
 */
export interface MediaConnectGrantFlowEntitlementsResponse {
  /**
   * @schema MediaConnectGrantFlowEntitlementsResponse#Entitlements
   */
  readonly entitlements?: MediaConnectEntitlement[];

  /**
   * @schema MediaConnectGrantFlowEntitlementsResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectGrantFlowEntitlementsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectGrantFlowEntitlementsResponse(obj: MediaConnectGrantFlowEntitlementsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entitlements': obj.entitlements?.map(y => toJson_MediaConnectEntitlement(y)),
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListEntitlementsRequest
 */
export interface MediaConnectListEntitlementsRequest {
  /**
   * @schema MediaConnectListEntitlementsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListEntitlementsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConnectListEntitlementsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListEntitlementsRequest(obj: MediaConnectListEntitlementsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListEntitlementsResponse
 */
export interface MediaConnectListEntitlementsResponse {
  /**
   * @schema MediaConnectListEntitlementsResponse#Entitlements
   */
  readonly entitlements?: MediaConnectListedEntitlement[];

  /**
   * @schema MediaConnectListEntitlementsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConnectListEntitlementsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListEntitlementsResponse(obj: MediaConnectListEntitlementsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entitlements': obj.entitlements?.map(y => toJson_MediaConnectListedEntitlement(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListFlowsRequest
 */
export interface MediaConnectListFlowsRequest {
  /**
   * @schema MediaConnectListFlowsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListFlowsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConnectListFlowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListFlowsRequest(obj: MediaConnectListFlowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListFlowsResponse
 */
export interface MediaConnectListFlowsResponse {
  /**
   * @schema MediaConnectListFlowsResponse#Flows
   */
  readonly flows?: MediaConnectListedFlow[];

  /**
   * @schema MediaConnectListFlowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConnectListFlowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListFlowsResponse(obj: MediaConnectListFlowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Flows': obj.flows?.map(y => toJson_MediaConnectListedFlow(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListOfferingsRequest
 */
export interface MediaConnectListOfferingsRequest {
  /**
   * @schema MediaConnectListOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConnectListOfferingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListOfferingsRequest(obj: MediaConnectListOfferingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListOfferingsResponse
 */
export interface MediaConnectListOfferingsResponse {
  /**
   * @schema MediaConnectListOfferingsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConnectListOfferingsResponse#Offerings
   */
  readonly offerings?: MediaConnectOffering[];

}

/**
 * Converts an object of type 'MediaConnectListOfferingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListOfferingsResponse(obj: MediaConnectListOfferingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Offerings': obj.offerings?.map(y => toJson_MediaConnectOffering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListReservationsRequest
 */
export interface MediaConnectListReservationsRequest {
  /**
   * @schema MediaConnectListReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema MediaConnectListReservationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaConnectListReservationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListReservationsRequest(obj: MediaConnectListReservationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListReservationsResponse
 */
export interface MediaConnectListReservationsResponse {
  /**
   * @schema MediaConnectListReservationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaConnectListReservationsResponse#Reservations
   */
  readonly reservations?: MediaConnectReservation[];

}

/**
 * Converts an object of type 'MediaConnectListReservationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListReservationsResponse(obj: MediaConnectListReservationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Reservations': obj.reservations?.map(y => toJson_MediaConnectReservation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListTagsForResourceRequest
 */
export interface MediaConnectListTagsForResourceRequest {
  /**
   * @schema MediaConnectListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'MediaConnectListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListTagsForResourceRequest(obj: MediaConnectListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListTagsForResourceResponse
 */
export interface MediaConnectListTagsForResourceResponse {
  /**
   * @schema MediaConnectListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConnectListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListTagsForResourceResponse(obj: MediaConnectListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectPurchaseOfferingRequest
 */
export interface MediaConnectPurchaseOfferingRequest {
  /**
   * @schema MediaConnectPurchaseOfferingRequest#OfferingArn
   */
  readonly offeringArn?: string;

  /**
   * @schema MediaConnectPurchaseOfferingRequest#ReservationName
   */
  readonly reservationName?: string;

  /**
   * @schema MediaConnectPurchaseOfferingRequest#Start
   */
  readonly start?: string;

}

/**
 * Converts an object of type 'MediaConnectPurchaseOfferingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectPurchaseOfferingRequest(obj: MediaConnectPurchaseOfferingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OfferingArn': obj.offeringArn,
    'ReservationName': obj.reservationName,
    'Start': obj.start,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectPurchaseOfferingResponse
 */
export interface MediaConnectPurchaseOfferingResponse {
  /**
   * @schema MediaConnectPurchaseOfferingResponse#Reservation
   */
  readonly reservation?: MediaConnectReservation;

}

/**
 * Converts an object of type 'MediaConnectPurchaseOfferingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectPurchaseOfferingResponse(obj: MediaConnectPurchaseOfferingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Reservation': toJson_MediaConnectReservation(obj.reservation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowMediaStreamRequest
 */
export interface MediaConnectRemoveFlowMediaStreamRequest {
  /**
   * @schema MediaConnectRemoveFlowMediaStreamRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowMediaStreamRequest#MediaStreamName
   */
  readonly mediaStreamName?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowMediaStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowMediaStreamRequest(obj: MediaConnectRemoveFlowMediaStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'MediaStreamName': obj.mediaStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowMediaStreamResponse
 */
export interface MediaConnectRemoveFlowMediaStreamResponse {
  /**
   * @schema MediaConnectRemoveFlowMediaStreamResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowMediaStreamResponse#MediaStreamName
   */
  readonly mediaStreamName?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowMediaStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowMediaStreamResponse(obj: MediaConnectRemoveFlowMediaStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'MediaStreamName': obj.mediaStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowOutputRequest
 */
export interface MediaConnectRemoveFlowOutputRequest {
  /**
   * @schema MediaConnectRemoveFlowOutputRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowOutputRequest#OutputArn
   */
  readonly outputArn?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowOutputRequest(obj: MediaConnectRemoveFlowOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'OutputArn': obj.outputArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowOutputResponse
 */
export interface MediaConnectRemoveFlowOutputResponse {
  /**
   * @schema MediaConnectRemoveFlowOutputResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowOutputResponse#OutputArn
   */
  readonly outputArn?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowOutputResponse(obj: MediaConnectRemoveFlowOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'OutputArn': obj.outputArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowSourceRequest
 */
export interface MediaConnectRemoveFlowSourceRequest {
  /**
   * @schema MediaConnectRemoveFlowSourceRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowSourceRequest#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowSourceRequest(obj: MediaConnectRemoveFlowSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'SourceArn': obj.sourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowSourceResponse
 */
export interface MediaConnectRemoveFlowSourceResponse {
  /**
   * @schema MediaConnectRemoveFlowSourceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowSourceResponse#SourceArn
   */
  readonly sourceArn?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowSourceResponse(obj: MediaConnectRemoveFlowSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'SourceArn': obj.sourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowVpcInterfaceRequest
 */
export interface MediaConnectRemoveFlowVpcInterfaceRequest {
  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowVpcInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowVpcInterfaceRequest(obj: MediaConnectRemoveFlowVpcInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'VpcInterfaceName': obj.vpcInterfaceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRemoveFlowVpcInterfaceResponse
 */
export interface MediaConnectRemoveFlowVpcInterfaceResponse {
  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceResponse#NonDeletedNetworkInterfaceIds
   */
  readonly nonDeletedNetworkInterfaceIds?: string[];

  /**
   * @schema MediaConnectRemoveFlowVpcInterfaceResponse#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

}

/**
 * Converts an object of type 'MediaConnectRemoveFlowVpcInterfaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRemoveFlowVpcInterfaceResponse(obj: MediaConnectRemoveFlowVpcInterfaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'NonDeletedNetworkInterfaceIds': obj.nonDeletedNetworkInterfaceIds?.map(y => y),
    'VpcInterfaceName': obj.vpcInterfaceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRevokeFlowEntitlementRequest
 */
export interface MediaConnectRevokeFlowEntitlementRequest {
  /**
   * @schema MediaConnectRevokeFlowEntitlementRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectRevokeFlowEntitlementRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectRevokeFlowEntitlementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRevokeFlowEntitlementRequest(obj: MediaConnectRevokeFlowEntitlementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntitlementArn': obj.entitlementArn,
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectRevokeFlowEntitlementResponse
 */
export interface MediaConnectRevokeFlowEntitlementResponse {
  /**
   * @schema MediaConnectRevokeFlowEntitlementResponse#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectRevokeFlowEntitlementResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectRevokeFlowEntitlementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectRevokeFlowEntitlementResponse(obj: MediaConnectRevokeFlowEntitlementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntitlementArn': obj.entitlementArn,
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectStartFlowRequest
 */
export interface MediaConnectStartFlowRequest {
  /**
   * @schema MediaConnectStartFlowRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectStartFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectStartFlowRequest(obj: MediaConnectStartFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectStartFlowResponse
 */
export interface MediaConnectStartFlowResponse {
  /**
   * @schema MediaConnectStartFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectStartFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaConnectStartFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectStartFlowResponse(obj: MediaConnectStartFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectStopFlowRequest
 */
export interface MediaConnectStopFlowRequest {
  /**
   * @schema MediaConnectStopFlowRequest#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectStopFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectStopFlowRequest(obj: MediaConnectStopFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectStopFlowResponse
 */
export interface MediaConnectStopFlowResponse {
  /**
   * @schema MediaConnectStopFlowResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectStopFlowResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaConnectStopFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectStopFlowResponse(obj: MediaConnectStopFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectTagResourceRequest
 */
export interface MediaConnectTagResourceRequest {
  /**
   * @schema MediaConnectTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaConnectTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'MediaConnectTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectTagResourceRequest(obj: MediaConnectTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUntagResourceRequest
 */
export interface MediaConnectUntagResourceRequest {
  /**
   * @schema MediaConnectUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema MediaConnectUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MediaConnectUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUntagResourceRequest(obj: MediaConnectUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowRequest
 */
export interface MediaConnectUpdateFlowRequest {
  /**
   * @schema MediaConnectUpdateFlowRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowRequest#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: MediaConnectUpdateFailoverConfig;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowRequest(obj: MediaConnectUpdateFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'SourceFailoverConfig': toJson_MediaConnectUpdateFailoverConfig(obj.sourceFailoverConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowResponse
 */
export interface MediaConnectUpdateFlowResponse {
  /**
   * @schema MediaConnectUpdateFlowResponse#Flow
   */
  readonly flow?: MediaConnectFlow;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowResponse(obj: MediaConnectUpdateFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Flow': toJson_MediaConnectFlow(obj.flow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowEntitlementRequest
 */
export interface MediaConnectUpdateFlowEntitlementRequest {
  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#Encryption
   */
  readonly encryption?: MediaConnectUpdateEncryption;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowEntitlementRequest#Subscribers
   */
  readonly subscribers?: string[];

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowEntitlementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowEntitlementRequest(obj: MediaConnectUpdateFlowEntitlementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'Encryption': toJson_MediaConnectUpdateEncryption(obj.encryption),
    'EntitlementArn': obj.entitlementArn,
    'EntitlementStatus': obj.entitlementStatus,
    'FlowArn': obj.flowArn,
    'Subscribers': obj.subscribers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowEntitlementResponse
 */
export interface MediaConnectUpdateFlowEntitlementResponse {
  /**
   * @schema MediaConnectUpdateFlowEntitlementResponse#Entitlement
   */
  readonly entitlement?: MediaConnectEntitlement;

  /**
   * @schema MediaConnectUpdateFlowEntitlementResponse#FlowArn
   */
  readonly flowArn?: string;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowEntitlementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowEntitlementResponse(obj: MediaConnectUpdateFlowEntitlementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entitlement': toJson_MediaConnectEntitlement(obj.entitlement),
    'FlowArn': obj.flowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowMediaStreamRequest
 */
export interface MediaConnectUpdateFlowMediaStreamRequest {
  /**
   * @schema MediaConnectUpdateFlowMediaStreamRequest#Attributes
   */
  readonly attributes?: MediaConnectMediaStreamAttributesRequest;

  /**
   * @schema MediaConnectUpdateFlowMediaStreamRequest#ClockRate
   */
  readonly clockRate?: number;

  /**
   * @schema MediaConnectUpdateFlowMediaStreamRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectUpdateFlowMediaStreamRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowMediaStreamRequest#MediaStreamName
   */
  readonly mediaStreamName?: string;

  /**
   * @schema MediaConnectUpdateFlowMediaStreamRequest#MediaStreamType
   */
  readonly mediaStreamType?: string;

  /**
   * @schema MediaConnectUpdateFlowMediaStreamRequest#VideoFormat
   */
  readonly videoFormat?: string;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowMediaStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowMediaStreamRequest(obj: MediaConnectUpdateFlowMediaStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': toJson_MediaConnectMediaStreamAttributesRequest(obj.attributes),
    'ClockRate': obj.clockRate,
    'Description': obj.description,
    'FlowArn': obj.flowArn,
    'MediaStreamName': obj.mediaStreamName,
    'MediaStreamType': obj.mediaStreamType,
    'VideoFormat': obj.videoFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowMediaStreamResponse
 */
export interface MediaConnectUpdateFlowMediaStreamResponse {
  /**
   * @schema MediaConnectUpdateFlowMediaStreamResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowMediaStreamResponse#MediaStream
   */
  readonly mediaStream?: MediaConnectMediaStream;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowMediaStreamResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowMediaStreamResponse(obj: MediaConnectUpdateFlowMediaStreamResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'MediaStream': toJson_MediaConnectMediaStream(obj.mediaStream),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowOutputRequest
 */
export interface MediaConnectUpdateFlowOutputRequest {
  /**
   * @schema MediaConnectUpdateFlowOutputRequest#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Encryption
   */
  readonly encryption?: MediaConnectUpdateEncryption;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#MediaStreamOutputConfigurations
   */
  readonly mediaStreamOutputConfigurations?: MediaConnectMediaStreamOutputConfigurationRequest[];

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#MinLatency
   */
  readonly minLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#OutputArn
   */
  readonly outputArn?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Port
   */
  readonly port?: number;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputRequest#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: MediaConnectVpcInterfaceAttachment;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowOutputRequest(obj: MediaConnectUpdateFlowOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CidrAllowList': obj.cidrAllowList?.map(y => y),
    'Description': obj.description,
    'Destination': obj.destination,
    'Encryption': toJson_MediaConnectUpdateEncryption(obj.encryption),
    'FlowArn': obj.flowArn,
    'MaxLatency': obj.maxLatency,
    'MediaStreamOutputConfigurations': obj.mediaStreamOutputConfigurations?.map(y => toJson_MediaConnectMediaStreamOutputConfigurationRequest(y)),
    'MinLatency': obj.minLatency,
    'OutputArn': obj.outputArn,
    'Port': obj.port,
    'Protocol': obj.protocol,
    'RemoteId': obj.remoteId,
    'SmoothingLatency': obj.smoothingLatency,
    'StreamId': obj.streamId,
    'VpcInterfaceAttachment': toJson_MediaConnectVpcInterfaceAttachment(obj.vpcInterfaceAttachment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowOutputResponse
 */
export interface MediaConnectUpdateFlowOutputResponse {
  /**
   * @schema MediaConnectUpdateFlowOutputResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowOutputResponse#Output
   */
  readonly output?: MediaConnectOutput;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowOutputResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowOutputResponse(obj: MediaConnectUpdateFlowOutputResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Output': toJson_MediaConnectOutput(obj.output),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowSourceRequest
 */
export interface MediaConnectUpdateFlowSourceRequest {
  /**
   * @schema MediaConnectUpdateFlowSourceRequest#Decryption
   */
  readonly decryption?: MediaConnectUpdateEncryption;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#MaxSyncBuffer
   */
  readonly maxSyncBuffer?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#MediaStreamSourceConfigurations
   */
  readonly mediaStreamSourceConfigurations?: MediaConnectMediaStreamSourceConfigurationRequest[];

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#MinLatency
   */
  readonly minLatency?: number;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceRequest#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowSourceRequest(obj: MediaConnectUpdateFlowSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Decryption': toJson_MediaConnectUpdateEncryption(obj.decryption),
    'Description': obj.description,
    'EntitlementArn': obj.entitlementArn,
    'FlowArn': obj.flowArn,
    'IngestPort': obj.ingestPort,
    'MaxBitrate': obj.maxBitrate,
    'MaxLatency': obj.maxLatency,
    'MaxSyncBuffer': obj.maxSyncBuffer,
    'MediaStreamSourceConfigurations': obj.mediaStreamSourceConfigurations?.map(y => toJson_MediaConnectMediaStreamSourceConfigurationRequest(y)),
    'MinLatency': obj.minLatency,
    'Protocol': obj.protocol,
    'SourceArn': obj.sourceArn,
    'StreamId': obj.streamId,
    'VpcInterfaceName': obj.vpcInterfaceName,
    'WhitelistCidr': obj.whitelistCidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFlowSourceResponse
 */
export interface MediaConnectUpdateFlowSourceResponse {
  /**
   * @schema MediaConnectUpdateFlowSourceResponse#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectUpdateFlowSourceResponse#Source
   */
  readonly source?: MediaConnectSource;

}

/**
 * Converts an object of type 'MediaConnectUpdateFlowSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFlowSourceResponse(obj: MediaConnectUpdateFlowSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FlowArn': obj.flowArn,
    'Source': toJson_MediaConnectSource(obj.source),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddMediaStreamRequest
 */
export interface MediaConnectAddMediaStreamRequest {
  /**
   * @schema MediaConnectAddMediaStreamRequest#Attributes
   */
  readonly attributes?: MediaConnectMediaStreamAttributesRequest;

  /**
   * @schema MediaConnectAddMediaStreamRequest#ClockRate
   */
  readonly clockRate?: number;

  /**
   * @schema MediaConnectAddMediaStreamRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectAddMediaStreamRequest#MediaStreamId
   */
  readonly mediaStreamId?: number;

  /**
   * @schema MediaConnectAddMediaStreamRequest#MediaStreamName
   */
  readonly mediaStreamName?: string;

  /**
   * @schema MediaConnectAddMediaStreamRequest#MediaStreamType
   */
  readonly mediaStreamType?: string;

  /**
   * @schema MediaConnectAddMediaStreamRequest#VideoFormat
   */
  readonly videoFormat?: string;

}

/**
 * Converts an object of type 'MediaConnectAddMediaStreamRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddMediaStreamRequest(obj: MediaConnectAddMediaStreamRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': toJson_MediaConnectMediaStreamAttributesRequest(obj.attributes),
    'ClockRate': obj.clockRate,
    'Description': obj.description,
    'MediaStreamId': obj.mediaStreamId,
    'MediaStreamName': obj.mediaStreamName,
    'MediaStreamType': obj.mediaStreamType,
    'VideoFormat': obj.videoFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMediaStream
 */
export interface MediaConnectMediaStream {
  /**
   * @schema MediaConnectMediaStream#Attributes
   */
  readonly attributes?: MediaConnectMediaStreamAttributes;

  /**
   * @schema MediaConnectMediaStream#ClockRate
   */
  readonly clockRate?: number;

  /**
   * @schema MediaConnectMediaStream#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectMediaStream#Fmt
   */
  readonly fmt?: number;

  /**
   * @schema MediaConnectMediaStream#MediaStreamId
   */
  readonly mediaStreamId?: number;

  /**
   * @schema MediaConnectMediaStream#MediaStreamName
   */
  readonly mediaStreamName?: string;

  /**
   * @schema MediaConnectMediaStream#MediaStreamType
   */
  readonly mediaStreamType?: string;

  /**
   * @schema MediaConnectMediaStream#VideoFormat
   */
  readonly videoFormat?: string;

}

/**
 * Converts an object of type 'MediaConnectMediaStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMediaStream(obj: MediaConnectMediaStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': toJson_MediaConnectMediaStreamAttributes(obj.attributes),
    'ClockRate': obj.clockRate,
    'Description': obj.description,
    'Fmt': obj.fmt,
    'MediaStreamId': obj.mediaStreamId,
    'MediaStreamName': obj.mediaStreamName,
    'MediaStreamType': obj.mediaStreamType,
    'VideoFormat': obj.videoFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectAddOutputRequest
 */
export interface MediaConnectAddOutputRequest {
  /**
   * @schema MediaConnectAddOutputRequest#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema MediaConnectAddOutputRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectAddOutputRequest#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConnectAddOutputRequest#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectAddOutputRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectAddOutputRequest#MediaStreamOutputConfigurations
   */
  readonly mediaStreamOutputConfigurations?: MediaConnectMediaStreamOutputConfigurationRequest[];

  /**
   * @schema MediaConnectAddOutputRequest#MinLatency
   */
  readonly minLatency?: number;

  /**
   * @schema MediaConnectAddOutputRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectAddOutputRequest#Port
   */
  readonly port?: number;

  /**
   * @schema MediaConnectAddOutputRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectAddOutputRequest#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema MediaConnectAddOutputRequest#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema MediaConnectAddOutputRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectAddOutputRequest#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: MediaConnectVpcInterfaceAttachment;

}

/**
 * Converts an object of type 'MediaConnectAddOutputRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectAddOutputRequest(obj: MediaConnectAddOutputRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CidrAllowList': obj.cidrAllowList?.map(y => y),
    'Description': obj.description,
    'Destination': obj.destination,
    'Encryption': toJson_MediaConnectEncryption(obj.encryption),
    'MaxLatency': obj.maxLatency,
    'MediaStreamOutputConfigurations': obj.mediaStreamOutputConfigurations?.map(y => toJson_MediaConnectMediaStreamOutputConfigurationRequest(y)),
    'MinLatency': obj.minLatency,
    'Name': obj.name,
    'Port': obj.port,
    'Protocol': obj.protocol,
    'RemoteId': obj.remoteId,
    'SmoothingLatency': obj.smoothingLatency,
    'StreamId': obj.streamId,
    'VpcInterfaceAttachment': toJson_MediaConnectVpcInterfaceAttachment(obj.vpcInterfaceAttachment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectOutput
 */
export interface MediaConnectOutput {
  /**
   * @schema MediaConnectOutput#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectOutput#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectOutput#Destination
   */
  readonly destination?: string;

  /**
   * @schema MediaConnectOutput#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectOutput#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectOutput#ListenerAddress
   */
  readonly listenerAddress?: string;

  /**
   * @schema MediaConnectOutput#MediaLiveInputArn
   */
  readonly mediaLiveInputArn?: string;

  /**
   * @schema MediaConnectOutput#MediaStreamOutputConfigurations
   */
  readonly mediaStreamOutputConfigurations?: MediaConnectMediaStreamOutputConfiguration[];

  /**
   * @schema MediaConnectOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectOutput#OutputArn
   */
  readonly outputArn?: string;

  /**
   * @schema MediaConnectOutput#Port
   */
  readonly port?: number;

  /**
   * @schema MediaConnectOutput#Transport
   */
  readonly transport?: MediaConnectTransport;

  /**
   * @schema MediaConnectOutput#VpcInterfaceAttachment
   */
  readonly vpcInterfaceAttachment?: MediaConnectVpcInterfaceAttachment;

}

/**
 * Converts an object of type 'MediaConnectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectOutput(obj: MediaConnectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataTransferSubscriberFeePercent': obj.dataTransferSubscriberFeePercent,
    'Description': obj.description,
    'Destination': obj.destination,
    'Encryption': toJson_MediaConnectEncryption(obj.encryption),
    'EntitlementArn': obj.entitlementArn,
    'ListenerAddress': obj.listenerAddress,
    'MediaLiveInputArn': obj.mediaLiveInputArn,
    'MediaStreamOutputConfigurations': obj.mediaStreamOutputConfigurations?.map(y => toJson_MediaConnectMediaStreamOutputConfiguration(y)),
    'Name': obj.name,
    'OutputArn': obj.outputArn,
    'Port': obj.port,
    'Transport': toJson_MediaConnectTransport(obj.transport),
    'VpcInterfaceAttachment': toJson_MediaConnectVpcInterfaceAttachment(obj.vpcInterfaceAttachment),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectSetSourceRequest
 */
export interface MediaConnectSetSourceRequest {
  /**
   * @schema MediaConnectSetSourceRequest#Decryption
   */
  readonly decryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectSetSourceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectSetSourceRequest#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectSetSourceRequest#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema MediaConnectSetSourceRequest#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConnectSetSourceRequest#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectSetSourceRequest#MaxSyncBuffer
   */
  readonly maxSyncBuffer?: number;

  /**
   * @schema MediaConnectSetSourceRequest#MediaStreamSourceConfigurations
   */
  readonly mediaStreamSourceConfigurations?: MediaConnectMediaStreamSourceConfigurationRequest[];

  /**
   * @schema MediaConnectSetSourceRequest#MinLatency
   */
  readonly minLatency?: number;

  /**
   * @schema MediaConnectSetSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectSetSourceRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectSetSourceRequest#StreamId
   */
  readonly streamId?: string;

  /**
   * @schema MediaConnectSetSourceRequest#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema MediaConnectSetSourceRequest#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * Converts an object of type 'MediaConnectSetSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectSetSourceRequest(obj: MediaConnectSetSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Decryption': toJson_MediaConnectEncryption(obj.decryption),
    'Description': obj.description,
    'EntitlementArn': obj.entitlementArn,
    'IngestPort': obj.ingestPort,
    'MaxBitrate': obj.maxBitrate,
    'MaxLatency': obj.maxLatency,
    'MaxSyncBuffer': obj.maxSyncBuffer,
    'MediaStreamSourceConfigurations': obj.mediaStreamSourceConfigurations?.map(y => toJson_MediaConnectMediaStreamSourceConfigurationRequest(y)),
    'MinLatency': obj.minLatency,
    'Name': obj.name,
    'Protocol': obj.protocol,
    'StreamId': obj.streamId,
    'VpcInterfaceName': obj.vpcInterfaceName,
    'WhitelistCidr': obj.whitelistCidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectSource
 */
export interface MediaConnectSource {
  /**
   * @schema MediaConnectSource#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectSource#Decryption
   */
  readonly decryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectSource#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectSource#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectSource#IngestIp
   */
  readonly ingestIp?: string;

  /**
   * @schema MediaConnectSource#IngestPort
   */
  readonly ingestPort?: number;

  /**
   * @schema MediaConnectSource#MediaStreamSourceConfigurations
   */
  readonly mediaStreamSourceConfigurations?: MediaConnectMediaStreamSourceConfiguration[];

  /**
   * @schema MediaConnectSource#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectSource#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema MediaConnectSource#Transport
   */
  readonly transport?: MediaConnectTransport;

  /**
   * @schema MediaConnectSource#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

  /**
   * @schema MediaConnectSource#WhitelistCidr
   */
  readonly whitelistCidr?: string;

}

/**
 * Converts an object of type 'MediaConnectSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectSource(obj: MediaConnectSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataTransferSubscriberFeePercent': obj.dataTransferSubscriberFeePercent,
    'Decryption': toJson_MediaConnectEncryption(obj.decryption),
    'Description': obj.description,
    'EntitlementArn': obj.entitlementArn,
    'IngestIp': obj.ingestIp,
    'IngestPort': obj.ingestPort,
    'MediaStreamSourceConfigurations': obj.mediaStreamSourceConfigurations?.map(y => toJson_MediaConnectMediaStreamSourceConfiguration(y)),
    'Name': obj.name,
    'SourceArn': obj.sourceArn,
    'Transport': toJson_MediaConnectTransport(obj.transport),
    'VpcInterfaceName': obj.vpcInterfaceName,
    'WhitelistCidr': obj.whitelistCidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectVpcInterfaceRequest
 */
export interface MediaConnectVpcInterfaceRequest {
  /**
   * @schema MediaConnectVpcInterfaceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectVpcInterfaceRequest#NetworkInterfaceType
   */
  readonly networkInterfaceType?: string;

  /**
   * @schema MediaConnectVpcInterfaceRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaConnectVpcInterfaceRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema MediaConnectVpcInterfaceRequest#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * Converts an object of type 'MediaConnectVpcInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectVpcInterfaceRequest(obj: MediaConnectVpcInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'NetworkInterfaceType': obj.networkInterfaceType,
    'RoleArn': obj.roleArn,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetId': obj.subnetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectVpcInterface
 */
export interface MediaConnectVpcInterface {
  /**
   * @schema MediaConnectVpcInterface#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectVpcInterface#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema MediaConnectVpcInterface#NetworkInterfaceType
   */
  readonly networkInterfaceType?: string;

  /**
   * @schema MediaConnectVpcInterface#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaConnectVpcInterface#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema MediaConnectVpcInterface#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * Converts an object of type 'MediaConnectVpcInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectVpcInterface(obj: MediaConnectVpcInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'NetworkInterfaceIds': obj.networkInterfaceIds?.map(y => y),
    'NetworkInterfaceType': obj.networkInterfaceType,
    'RoleArn': obj.roleArn,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SubnetId': obj.subnetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectGrantEntitlementRequest
 */
export interface MediaConnectGrantEntitlementRequest {
  /**
   * @schema MediaConnectGrantEntitlementRequest#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectGrantEntitlementRequest#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectGrantEntitlementRequest#Subscribers
   */
  readonly subscribers?: string[];

}

/**
 * Converts an object of type 'MediaConnectGrantEntitlementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectGrantEntitlementRequest(obj: MediaConnectGrantEntitlementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataTransferSubscriberFeePercent': obj.dataTransferSubscriberFeePercent,
    'Description': obj.description,
    'Encryption': toJson_MediaConnectEncryption(obj.encryption),
    'EntitlementStatus': obj.entitlementStatus,
    'Name': obj.name,
    'Subscribers': obj.subscribers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectFailoverConfig
 */
export interface MediaConnectFailoverConfig {
  /**
   * @schema MediaConnectFailoverConfig#FailoverMode
   */
  readonly failoverMode?: string;

  /**
   * @schema MediaConnectFailoverConfig#RecoveryWindow
   */
  readonly recoveryWindow?: number;

  /**
   * @schema MediaConnectFailoverConfig#SourcePriority
   */
  readonly sourcePriority?: MediaConnectSourcePriority;

  /**
   * @schema MediaConnectFailoverConfig#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'MediaConnectFailoverConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectFailoverConfig(obj: MediaConnectFailoverConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailoverMode': obj.failoverMode,
    'RecoveryWindow': obj.recoveryWindow,
    'SourcePriority': toJson_MediaConnectSourcePriority(obj.sourcePriority),
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectFlow
 */
export interface MediaConnectFlow {
  /**
   * @schema MediaConnectFlow#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema MediaConnectFlow#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectFlow#EgressIp
   */
  readonly egressIp?: string;

  /**
   * @schema MediaConnectFlow#Entitlements
   */
  readonly entitlements?: MediaConnectEntitlement[];

  /**
   * @schema MediaConnectFlow#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectFlow#MediaStreams
   */
  readonly mediaStreams?: MediaConnectMediaStream[];

  /**
   * @schema MediaConnectFlow#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectFlow#Outputs
   */
  readonly outputs?: MediaConnectOutput[];

  /**
   * @schema MediaConnectFlow#Source
   */
  readonly source?: MediaConnectSource;

  /**
   * @schema MediaConnectFlow#SourceFailoverConfig
   */
  readonly sourceFailoverConfig?: MediaConnectFailoverConfig;

  /**
   * @schema MediaConnectFlow#Sources
   */
  readonly sources?: MediaConnectSource[];

  /**
   * @schema MediaConnectFlow#Status
   */
  readonly status?: string;

  /**
   * @schema MediaConnectFlow#VpcInterfaces
   */
  readonly vpcInterfaces?: MediaConnectVpcInterface[];

}

/**
 * Converts an object of type 'MediaConnectFlow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectFlow(obj: MediaConnectFlow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZone': obj.availabilityZone,
    'Description': obj.description,
    'EgressIp': obj.egressIp,
    'Entitlements': obj.entitlements?.map(y => toJson_MediaConnectEntitlement(y)),
    'FlowArn': obj.flowArn,
    'MediaStreams': obj.mediaStreams?.map(y => toJson_MediaConnectMediaStream(y)),
    'Name': obj.name,
    'Outputs': obj.outputs?.map(y => toJson_MediaConnectOutput(y)),
    'Source': toJson_MediaConnectSource(obj.source),
    'SourceFailoverConfig': toJson_MediaConnectFailoverConfig(obj.sourceFailoverConfig),
    'Sources': obj.sources?.map(y => toJson_MediaConnectSource(y)),
    'Status': obj.status,
    'VpcInterfaces': obj.vpcInterfaces?.map(y => toJson_MediaConnectVpcInterface(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMessages
 */
export interface MediaConnectMessages {
  /**
   * @schema MediaConnectMessages#Errors
   */
  readonly errors?: string[];

}

/**
 * Converts an object of type 'MediaConnectMessages' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMessages(obj: MediaConnectMessages | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectOffering
 */
export interface MediaConnectOffering {
  /**
   * @schema MediaConnectOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema MediaConnectOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaConnectOffering#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema MediaConnectOffering#OfferingArn
   */
  readonly offeringArn?: string;

  /**
   * @schema MediaConnectOffering#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema MediaConnectOffering#PricePerUnit
   */
  readonly pricePerUnit?: string;

  /**
   * @schema MediaConnectOffering#PriceUnits
   */
  readonly priceUnits?: string;

  /**
   * @schema MediaConnectOffering#ResourceSpecification
   */
  readonly resourceSpecification?: MediaConnectResourceSpecification;

}

/**
 * Converts an object of type 'MediaConnectOffering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectOffering(obj: MediaConnectOffering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CurrencyCode': obj.currencyCode,
    'Duration': obj.duration,
    'DurationUnits': obj.durationUnits,
    'OfferingArn': obj.offeringArn,
    'OfferingDescription': obj.offeringDescription,
    'PricePerUnit': obj.pricePerUnit,
    'PriceUnits': obj.priceUnits,
    'ResourceSpecification': toJson_MediaConnectResourceSpecification(obj.resourceSpecification),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectReservation
 */
export interface MediaConnectReservation {
  /**
   * @schema MediaConnectReservation#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema MediaConnectReservation#Duration
   */
  readonly duration?: number;

  /**
   * @schema MediaConnectReservation#DurationUnits
   */
  readonly durationUnits?: string;

  /**
   * @schema MediaConnectReservation#End
   */
  readonly end?: string;

  /**
   * @schema MediaConnectReservation#OfferingArn
   */
  readonly offeringArn?: string;

  /**
   * @schema MediaConnectReservation#OfferingDescription
   */
  readonly offeringDescription?: string;

  /**
   * @schema MediaConnectReservation#PricePerUnit
   */
  readonly pricePerUnit?: string;

  /**
   * @schema MediaConnectReservation#PriceUnits
   */
  readonly priceUnits?: string;

  /**
   * @schema MediaConnectReservation#ReservationArn
   */
  readonly reservationArn?: string;

  /**
   * @schema MediaConnectReservation#ReservationName
   */
  readonly reservationName?: string;

  /**
   * @schema MediaConnectReservation#ReservationState
   */
  readonly reservationState?: string;

  /**
   * @schema MediaConnectReservation#ResourceSpecification
   */
  readonly resourceSpecification?: MediaConnectResourceSpecification;

  /**
   * @schema MediaConnectReservation#Start
   */
  readonly start?: string;

}

/**
 * Converts an object of type 'MediaConnectReservation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectReservation(obj: MediaConnectReservation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CurrencyCode': obj.currencyCode,
    'Duration': obj.duration,
    'DurationUnits': obj.durationUnits,
    'End': obj.end,
    'OfferingArn': obj.offeringArn,
    'OfferingDescription': obj.offeringDescription,
    'PricePerUnit': obj.pricePerUnit,
    'PriceUnits': obj.priceUnits,
    'ReservationArn': obj.reservationArn,
    'ReservationName': obj.reservationName,
    'ReservationState': obj.reservationState,
    'ResourceSpecification': toJson_MediaConnectResourceSpecification(obj.resourceSpecification),
    'Start': obj.start,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectEntitlement
 */
export interface MediaConnectEntitlement {
  /**
   * @schema MediaConnectEntitlement#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectEntitlement#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectEntitlement#Encryption
   */
  readonly encryption?: MediaConnectEncryption;

  /**
   * @schema MediaConnectEntitlement#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectEntitlement#EntitlementStatus
   */
  readonly entitlementStatus?: string;

  /**
   * @schema MediaConnectEntitlement#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectEntitlement#Subscribers
   */
  readonly subscribers?: string[];

}

/**
 * Converts an object of type 'MediaConnectEntitlement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectEntitlement(obj: MediaConnectEntitlement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataTransferSubscriberFeePercent': obj.dataTransferSubscriberFeePercent,
    'Description': obj.description,
    'Encryption': toJson_MediaConnectEncryption(obj.encryption),
    'EntitlementArn': obj.entitlementArn,
    'EntitlementStatus': obj.entitlementStatus,
    'Name': obj.name,
    'Subscribers': obj.subscribers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListedEntitlement
 */
export interface MediaConnectListedEntitlement {
  /**
   * @schema MediaConnectListedEntitlement#DataTransferSubscriberFeePercent
   */
  readonly dataTransferSubscriberFeePercent?: number;

  /**
   * @schema MediaConnectListedEntitlement#EntitlementArn
   */
  readonly entitlementArn?: string;

  /**
   * @schema MediaConnectListedEntitlement#EntitlementName
   */
  readonly entitlementName?: string;

}

/**
 * Converts an object of type 'MediaConnectListedEntitlement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListedEntitlement(obj: MediaConnectListedEntitlement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataTransferSubscriberFeePercent': obj.dataTransferSubscriberFeePercent,
    'EntitlementArn': obj.entitlementArn,
    'EntitlementName': obj.entitlementName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectListedFlow
 */
export interface MediaConnectListedFlow {
  /**
   * @schema MediaConnectListedFlow#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema MediaConnectListedFlow#Description
   */
  readonly description?: string;

  /**
   * @schema MediaConnectListedFlow#FlowArn
   */
  readonly flowArn?: string;

  /**
   * @schema MediaConnectListedFlow#Name
   */
  readonly name?: string;

  /**
   * @schema MediaConnectListedFlow#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema MediaConnectListedFlow#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'MediaConnectListedFlow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectListedFlow(obj: MediaConnectListedFlow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityZone': obj.availabilityZone,
    'Description': obj.description,
    'FlowArn': obj.flowArn,
    'Name': obj.name,
    'SourceType': obj.sourceType,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateFailoverConfig
 */
export interface MediaConnectUpdateFailoverConfig {
  /**
   * @schema MediaConnectUpdateFailoverConfig#FailoverMode
   */
  readonly failoverMode?: string;

  /**
   * @schema MediaConnectUpdateFailoverConfig#RecoveryWindow
   */
  readonly recoveryWindow?: number;

  /**
   * @schema MediaConnectUpdateFailoverConfig#SourcePriority
   */
  readonly sourcePriority?: MediaConnectSourcePriority;

  /**
   * @schema MediaConnectUpdateFailoverConfig#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'MediaConnectUpdateFailoverConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateFailoverConfig(obj: MediaConnectUpdateFailoverConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailoverMode': obj.failoverMode,
    'RecoveryWindow': obj.recoveryWindow,
    'SourcePriority': toJson_MediaConnectSourcePriority(obj.sourcePriority),
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectUpdateEncryption
 */
export interface MediaConnectUpdateEncryption {
  /**
   * @schema MediaConnectUpdateEncryption#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaConnectUpdateEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConnectUpdateEncryption#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema MediaConnectUpdateEncryption#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema MediaConnectUpdateEncryption#Region
   */
  readonly region?: string;

  /**
   * @schema MediaConnectUpdateEncryption#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConnectUpdateEncryption#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaConnectUpdateEncryption#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema MediaConnectUpdateEncryption#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaConnectUpdateEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectUpdateEncryption(obj: MediaConnectUpdateEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Algorithm': obj.algorithm,
    'ConstantInitializationVector': obj.constantInitializationVector,
    'DeviceId': obj.deviceId,
    'KeyType': obj.keyType,
    'Region': obj.region,
    'ResourceId': obj.resourceId,
    'RoleArn': obj.roleArn,
    'SecretArn': obj.secretArn,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMediaStreamAttributesRequest
 */
export interface MediaConnectMediaStreamAttributesRequest {
  /**
   * @schema MediaConnectMediaStreamAttributesRequest#Fmtp
   */
  readonly fmtp?: MediaConnectFmtpRequest;

  /**
   * @schema MediaConnectMediaStreamAttributesRequest#Lang
   */
  readonly lang?: string;

}

/**
 * Converts an object of type 'MediaConnectMediaStreamAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMediaStreamAttributesRequest(obj: MediaConnectMediaStreamAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fmtp': toJson_MediaConnectFmtpRequest(obj.fmtp),
    'Lang': obj.lang,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMediaStreamOutputConfigurationRequest
 */
export interface MediaConnectMediaStreamOutputConfigurationRequest {
  /**
   * @schema MediaConnectMediaStreamOutputConfigurationRequest#DestinationConfigurations
   */
  readonly destinationConfigurations?: MediaConnectDestinationConfigurationRequest[];

  /**
   * @schema MediaConnectMediaStreamOutputConfigurationRequest#EncodingName
   */
  readonly encodingName?: string;

  /**
   * @schema MediaConnectMediaStreamOutputConfigurationRequest#EncodingParameters
   */
  readonly encodingParameters?: MediaConnectEncodingParametersRequest;

  /**
   * @schema MediaConnectMediaStreamOutputConfigurationRequest#MediaStreamName
   */
  readonly mediaStreamName?: string;

}

/**
 * Converts an object of type 'MediaConnectMediaStreamOutputConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMediaStreamOutputConfigurationRequest(obj: MediaConnectMediaStreamOutputConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationConfigurations': obj.destinationConfigurations?.map(y => toJson_MediaConnectDestinationConfigurationRequest(y)),
    'EncodingName': obj.encodingName,
    'EncodingParameters': toJson_MediaConnectEncodingParametersRequest(obj.encodingParameters),
    'MediaStreamName': obj.mediaStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectVpcInterfaceAttachment
 */
export interface MediaConnectVpcInterfaceAttachment {
  /**
   * @schema MediaConnectVpcInterfaceAttachment#VpcInterfaceName
   */
  readonly vpcInterfaceName?: string;

}

/**
 * Converts an object of type 'MediaConnectVpcInterfaceAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectVpcInterfaceAttachment(obj: MediaConnectVpcInterfaceAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcInterfaceName': obj.vpcInterfaceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMediaStreamSourceConfigurationRequest
 */
export interface MediaConnectMediaStreamSourceConfigurationRequest {
  /**
   * @schema MediaConnectMediaStreamSourceConfigurationRequest#EncodingName
   */
  readonly encodingName?: string;

  /**
   * @schema MediaConnectMediaStreamSourceConfigurationRequest#InputConfigurations
   */
  readonly inputConfigurations?: MediaConnectInputConfigurationRequest[];

  /**
   * @schema MediaConnectMediaStreamSourceConfigurationRequest#MediaStreamName
   */
  readonly mediaStreamName?: string;

}

/**
 * Converts an object of type 'MediaConnectMediaStreamSourceConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMediaStreamSourceConfigurationRequest(obj: MediaConnectMediaStreamSourceConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncodingName': obj.encodingName,
    'InputConfigurations': obj.inputConfigurations?.map(y => toJson_MediaConnectInputConfigurationRequest(y)),
    'MediaStreamName': obj.mediaStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMediaStreamAttributes
 */
export interface MediaConnectMediaStreamAttributes {
  /**
   * @schema MediaConnectMediaStreamAttributes#Fmtp
   */
  readonly fmtp?: MediaConnectFmtp;

  /**
   * @schema MediaConnectMediaStreamAttributes#Lang
   */
  readonly lang?: string;

}

/**
 * Converts an object of type 'MediaConnectMediaStreamAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMediaStreamAttributes(obj: MediaConnectMediaStreamAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Fmtp': toJson_MediaConnectFmtp(obj.fmtp),
    'Lang': obj.lang,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectEncryption
 */
export interface MediaConnectEncryption {
  /**
   * @schema MediaConnectEncryption#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MediaConnectEncryption#ConstantInitializationVector
   */
  readonly constantInitializationVector?: string;

  /**
   * @schema MediaConnectEncryption#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema MediaConnectEncryption#KeyType
   */
  readonly keyType?: string;

  /**
   * @schema MediaConnectEncryption#Region
   */
  readonly region?: string;

  /**
   * @schema MediaConnectEncryption#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MediaConnectEncryption#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema MediaConnectEncryption#SecretArn
   */
  readonly secretArn?: string;

  /**
   * @schema MediaConnectEncryption#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'MediaConnectEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectEncryption(obj: MediaConnectEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Algorithm': obj.algorithm,
    'ConstantInitializationVector': obj.constantInitializationVector,
    'DeviceId': obj.deviceId,
    'KeyType': obj.keyType,
    'Region': obj.region,
    'ResourceId': obj.resourceId,
    'RoleArn': obj.roleArn,
    'SecretArn': obj.secretArn,
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMediaStreamOutputConfiguration
 */
export interface MediaConnectMediaStreamOutputConfiguration {
  /**
   * @schema MediaConnectMediaStreamOutputConfiguration#DestinationConfigurations
   */
  readonly destinationConfigurations?: MediaConnectDestinationConfiguration[];

  /**
   * @schema MediaConnectMediaStreamOutputConfiguration#EncodingName
   */
  readonly encodingName?: string;

  /**
   * @schema MediaConnectMediaStreamOutputConfiguration#EncodingParameters
   */
  readonly encodingParameters?: MediaConnectEncodingParameters;

  /**
   * @schema MediaConnectMediaStreamOutputConfiguration#MediaStreamName
   */
  readonly mediaStreamName?: string;

}

/**
 * Converts an object of type 'MediaConnectMediaStreamOutputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMediaStreamOutputConfiguration(obj: MediaConnectMediaStreamOutputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationConfigurations': obj.destinationConfigurations?.map(y => toJson_MediaConnectDestinationConfiguration(y)),
    'EncodingName': obj.encodingName,
    'EncodingParameters': toJson_MediaConnectEncodingParameters(obj.encodingParameters),
    'MediaStreamName': obj.mediaStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectTransport
 */
export interface MediaConnectTransport {
  /**
   * @schema MediaConnectTransport#CidrAllowList
   */
  readonly cidrAllowList?: string[];

  /**
   * @schema MediaConnectTransport#MaxBitrate
   */
  readonly maxBitrate?: number;

  /**
   * @schema MediaConnectTransport#MaxLatency
   */
  readonly maxLatency?: number;

  /**
   * @schema MediaConnectTransport#MaxSyncBuffer
   */
  readonly maxSyncBuffer?: number;

  /**
   * @schema MediaConnectTransport#MinLatency
   */
  readonly minLatency?: number;

  /**
   * @schema MediaConnectTransport#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema MediaConnectTransport#RemoteId
   */
  readonly remoteId?: string;

  /**
   * @schema MediaConnectTransport#SmoothingLatency
   */
  readonly smoothingLatency?: number;

  /**
   * @schema MediaConnectTransport#StreamId
   */
  readonly streamId?: string;

}

/**
 * Converts an object of type 'MediaConnectTransport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectTransport(obj: MediaConnectTransport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CidrAllowList': obj.cidrAllowList?.map(y => y),
    'MaxBitrate': obj.maxBitrate,
    'MaxLatency': obj.maxLatency,
    'MaxSyncBuffer': obj.maxSyncBuffer,
    'MinLatency': obj.minLatency,
    'Protocol': obj.protocol,
    'RemoteId': obj.remoteId,
    'SmoothingLatency': obj.smoothingLatency,
    'StreamId': obj.streamId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectMediaStreamSourceConfiguration
 */
export interface MediaConnectMediaStreamSourceConfiguration {
  /**
   * @schema MediaConnectMediaStreamSourceConfiguration#EncodingName
   */
  readonly encodingName?: string;

  /**
   * @schema MediaConnectMediaStreamSourceConfiguration#InputConfigurations
   */
  readonly inputConfigurations?: MediaConnectInputConfiguration[];

  /**
   * @schema MediaConnectMediaStreamSourceConfiguration#MediaStreamName
   */
  readonly mediaStreamName?: string;

}

/**
 * Converts an object of type 'MediaConnectMediaStreamSourceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectMediaStreamSourceConfiguration(obj: MediaConnectMediaStreamSourceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncodingName': obj.encodingName,
    'InputConfigurations': obj.inputConfigurations?.map(y => toJson_MediaConnectInputConfiguration(y)),
    'MediaStreamName': obj.mediaStreamName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectSourcePriority
 */
export interface MediaConnectSourcePriority {
  /**
   * @schema MediaConnectSourcePriority#PrimarySource
   */
  readonly primarySource?: string;

}

/**
 * Converts an object of type 'MediaConnectSourcePriority' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectSourcePriority(obj: MediaConnectSourcePriority | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrimarySource': obj.primarySource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectResourceSpecification
 */
export interface MediaConnectResourceSpecification {
  /**
   * @schema MediaConnectResourceSpecification#ReservedBitrate
   */
  readonly reservedBitrate?: number;

  /**
   * @schema MediaConnectResourceSpecification#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'MediaConnectResourceSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectResourceSpecification(obj: MediaConnectResourceSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReservedBitrate': obj.reservedBitrate,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectFmtpRequest
 */
export interface MediaConnectFmtpRequest {
  /**
   * @schema MediaConnectFmtpRequest#ChannelOrder
   */
  readonly channelOrder?: string;

  /**
   * @schema MediaConnectFmtpRequest#Colorimetry
   */
  readonly colorimetry?: string;

  /**
   * @schema MediaConnectFmtpRequest#ExactFramerate
   */
  readonly exactFramerate?: string;

  /**
   * @schema MediaConnectFmtpRequest#Par
   */
  readonly par?: string;

  /**
   * @schema MediaConnectFmtpRequest#Range
   */
  readonly range?: string;

  /**
   * @schema MediaConnectFmtpRequest#ScanMode
   */
  readonly scanMode?: string;

  /**
   * @schema MediaConnectFmtpRequest#Tcs
   */
  readonly tcs?: string;

}

/**
 * Converts an object of type 'MediaConnectFmtpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectFmtpRequest(obj: MediaConnectFmtpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelOrder': obj.channelOrder,
    'Colorimetry': obj.colorimetry,
    'ExactFramerate': obj.exactFramerate,
    'Par': obj.par,
    'Range': obj.range,
    'ScanMode': obj.scanMode,
    'Tcs': obj.tcs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDestinationConfigurationRequest
 */
export interface MediaConnectDestinationConfigurationRequest {
  /**
   * @schema MediaConnectDestinationConfigurationRequest#DestinationIp
   */
  readonly destinationIp?: string;

  /**
   * @schema MediaConnectDestinationConfigurationRequest#DestinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema MediaConnectDestinationConfigurationRequest#Interface
   */
  readonly interface?: MediaConnectInterfaceRequest;

}

/**
 * Converts an object of type 'MediaConnectDestinationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDestinationConfigurationRequest(obj: MediaConnectDestinationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationIp': obj.destinationIp,
    'DestinationPort': obj.destinationPort,
    'Interface': toJson_MediaConnectInterfaceRequest(obj.interface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectEncodingParametersRequest
 */
export interface MediaConnectEncodingParametersRequest {
  /**
   * @schema MediaConnectEncodingParametersRequest#CompressionFactor
   */
  readonly compressionFactor?: number;

  /**
   * @schema MediaConnectEncodingParametersRequest#EncoderProfile
   */
  readonly encoderProfile?: string;

}

/**
 * Converts an object of type 'MediaConnectEncodingParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectEncodingParametersRequest(obj: MediaConnectEncodingParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompressionFactor': obj.compressionFactor,
    'EncoderProfile': obj.encoderProfile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectInputConfigurationRequest
 */
export interface MediaConnectInputConfigurationRequest {
  /**
   * @schema MediaConnectInputConfigurationRequest#InputPort
   */
  readonly inputPort?: number;

  /**
   * @schema MediaConnectInputConfigurationRequest#Interface
   */
  readonly interface?: MediaConnectInterfaceRequest;

}

/**
 * Converts an object of type 'MediaConnectInputConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectInputConfigurationRequest(obj: MediaConnectInputConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputPort': obj.inputPort,
    'Interface': toJson_MediaConnectInterfaceRequest(obj.interface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectFmtp
 */
export interface MediaConnectFmtp {
  /**
   * @schema MediaConnectFmtp#ChannelOrder
   */
  readonly channelOrder?: string;

  /**
   * @schema MediaConnectFmtp#Colorimetry
   */
  readonly colorimetry?: string;

  /**
   * @schema MediaConnectFmtp#ExactFramerate
   */
  readonly exactFramerate?: string;

  /**
   * @schema MediaConnectFmtp#Par
   */
  readonly par?: string;

  /**
   * @schema MediaConnectFmtp#Range
   */
  readonly range?: string;

  /**
   * @schema MediaConnectFmtp#ScanMode
   */
  readonly scanMode?: string;

  /**
   * @schema MediaConnectFmtp#Tcs
   */
  readonly tcs?: string;

}

/**
 * Converts an object of type 'MediaConnectFmtp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectFmtp(obj: MediaConnectFmtp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChannelOrder': obj.channelOrder,
    'Colorimetry': obj.colorimetry,
    'ExactFramerate': obj.exactFramerate,
    'Par': obj.par,
    'Range': obj.range,
    'ScanMode': obj.scanMode,
    'Tcs': obj.tcs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectDestinationConfiguration
 */
export interface MediaConnectDestinationConfiguration {
  /**
   * @schema MediaConnectDestinationConfiguration#DestinationIp
   */
  readonly destinationIp?: string;

  /**
   * @schema MediaConnectDestinationConfiguration#DestinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema MediaConnectDestinationConfiguration#Interface
   */
  readonly interface?: MediaConnectInterface;

  /**
   * @schema MediaConnectDestinationConfiguration#OutboundIp
   */
  readonly outboundIp?: string;

}

/**
 * Converts an object of type 'MediaConnectDestinationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectDestinationConfiguration(obj: MediaConnectDestinationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationIp': obj.destinationIp,
    'DestinationPort': obj.destinationPort,
    'Interface': toJson_MediaConnectInterface(obj.interface),
    'OutboundIp': obj.outboundIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectEncodingParameters
 */
export interface MediaConnectEncodingParameters {
  /**
   * @schema MediaConnectEncodingParameters#CompressionFactor
   */
  readonly compressionFactor?: number;

  /**
   * @schema MediaConnectEncodingParameters#EncoderProfile
   */
  readonly encoderProfile?: string;

}

/**
 * Converts an object of type 'MediaConnectEncodingParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectEncodingParameters(obj: MediaConnectEncodingParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CompressionFactor': obj.compressionFactor,
    'EncoderProfile': obj.encoderProfile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectInputConfiguration
 */
export interface MediaConnectInputConfiguration {
  /**
   * @schema MediaConnectInputConfiguration#InputIp
   */
  readonly inputIp?: string;

  /**
   * @schema MediaConnectInputConfiguration#InputPort
   */
  readonly inputPort?: number;

  /**
   * @schema MediaConnectInputConfiguration#Interface
   */
  readonly interface?: MediaConnectInterface;

}

/**
 * Converts an object of type 'MediaConnectInputConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectInputConfiguration(obj: MediaConnectInputConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputIp': obj.inputIp,
    'InputPort': obj.inputPort,
    'Interface': toJson_MediaConnectInterface(obj.interface),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectInterfaceRequest
 */
export interface MediaConnectInterfaceRequest {
  /**
   * @schema MediaConnectInterfaceRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConnectInterfaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectInterfaceRequest(obj: MediaConnectInterfaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaConnectInterface
 */
export interface MediaConnectInterface {
  /**
   * @schema MediaConnectInterface#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'MediaConnectInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaConnectInterface(obj: MediaConnectInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
