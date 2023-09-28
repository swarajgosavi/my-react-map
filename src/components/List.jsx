import React from 'react';
import './List.css';

const governmentAgencies = [
  {
    agencyName: "National Seismological Institute (NSI)",
    address: "123 Seismic Avenue, Mumbai, Maharashtra - 400001, India",
    contactNumber: "+91 (22) 1234-5678",
  },
  {
    agencyName: "State Disaster Management Authority (SDMA)",
    address: "456 Preparedness Street, Delhi, Delhi - 110001, India",
    contactNumber: "+91 (11) 9876-5432",
  },
  {
    agencyName: "Central Office of Resilience (CoR)",
    address: "789 Resilience Road, Bangalore, Karnataka - 560001, India",
    contactNumber: "+91 (80) 3210-9876",
  },
  {
    agencyName: "Ministry of Earth Sciences (MoES)",
    address: "101 Weather Way, New Delhi, Delhi - 110001, India",
    contactNumber: "+91 (11) 8765-4321",
  },
  {
    agencyName: "National Disaster Management Authority (NDMA)",
    address: "246 Preparedness Plaza, Mumbai, Maharashtra - 400001, India",
    contactNumber: "+91 (22) 4321-0987",
  },
  {
    agencyName: "Indian Meteorological Department (IMD)",
    address: "567 Meteorology Street, Kolkata, West Bengal - 700001, India",
    contactNumber: "+91 (33) 2345-6789",
  },
  {
    agencyName: "Geological Survey of India (GSI)",
    address: "789 Geology Drive, Hyderabad, Telangana - 500001, India",
    contactNumber: "+91 (40) 5678-1234",
  },
];

const List = () => {
  return (
    <div className="agency-list">
      {governmentAgencies.map((agency, index) => (
        <div className="list-container" key={index}>
          <div className="agency-details">
            <div className="agency-name">{agency.agencyName}</div>
            <div className="agency-address">{agency.address}</div>
            <div className="agency-contact">{agency.contactNumber}</div>
          </div>
          <div className="request-assistance">
            <div className="request-button">Request Assistance</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
