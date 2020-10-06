import React from 'react';
import styled from 'styled-components';
import ives from '../assets/images/people/ives.png';
import bas from '../assets/images/people/bas.png';
import bogdan from '../assets/images/people/bogdan.png';
import oskar from '../assets/images/people/oskar.png';
import sara from '../assets/images/people/sara.png';
import danny from '../assets/images/people/danny.png';
import gareth from '../assets/images/people/gareth.png';
import sid from '../assets/images/people/sid.png';
import christian from '../assets/images/people/christian.png';
import sanne from '../assets/images/people/sanne.png';
import andras from '../assets/images/people/andras.png';

const people = [
  {
    name: 'Ives van Hoorne',
    pic: ives,
    color: '',
    team: '',
  },
  {
    name: 'Bas Buursma',
    pic: bas,
    color: '',
    team: '',
  },
  {
    name: 'Oskar van Eeden',
    pic: oskar,
    color: '#76D0FB',
    team: 'Operations',
  },
  {
    name: 'Bogdan Luca',
    pic: bogdan,
    color: '#F24E62',
    team: 'Engineering',
  },
  {
    name: 'Sara Vieira',
    pic: sara,
    color: '#F24E62',
    team: 'Engineering',
  },
  {
    name: 'Danny Rutchie',
    pic: danny,
    color: '#B567EB',
    team: 'Design',
  },
  {
    name: 'Gareth',
    pic: gareth,
    color: '#F7A239',
    team: 'Marketing',
  },
  {
    name: 'Sid',
    pic: sid,
    color: '#F24E62',
    team: 'Engineering',
  },
  {
    name: 'Christian Alfoni',
    pic: christian,
    color: '#F24E62',
    team: 'Engineering',
  },
  {
    name: 'Sanne Kalkman',
    pic: sanne,
    color: '#F24E62',
    team: 'Engineering',
  },
  {
    name: 'András Bácsai',
    pic: andras,
    color: '#F24E62',
    team: 'Engineering',
  },
];

const Peep = styled.img`
  width: 102px;
  height: 102px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24), 0px 8px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  ${props => {
    if (props.border) {
      return `border: 4px solid ${props.color || '#343434'};`;
    }

    return `
      border: 4px solid #343434;
      transition: all 200ms ease;
      &:hover {
        border: 4px solid ${props.color};
      }
      `;
  }}
`;

const TeamMember = ({ name, border, ...props }) => {
  // András, thank you
  const noAccentsName = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const person = people.find(p =>
    noAccentsName(p.name.toLocaleLowerCase()).includes(name.toLocaleLowerCase())
  );

  if (person) {
    return (
      <Peep
        border={border}
        color={person.color}
        src={person.pic}
        alt={person.name}
        {...props}
      />
    );
  }

  return null;
};

export const RandomTeamMember = ({ border, ...props }) => {
  const person = people[Math.floor(Math.random() * people.length)];
  return (
    <Peep
      border={border}
      color={person.color}
      src={person.pic}
      alt={person.name}
      {...props}
    />
  );
};

export default TeamMember;
