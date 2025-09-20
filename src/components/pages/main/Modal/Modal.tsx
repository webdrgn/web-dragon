import React, { useState } from 'react';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    setIsClicked(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsClicked(true);
  };

  return (
    <div className={`modal-container ${isOpen ? '--opened' : ''}`}>
      <div data-aos="fade-up">
        <button
          onClick={handleOpenModal}
          className={`${isClicked ? 'hidden' : 'shown'} modal__btn`}
        >
          Получить бесплатный меч!
        </button>
      </div>

      {isOpen && (
        <div className="modal__inner">
          <h3 className="text-[var(--primary)]">Ловушка для вредоносных рыцарей</h3>

          <p>
            Если вы рыцарь:
            <br />- Рооааарррггхх!... гггхх!.. ты попался!.. гхгхрх... рр...
            хммф.
          </p>

          <p>Если вы не рыцарь, вам видна кнопка выхода!</p>

          <button onClick={handleCloseModal} className="modal__close-btn">
            Покинуть западню
          </button>
        </div>
      )}

      {isClicked && (
        <div className='modal__text'>
          <p data-aos="fade-up">
            Сожалеем, что пришлось подвергнуть вас этому испытанию, но, сами
            понимаете, нельзя пускать в сокровищницу чужаков. Теперь, когда все
            надоедливые меченосцы отсеяны и веб-дракончику ничего не угрожает,
            вы получаете доступ к его услугам!
          </p>

          <p data-aos="fade-up">
            Если вдруг вы хотите ещё раз удостовериться, что вы не принадлежите
            к охотникам на драконов, пройдите испытание повторно.
          </p>
        </div>
      )}
    </div>
  );
};

export default Modal;
