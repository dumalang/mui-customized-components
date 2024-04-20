import * as React from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Check from '@mui/icons-material/Check'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { stepLabelClasses } from '@mui/material/StepLabel'

const InactiveBgColor = '#EEF0F2'
const InactiveFontColor = '#8495A5'
const ActiveColor = '#0D8E22'
const stepperBorder = 3

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 19,
        left: 'calc(-50% + 0px)',
        right: 'calc(50% + 0px)'
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
            ActiveColor,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
            ActiveColor,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 4,
        border: 0,
        backgroundColor:
        InactiveBgColor,
        borderRadius: 1,
    },
}))

console.log(stepLabelClasses.labelContainer)

const ColorlibStepRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: InactiveBgColor,
    zIndex: 1,
    color: InactiveFontColor,
    borderStyle: 'solid',
    borderWidth: stepperBorder,
    borderColor: InactiveBgColor,
    width: 24,
    height: 24,
    lineHeight: 24,
    fontSize: 14,
    fontWeight: 'bold',
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundColor: 'white',
        color: ActiveColor,
        borderColor: ActiveColor,
    }),
    ...(ownerState.completed && {
        backgroundColor: ActiveColor,
        borderColor: ActiveColor,
        color:
            'white',
    }),
    [`& .${stepLabelClasses.alternativeLabel}`]: {
        marginTop: 0,
    },
    [`& .${stepLabelClasses.labelContainer}`]: {
        marginTop: 0,
    },
}))

function CustomStep (props) {
    const { active, completed, className, icon } = props

    const StepWordings = {
        1: '01',
        2: '02',
        3: '03',
    }

    return (
        <ColorlibStepRoot ownerState={{ completed, active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon"/>
            ) : (
                icon
            )}
        </ColorlibStepRoot>
    )
}

export default function CustomizedStepper ({ steps, stepWordings, active }) {
    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper
                alternativeLabel
                activeStep={active}
                connector={<ColorlibConnector/>}
                stepWordings={stepWordings}
                sx={{
                    [`.${stepLabelClasses.alternativeLabel}`]: {
                        marginTop: '3px'
                    },
                }}
            >
                {steps.map((step) => (
                    <Step key={step.label}>
                        <StepLabel StepIconComponent={CustomStep} icon={step.wordings}>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    )
}
