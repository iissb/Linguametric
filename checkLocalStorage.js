// 检查localStorage中的考试数据
console.log('=== 检查localStorage中的考试数据 ===');

// 获取所有session
const sessions = JSON.parse(localStorage.getItem('limai_exam_sessions') || '[]');
console.log('所有Session:', sessions);

// 检查DSE类型的session
const dseSessions = sessions.filter(s => s.type === 'DSE');
console.log('DSE类型的Session:', dseSessions);

// 检查每个DSE session的classIds
console.log('=== DSE Session的classIds检查 ===');
dseSessions.forEach(session => {
  console.log(`Session ${session.name} (${session.id}):`);
  console.log(`  classIds:`, session.classIds);
  console.log(`  classId:`, session.classId);
  console.log(`  类型:`, session.type);
  console.log(`  日期:`, session.date);
});

// 获取所有学生
const students = JSON.parse(localStorage.getItem('limai_students') || '[]');
console.log('=== 学生数据 ===');
console.log('所有学生:', students);

// 检查学生的classId
console.log('=== 学生的classId检查 ===');
students.forEach(student => {
  console.log(`${student.name}: classId =`, student.classId);
});

// 获取所有班级
const classes = JSON.parse(localStorage.getItem('limai_classes') || '[]');
console.log('=== 班级数据 ===');
console.log('所有班级:', classes);
