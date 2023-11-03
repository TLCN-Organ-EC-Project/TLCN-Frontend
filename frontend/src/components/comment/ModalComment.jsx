import React, { useState, useMemo } from 'react'
import Modal from '../ForgotPassword/Modal'
import { useForm } from 'react-hook-form';
import InputForGot from '../Input/InputForGot';
import { createFeedback } from '../../apis/user';
import withBase from '../../hocs/withBase';
import { useSelector } from 'react-redux';
import { useDetailProductStore } from '../../hooks/useDetailProductStore';
import { useSnapshot } from 'valtio';
import { useQueryClient } from 'react-query';

const ModalComment = ({ dispatch, navigate }) => {
    const queryClient = useQueryClient();
    const detailProductStore = useDetailProductStore()
    const snapDetailProductStore = useSnapshot(detailProductStore)

    const { current } = useSelector(state => state.user)
    const [comment, setComment] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            comment: '',
        },
    });

   
    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
                <InputForGot
                    id="comment"
                    label="Comment here"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        </div>
    )
    const actionLabel = useMemo(() => {
        return 'Comment'
    }, [])

    const commentProduct=watch('comment')
    const onSubmit = async () => {
        const response = await createFeedback(current?.username,detailProductStore.productId,{
            commention:commentProduct,
            rating:'5'
        })
        if (response){
            setComment(response?.data)
            detailProductStore.isOpenModalCommet = false
            queryClient.invalidateQueries(["products-dataFeedBack", detailProductStore.productId])
        }else{
            toast.error('Cant comment product')
        }
    }
    return (
        <Modal
            isOpen={snapDetailProductStore.isOpenModalCommet}
            title={`Please let us know what you think `}
            onClose={() => { detailProductStore.isOpenModalCommet = false }}
            actionLabel={actionLabel}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    )
}

export default withBase(ModalComment)