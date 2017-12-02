import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MemberItem from './MemberItem';

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px calc((100vw - 860px) / 2);
    justify-content: space-between;
`

export default class MemberList extends Component {
    constructor() {
        super();

        this.state = {
            members: []
        }
    }

    async componentWillMount() {
        try {
            const res = await axios.get('http://localhost:4000/api/list-members');
            const members = res.data;
            this.setState({members});
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const mappedMembers =  this.state.members.map(member => <MemberItem member={member} key={member.id} />);

        return (
            <StyledWrapper>
                {mappedMembers}
            </StyledWrapper>
        )
    }
}
