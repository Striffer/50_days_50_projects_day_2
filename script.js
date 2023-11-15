let count = 1

const step1 = document.getElementById('1')
const line1 = document.getElementById('1.2')
const step2 = document.getElementById('2')
const line2 = document.getElementById('2.2')
const step3 = document.getElementById('3')
const line3 = document.getElementById('3.2')
const step4 = document.getElementById('4')

const btnPrev = document.querySelector('.btn_prev')
const btnNext = document.querySelector('.btn_next')

btnNext.addEventListener('click', () => {
  switch (count) {
    case 1:
      count += 1
      line1.className = 'selected_load_line'
      step2.className = 'step_selected'
      btnPrev.id = 'open'
      break
    case 2:
      count += 1
      line2.className = 'selected_load_line'
      step3.className = 'step_selected'
      break
    case 3:
      count += 1
      line3.className = 'selected_load_line'
      step4.className = 'step_selected'
      btnNext.id = ''
      break
  }
})

btnPrev.addEventListener('click', () => {
  switch (count) {
    case 2:
      count -= 1
      step2.className = 'step'
      line1.className = 'load_line'
      btnPrev.id = ''
      break
    case 3:
      count -= 1
      step3.className = 'step'
      line2.className = 'load_line'
      break
    case 4:
      count -= 1
      step4.className = 'step'
      line3.className = 'load_line'
      btnNext.id = 'open'
      break
  }
})
